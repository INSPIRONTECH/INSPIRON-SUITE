# INSPIRON-SUITE — EXECUTION ARC: SLATE-1 (Season 01)

**Arc Plan Created:** 2026-05-23
**Last Updated:** 2026-05-23
**Arc Owner:** INSPIRON-SUITE Opus (per INSPIRON-COMMAND brief 2026-05-23)
**Scope:** Phases E.1.1 through E.7 — slate completion + v1.0 legacy resolution + doctrine formalization
**Prior plan:** "Architecture of Certainty v2026.5" (A/B/C/D phases) archived in git history pre-2026-05-23. Superseded by this arc plan.

---

## CONTRACT

This file is the only handoff channel between Opus and Sonnet. Sonnet executes the named phase only — one phase, then stop, then report. Opus reviews via OPUS CHECK after the report. Strategic-scope items route to INSPIRON-COMMAND.

**Execution doctrine for this arc and forward (Visual QC Gate, Season/Episode versioning, Kernel Sync Rule) lives in Project Instructions → EXECUTION MODE → EXECUTION DOCTRINE.** Sonnet reads PI on every session per Step 0; doctrine is inherited, not duplicated here.

---

## ARC ENVELOPE (FROM INSPIRON-COMMAND 2026-05-23)

- **Hard date:** 2026-06-02 EOD — partner-readiness state for Karl Kadon's CPN Connect Program Launch on 2026-06-03
- **Cross-project anchor:** LIS post-Eid launch (~2026-06-16) co-coordinated with Jade Clinical v1.1
- **Lead conversion lever:** Riyadh RTL = the response to the private KSA WhatsApp lead. The theme IS the reply.
- **Forum tone benchmark:** Lubos-as-reader — calm, specific, generous

---

## CONSTRAINTS — HONORED EVERY PHASE

- No engine logic in community themes (R1–R7 IP protocol holds)
- INSPIRON top-of-header logo: **FORBIDDEN** (Idea 104 final). Footer credit only.
- INSPIRON footer credit: **NON-NEGOTIABLE**
- CC BY 4.0 (locked)
- Locale: en-IN
- ALL-CAPS-HYPHENS for file naming
- Commit format: `type(scope): short description`
- Mabaega credit move → slate launch comms only (NOT v1.1 hotfix announcement)
- Cleary/Damien inbound interrupts active phase (see PI Interruption Escape Hatch)

---

## OFF LIMITS (EVERY PHASE)

- `node_modules/` `.next/` `dist/` `.vercel/`
- `.env` `.key` `.pem` `.manager` files
- `INTELLIGENCE-CORE/.context/`
- Any folder named `ARCHIVED`
- This file (EXECUTION-PHASES.md) — Sonnet reads only
- CLAUDE.md — Sonnet reads only
- README.md / sub-READMEs — Sonnet writes only when phase explicitly names them (E.6, E.7)

---

## PHASE TEMPLATE

Each phase carries:

1. Identifier + Season/Episode label
2. Scope (one sentence)
3. Pre-requisites
4. Files to touch (full Windows paths)
5. Files OFF LIMITS this phase
6. Kernel Mirror Checklist (per PI Kernel Sync Rule, if helpers touched)
7. Acceptance criteria
8. Visual QC gate position (per PI Visual QC Gate, if visible output shipped)
9. Execution report path
10. Date target

---

# PHASES

---

## E.1 — DOCTRINE TO DISK

**Scope:** Get the three doctrine items (Visual QC Gate, Season/Episode versioning, Kernel Sync Rule) into authoritative locations.

**Date target:** 2026-05-23 (immediate)

### E.1.1 — Project Instructions updated

- **File:** INSPIRON-SUITE Project Instructions UI (Commander manual paste)
- **Source:** Opus-produced full PROJECT-INSTRUCTIONS.md (2026-05-23 revision)
- **Acceptance:** PI Execution Mode block contains EXECUTION DOCTRINE subsection with all three rules + Interruption Escape Hatch.
- **Status:** Awaiting Commander paste.

### E.1.2 — EXECUTION-PHASES.md saved to disk

- **File:** `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\DOCS\STRATEGY\EXECUTION-PHASES.md`
- **Source:** This file (Opus-produced, 2026-05-23 revision)
- **Acceptance:** File on disk matches Opus-produced version.
- **Status:** Awaiting Commander save.

### E.1.3 — No Sonnet action required for E.1

E.1 is Opus + Commander manual. No Sonnet phase. First SONNET CODE trigger = E.2.

---

## E.2 — MIDNIGHT EXECUTIVE v1.1.1 → LIVE — `S01E01`

**Scope:** Ship the on-disk v1.1.1 patch (infinite scroll fix, header logo placement final, currency display rule resolved) to live Manager.io with version label visible in Manager.io UI.

**Pre-requisites:** E.1 complete. Sonnet's first action is `dir global-suite\themes\` to confirm the actual on-disk v1.1.1 filename and adjust paths if different from the guess below.

**Files to touch:**

- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\MIDNIGHT-EXECUTIVE-v1.1.1.html` (verify; do not modify unless QC failure)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\utilities\transaction-themes-extension.html` (`MIDNIGHT_EXECUTIVE_HTML` constant + THEMES array entry)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\manifests\discovery.json` (theme_registry entry for v1.1.1; suite-level `version` bumped from `"1.1.0"`; `updated` field bumped to today)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\CHANGELOG.md` (S01E01 entry — create file if absent)

**Files OFF LIMITS this phase:** Other theme files; README.md; global-suite/themes/README.md.

**Kernel Mirror Checklist:**

- [ ] Standalone v1.1.1 file verified on disk
- [ ] `transaction-themes-extension.html` → `MIDNIGHT_EXECUTIVE_HTML` constant matches standalone
- [ ] `transaction-themes-extension.html` → THEMES array entry updated (id, version, description)
- [ ] `discovery.json` → theme_registry entry version `"1.1.1"`, status `"live"`
- [ ] `discovery.json` → suite-level `version` bumped
- [ ] `discovery.json` → `updated` field = today's date
- [ ] `CHANGELOG.md` → S01E01 entry uses Season/Episode nomenclature

**Acceptance criteria:**

1. Execution report contains rendered preview link or screenshots at A4 portrait `min-width: 800px`
2. After Commander upload, Manager.io UI version label reads `MIDNIGHT EXECUTIVE v1.1.1`
3. No horizontal scrollbar at A4 portrait sizing (infinite scroll resolved)
4. INSPIRON footer credit present; INSPIRON header logo absent
5. Currency display correct across BDT, PKR, AED, USD branching

**Visual QC gate:** YES. No Manager.io upload before Opus VERIFIED.

**Execution report path:** `DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E.2-REPORT-[YYYY-MM-DD].md`

**Date target:** Live in Manager.io by **2026-05-26 EOD**.

---

## E.3 — EKO FORUM REPLY + APRIL 10 CROSS-LINK POSTED

**Scope:** Post the drafted eko reply + April 10 cross-link, both linking the v1.1.1 commit.

**Pre-requisites:** E.2 LIVE.

**Files to touch:** None — external forum posts. Commander posts manually using copy in execution report.

**Files OFF LIMITS this phase:** All code files.

**Acceptance criteria:**

1. eko reply posted, links v1.1.1 commit SHA on GitHub
2. April 10 cross-link reply posted, links v1.1.1 commit
3. Lubos-as-reader tone holds; eko credited cleanly
4. CPN sanitization rules respected (no Anthropic staff names, no internal program details)
5. Mabaega credit NOT in this reply (wrong moment)

**Visual QC gate:** N/A.

**Execution report path:** `DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E.3-REPORT-[YYYY-MM-DD].md`

**Date target:** Within 24h of E.2 live → **2026-05-27**.

---

## E.4 — RIYADH RTL v1.1 BUILD + SHIP — `S01E02`

**Scope:** Build RTL-first Riyadh theme and ship to live. KSA WhatsApp lead is waiting; this theme IS the response.

**Pre-requisites:** E.1 complete; E.2 live.

**Files to touch:**

- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\RIYADH-RTL-v1.1.html` (NEW)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\utilities\transaction-themes-extension.html` (add `RIYADH_RTL_HTML` constant + THEMES array entry with unique UUID)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\manifests\discovery.json` (new theme_registry entry; suite-level `version` bump; `updated` field bump)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\CHANGELOG.md` (S01E02 entry)

**Files OFF LIMITS this phase:** Other theme files; README.md; global-suite/themes/README.md.

**Kernel Mirror Checklist:**

- [ ] Standalone `RIYADH-RTL-v1.1.html` created
- [ ] `transaction-themes-extension.html` → `RIYADH_RTL_HTML` constant
- [ ] `transaction-themes-extension.html` → THEMES array entry with new UUID (do not reuse existing UUIDs)
- [ ] `discovery.json` → theme_registry entry, status `"live"`
- [ ] `discovery.json` → suite-level `version` bumped
- [ ] `discovery.json` → `updated` field = today's date
- [ ] `CHANGELOG.md` → S01E02 entry

**Acceptance criteria:**

1. `<html dir="rtl">` at root; layout mirrors correctly
2. Arabic-Indic numerals supported OR English-fallback path documented
3. Currency: SAR primary; Hijri date secondary if Manager.io custom_field provides
4. RTL is default but theme degrades gracefully on LTR context
5. INSPIRON footer credit renders correctly in RTL-mirrored layout
6. Sentinel pass/fail banner translated OR English-fallback documented
7. Rendered preview in execution report covers both Arabic-primary and LTR-fallback contexts

**Visual QC gate:** YES. Critical for RTL — Opus inspects both contexts before VERIFIED.

**Execution report path:** `DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E.4-REPORT-[YYYY-MM-DD].md`

**Date target:** Live by **2026-06-02 EOD**.

---

## E.5 — v1.0 LEGACY RESOLUTION (P1 priority)

**Scope:** Remove public vulnerability exposure from forum threads carrying eko-flagged v1.0 themes.

**Opus recommendation (Commander may override):** **Option A — Replace v1.0 files in-place with hardened versions + deprecation banner pointing to slate.** Rationale: retracting signals panic; replacing with hardened+banner signals mature CVE handling.

**Hybrid mapping (themes without live slate equivalent yet):**

| Old v1.0 theme | Action |
|---|---|
| `MIDNIGHT-CORPORATE-v1.html` | Replace with hardened stub + banner → Midnight Executive v1.1.1 (E.2 live) |
| `JADE-CLINICAL-v1.html` | Security-hardening patch + banner → Jade Clinical v1.1 (E.7, ~2026-06-16) |
| `GRAPHITE-INDUSTRIAL-v1.html` | Security-hardening patch + banner → Atlas Statement (E.6, ~2026-06-09) |
| `UNIVERSAL-BRONZE-v1.html` | Security-hardening patch + banner → Riyadh RTL for Arabic-first (E.4 live) |

**Files to touch:**

- `global-suite\themes\MIDNIGHT-CORPORATE-v1.html`
- `global-suite\themes\JADE-CLINICAL-v1.html`
- `global-suite\themes\GRAPHITE-INDUSTRIAL-v1.html`
- `global-suite\themes\UNIVERSAL-BRONZE-v1.html`
- `manifests\discovery.json` (mark v1.0 entries `status: "deprecated"`; add `upgrade_url` field per row; suite-level `version` bump; `updated` field bump)
- External (Commander posts): per-thread re-upload or pinned reply to patched GitHub Pages URL

**Files OFF LIMITS this phase:** Slate v1.1 theme files; README.md; CLAUDE.md.

**Acceptance criteria:**

1. All four v1.0 files patched; specific diff documented in execution report
2. Each file displays deprecation banner above document body (print + screen)
3. Each banner names slate equivalent + upgrade URL
4. `discovery.json` v1.0 entries: `deprecated` + `upgrade_url`
5. Every public v1.0 forum thread updated in-place OR carries pinned reply to patched URL
6. CPN log suggestion surfaced (see below)

**Visual QC gate:** YES. Verify banner doesn't break print layout or re-expose eko vector via inherited CSS.

**Execution report path:** `DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E.5-REPORT-[YYYY-MM-DD].md`

**Date target:** Live by **2026-06-02 EOD**.

**CPN LOG SUGGESTION (surface to INSPIRON-COMMAND after E.5 + E.3 close):**

```
CPN LOG SUGGESTION
- Column: A
- Project: INSPIRON-SUITE
- Claude usage: Claude-built theme generation + community-reviewed (eko) vulnerability
                response cycle: v1.0 ship → eko review → v1.1 hotfix → public deprecation
                arc with upgrade path
- Era: current (Pro)
- Status: live
- Date threshold crossed: 2026-06-02 (full arc closes)
```

INSPIRON-COMMAND formats and routes — this project surfaces only, never writes to CPN-COMMAND directly.

---

## E.6 — ATLAS STATEMENT v1.1 + DOCBOOK Ch 4 + README SWEEP — `S01E03`

**Scope:** Build Atlas Statement (statement-doc gap), close Notion docbook Ch 4 (Vertical Rhythm & Sheet Illusion), sweep root README + sub-README + CHANGELOG to reflect full slate state.

**Pre-requisites:** E.2, E.4, E.5 closed.

**Files to touch:**

- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\ATLAS-STATEMENT-v1.1.html` (NEW)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\utilities\transaction-themes-extension.html` (kernel mirror)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\manifests\discovery.json` (Atlas entry; suite-level `version` bump; `updated` field bump)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\CHANGELOG.md` (S01E03 entry)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\README.md` (root — slate table replacement; v1.0 themes → "Legacy / Superseded" section; preserve Upwork/WhatsApp/Strategic Engagement badges)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\README.md` (sub-README — replace roadmap table with current slate)
- External (Notion): Ch 4 Vertical Rhythm & Sheet Illusion section closure

**Files OFF LIMITS this phase:** Other slate theme files (Midnight, Riyadh, Jade); v1.0 legacy files.

**Kernel Mirror Checklist:**

- [ ] Standalone `ATLAS-STATEMENT-v1.1.html`
- [ ] `transaction-themes-extension.html` → `ATLAS_STATEMENT_HTML` constant + THEMES entry with new UUID
- [ ] `discovery.json` → Atlas entry live; suite-level `version` bump; `updated` field bump
- [ ] `CHANGELOG.md` → S01E03 entry
- [ ] Root `README.md` → slate table shows 4 v1.1 themes (Jade marked "shipping" until E.7); legacy section shows 4 v1.0 themes with upgrade-path
- [ ] `global-suite/themes/README.md` → roadmap table reflects current slate, not old v1.0 plan
- [ ] Notion Ch 4 closed

**Acceptance criteria:**

1. Atlas renders statement-format correctly: running balance column, ageing buckets (current/30/60/90+), prior-balance carry-forward
2. Root README slate table = 4 v1.1 themes with install URLs; legacy section present
3. Sub-README (global-suite/themes/README.md) reflects current slate
4. Notion Ch 4 marked complete (14/15 → 15/15)
5. Rendered preview in execution report

**Visual QC gate:** YES. Atlas is statement-format, NOT invoice-format. Verify column structure correct.

**Execution report path:** `DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E.6-REPORT-[YYYY-MM-DD].md`

**Date target:** Live by **2026-06-09 EOD**.

---

## E.7 — JADE CLINICAL v1.1 + LIS LAUNCH COORDINATION — `S01E04`

**Scope:** Ship Jade Clinical v1.1, time-align with LIS post-Eid launch.

**Pre-requisites:** E.2, E.4, E.5, E.6 closed. LIS project signals launch-window confirmation (cross-project dependency, owned by LIS).

**Files to touch:**

- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\JADE-CLINICAL-v1.1.html` (NEW; supersedes v1.0)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\utilities\transaction-themes-extension.html` (`JADE_CLINICAL_HTML` constant updated to v1.1)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\manifests\discovery.json` (Jade v1.1 entry live; v1.0 stays deprecated; suite-level `version` bump; `updated` field bump)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\CHANGELOG.md` (S01E04 entry)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\README.md` (mark Jade v1.1 "shipping" → "live")
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\README.md` (mark Jade v1.1 live)

**Files OFF LIMITS this phase:** Other slate theme files.

**Kernel Mirror Checklist:**

- [ ] Standalone `JADE-CLINICAL-v1.1.html`
- [ ] `transaction-themes-extension.html` → `JADE_CLINICAL_HTML` updated
- [ ] `discovery.json` → Jade v1.1 live; v1.0 deprecated; suite-level `version` bump; `updated` field bump
- [ ] `CHANGELOG.md` → S01E04 entry
- [ ] Root `README.md` → Jade v1.1 row marked live
- [ ] `global-suite/themes/README.md` → Jade v1.1 row marked live

**Acceptance criteria:**

1. Healthcare fields render correctly: Patient ID, Facility, Procedure code (where present in custom_fields)
2. LIS-compatible export hooks present; hook schema documented in execution report
3. Coordinated launch post drafted in execution report — NOT POSTED. Opus reviews timing with INSPIRON-COMMAND.
4. Mabaega credit appears in the draft (this IS the right moment per brief)
5. Rendered preview in execution report

**Visual QC gate:** YES.

**Execution report path:** `DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E.7-REPORT-[YYYY-MM-DD].md`

**Date target:** Live by **2026-06-16 EOD** (post-Eid).

---

# PHASE STATUS TABLE

| Phase | Label | Status | Target Date | Visual QC |
|---|---|---|---|---|
| E.1.1 | PI updated | Awaiting Commander paste | 2026-05-23 | N |
| E.1.2 | EXECUTION-PHASES.md saved | Awaiting Commander save | 2026-05-23 | N |
| E.2 | S01E01 Midnight Executive → LIVE | Pending | 2026-05-26 | Y |
| E.3 | eko reply + April 10 cross-link | Pending E.2 | 2026-05-27 | N |
| E.4 | S01E02 Riyadh RTL → LIVE | Pending | 2026-06-02 | Y |
| E.5 | v1.0 legacy resolution | Pending | 2026-06-02 | Y |
| E.6 | S01E03 Atlas Statement + Notion Ch 4 + README | Pending | 2026-06-09 | Y |
| E.7 | S01E04 Jade Clinical v1.1 + LIS coordination | Pending | 2026-06-16 | Y |

---

# CROSS-PROJECT COORDINATION

- **HEALTHCARE-INSPIRON LIS:** E.7 timing aligns with LIS post-Eid launch; comms coordinated via INSPIRON-COMMAND
- **Cleary Properties:** Damien inbound interrupts active phase (see PI Interruption Escape Hatch)
- **KSA WhatsApp lead:** Riyadh RTL (E.4) IS the response; no separate sales follow-up triggered by this arc
- **INSPIRON-COMMAND:** all CPN log routing happens upstream; this project surfaces only

---

# ARC CLOSURE

When E.7 completes, Commander returns to INSPIRON-COMMAND with closing brief. INSPIRON-COMMAND handles CPN log entry, NEURAL-BRIDGE GLOBAL doctrine updates, cross-project session summary.

This file remains as the historical execution record of SLATE-1.

---

**END EXECUTION-PHASES.md — Arc: SLATE-1 (Season 01)**
