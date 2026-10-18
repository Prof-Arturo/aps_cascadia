# 📚 APS Bibliography — 🌐 TYPE IX · CULTURAL / COSMOLOGICAL

**Study:** The American Periphenomenal Survey
**Unit:** 💾 Data Archive  ·  **Scope:** National — not region-specific
**Class code:** `TYPE_IX`  ·  **Registry glyph:** 🌐
**Status:** **PROVISIONAL — CONSULTATION HOLD**  ·  **Version:** 4.0 — **NEW FILE**
**Index:** [`APS_Biblio_Master_Index.md`](APS_Biblio_Master_Index.md)

---

## Status note — read before using this file

**This file is deliberately incomplete, and should stay that way for now.**

Type IX is collected but **not publicly solicited**, pending consultation. That decision is already recorded in the project: `APS_Recruitment_Flyer_General.docx` carries Types I–VIII only, and no Type IX outreach package exists. This bibliography observes the same hold.

The reason is not caution for its own sake. Deciding *which scholarship frames experience reported within an Indigenous or other living tradition* is itself a decision the consultation exists to inform. A principal investigator assembling a reading list for other people's cosmologies in advance of speaking with those communities would be performing exactly the extractive move the works below describe — and would be doing it inside the file that cites them.

So what follows is **not** a bibliography of the traditions this type will encounter. It is a bibliography of **the obligations that attach to collecting and publishing such accounts**, plus one exemplary work of place-based cultural scholarship. The substantive material is for the communities concerned to shape, after the consultation, and the right people to draft it may not be the PI.

Three of the four entries here are ethics and governance. That proportion is intentional.

---

## Scope

Experiences explicitly framed within a specific cultural, Indigenous, religious, or spiritual tradition, where **the witness's own framework is preserved as primary.**

## Boundary notes

**Type IX is a frame type, not a content type.** This makes it structurally unlike the other eight. An experience of *any* other type may be coded Type IX primary if the witness situates it within a tradition:

| Witness account | Primary | Secondary |
|---|---|---|
| An upright figure in the treeline, named within a tribal tradition | 🌐 IX | 🐾 II |
| A bedside presence identified as a deceased grandmother | 🌐 IX | 👁 VI |
| A premonition understood as prophecy | 🌐 IX | 💭 IV |
| A road that repeats, framed as a place one should not have driven | 🌐 IX | 🚪 I |

The naming is the framework asserting itself. Coding Type IX primary is **not** a claim about what occurred; it is a statement that the record preserves the witness's framework rather than translating it into the project's. This is the Grimm Protocol at its sharpest: *if a witness says skinwalker, the record says skinwalker* — and the record does not then helpfully explain what that might "really" have been. Translation is a prohibited speech act (`voice_style_guide.md` §5).

**Interaction with cross-cutting attributes.** `cultural_frame_flag` marks that a framework is present. `indigenous_territory` records the land, and applies to every case regardless of type or the witness's own background. The two are independent: a Type IX case may carry no Indigenous frame, and a non-Type-IX case on Indigenous land still records the territory.

---

## The consent gap — the project's open governance question

The APS privacy architecture handles consent **at the level of the individual witness**. `permission_level` governs publication and fails closed to `PRIVATE_DATA`. `community_context` (column AO) is withheld from every public export, because Q14 asks what *other people* experienced and those third parties have not consented.

That architecture is sound as far as it goes, and it does not reach Type IX.

A witness can consent for themselves. They cannot consent on behalf of a tradition. Where an account is framed within a living cosmology, the account may carry knowledge whose telling is governed by protocols the project has no visibility into — who may tell it, to whom, in what season, and whether it may be written down at all. A witness who grants `PUBLISH_ANON` has answered a question about their own privacy. They have not been asked, and cannot answer, whether the material may enter a public registry.

**This gap is not closed by anything currently in the schema**, and it is the substantive reason Type IX is on hold rather than merely under-resourced. Smith 2021 and Carroll et al. 2020 below are the standard references for what closing it would involve.

Until the consultation concludes: collect Type IX cases, code them, flag them, and **do not publish them** — irrespective of `permission_level`. Treat the public-registry question as unanswered rather than answered in the affirmative by an individual's consent.

---

## Research ethics and data governance

### Smith, Linda Tuhiwai — *Decolonizing Methodologies: Research and Indigenous Peoples*

3rd ed. London: Zed Books (Bloomsbury), 2021. ISBN 9781786998132 (pbk.). DOI [10.5040/9781350225282](https://doi.org/10.5040/9781350225282).
*Orig. ed.:* London: Zed Books; Dunedin: University of Otago Press, 1999. OCLC [39556459](https://www.worldcat.org/oclc/39556459).

Research as experienced by the researched. Smith's account of collection as a historical practice — what was taken, by whom, on what authority, and what was done with it afterward — is the necessary starting point for any project that proposes to archive Indigenous accounts. The chapters on the ethics of representation bear directly on the registry's design.

Filed primarily under 📐 PROTOCOL because it governs the project's method generally; listed in full here because Type IX is where it binds hardest.

`CORE` · `frame: method` · also filed → 📐 PROTOCOL

### Carroll, Stephanie Russo, Ibrahim Garba, Oscar L. Figueroa-Rodríguez, Jarita Holbrook, Raymond Lovett, Simeon Materechera, Mark Parsons, Kay Raseroka, Desi Rodriguez-Lonebear, Robyn Rowe, Rodrigo Sara, Jennifer D. Walker, Jane Anderson, and Maui Hudson — "The CARE Principles for Indigenous Data Governance"

*Data Science Journal* 19, no. 1 (2020): article 43, 1–12. DOI [10.5334/dsj-2020-043](https://doi.org/10.5334/dsj-2020-043). Canonical statement: [Global Indigenous Data Alliance](https://www.gida-global.org/care).

**Collective Benefit, Authority to Control, Responsibility, Ethics.** CARE was written as a complement to the FAIR principles, on the argument that making data findable and reusable is not sufficient — and can be actively harmful — where the data concerns peoples who hold rights over it.

The most directly actionable document in this file. The APS is a schema-driven archive with a public registry, which is precisely the kind of object CARE addresses. *Authority to Control* in particular has concrete implications the project can act on: who decides whether a Type IX case is published, who decides whether `indigenous_territory` is displayed at all, and whether that decision rests with the PI.

An honest reading is that the current architecture does not meet CARE, and was not designed against it. Reading it before the consultation, rather than after, is the cheapest version of this lesson.

`CORE` · `frame: method`

### Fadiman, Anne — *The Spirit Catches You and You Fall Down: A Hmong Child, Her American Doctors, and the Collision of Two Cultures*

1st ed. New York: Farrar, Straus and Giroux, 1997. OCLC [36597664](https://www.worldcat.org/oclc/36597664). xi + 339 pp.
ISBN-10 0374267812 (cloth). Later printings: 0374525641 (1998 pbk.), 9780374533403.

Lia Lee's epilepsy, understood by her physicians as a seizure disorder and by her family as *qaug dab peg* — the spirit catches you and you fall down. Fadiman gives both frameworks in full, with their own internal coherence, and declines to adjudicate.

Held here as the **model of the practice Type IX requires**, and as its cautionary case. Fadiman demonstrates that two frameworks can be rendered faithfully side by side without either being reduced; she also documents what it cost the Lees that the institution holding the records could only operate in one of them. That is the failure mode an archive is structurally prone to, and worth sitting with.

A note on the book's own reception: it has been criticised by some Hmong readers for the authority it assumed in telling the family's story. That criticism is part of what makes it the right citation here — it is a work about representation that is itself subject to the question.

`CORE` · `frame: cultural` · cross-ref → 💭 IV (Adler, *dab tsog*)

---

## Place-based cultural scholarship

### Basso, Keith H. — *Wisdom Sits in Places: Landscape and Language Among the Western Apache*

Albuquerque: University of New Mexico Press, 1996. ISBN 9780826317247 (pbk.); 9780826317230 (cloth). xviii + 171 pp.

Basso's ethnography of Western Apache place-names, built over decades of collaboration with Apache consultants who are named and credited throughout. Places carry narratives; the narratives carry moral instruction; speaking a place-name invokes the whole of it. "Wisdom sits in places" is a speaker's phrase, not Basso's coinage, and the book's method is to let that distinction stand.

Required reading for **🗺️ Type VII** as well as here, and the two uses are different. For Type VII it is the demonstration that place-knowledge is a functioning cultural system rather than sentiment about landscape. For Type IX it is the demonstration that such a system can be documented respectfully, over time, by someone from outside it — and the clearest available picture of what that actually takes in years and in relationships. It is not a short cut.

`CORE` · `frame: cultural` · cross-ref → 🗺️ VII

---

## Cross-references — read these as part of this type

| Work | Filed under | Why it matters here |
|---|---|---|
| Primiano, "Vernacular Religion" (1995) | 📐 PROTOCOL | **The methodological warrant for this type.** Personal, non-institutional belief as data rather than deviation. |
| Pasulka, *American Cosmic* (2019) | 🛸 III | Anomalous narrative as an emerging religious framework. |
| James, *Varieties of Religious Experience* (1902) | 💭 IV | The noetic quality across traditions. |
| Adler, *Sleep Paralysis* (2011) | 💭 IV | *Dab tsog* — a culturally specific entity with physical consequence. |
| Kripal, *Authors of the Impossible* (2011) | 💭 IV | The hermeneutic problem when the witness is already interpreting. |
| Luhrmann, *When God Talks Back* (2012) | 👁 VI | Presence as a trained capacity within a tradition. |
| Vallée, *Passport to Magonia* (1969) | 🛸 III | The argument that type boundaries track vocabulary rather than phenomena — which is Type IX's premise generalised. |
| Davis, *TechGnosis* (2015) | 🖥️ THEORY | Reminder that Type IX is not only Indigenous: techno-mysticism is a living cosmological frame. |

---

## What this file needs, and from whom

Not a reading list to be assembled unilaterally. In order:

1. **Consultation with the Tribal Nations whose territories Region 10 covers**, on whether and how the project should collect and hold accounts framed within their traditions — before expanding this file. This is a prerequisite, not a task.
2. **A data-governance review against CARE**, specifically *Authority to Control*: who holds the publication decision for a Type IX case, and how that is recorded in the schema. Currently the schema has no field for it.
3. **A Type IX publication rule** written into `APS_Master_Data_Protocol.docx`, so the hold described above is canonical rather than resident in this file.
4. **Non-Indigenous cosmological frames**, which the project can develop now without the same constraint: vernacular Christian, New Age, techno-mystical, diasporic. Type IX is defined by the presence of a framework, not by which one.
5. **Consultation protocol literature** — the practical procedural material on how such a consultation is conducted, which the project needs before step 1 rather than after.

---

*Property of APS: 💾 Data Archive. Methodological Agnosticism Observed.*
*Citation format: Chicago notes-bibliography. See Index §Citation standard before adding entries.*
