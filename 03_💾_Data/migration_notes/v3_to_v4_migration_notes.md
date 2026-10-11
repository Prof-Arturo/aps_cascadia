# APS Cascadia Log — v3 → v4 Migration Notes

**Target state:** the schema defined in *APS Master Data Protocol v4.0*.
**Source state:** the existing live Google Sheet built on v3 headers.

This note accompanies two header CSVs:

- **`APS_Cascadia_Log_master_headers_v4_canonical.csv`** — the clean column order from the Data Dictionary Part 3. Use this for new regional sheets (Acadian, Appalachian, etc.) or if Cascadia is ever rebuilt from scratch.
- **`APS_Cascadia_Log_master_headers_v4_migration.csv`** — the target shape for the *existing* Cascadia sheet, preserving v3 column positions 1–30 (so historical rows remain aligned) and appending new fields as columns 31–36.

Work through the live-sheet changes in the order below. Each step is a single operation; none of them require touching existing row data.

---

## 1. Rename one column in place

Column 11 header changes from `phenom_silence` to `oz_factor_flag`.

Operationally: edit the single header cell. No existing row data moves. Any row with a `YES` in that column retains a `YES`, now correctly understood under the broadened v4.0 definition (cessation of ambient sound *or* felt alteration of the sensory field).

**Caveat.** This is a destructive rename at the header level. Any downstream analytics, filter views, named ranges, pivot tables, or external scripts referencing `phenom_silence` will break until updated. Grep the Apps Script and any saved queries before committing the rename.

## 2. Append six new columns to the right of column 30

In order, as columns 31–36:

| # | Column name | Data type | Notes |
|---|---|---|---|
| 31 | `witness_configuration` | STRING | SOLO / SHARED / COMMUNAL / UNCERTAIN |
| 32 | `narrative_frame` | STRING | Analyst-coded. Pipe-delimited multi-value allowed. |
| 33 | `cultural_frame_flag` | FLAG | YES / [NULL] |
| 34 | `primary_type` | STRING | TYPE_I through TYPE_IX |
| 35 | `secondary_types` | STRING | Pipe-delimited, drawn from primary_type value set |
| 36 | `substrate` | STRING | ANALOG / DIGITAL / HYBRID / UNCERTAIN |

Leave these blank for historical rows unless a dedicated back-fill pass is performed (see §4).

## 3. Do **not** delete or relocate `class_code` (column 25)

`class_code` is deprecated but retained. Historical rows may contain values in this column; deleting or moving it would orphan that data and require a migration mapping.

Going forward:
- Do not populate `class_code` on new rows.
- Populate `primary_type` (column 34) instead.
- The Data Dictionary documents `class_code` as DEPRECATED with a note to migrate values forward where possible.

## 4. Optional: historical row back-fill

If you want historical Cascadia rows to carry v4.0 classification data, the minimum useful back-fill is:

- **`primary_type`**: map from `class_code` using the v3.2 → v4.0 type-code correspondence (`TYPE_I` → `TYPE_I`, and so on through `TYPE_V`). Types VI–IX did not exist in v3.2; those re-classifications require analyst review, not mechanical migration.
- **`substrate`**: default to `ANALOG` for all pre-v4.0 rows. This is conservative — most v3.2 cases were analog-environmental — but any row with `phenom_tech = YES` should be flagged for analyst review to determine if `DIGITAL` or `HYBRID` is more accurate.
- **`witness_configuration`**: can often be inferred from `witness_status` (ALONE → SOLO, WITNESS_1 and WITNESS_GROUP → SHARED). `COMMUNAL` cannot be inferred mechanically; it requires analyst review.
- **`narrative_frame`, `cultural_frame_flag`, `secondary_types`**: cannot be back-filled mechanically. Leave blank unless performing a full re-review pass.

A partial back-fill is better than none: `primary_type` and `substrate` alone make historical rows queryable under the new schema.

## 5. Update the Apps Script

The form-to-sheet Apps Script posts columns by name. After the header changes:

- Change references to `phenom_silence` → `oz_factor_flag`.
- Add field handlers for the six new columns (will receive empty values from the current form until index.html is updated in the next pass).
- Confirm the script appends rows by column header, not by positional index. If it uses positional indices, the new sheet shape will silently corrupt submissions — convert to header-lookup before deploying.

## 6. Sequencing

Order matters. Recommended sequence:

1. Rename `phenom_silence` → `oz_factor_flag` in the sheet.
2. Append columns 31–36 to the sheet.
3. Update the Apps Script to reference the new header names and handle the new fields.
4. Test-submit from the current (v3) form to confirm nothing broke.
5. Only then update index.html to collect the new fields.

Reversing steps 3 and 5 is the most common failure mode — a form that posts field names the script doesn't know about will either drop the data silently or throw, depending on the script's error handling.

---

*APS Administration | The Archive | Methodological Agnosticism Observed.*
