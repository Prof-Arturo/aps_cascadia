# Cascadia Log — Data Access

**Unit:** 💾 Data Archive | **Region:** 10 (🌲 Cascadia)
**Status:** ACTIVE REFERENCE

If you came here looking for the Cascadia Log itself, it is not in this repository and never will be. This file tells you where it lives and how to request access.

---

## Why the log is not here

This repository is public. The Cascadia Log contains witness narratives, contact information, and accounts submitted under `PRIVATE_DATA` permission. Publishing any of it — even once, even briefly — would be irreversible: git history retains deleted files, and public commits are archived by third parties within minutes.

The split is deliberate and matches the project's standing commitment. **Schema and infrastructure are open for inspection. Witness data is not.**

See `data_storage_architecture.md` in this folder for the full architecture.

---

## What lives in private Google Drive

All items below are set to **Restricted** sharing — visible only to named accounts. The links are included so authorized collaborators can navigate directly; anyone else reaches a permission-request screen.

| Item | What it holds | Link |
|---|---|---|
| **Cascadia Log (live)** | The working submission database. New reports write here via the Apps Script handler. | [[APS_Cascadia_Log_4.1](https://docs.google.com/spreadsheets/d/1voHVcjmr30NeXa1N3KVv0AmMeLQJUlmP1RXcnzB2iA0/edit?gid=614011592#gid=614011592)] |
| **Archive case files** | Coded case records produced during analyst triage. One file per case (`CASE-XXXXX`). | [[🗂️_Case Files](https://drive.google.com/drive/folders/1GVrpzsgjTsqMi0639T9LoeNjCcc-rDwr?usp=drive_link)] |
| **CSV snapshots** | Redacted exports for analytical review. Contact info removed, narratives redacted before export. | [[🗃️_CSV Snapshots](https://drive.google.com/drive/folders/1nMlXCQUoQVVADiq7OQrkbuc1OoM6q21x?usp=drive_link)] |
| **Pre-anonymization narratives** | Original accounts retained for `PRIVATE_DATA` cases and for `PUBLISH_ANON` cases awaiting analyst redaction. | [PASTE DRIVE URL] |

> **Before committing this file:** open each item in Drive → Share → confirm **Restricted**, and check the parent folders too (a shared parent can silently override). If any item is set to "Anyone with the link," the URL *is* the credential — remove that row and leave only the description.

---

## What lives in this repository

Everything that describes *how* the archive works, with no witness content:

- `APS_Master_Data_Protocol.docx` — canonical schema and data dictionary
- `APS_Log_headers_canonical_Reg10_Cascadia.csv` — column specification
- `APS_Log_headers_migration_Reg10_Cascadia.csv` — transitional append-only layout
- `apps_script_submission_handler.gs` — intake handler source
- `migration_notes/` — schema version history

Any researcher, journalist, or regional partner can audit how the project codes and stores anomalous experience accounts without seeing a single witness record.

---

## Requesting access

Send to **director@aps-project.org**:

- Who you are and your affiliation
- What you intend to do with the data
- The minimum you actually need — a schema review needs only headers; pattern analysis may need redacted case-level rows
- Whether your request includes PII (rarely granted)

**The `permission_level` boundary is not negotiable.** `PRIVATE_DATA` cases are never shared outside project administration, in any form. `PUBLISH_ANON` cases may be shared in anonymized form after analyst review.

One column carries a stricter rule: **`community_context` (AO) is never published, regardless of permission level.** It records what the witness said about *other people's* experiences. A witness can consent to publishing their own account; they cannot consent for the neighbor whose experience they relayed.

---

*Property of APS: 💾 Data Archive | Region 10 (🌲 Cascadia)*

*Methodological Agnosticism Observed.*
