# 📣 Flyer & QR Best Practices

**Study:** The American Periphenomenal Survey
**Unit:** 📣 Communications  ·  **Scope:** National — applies to all print outreach
**Status:** ACTIVE REFERENCE  ·  **Version:** 1.1
**v1.1 changes:** §3.2 corrected — the v1.0 "destination mismatch" finding was wrong and is withdrawn. §4.4, §6 and §7 updated to record the decisions taken and the v4.0 build.
**Location:** `04_📣_Comms/outreach/`
**Applies to:** `APS_Recruitment_Flyer_General.docx` (v3.5) and the four type-family print flyers
**Created:** 25 October 2026

---

## Summary

The QR code on v3.5 is **already built correctly**. I measured it: 410 DPI, exact 4-module quiet zone, correct polarity, error correction H, 33×33 modules, clean decode. Nothing in the QR mechanics needs redoing.

The flyer's actual weaknesses are **genre conventions, not QR engineering** — and they surface only once you measure the flyer against the right reference class. This is a **research participant recruitment flyer**, not a marketing flyer. That genre has established institutional conventions, and v3.5 misses four of them. The most consequential:

> **A QR code should not be the only way to get more information or sign up.**
> — Columbia Irving Institute, recruitment flyer guidance

v3.5 had the QR plus the bare text `aps-project.org`. No tear-off, no email, no named person. For this project that is not merely a convenience gap, and the reason is in §4.2.

**Status: v4.0 is built** and supersedes v3.5. The QR image in it is byte-identical to v3.5's, so the destination is provably unchanged; everything that moved is layout, copy and contact paths. §7 records the decisions.

---

## 1 · On source quality — read this before trusting any number below

The two bodies of guidance differ sharply in reliability, and it changes how much weight each deserves.

**QR sizing guidance is commercial SEO content and it does not agree with itself.** For a flyer, the sources variously recommend 1″, 1.5″, 1.6″, and 2″ minimum. One source contradicts itself within a single page — asserting the 10:1 ratio, then giving a 12-inch/2-inch rule that the same ratio would make 1.2 inches. None cite primary research on scan success rates. Treat these as rules of thumb from vendors selling QR services.

Two things in that body *are* solid, because they are specification rather than opinion:

- **The quiet zone is 4 modules**, per **ISO/IEC 18004**. This is a standard, not a recommendation.
- **The 10:1 ratio** (symbol width ≈ scan distance ÷ 10) is internally consistent across sources and is the only non-arbitrary way to pick a size. Use it and ignore the conflicting fixed minimums.

**IRB recruitment guidance is authoritative** — institutional policy from Columbia, UCSF, Hawaii and UTRGV, written by people who review these documents for a living and have watched which ones fail. Where the two bodies conflict, follow the IRB guidance. The claim about consumers ignoring QR codes that circulates widely online traces to an agency opinion piece citing **no data at all**; I checked.

---

## 2 · The reference class

v3.5 reads as though it were benchmarked against marketing flyers. It should be benchmarked against **study recruitment flyers**, which is what it is: a document asking strangers to disclose a personal experience to a research project.

That reframing matters because the two genres optimise for opposite things. Marketing flyers maximise attention and conversion. Recruitment flyers maximise **informed, unpressured self-selection** — which means legibility, plain language, an identifiable researcher, stated eligibility, and multiple contact paths including a non-digital one.

Across the four institutional guides, the consistent requirements are:

| Requirement | Sources | v3.5 |
|---|---|---|
| Identify explicitly as research | Hawaii, UTRGV | ~ partial ("Field Research Unit") |
| Name the institution | Hawaii, UTRGV, Columbia | ✓ APS |
| **Name the Principal Investigator** | Hawaii, UTRGV | ✗ |
| **State eligibility (incl. age)** | Hawaii, UTRGV, Columbia | ✗ |
| Describe purpose in plain language | all four | ✓ |
| Describe what participation involves | Columbia, UTRGV | ~ thin |
| **Multiple contact methods** | Columbia, UTRGV | ✗ QR + URL only |
| **Tear-offs — "the preferred method"** | Columbia | ✗ |
| Avoid busy or cluttered design | Hawaii | ✗ see §4.3 |
| Inviting wording, not "wanted"/"needed" | UTRGV | ✓ |
| Simple, non-technical language | all four | ✓ Iceberg Method already covers this |

Four gaps, bolded. None is a QR problem.

---

## 3 · QR audit — v3.5, measured

Extracted from the `.docx` and measured directly rather than assumed.

| Property | Measured | Assessment |
|---|---|---|
| Image resolution | 820 × 820 px | — |
| Placement box | 2.000 in (1828800 EMU) | — |
| Effective print resolution | **410 DPI** | ✓ well above the 300 DPI print floor |
| **Symbol size (excl. quiet zone)** | **1.610 in / 4.09 cm** | ✓ adequate, see §3.1 |
| Quiet zone | **exactly 4.0 modules**, all four sides | ✓ meets ISO/IEC 18004 |
| Module grid | 33 × 33 → **Version 4** | — |
| Module print size | 1.239 mm | ✓ far above any print floor |
| Error correction | **H** (30% recovery) — confirmed by V4 at 28 bytes | ✓ right choice for outdoor posting |
| Colour | `#29431F` on white, single ink | ✓ |
| Polarity | dark-on-light | ✓ inverted codes fail on many scanners |
| Decode | clean → `https://www.aps-project.org/` | ✓ |

### 3.1 · The size question, answered properly

Ignore the conflicting fixed minimums and apply the ratio.

A **4.09 cm** symbol supports roughly **41 cm (16 in)** of scan distance. That is correct for a flyer held in the hand or read at close range.

It is **marginal if the flyer is posted above eye level or behind glass**, where a reader stands back. At 70 cm you want ~7 cm.

Note the trap that makes this easy to get wrong: **the 2.000 in placement box is not the symbol.** The quiet zone is inside it, so 2 inches of layout yields a 1.61 in scannable symbol. Anyone reasoning from the placement dimension will overestimate the real size by 24%.

**Recommendation:** increase the placement box to **2.25–2.5 in**, giving a symbol of ~4.6–5.2 cm and ~46–52 cm of support. It costs almost no layout space and buys the high-on-the-board and behind-glass cases.

### 3.2 · The destination is correct — correction to v1.0 of this document

**v1.0 of this document claimed a destination mismatch. That claim was wrong, and it is withdrawn.**

The QR decodes to `https://www.aps-project.org/`, which I described as "the homepage" and treated as a landing page the scanner would then have to navigate away from. It is not. **`index.html` *is* the public intake form**, served at the domain root — `<form id="aps-form">`, submitting to `SUBMIT TO REGISTRY`. A scan lands the witness directly on the form with no intermediate tap.

I inferred the mismatch from the URL shape without checking the repository structure, which states plainly that `index.html` is the deployed intake form. The lesson is worth keeping: *a URL's shape is not evidence of what it serves.* Verify the destination, don't read it.

What is actually true of the destination, all verified:

- **It is the form.** No extra tap, no navigation, no loss between scan and submit.
- **It encodes the `www.` form**, matching the canonical form your `CNAME` sets. No redirect hop.
- **The root is also the most durable possible target.** A `/submit` path could break; the root cannot. The current configuration is simultaneously the fastest and the most robust option available.

**No change required, and none should be made.** If per-venue attribution is ever wanted, add it as query parameters on the same root URL (`/?via=board`) rather than by moving the destination — see §5.

### 3.3 · Keep the QR square — the resize trap

**A QR code is a square grid. Scaling it to a non-square box distorts every module in it.**

This is easy to do by accident and invisible once done: dragging a *corner* handle in Word scales proportionally, but dragging a *side* handle does not, and the result looks close enough to square that nothing announces the problem.

It happened on the v4.1 edit — the placement box was dragged to **2.529 × 2.305 in, a 9.7% horizontal stretch.** Caught by measuring rather than by looking.

**How much does it matter?** Less than you might fear, which is exactly why it is worth writing down. I tested the stretched code at print resolution and it decoded; I tested it again downsampled to a quarter scale with Gaussian blur, simulating a phone capture at distance in poor light, and it still decoded. Scanners carry real affine tolerance because they have to handle being photographed at an angle.

So distortion at this magnitude is **not a failure, it is a reduction of margin.** It spends tolerance that exists to absorb bad angles, poor light, a cheap sensor, a creased or rain-warped poster — the conditions a trailhead posting actually meets. Spending it for nothing is the objection, not any single predicted failure.

**Two mechanics worth knowing when fixing one:**

A `.docx` stores the picture size in **two** places — `<wp:extent>` (the layout box) and `<a:ext>` inside the drawing's own transform. They can hold slightly different numbers. **Correcting only `wp:extent` leaves Word free to rescale from `a:ext`**, so both must be set square and equal or the stretch returns on open.

When squaring, scale to the **smaller** edge. Scaling up to the larger one grows the block and can push a tight layout onto a second page.

**Check this on every flyer after any resize.** Measure the two extents rather than trusting the eye — a 10% stretch is not visible and will not announce itself.

---

## 4 · The four gaps, ranked by cost

### 4.1 · The QR is nearly the only path

Columbia's rule is explicit and v3.5 breaks it. Beyond the institutional convention, three practical reasons:

- **A QR is inaccessible to a blind or low-vision reader.** The typed URL is the accessible path, and `aps-project.org` currently appears in small text inside a table cell rather than as a legible primary route.
- **Not everyone scans.** Camera-native scanning has been standard since iOS 11 and Android 9, but awareness is not universal, particularly among older readers — and older readers are disproportionately the ones holding decades-old accounts.
- **No phone, dead battery, no signal.** Trailhead postings especially.

### 4.2 · No tear-off tabs — and for this project they do more work than usual

Columbia calls tear-offs **the preferred method for participants**. UCSF ships a dedicated 8.5×11 tear-off template. For the APS the argument is stronger than convenience:

**Scanning this particular flyer in public is socially exposed.** A person standing in a café reads *"HAVE YOU SEEN SOMETHING YOU CANNOT EXPLAIN?"* and recognises themselves — and that recognition is precisely the thing most of them have never told anyone. Pulling out a phone and scanning it is a visible act, performed in front of strangers, that associates them with the flyer.

A tear-off tab is silent. It goes in a pocket and gets acted on at home, alone, which is where someone decides to tell this kind of story. **The project's whole premise is that most people never report these experiences; the flyer should not require a public gesture as the first step.**

This is a privacy affordance, not a layout nicety, and it is continuous with the care already in the data architecture — restricted Drive, `PRIVATE_DATA` default, column AO never published. The intake path should match that posture at the point of first contact.

Standard construction: 8–10 tabs across the bottom, ~1 in tall, vertical cut lines, each carrying project name + URL + email at **10 pt minimum** (Columbia).

### 4.3 · Clutter — eight bullets are the taxonomy talking, not the invitation

v3.5 lists all eight solicited types, each with four to six comma-separated examples. That is roughly **forty competing phrases** on a document a reader gives two or three seconds. Hawaii's guidance prohibits "busy or cluttered design" outright, and the dense block is also what is crowding out the tear-off strip.

The deeper issue is editorial. **The general flyer's job is to get someone who does not know their experience has a category to self-identify at all.** Taxonomic completeness works against that: a reader scanning eight abstract type names for the one that matches is doing the analyst's job, and typing is explicitly the analyst's job in this project.

The fix is already built. You have **four type-family flyers** that do the specific work. The general flyer should therefore be *less* specific, not more — three to five vivid recognitions in place of eight categories. `APS_Elevator_Pitches.md` §2 already has the right ones, and they are concrete where the taxonomy is abstract:

> a stretch of road where the same thing keeps happening to different people across forty years · a figure at the edge of vision · a low hum nobody else can hear · time you cannot account for

Cutting the bullet block frees roughly 2.8 in of vertical space. The tear-off strip needs about 1.25 in. **The two changes pay for each other**, which is why they belong in the same revision.

### 4.4 · No PI named, no eligibility stated

Hawaii and UTRGV both require the PI's name and basic eligibility. Two reasons beyond compliance:

**A named person is a trust signal.** You are asking a stranger to disclose something they have concealed, in some cases for decades. "The APS Directorate" is an institution; a name is a human who will read it.

**Age eligibility is a live safeguard, not a formality.** A publicly posted flyer on a café or trailhead board will be read by minors.

Checking `index.html` resolves how this currently stands: `age_group` is a **required** field whose options begin at **18–25**, with no under-18 option. **The intake is already adults-only by construction** — a minor cannot complete it honestly. What was missing was any statement of that on the flyer, so a minor could read the posting, believe themselves invited, and reach a form that silently has no place for them.

**Resolved in v4.0: adults only.** The flyer now states *"Open to adults 18 and over."* and matches what the form already does. A deliberate parental-consent route was considered and declined — correctly, in my view: it would require a guardian consent mechanism, a separate publication rule (a minor's narrative in a public registry is a different question from an adult's), and a safeguarding path for distressing disclosures. That is a protocol programme, not a flyer field.

One residual, noted not actioned: the form is adults-only *by omission* rather than by affirmation. A minor could still select 18–25. If you want the policy stated rather than merely implied, one line of text above the age field closes it — but `index.html` is deployed, so I have not touched it.

---

## 5 · Static vs dynamic QR — against the marketing consensus

Commercial guidance pushes **dynamic** QR codes: re-pointable destination, plus scan analytics. For the APS that is the wrong trade, and the reasoning is worth recording because the advice is near-universal and it is wrong *here*.

A dynamic QR routes **every prospective witness through a third-party commercial redirect service**, which logs IP address, timestamp, user agent and coarse geolocation before passing them on. For a project whose privacy architecture is restricted Drive sharing, a fail-closed `PRIVATE_DATA` default, and a column withheld from every public export because third parties did not consent — handing a marketing analytics vendor the first-contact log of everyone considering a disclosure is inconsistent with the rest of the design. It also quietly creates a record outside your control, of exactly the population most sensitive to being recorded.

**Recommendation: stay static, pointing at your own domain.**

If you want per-venue attribution, you can have it without the third party — use your own paths and read them in your own logs:

```
aps-project.org/s/board      community boards
aps-project.org/s/trail      trailhead postings
aps-project.org/s/cafe       café postings
```

Same analytics, no external observer, and the redirect stays on infrastructure you control. The one genuine advantage of dynamic QR — re-pointing after printing — is better solved by owning a short stable path and redirecting server-side, which is the same capability without the data cost.

---

## 6 · v4.0 layout — as built

8.5 × 11 portrait. Verified one page. Margins as v3.5 (0.5 T/B, 0.75 L/R).

```
┌─────────────────────────────────────────────────────┐
│  [APS mark]                                         │
│                                                     │
│  HAVE YOU SEEN SOMETHING                            │  ← keep verbatim; it works
│  YOU CANNOT EXPLAIN?                                │
│                                                     │
│  One plain-language line on what the APS is and     │
│  that it is a research project.                     │
│                                                     │
│  3–5 concrete recognitions, one line each           │  ← replaces the 8 bullets
│  — not eight taxonomic categories                   │
│                                                     │
│  We don't explain it away. We don't try to          │
│  convince you. We do not judge. We document.        │  ← keep; strongest copy on the page
│                                                     │
│  ┌───────────────┐   SHARE YOUR ACCOUNT             │
│  │               │   Scan the code, or visit        │
│  │   QR 2.25″    │   aps-project.org                │  ← URL legible, not table-buried
│  │   box         │   published anonymously, or      │  ← accurate, see below
│  │               │   kept private — you choose      │
│  └───────────────┘   cascadia@aps-project.org       │  ← second path
│                      Or take a tab below.           │  ← third path
│                                                     │
│  Open to adults 18 and over.                        │  ← §4.4
│  Principal Investigator · Region 10 (Cascadia)      │
│  Methodological Agnosticism Observed  ·  v4.0       │
├────────┬────────┬────────┬────────┬────────┬────────┤
│        │        │        │        │        │  ← 5 tear-off tabs, 1.4″ × 1.2″
└────────┴────────┴────────┴────────┴────────┴────────┘
```

Three independent paths to the archive — **scan, type, pocket** — which is what the recruitment guidance asks for and what §4.2 argues this project specifically needs.

**Two deliberate departures from the generic advice, both worth recording:**

**Five tabs, not eight.** Columbia sets a 10 pt floor for tear-off text. Eight tabs across 7 inches gives 0.875 in each, where `aps-project.org` at 10 pt does not fit without wrapping — and a wrapped URL on a tab is worse than no tab, because people mistype it. Five tabs at 1.4 in carry the URL at a clean 10 pt. Fewer tabs that work beat more tabs that don't.

**Tabs carry the URL, not the email.** Columbia's tear-off content list names study name, email and phone. `cascadia@aps-project.org` is 24 characters and will not sit on a 1.4 in tab at a legible size without breaking across lines — and a broken email address is a dead one. The tab carries the project name and the URL; the email lives in the body where it has room. Columbia's list is an institutional norm, not a specification, and the norm's purpose is served.

**On the anonymity wording.** v3.5 promised a *"secure, anonymous report."* The form actually offers a choice — `PUBLISH_ANON` (published with names and contact permanently redacted) or `PRIVATE_DATA` (not published at all) — and `contact_info` is optional rather than absent. "Anonymous" as a flat claim overstates it for a witness who supplies contact details. v4.0 says *"published anonymously, or kept private — you choose when you submit,"* which is what the architecture actually does. Worth getting right on a document whose entire proposition is that the project does not overclaim.

---

## 7 · Decisions taken — v4.0

| Decision | Outcome |
|---|---|
| **Age policy** | **Adults only.** Flyer states "Open to adults 18 and over." A parental-consent route was considered and declined. Matches the form's existing behaviour — see §4.4. |
| **PI attribution** | **Role title, no personal name.** No preference was expressed, so I took the conservative default: these go on unattended public boards, and adding a name later is trivial where un-printing one is not. Override by replacing the line if you want it named. |
| **Second contact path** | **`cascadia@aps-project.org`**, printed in the body. Tabs carry the URL only — see the note in §6. |
| **QR destination** | **Unchanged.** §3.2 — it was already correct and my v1.0 finding was wrong. The image in v4.0 is byte-identical to v3.5's, so the destination is provably the same. |

Tear-offs, the bullet cut and the 2.25 in placement box were applied without needing a decision.

---

## 8 · Applies to all five print flyers

The four type-family flyers carry the same QR and were built from the same pattern, so §§3.1, 3.2, 4.1 and 5 apply to them unchanged. §4.3 does **not** — specificity is their entire purpose, and they should stay specific.

If v4.0 adopts tear-offs, the type flyers should get them too, and their tabs should carry the type so a torn tab still says which flyer it came from.

---

## 9 · Typography and print production

Added in v1.1, when National Park and Helvetica Neue were adopted for the flyer program.

### 9.1 · Exact font strings

| Role | String to use in Word | Notes |
|---|---|---|
| Titles, headings, display | `National Park` | See the defect below |
| Body, captions, tear-off tabs | `Helvetica Neue` | **With the space.** The PostScript name `HelveticaNeue` will not resolve. |

### 9.2 · The National Park font has a broken name table

Read directly from the TTFs, and worth recording because it will affect every APS document that uses this face:

**The family name carries a trailing space.** `nameID 1` is literally `"National Park "`. Most systems trim it, so `National Park` is the correct string to write — but it explains any font-matching oddity you hit, and it is not your error.

**The Bold file declares itself a different family.** `NationalPark-Bold.ttf` has `nameID 1 = "National Park Medium"` while its typographic name (`nameID 16/17`) correctly says family `National Park`, subfamily `Bold`. Those two naming systems disagree, and which one an application believes decides what you get:

- **macOS / Word for Mac** builds families from the typographic names, so `National Park` + bold should resolve to the real Bold face. This is the expected case.
- **Windows / older GDI apps** use the legacy names, so `National Park` and `National Park Medium` appear as two unrelated families and asking for bold yields a *synthesized* bold — the regular face algorithmically thickened.

I tested both. The synthesized bold is usable but visibly muddier than the real face. **The flyer ships with `National Park` + bold**, which is the semantically correct and portable choice: where the family is properly registered you get the real Bold, and where it isn't you get a slightly heavy-looking heading rather than an entirely wrong typeface. Hard-coding `National Park Medium` would buy the real Bold on Windows at the risk of resolving to nothing on a Mac, which is a far worse failure.

**If the headings look thin or muddy in Word**, that is this defect. Change the one `HEAD` constant in the build script to `National Park Medium` and set bold off for heading runs. The better long-term fix is to repair the font's name table once, with a tool like FontForge, and reinstall — that fixes it for every APS document rather than per file.

**Embedding is permitted.** `fsType = 8` (editable embedding), so embedding National Park in PDFs and documents is within licence.

### 9.3 · Helvetica Neue will not survive leaving your Mac

Helvetica Neue ships with macOS and is **not present on Windows**. A `.docx` opened on a Windows machine substitutes it, the text reflows, and the one-page fit and tear-off alignment are the first casualties.

This is not hypothetical for this flyer — it is a document designed to be handed to cafés, trailhead kiosks and partner venues, any of which may print it themselves.

### 9.4 · Distribute the PDF, not the .docx

Which follows from 9.2 and 9.3 together:

- **`.docx` = your editable master.** Keep it, edit it, never send it to a venue.
- **PDF = what goes to boards, venues and partners.** It embeds both faces, locks the layout, and prints identically on any machine.

**Export the PDF from Word on your own Mac**, where both fonts are installed, rather than using any PDF generated elsewhere — a PDF made on a machine lacking Helvetica Neue has a substituted face baked into it permanently, which is worse than a `.docx` that at least substitutes live.

The same rule should govern the four type-family flyers.

### 9.5 · The phantom second page

**A flyer that ends in a table will usually produce a blank page 2.** Word requires a paragraph mark after a trailing table and will not let the table be the last element in the body. If the real content fills the page, that mandatory empty paragraph has nowhere to sit and starts a new page — carrying nothing on it.

This is worth naming because it **mimics an overflow and invites the wrong fix.** The obvious response is to cut content until the page count drops, and that can mean deleting material from a layout that already fitted. The tell is simple: if page 2 extracts **no text**, nothing overflowed. The tear-off strip is on page 1 and the second page holds a paragraph mark.

It happened here. Successive rounds of spacing cuts were made against a two-page count that was never an overflow — the strip had been sitting on page 1 the whole time.

**The fix is to the paragraph, not the content.** Set that trailing paragraph to ~2 pt with zero before/after spacing and an exact line rule, so it fits in whatever sliver remains:

```xml
<w:p><w:pPr>
  <w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/>
  <w:rPr><w:sz w:val="4"/><w:szCs w:val="4"/></w:rPr>
</w:pPr></w:p>
```

In Word without editing XML: select the empty paragraph below the table, set its font to 2 pt, and set line spacing to Exactly 1 pt with no space before or after.

Note the paragraph may be **self-closing** in the XML (`<w:p …/>` rather than `<w:p>…</w:p>`) when it carries no properties — a pattern that will defeat a naive search.

**This will recur on all four type-family flyers** the moment they get tear-off strips, since the strip makes a table the last element on each.

---

## Sources

**Institutional recruitment guidance — authoritative**
- [Columbia Irving Institute — Content and Layout Guides for Recruitment Flyers](https://www.irvinginstitute.columbia.edu/services/content-and-layout-guides-recruitment-flyers) — the "QR must not be the only path" rule; tear-offs as preferred method; 10 pt tab minimum
- [UCSF Participant Recruitment Program — Design & Advertise](https://recruit.ucsf.edu/design-advertise) — tear-off template; plain-language review
- [University of Hawaii — Recruitment Flyer Guidelines (PDF)](https://research.hawaii.edu/orc/wp-content/uploads/sites/7/2021/12/GUIDE_612_Recruitment_Flyer_Guidelines.pdf) — identify as research; name PI; no clutter
- [UTRGV IRB — Flyer Guidelines (PDF)](https://www.utrgv.edu/research/_files/documents/departments/research-integrity/irb/irb-flyer-guidelines.pdf) — required elements; inviting wording; eligibility

**QR specification — authoritative**
- [ISO/IEC 18004 quiet zone — 4 modules](https://2dtg.com/faq/quiet-zone)

**QR sizing — vendor guidance, mutually inconsistent, see §1**
- [Uniqode — How to Size Your QR Codes](https://www.uniqode.com/blog/qr-code-best-practices/how-to-perfectly-size-your-qr-codes)
- [Scanova — Minimum QR Code Size](https://scanova.io/blog/minimum-qr-code-size/)

**Checked and rejected**
- [LBB / Appetite Creative — Why Consumers Ignore Most QR Codes](https://lbbonline.com/news/Why-Consumers-Ignore-Most-QR-Codes-And-What-Brands-Can-Do-About-It) — widely cited, contains no data; an agency opinion piece ending in a sales pitch. Its qualitative point (give a clear reason to scan) is sound and is independently supported by the recruitment guidance.

---

*Property of APS: 📣 Communications. Methodological Agnosticism Observed.*
