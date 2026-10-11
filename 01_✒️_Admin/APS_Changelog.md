# APS Changelog

**Unit:** ✒️ Administration
**Scope:** Cross-document change tracking for the American Periphenomenal Survey
**Status:** ACTIVE REFERENCE

This document records substantive changes across the APS document set over time. Each entry identifies which documents changed, what changed, and why. Administration maintains this file; other sections reference it but do not edit it.

The purpose is two-fold: (1) to preserve a single canonical record of what changed when, so the live documents themselves can stand as clean final drafts without version-history clutter; and (2) to give onboarding regional units (Acadian, Appalachian, and others) a clear view of how the framework evolved, so they understand the *why* behind the current state.

Entries are listed newest-first. Each release is identified by the project-wide milestone version rather than individual document versions.

---

## 2026-05 — Regional Table Amendment Consumed

**Trigger:** A standalone amendment file — `APS_Project_Regional_Table_amendment.md` — had been produced during the v4.1 cycle to specify the rewrite of the regional structure table. It was an adoption-cycle deliverable: written to be consumed by the Project Document v6.1 revision, then retired. With the document consolidation pass complete and the Project State Document now carrying the regional table as a canonical deliverable, the amendment file had served its purpose. However, the amendment carried richer regional content and analytical notes that the Project State Document had only partially absorbed. The clean move was to consume the amendment fully and retire the file.

### Documents affected

- **Project State Document** — Regional table updated to carry the richer Cultural / Regional Context content from the amendment. Specific additions per region: Acadian gains ecological framing (deep coniferous forest, glacial geology, fog and isolation); Appalachian gains geological deep time, karst cave systems, traditional ballad and storytelling cultures; Meridian gains explicit naming of African diasporic religious traditions (Vodou, Hoodoo, Conjure, Spiritualist Church) — previously sketched only as "African American Gulf Coast culture"; Laurentian gains industrial-decay landscapes (Detroit, Cleveland, Gary) and the freshwater coast as a distinctive North American landform; Heartland gains the Black Hills (Pahá Sápa) named specifically; Rio Grande gains Mexican-American (Tejano) deep history and the Rio Grande as a contested border for centuries; Sonoran gains Hispano New Mexico depth ("settled before the English founded Jamestown"); Basin gains Latter-day Saint settlement geography and Cold War nuclear test geography (Nevada Test Site); Alta gains Asian American multi-generational depth (Chinese, Japanese, Filipino, Vietnamese, Korean); Cascadia gains the "strong tradition of present-day indigenous cultural and political assertion — active treaty rights, language revitalization, sovereign self-government" framing. Per-region consultation flags rewritten to specify which traditions each region's consultation needs to address (e.g., "Cultural framing of indigenous and African diasporic experience requires consultation" for Meridian, rather than the uniform "certain experience" phrasing previously used).

- **Project State Document — new "Notes on the regional table" subsection** added after the regional table. Contains: (1) "On the indigenous nations enumerated" — the lists are partial and historical-geographic, native-land.ca is the more complete reference for territory lookup; (2) "On settler-cultural context" — the principle behind naming settler cultural layers (a New Englander's Puritan-descended Spiritualist Church framing is as analytically significant as any other); (3) "Omissions worth flagging" — explicit institutional acknowledgment that Meridian under-represents African diasporic religious traditions, Alta under-represents Asian American religious and cosmological traditions, and Heartland does not name the Mennonite/Hutterite/Amish anabaptist communities; these gaps should be filled by people with closer familiarity, typically regional unit managers or analysts in consultation with the relevant communities; (4) "On what is deliberately excluded" — phenomenological keywords from the older "Focus" column ("Sasquatch/Hominids," "UAP/UFO activity," "Skinwalker lore," "The Hum," etc.) are absent by design, per the Universal Type Collection principle.

- **`APS_Project_Regional_Table_amendment.md` retired.** The file is no longer part of the canonical document set. Its content has been fully absorbed into the Project State Document.

### Why this mattered

The amendment was doing the work of being canonical, and so was the Project State Document. With both files in circulation, an onboarding regional unit (Acadian, Appalachian, etc.) would have had to decide which represented the project's actual position on regional structure. Two competing canonical sources is exactly the failure mode the clean-final-draft principle was meant to prevent. Consuming the amendment fully resolves the conflict: the Project State Document is canonical, and it now carries the amendment's richer content.

The "Omissions worth flagging" section is institutional knowledge that needs to stay in the live document, not in the Changelog. The previous version of the regional table presented a thinner picture without acknowledging the gaps; an analyst reading the table might have assumed it represented the project's considered view of each region's full cultural context. Naming the gaps as gaps is honest, and it points future regional managers at the specific work that needs doing.

The deliberate-exclusion note (no phenomenological keywords) is also worth preserving in the live document, not just in the project history. It's an active commitment that affects how the regional table should be read: the absence of "Sasquatch" from the Cascadia entry isn't an oversight; it's the principle of Universal Type Collection rendered as table design.

### What didn't change in this release

The Mission Statement, Operations Manual, Master Data Protocol, Field Manual, Archive Case File (paper and digital), Changelog (this document), index.html, privacy.html, credits.html, registry.html, resources.html, and all operational artifacts (Field Instrument, Field Questionnaire, Apps Script, CSV headers, Google Sheet) are untouched. This release is scoped tightly to the Project State Document and the Changelog.

---

## 2026-05 — Public Web Surface Update

**Trigger:** The public-facing web files (`registry.html`, `credits.html`, `resources.html`) carried v3-era taxonomy, mission framing that predated the storytelling recentering, and regional resources that didn't cover the full Cascadia geography. Brought current to v4.1 across all three. The Google Sheet QUERY formula behind the registry was also updated to read `primary_type` instead of the deprecated `class_code` column.

### Documents affected

- **registry.html** — Public registry display page. Classification legend expanded from five rows to nine, covering all v4.1 types with new glyphs for the additions: 👤 Type VI (Entity/Threshold), 🗺️ Type VII (Place/Genius Loci), 📡 Type VIII (Energetic/Environmental), 🕯️ Type IX (Cultural/Cosmological). Existing five-type glyphs preserved (🚪🐾🛸🛌🪑). Plain-language descriptions throughout — Iceberg Method preserved, no internal jargon. The `typeMap` JavaScript object expanded to cover all nine codes; previously any v4 Type VI–IX case would have fallen to the `'UNK'` (❓) glyph. Inline comment added in the JavaScript flagging the operational gotcha: if ❓ glyphs appear on the live registry, the Sheet QUERY is likely still pointing at the deprecated `class_code` column instead of `primary_type` (column AH in the migration layout).

- **credits.html** — Public mission and credits page. Mission Statement section reframed to lead with the storytelling recentering: *"At its heart, the APS is a storytelling project. Our primary purpose is to collect — and eventually to tell — the anomalous and high-strangeness stories of the people who live in this region."* The existing Experience-Centered Approach (Hufford) and Hybrid Ecology Hypothesis framings preserved verbatim. New closing paragraph surfaces Universal Type Collection in plain language without internal jargon: *"A UAP report from the Pacific Northwest is as legitimate and archivally significant as a Sasquatch report; a poltergeist account from Cascadia matters as much as one from Appalachia."* Credits and inspirations preserved verbatim. Stylesheet version comment dropped.

- **resources.html** — Public crisis support and resources page. Regional resources expanded from two cards (Washington Recovery Help Line + BC Mental Health Support) to six cards organized by jurisdiction: Washington (WA Recovery Help Line + WA Regional Crisis Line), Oregon (Lines for Life statewide + Multnomah County crisis line), British Columbia (BC Mental Health Support + KUU-US Indigenous-specific crisis line). Trailing note added for Southeast Alaska (988 + Alaska Careline 1-877-266-4357) and Northern Idaho (988 + Mobile Response Teams). All numbers verified against current authoritative sources at time of publication. The 988 routing is led with throughout — that's what the current Alaska and Idaho services themselves recommend. Stylesheet version comment dropped.

- **Google Sheet QUERY formula (live sheet)** — Updated from `=QUERY(Sheet1!A:AD, "SELECT A, B, I, Y, S WHERE V = 'PUBLISH_ANON' AND C = 'VERIFIED_WEB'", 1)` to `=QUERY(Sheet1!A:AK, "SELECT A, B, I, AH, S WHERE V = 'PUBLISH_ANON' AND C = 'VERIFIED_WEB'", 1)`. Two changes: range extended from `A:AD` (columns 1–30) to `A:AK` (columns 1–37, covering through `indigenous_territory` at column 37); SELECT column changed from `Y` (column 25, deprecated `class_code`) to `AH` (column 34, `primary_type`). This is the operational fix that makes the registry able to surface Types VI–IX. Without it, new v4 cases would have published to the registry as ❓ uncategorized regardless of how good the HTML legend looked.

### Why this mattered

The registry is the project's most visible public artifact — it's where a curious reader, journalist, or potential witness first sees what the project actually contains. The five-type taxonomy in the legend told that audience that the project still operated under the v3 framework. The deprecated `class_code` column behind the QUERY meant new cases coded under v4 wouldn't have surfaced their type even once that audience clicked through. Without this update, the public face of the project would have lagged the internal schema by an entire taxonomy generation.

The credits page update reflects the storytelling recentering established in the Mission Statement consolidation. A reader who hits the credits page now sees the project's actual purpose — to collect and tell these stories — rather than the older "rigorous archive" framing that was true but understated.

The resources page expansion addresses a geographic coverage gap. The Cascadia coverage area includes Oregon and Southeast Alaska, but the previous resources page directed Oregonian witnesses to Washington's recovery help line and Alaskan witnesses to British Columbia's mental health support. Crisis-line accuracy matters operationally — a witness in distress should not have to translate between jurisdictions to find help.

### What didn't change in this release

`index.html` was reviewed and confirmed operationally current with the v4.1 schema. The witness-facing form correctly implements `oz_factor_flag` (not the old `phenom_silence`), the v4.1 age-group split (56-65 / 66+), all phenomenology flags, the field-folding pattern for substrate / cultural / community / narrative-frame context, and the Apps Script v4.1 JSON response contract. The stylesheet comment in `index.html` still reads "v4.0" while the form is functionally v4.1; this is left as-is per the operational-artifact principle (cosmetic version-comment cleanup of working files isn't worth the churn).

`privacy.html` and `LICENSE.txt` were also reviewed and confirmed current; no substantive updates needed.

---

## 2026-05 — Document Set Consolidation

**Trigger:** Recentering the project around its primary purpose (collecting and telling stories), cleaning up version-history clutter that had accumulated in operational documents, and bringing the Data Archivist's working artifacts current with the v4.1 schema and methodological commitments.

### Documents affected

- **Mission Statement** — rewritten from v3.3 to current. Reframed §1.0 Statement of Intent to lead with the storytelling purpose: "The American Periphenomenal Survey is, at its heart, a storytelling project. Its primary purpose is to collect — and eventually to tell — the anomalous and high-strangeness stories of the people who live on this continent." All other project apparatus (schema, taxonomy, instruments, database) framed as in service of that purpose. The Mission Statement now houses the project's two Foundational Principles (§4.0): Methodological Agnosticism and Universal Type Collection Across All Regions. Added §5.0 Cross-Regional Indigenous Territories. Taxonomy updated to nine types. Methodological lineage section (§2.0) preserved with light edits. §3.0 expanded into a four-subsection Theoretical Framework absorbing material from the former Project Document v6.1: §3.1 The Mind as Myth-Making Engine (Warmoth on personal myths), §3.2 Emergence, Epiphenomena, and Synchronicity (the precise theoretical vocabulary the project uses to take synchronicity seriously without endorsing supernatural causation), §3.3 The Hybrid Meaning Ecology (the existing content lightly restructured), §3.4 Narrative Structure as Data.

- **Operations Manual** — rewritten from v3.0 to current. Three-section organizational structure formalized: Administration (governance), Data Archive (schema and analysis), Field Research (witness contact). Five-phase SOP updated to v4.1 schema. Solo-Operator Protocol preserved as Appendix A. References to non-existent documents removed. Phase 4 Classification updated from 5-type to 9-type. Phase 2 Privacy Scrub Protocol preserved as the operational gold standard. References for principles point to Mission Statement §4.0.

- **Master Data Protocol** — version language excised; document now stands as a clean final draft. Governance content (§4 Foundational Principles in detail, cross-regional cosmology discussion, implementation summaries) moved to Mission Statement and Operations Manual where each belongs by purpose. §4 reduced to a one-paragraph reference pointing to Mission Statement §4.0. Part 4 retained but scoped strictly to coding operations: indigenous_territory coding procedure, canonical vocabulary, cross-regional cosmology routing reference. The document is now what it should always have been: a data dictionary, standards specification, and coding-guidance reference.

- **Field Manual (Region 10)** — version language excised. The "What changed in v4.1" callout removed. In-body "v4.1 note" italic paragraphs reframed as standing guidance ("On web submissions," "Oz Factor as cross-type marker," "On territorial awareness," etc.) or absorbed into the surrounding text. §4 Foundational Principles points to Mission Statement §4.0. §8 renamed from "Probing for v4 Fields (New in v4.1)" to "Probing for Extended Schema Fields." Cross-references corrected (§10 references that pointed to Type IX Sensitivity were renumbered to §9). Substance fully preserved; this is a structural and stylistic cleanup, not a content revision.

- **Project State Document** — reshaped from Project v6.1 into a focused operational state document. The theoretical framework material (Warmoth, emergence/epiphenomena/synchronicity vocabulary, narrative structure as data) moved into Mission Statement §3.0, where it now lives alongside the Hybrid Meaning Ecology framing. Foundational Principles section removed (now lives canonically in Mission Statement §4.0). Cross-Regional Indigenous Territories section reduced to a one-paragraph reference pointing to Mission Statement §5.0. Project Identity opening preserved but tightened. The document now contains: short Project Identity (with pointer to Mission Statement), Regional Structure with the full ten-region table, brief Taxonomy summary (with pointer to Master Data Protocol), Operational Flairs, Current Objectives (Completed / Active / Future Scope), Closing. Version number dropped from the filename per the clean-final-draft principle; the document is now `APS_Project_State_Document.docx`. The Current Objectives section is the one part of the document expected to change frequently — it serves as the live operational tracker.

- **APS Archive Case File** (paper, new — supersedes `APS_REG_FRM-009`) — Two-page landscape cover sheet for the regional binder. Hand-fillable by the Data Archivist. Schema brought current: `engagement_status` includes REMOTE; `age_group` extends through 56-65 / 66+; `primary_type` replaces `CLASS_CODE` with all nine types; `secondary_types` added as a pipe-delimited multi-select; `substrate`, `witness_configuration`, `narrative_frame`, `cultural_frame_flag`, `indigenous_territory` all added. `PHENOM_SILENCE` renamed to `oz_factor_flag` with broadened definition. The cultural_frame_flag and Type IX sensitivity flag appear in a red-tinted callout block, flagging consultation requirement visibly at the analyst's working surface. DEBUNK disposition option removed; disposition is now ARCHIVE / REMOTE (pending consultation) / SPAM. "Verification Marker" parenthetical on occupation removed. "Debunking notes" framing in analyst_notes removed; field relabeled "observations, not verdicts" per Master Data Protocol §6. Cross-references added to Field Manual §2.D (location vocabulary) and §8.1 (witness_configuration probing).

- **APS Archive Case File template** (digital, new — companion artifact) — Plain text template for active triage workspace. Typed into during Phase 2 (Verification & Anonymization) and Phase 4 (Analysis & Coding). Carries the full v4.1 schema with working space the paper form does not need: triage open/close timestamps, full-narrative space for the Privacy Scrub, indigenous_territory lookup worksheet (witness self-identification + native-land.ca lookup + witness-framing precedence application + final pipe-delimited value), full analyst_notes space, disposition reasoning. The two artifacts work together: analyst opens the digital template at the start of triage, finalizes the case to the Google Sheet, and — for Tier 3 / Type VII / Type IX cases — generates a paper cover sheet for the binder.

- **APS Changelog** (this document) — newly created. Administration-owned.

### Why the Archive Case File revision mattered

The Archive Case File is the only document in the project set that lives in the analyst's working hands during triage. The previous version's "DEBUNK (Identified)" disposition option, its "(Verification Marker)" framing on occupation, and its "debunking notes" section header were not just documentation gaps — they were training surfaces. An analyst opening that form was being prompted to debunk every time. The revision aligns the analyst's working surface with the project's methodological commitments stated in Mission Statement §4.1: the APS does not debunk. Notes record observations, not verdicts.

The split into paper and digital companion artifacts also addresses a previously implicit operational pattern. Active triage happens digitally — the analyst pastes the witness narrative, applies the Privacy Scrub, drafts notes, codes types. Archival happens on paper — a finalized cover sheet goes onto the physical file in the regional binder. The previous single-format form tried to serve both jobs and served neither well. The split reflects how the work actually flows.

### What didn't change in this release

The Field Instrument, Field Questionnaire, index.html, Apps Script, and CSV headers were not touched. They remain at v4.1 with version markers in their titles, since they are operational artifacts where version-tracking serves a real purpose (you need to know which form a witness filled out, which Apps Script handles which schema). The clean-final-draft principle applies to reference documents, not to operational artifacts.

The `APS_REG_FRM-009` filename convention was retired in favor of descriptive naming. If a numbered-form series convention is reintroduced in the future, this artifact can be renumbered.

---

That's the full merged entry. Drop it in to replace the existing 2026-05 Document Set Consolidation entry — the other entries (2026-04 v4.1 Amendment, 2026-04 v3→v4 Schema Cutover, Pre-v3 Project Founding) and the closing "Notes on this document" section stay as they are.

---

## 2026-04 — v4.1 Amendment to v4.0

**Trigger:** Review identified that the regional Focus column in the Project State Document risked acting as a phenomenological filter rather than a cultural-context descriptor, biasing collection, researcher coding, and pattern-of-distribution analysis. Separately, certain regional boundaries (most visibly Region 7 / Region 8) were observed to cut through living indigenous cosmologies and homelands.

### Documents affected

- **Master Data Protocol v4.0 → v4.1** — Added `indigenous_territory` schema field, recorded independently of `location_state`. Multi-value, pipe-delimited, analyst-coded during triage. Added §4.2 Universal Type Collection Across All Regions as a second foundational principle alongside Methodological Agnosticism. Added directive to rewrite the Project Document's regional Focus column. Provisional starter mapping of indigenous territory codes published (flagged explicitly as provisional, requiring consultation to become canonical).

- **Project State Document v6.0 → v6.1** — Regional Focus column renamed to Cultural / Regional Context and rewritten in descriptive (not prescriptive) terms for all ten regions. Phenomenological keywords removed from regional descriptions; indigenous nations named as a matter of geographic fact; cosmological characterization explicitly deferred to consultation. Cross-regional indigenous territories section added.

- **Cascadia Log header CSVs** — Both canonical and migration variants updated to append `indigenous_territory` as column 37.

- **Apps Script (Cascadia submission handler)** — `validateSchema()` EXPECTED list updated to 37 columns. `indigenous_territory` added to the analyst-coded blank list (defense-in-depth).

- **Field Instrument v4.0 → v4.1** — Added researcher-coded line for witness self-identification of indigenous territory (Q9 in v4.1, with subsequent items renumbered through Q20). Researcher captures the witness's own framing verbatim; analyst handles the formal native-land.ca lookup during triage.

- **Field Manual v3.3 → v4.1** — Major revision bringing the manual from v3.3 (pre-v4 schema) current. Appendix A taxonomy expanded from 5 to 9 types. New §7 Substrate Coding (replaces old "Digital Forensics" framing). New §8 on probing for extended schema fields. New §9 Type IX Sensitivity Protocol. §4 Foundational Principles expanded to include Universal Type Collection. Cascadia-specific regional customizations added: §2.D location_specific vocabulary conventions; §2.B environmental base-rate notes; §5 practical field conditions (cell coverage, rain, seasonal closures, daylight); §9.4 cross-regional cosmologies relevant to Cascadia; Appendix A base-rate notes for Types II/VII/VIII; §B.3 verified Cascadia-region crisis-line numbers (WA, OR, BC).

- **Field Questionnaire v4.0 → v4.1** — No change. Witness-facing; indigenous_territory is analyst-coded.

- **index.html v4.0 → v4.1** — No change. Witness-facing; same reason.

- **v3 → v4 Migration Notes** — No change. Historical record of completed work.

### Migration impact

Active Cascadia deployment required:
1. Append `indigenous_territory` as column 37 in the live Google Sheet
2. Deploy Apps Script v4.1 (one-line update to EXPECTED list)
3. Run `validateSchema()` to confirm
4. Distribute v4.1 Field Instrument to researchers
5. Distribute v6.1 Project State Document across regional units (when other regions come online)
6. Brief analysts on §4.2 Universal Type Collection principle; review recent triage decisions for regional-Focus bias

---

## 2026-04 — v3 → v4 Schema Cutover

**Trigger:** Taxonomy expansion from 5 types to 9 types to accommodate Types VI (Entity/Threshold), VII (Place/Genius Loci), VIII (Energetic/Environmental), and IX (Cultural/Cosmological). The 5-type framework had been treating these as edge cases or shoehorning them into existing types, with documented loss of analytical fidelity.

### Documents affected

- **Master Data Protocol v3.2 → v4.0** — Taxonomy expanded. Classification architecture moved from single `class_code` to `primary_type` + `secondary_types` (pipe-delimited). Added `substrate` (analog/digital/hybrid), `witness_configuration` (solo/shared/communal, distinct from witness count), `narrative_frame` (warning/gift/test/intrusion/calling/encounter/visitation/other), `cultural_frame_flag`. Oz Factor became `oz_factor_flag`, an independent cross-type marker (renamed from `phenom_silence` and broadened in definition). `class_code` deprecated but retained for historical row compatibility.

- **Cascadia Log header CSVs** — Created in v4.0. Canonical version (clean logical column order for new regional sheets) and migration version (preserves v3 columns 1–30 in place, adds new columns 31–36).

- **Apps Script** — Renamed `phenom_silence` references to `oz_factor_flag`. Added derivation logic for `witness_configuration` from `witness_status`. Added derivation for `cultural_frame_flag` from `cultural_context` form field. Added honeypot defense, CacheService rate limiting, required-field validation with structured JSON responses, optional PII scrub on narrative ingest. Preserved v3 `headers.map()` write pattern and random 5-digit log_id convention.

- **Field Instrument v3.4 → v4.0** — Setting type checkboxes added. Witness configuration split into count (Q9a) and configuration (Q9b). Oz Factor elevated to own item. Substrate, narrative_frame, cultural_frame added. Primary/secondary type field-draft classification added. Sign-off flags: anti-priming observed, resource card given, follow-up requested, Type IX sensitivity flag.

- **Field Questionnaire v3.4 → v4.0** — Witness-facing rewrites: "Algorithmic Synchronicity" replaced with plain-language phrasing ("moments when digital environments felt unexpectedly responsive or meaningful"); "Oz Factor" terminology replaced with everyday language ("unnatural silence"). Verbatim v6.0 phrasing for substrate prompt, narrative frame, cultural context.

- **index.html v3 → v4.0** — Aligned to Apps Script v4 field names. Honeypot field added. Fetch handler updated to parse JSON body.result/error responses. Fold-narrative pattern: substrate_context, narrative_frame_witness, community_context appended to narrative field with labeled section markers before POST (since these have no dedicated schema columns).

- **Project State Document v5 → v6.0** — Taxonomy expanded. Hybrid Meaning Ecology framework formalized in Theoretical Framework section. Regional Structure table populated for all ten regions.

- **v3 → v4 Migration Notes** — Created. Sequential operational guide for the live-sheet cutover: rename column 11, append columns 31–36, do not delete `class_code`, optional historical row back-fill, Apps Script update, sequencing.

### Migration impact

Significant. The schema change was the largest in project history. Migration was sequenced to preserve historical row alignment in the live Cascadia sheet (existing columns held position; new columns appended right). The Apps Script's writes-by-header-lookup pattern allowed ingestion to continue without code change to the form-to-sheet pipeline.

---

## Pre-v3 — Project Founding

The project was founded as the Cascadia regional pilot under an earlier 5-type taxonomy and a single-column classification scheme. Foundational design decisions made during this period included:

- The Iceberg Method: theoretical vocabulary kept below the waterline; witness-facing materials use plain language only.
- Methodological Agnosticism: the project does not debunk or prove; it observes, collects, archives. (Adopted from David Hufford's experience-centered folklore methodology.)
- The two-tier intake strategy: digital sieve (website) for volume, analog sieve (Field Instrument) for depth.
- The regional unit structure: ten bioregional units across North America, Cascadia as founding deployment.
- The Grimm Protocol / SPR Census methodological lineage.

These decisions remain in force. The v4.x schema work, the v6.x Project State revisions, and the document set consolidations are operational and structural refinements of this founding vision, not departures from it.

---

## Notes on this document

**Granularity.** This changelog records substantive cross-document changes. Single-document revisions that don't affect other documents (typos, formatting tweaks, individual paragraph rewrites) are not tracked here — they're tracked in the document's git history or equivalent. The threshold for inclusion is: did this change require coordinated updates across multiple documents, or did it change the project's framework or schema?

**Ordering.** Newest first. New entries are appended at the top.

**Versioning.** The changelog itself is unversioned; it accumulates. The documents it tracks have their own versioning where appropriate (operational artifacts) or are unversioned final drafts (reference documents).

---

*Property of APS Administration. Methodological Agnosticism Observed. Universal Type Collection Across All Regions.*
