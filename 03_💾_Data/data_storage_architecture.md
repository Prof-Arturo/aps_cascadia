# APS Data Storage Architecture

The APS data layer spans two locations: a public repository for schema and infrastructure, and private Google Drive folders for witness data.

## In this repository (public)

Visible in `03_database/`:

- **Master Data Protocol** — canonical schema specification (data dictionary, type definitions, analyst coding guidance)
- **CSV header templates** — canonical (current operational schema) and migration (append-only transitional)
- **Apps Script source** — back-end submission handler that receives POST requests from `index.html` and writes to the Cascadia Log
- **Migration notes** — historical record of schema version transitions

## In private storage (access by request)

Maintained in Google Drive folders restricted to the project's principal investigator:

- **Cascadia Log** — the live submission database ([Google Sheet](https://docs.google.com/spreadsheets/d/1voHVcjmr30NeXa1N3KVv0AmMeLQJUlmP1RXcnzB2iA0/edit?gid=0#gid=0)). New witness submissions write here in real time via the Apps Script handler.
- **Archive case files** — structured case records produced by analyst triage ([The Archive](https://drive.google.com/drive/folders/15ir85RBZOUN1X1OkwinmrWmTlaMvxKj7?usp=drive_link)). One file per case (e.g., `CASE-XXXXX`). Contains coded fields, classification notes, and analytical commentary.
- **Snapshots** — redacted CSV exports of the Log produced for analytical review. Contact information and unredacted narratives are removed before snapshot creation.
- **Pre-anonymization narratives** — original witness accounts retained for cases where the witness's `permission_level` is `PRIVATE_DATA`, or pending analyst anonymization for `PUBLISH_ANON` cases.

## Why the split

This architecture reflects the APS's commitment to witness privacy and methodological transparency.

**Schema and infrastructure are open for inspection.** The Master Data Protocol, the CSV column definitions, and the submission handler logic are all visible in this repository. Any researcher, journalist, regional partner, or future regional unit manager can audit how the project codes, stores, and processes anomalous experience accounts.

**Witness data is not.** The Cascadia Log contains real witness names, contact information, and narrative accounts that may be sensitive or under restrictive permission settings. None of that material appears in this repository, and none of it is intended to.

## Access requests

Data access requests should specify:

- The requesting party and affiliation
- The intended use
- The minimum dataset required (a schema review needs only header information; a longitudinal pattern analysis may need redacted case-level data)
- Whether the request includes PII (rarely granted)

Send requests to: **director@aps-project.org**

Honoring the `permission_level` boundary set by witnesses at the point of submission is non-negotiable. `PRIVATE_DATA` cases are never shared outside the project administration, even in redacted form. `PUBLISH_ANON` cases may be shared in their anonymized form after analyst review.

---

*See also: `APS_Master_Data_Protocol.docx` (in this folder) for the full schema specification.*
