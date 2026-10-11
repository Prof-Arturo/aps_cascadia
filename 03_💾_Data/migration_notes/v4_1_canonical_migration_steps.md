# Cascadia Log — v3 → v4.1 Canonical Migration

**Unit:** 💾 Data Archive | **Region:** 10 (🌲 Cascadia)
**Scope:** Manual migration to the canonical 37-column layout, plus 4 witness-response columns
**Status:** READY TO EXECUTE

**Supersedes:** an earlier draft written against the *migration* (append-only) header spec. That draft was wrong for this target — it assumed existing columns stay in place. The canonical layout moves 23 of 30 columns, which also breaks the public registry query.

Starting state: 30 columns (A–AD), 13 data rows (rows 2–14), legacy order.
Ending state: 41 columns (A–AO), same 13 rows, canonical order, `primary_type` backfilled.

Because 23 columns move, this is a **rebuild**, not an edit. Cutting and pasting columns by hand produces silent misalignment. The method below rebuilds the tab by matching header names, which is lossless and takes about fifteen minutes.

---

## Phase 0 — Pre-flight

**0.1 — Back up.**
File → Make a copy. Name it `APS_Cascadia_Log_v3_PRE_MIGRATION_BACKUP`. Everything below is reversible only from this copy.

**0.2 — Record the current tab name.**
Look at the tab at the bottom of the sheet. Write it down exactly — you'll restore this name in Phase 5, and Phase 7 (Apps Script) depends on it.

> Current tab name: 
> ```
> APS_Cascadia_Log_v4.1
> ```

The Apps Script declares `SHEET_NAME = "Sheet1"` and the PUBLIC_VIEW query references `Sheet1!A:AK`. If your tab is named something else, both are already broken and Phase 7 must fix them.

**0.3 — Confirm the starting shape.**
- `AD1` reads `obs_delivery`
- `AE1` is empty
- Last row containing a `log_id` is row 14

If any of these differ, stop — the live sheet has diverged from the export I analyzed and the cell references below will be wrong.

---

## Phase 1 — Rename column K

Do this **before** the rebuild. The rebuild matches columns by header name, so the old tab must already use the current vocabulary.

This also fixes an active data-loss bug: the intake form sends a field named `oz_factor_flag`, the sheet header says `phenom_silence`, and the Apps Script matches headers by exact name — so that field has been silently discarded on every web submission.

**1.1** — Click `K1` and replace its contents with exactly:

```
oz_factor_flag
```

**1.2** — Leave the column data alone. The three `YES` values in K9–K11 carry over; it's the same phenomenon under current vocabulary.

**1.3** — Edit → Find and replace, search `phenom_silence` with "Also search within formulas" checked. Expect no remaining matches. If a formula or named range turns up, note it for Phase 6.

✅ `K1` = `oz_factor_flag`, K9–K11 still read `YES`.

---

## Phase 2 — Create the canonical tab

**2.1** — Add a new tab. Name it exactly:

```
v4_1_BUILD
```

**2.2** — Click `A1` on the new tab and paste this header row. It will spread across A1:AK1.

```
timestamp	log_id	engagement_status	age_group	gender	cultural_bg	occupation	location_state	location_specific	setting_type	witness_status	witness_configuration	oz_factor_flag	phenom_hum	phenom_time	phenom_nausea	phenom_paralysis	phenom_tech	phenom_ozone	phenom_fear	narrative	attribution	narrative_frame	cultural_frame_flag	contact_info	permission_level	primary_type	secondary_types	substrate	class_code	analyst_notes	res_id	env_weather	env_noise	obs_demeanor	obs_delivery	indigenous_territory
```

**2.3** — Confirm `AK1` reads `indigenous_territory` and there are no gaps in row 1.

✅ New tab has 37 canonical headers.

---

## Phase 3 — Pull the data across

**3.1** — In `A2` of `v4_1_BUILD`, enter this formula. Replace `OLDTAB` with your Phase 0.2 tab name, keeping the single quotes:

```
=IFERROR(INDEX('OLDTAB'!$A$2:$AD$14, ROW()-1, MATCH(A$1, 'OLDTAB'!$A$1:$AD$1, 0)), "")
```

This looks up each canonical header in the old tab's header row and pulls that column. Headers that don't exist in the old tab return blank — which is correct for the seven new fields.

**3.2** — Copy `A2`, then select `A2:AK14` and paste. All 13 rows populate.

**3.3** — Spot-check against the expected result:

| Row | log_id | B | engagement_status | C | permission_level | Z | class_code | AD |
|---|---|---|---|---|---|---|---|---|
| 2 | CASE-47528 | | VERIFIED_WEB | | PUBLISH_ANON | | TYPE_I | |
| 9 | CASE-85761 | | VERIFIED_WEB | | PUBLISH_ANON | | TYPE_II | |
| 11 | CASE-48244 | | SPAM | | PRIVATE_DATA | | *(blank)* | |
| 14 | CAS-67964 | | SPAM | | PRIVATE_DATA | | *(blank)* | |

Also confirm `M9`, `M10`, `M11` read `YES` (the `oz_factor_flag` values, now in column M).

**3.4** — Convert to static values. This is essential — the Apps Script writes new rows with `setValues()`, which would corrupt live formulas.

- Select `A2:AK14`
- Ctrl/Cmd + C
- Edit → Paste special → **Values only** (Ctrl/Cmd + Shift + V)

**3.5** — Check column A. If timestamps display as raw numbers, select column A → Format → Number → Date time.

✅ `A2:AK14` holds static values. Click any cell and confirm the formula bar shows data, not `=IFERROR(...)`.



## Phase 4 — Backfill `primary_type`, add witness columns

**4.1 — Backfill `primary_type` (AA) from `class_code` (AD).**

In `AA2`:

```
=IF(AD2="","",AD2)
```

Copy `AA2` to `AA3:AA14`, then select `AA2:AA14` and Paste special → Values only.

Expected: `TYPE_I` in rows 2, 3, 4, 10; `TYPE_II` in 5, 8, 9; `TYPE_III` in 7; `TYPE_IV` in 6, 12; blank in 11, 13, 14 (the SPAM rows).

Leave `class_code` (AD) as it is — deprecated but retained. New rows leave it blank.

**4.2 — Add the four witness-response columns.**

These hold the witness's own prose from form questions 9, 12, 13, and 14 — currently discarded on every submission. The header names match the form field names exactly, so the Apps Script's existing header-mapping picks them up with **no script change needed**.

Click `AL1` and paste:

```
substrate_context	narrative_frame_witness	cultural_context	community_context
```

| Cell | Header | Form question |
|---|---|---|
| `AL1` | `substrate_context` | Q9 — through a screen, device, or online? |
| `AM1` | `narrative_frame_witness` | Q12 — what the experience meant to you |
| `AN1` | `cultural_context` | Q13 — a tradition or belief in your community |
| `AO1` | `community_context` | Q14 — have others had similar experiences |

Rows 2–14 stay blank; the existing submissions predate these questions.

✅ `AA2:AA14` backfilled, `AO1` = `community_context`, sheet is 41 columns.

---

## Phase 5 — Swap the tabs

Order matters here. The Apps Script and the registry query both address the tab by name.

**5.1** — Rename the old tab to:

```
_ARCHIVE_v3_PRE_MIGRATION
```

**5.2** — Rename `v4_1_BUILD` to your original tab name from Phase 0.2.

**5.3** — Leave the archived tab in place for now. Delete it only after Phase 8 verification passes.

✅ The canonical tab now carries the original name; the old layout is preserved under an archive name.

---

## Phase 6 — Fix the PUBLIC_VIEW query

The existing query was written for the append-only layout. Under canonical it points at the wrong columns — selecting `env_noise` where it wants `primary_type`, `phenom_ozone` where it wants `narrative`, and filtering on `attribution` instead of `permission_level`.

**6.1** — Go to the `PUBLIC_VIEW` tab, cell `A1`.

**6.2** — Replace the formula with this, substituting your tab name:

```
=QUERY('OLDTAB'!A:AO, "SELECT A, B, I, AA, U WHERE Z = 'PUBLISH_ANON' AND C = 'VERIFIED_WEB'", 1)
```

Column mapping under canonical:

| Position | Canonical column | Field |
|---|---|---|
| 1st | A | `timestamp` |
| 2nd | B | `log_id` |
| 3rd | I | `location_specific` |
| 4th | **AA** | `primary_type` |
| 5th | **U** | `narrative` |
| filter | **Z** | `permission_level` |
| filter | C | `engagement_status` |

Note the range is now `A:AO`, not `A:AK`, to cover the four witness columns.

**6.3** — Confirm PUBLIC_VIEW returns 10 rows — the `VERIFIED_WEB` + `PUBLISH_ANON` cases. The three SPAM rows should be excluded.

✅ PUBLIC_VIEW populated with 10 rows, type codes visible in the 4th column.

**No change needed to `registry.html`.** Its JavaScript reads the query output positionally, and the corrected query returns the same five fields in the same order. Only the stale code comment referencing "column AH in the v4.1 migration layout" should be updated to say AA/canonical.

---

## Phase 7 — Apps Script (separate pass)

Not part of this document, but blocked on Phase 0.2:

- Correct `SHEET_NAME` to the actual tab name
- Implement the honeypot drop the intake form's HTML promises but the script never implemented
- Replace the `Math.random()` log_id generator — 5 digits gives roughly 50% collision odds by ~300 entries, and the log already mixes `CASE-` and `CAS-` prefixes
- No change needed for the four witness columns; header-name matching handles them

---

## Phase 8 — Verification

- [ ] `K1` on the archived tab reads `oz_factor_flag`
- [ ] Live tab row 1 matches the canonical order, A through AK, then AL–AO
- [ ] `AA1` reads `primary_type`; `U1` reads `narrative`; `Z1` reads `permission_level`
- [ ] `A2:AO14` holds static values, no formulas
- [ ] `M9`, `M10`, `M11` read `YES`
- [ ] `AA2:AA14` matches the backfill in Phase 4.1
- [ ] Data ends at row 14 — nothing shifted or duplicated
- [ ] PUBLIC_VIEW shows 10 rows
- [ ] Public registry page loads with type glyphs, not ❓
- [ ] Submit a test report, confirm it lands in the right columns including AL–AO, then delete it

---

## Handling note — `community_context` (AO)

**Never publishable**, regardless of the witness's `permission_level`.

Q14 asks the witness about *other people's* experiences. A witness can consent to publishing their own account; they cannot consent for the neighbor whose experience they're relaying. Treat AO as internal-research-only in every context, and exclude it from any public export or registry query.

Needs a corresponding line in the Master Data Protocol.

---

## Spec documents to update afterward

- **Canonical header CSV** — now 41 columns, not 37 (the four witness fields)
- **Master Data Protocol** — data dictionary entries for the four new fields; the AO never-publish rule; note that `class_code` is deprecated-retained at AD
- **`data_storage_architecture.md`** — column count and layout reference
- **Changelog** — this migration
- **Migration header CSV** — now describes a path not taken; either retire it to `_archive/` or annotate it as superseded

---

*Property of APS: 💾 Data Archive | Region 10 (🌲 Cascadia)*
