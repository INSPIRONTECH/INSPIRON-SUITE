# INSPIRON SUITE STRATEGY
## The Architecture of Certainty (v2026.5)

**Last Updated:** 2026-05-22

---

## 🏛️ OVERVIEW
Open-source ecosystem for Manager.io focused on industrial logic and regulatory compliance. The "Logic Moat" protects proprietary engine code while providing global utility.

## 📂 VERTICALS
1. GLOBAL-SUITE: Themes (Bronze → Graphite) and Utilities (Audit Sentinel).
2. TAX-SUITE: BD-specific NBR 2026 compliance tools (VAT, TDS, VDS).

## 🚀 EXECUTION PHASES

### PHASE A — INFRASTRUCTURE (COMPLETED)
- Establish monorepo structure.
- Deploy discovery.json v2.0 registry.
- Hardened .gitignore and sanitization rules.

### PHASE B — UTILITY DEPLOYMENT (ACTIVE)
- Audit Sentinel (checklist-v1) live on suite.inspiron.tech.
- BD Tax Suite (index.html) live on tools.inspiron.tech.
- Integration of Claude-Enhanced Intelligence (AI Q&A).

### PHASE C — COMPLIANCE EXPANSION (PLANNED)
- Build Mushak 6.3, 6.4, and 9.1 functional logic.
- Develop "Pre-Send" validation for VDS/TDS certificates.
- Export-to-Journal templates for all NBR forms.

### PHASE D — REGIONAL PIVOT (BACKLOG)
- Port BD logic to PK (Pakistan) and UAE regulatory contexts.
- Localized tax calendars and penalty calculators.

---

# 🎨 PHASE E — COMMUNITY THEMES v1.1 RELEASE

**Status:** ACTIVE | **Author:** General Claude Opus 4.7 | **Date:** 2026-05-22
**Doctrine Reference:** Head First Manager.io Theme Design — CONFIDENTIAL EDITION (Notion)

## 🎯 STRATEGIC CONTEXT

1. **v1.0 incident closure.** Universal Bronze + Corporate Blue Column shipped 2026-05-20 with security gaps. @eko provided public review with working fixes. v1.1 must close those gaps and credit eko publicly.
2. **KSA lead engagement.** Private Arabic-language inquiry received. Theme 4 (Riyadh RTL) is the silent demonstration to that prospect and every future Arabic-market user. There are 5 listed advisors in KSA — none have shipped a public RTL theme.
3. **Architectural depth proof.** Single forum post with 4 distinct themes (different archetypes, ≤6% idea overlap) demonstrates that INSPIRON builds for verticals, not just paints invoices.
4. **Repo doctrine.** `INSPIRON-THEMES` (Sector Charlie) is the lab. `INSPIRON-SUITE` (Sector Bravo) is the public release surface. Code flows lab → audit → suite → forum.

## 🗺️ DECISIONS LOCKED

- **Slate composition:** Midnight Executive · Atlas Statement · Jade Clinical · Riyadh RTL
- **Graphite Industrial:** Deferred to v1.2 backlog. Removed from active README catalog. Existing file at `global-suite/themes/GRAPHITE-INDUSTRIAL-v1.html` moves to `global-suite/themes/_BACKLOG/`.
- **v1.0 files (`01_UNIVERSAL-BRONZE.html`, `02_CORPORATE-BLUE-COLUMN.html`):** Overwritten in place with hardened v1.1 code carrying a deprecation banner pointing to the new four-theme slate. Forum links continue to resolve and now serve safe code.
- **Filename convention:** ALL-CAPS-HYPHENS, sequential numbering: `01-MIDNIGHT-EXECUTIVE.html`, `02-ATLAS-STATEMENT.html`, `03-JADE-CLINICAL.html`, `04-RIYADH-RTL.html`.
- **Kernel delivery:** Manager.io requires single-file themes. NEXUS shared safe-rendering kernel is inlined as a `<script>` block in each theme, with a canonical reference file at `global-suite/themes/_kernel/nexus-kernel.js` for documentation/audit.

## 📂 REPO FLOW

```
INSPIRON-THEMES (lab)                       INSPIRON-SUITE (release)
─────────────────────                       ────────────────────────
COMMUNITY-EDITION/         build & test →   global-suite/themes/
  01-MIDNIGHT-CORPORATE                       01-MIDNIGHT-EXECUTIVE.html
  02-JADE-CLINICAL                            02-ATLAS-STATEMENT.html
  03-GRAPHITE-INDUSTRIAL  (→ _BACKLOG)        03-JADE-CLINICAL.html
  04-ATLAS-STATEMENT                          04-RIYADH-RTL.html
  + 04-RIYADH-RTL (new)                       01_UNIVERSAL-BRONZE.html (legacy banner)
                                              02_CORPORATE-BLUE-COLUMN.html (legacy banner)
                                              _kernel/nexus-kernel.js
                                              _BACKLOG/GRAPHITE-INDUSTRIAL-v1.html
                                              README.md (updated)
                                              CHANGELOG.md (new)
```

## 🛡️ DOCTRINE BASELINE (applies to every Phase E.x)

Every theme built in Phase E must satisfy these doctrine checks (from Head First Manager.io Theme Design Ch 11 §11):

1. **Idea 4 — Safe Rendering Core:** every dynamic value rendered via `textContent` or `appendTextWithBreaks`, never `innerHTML`.
2. **Idea 121 — Self-hosted fonts:** Neo Sans Pro via `@font-face` from relative path. Zero `@import url('https://...')`.
3. **Idea 11/14 — Layer separation:** `THEME_FLAGS` and `:root` CSS variables in SAFE SETTINGS zone; renderer in DO NOT EDIT zone. `.it-*` core classes, `.brand-*` overrides, `.user-*` open.
4. **eko fix — No script re-execution:** `data.footers` rendered as plain text via `appendTextWithBreaks`. The `<script>` re-execution loop from v1.0 is forbidden.
5. **eko fix — No nested `<tr>`:** `<thead>` contains exactly one `<tr>` with `<th>` cells.
6. **Idea 87 — URL validation:** every URL through `safeLinkUrl` or `safeImageUrl`; protocol whitelist `http, https, mailto, tel` only.
7. **Idea 24 — Density modes:** `applyDensityMode(data)` auto-triggers `document-long` at 20+ rows.
8. **Idea 9 — Fault UX:** `renderFault(code)` shows branded SYSTEM FAULT on fetch failure.
9. **Idea 18 — Customization API header:** HTML comment block at top of file declaring safe/unsupported edits.
10. **Public-release flags:** `ENABLE_COMMISSION_LOGIC: false`, `ENABLE_MULTI_CURRENCY: false`, `ENABLE_QR_PANEL: false` (paid layer never ships in public themes).
11. **Demo data discipline:** NEXUS PROPERTIES & MARKETING (PVT.) LTD. fictional identity per Appendix G. Zero ARGUS-derived data.
12. **DEMO TEMPLATE strip** enabled by default for forum release (`ENABLE_DEMO_WATERMARK: true`).

---

## PHASE E.0 — REPO RECONCILIATION & KERNEL STAGING

### Permitted writes
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\_kernel\nexus-kernel.js` (new)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\_BACKLOG\` (new directory)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\_BACKLOG\GRAPHITE-INDUSTRIAL-v1.html` (moved from parent)
- `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\_kernel\nexus-kernel.js` (mirror for lab use)

### Files OFF LIMITS
- All four v1.1 theme files (Phases E.1 – E.4)
- `01_UNIVERSAL-BRONZE.html`, `02_CORPORATE-BLUE-COLUMN.html` (Phase E.5)
- `UNIVERSAL-BRONZE-v1.html`, `MIDNIGHT-CORPORATE-v1.html`, `JADE-CLINICAL-v1.html` staged files (will be replaced in Phase E.5 cleanup)
- `INTELLIGENCE-CORE\.context\` — read only
- Anything under `ARCHIVED/`

### Acceptance criteria
- `nexus-kernel.js` exists in both lab and release locations with complete helper set: `safeText`, `safeUrl`, `safeLinkUrl`, `safeImageUrl`, `safeCssAlign`, `safeDimension`, `appendTextWithBreaks`, `THEME_DOM`, `THEME_FLAGS`, `detectArchetype`, `applyDensityMode`, `renderFault`, `processRows`, `appendTotals`, `buildCell`, `renderFooters`, `renderDebugOverlay`, `runIntegrityCheck`.
- `_BACKLOG/` directory exists with `GRAPHITE-INDUSTRIAL-v1.html` moved into it.
- Sonnet outputs Phase E.0 report.

---

## PHASE E.1 — BUILD MIDNIGHT EXECUTIVE v1.1

### Source
Read base: `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\01-MIDNIGHT-CORPORATE.html` (sanitized v1.0 base).

### Permitted writes
- `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\01-MIDNIGHT-EXECUTIVE.html` (lab build)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\01-MIDNIGHT-EXECUTIVE.html` (release copy)

### Composition (doctrine idea numbers — exact set)
**4 + 11 + 13 + 14 + 15 + 16 + 18 + 19 + 26 + 28 + 30 + 31 + 32 + 33 + 36 + 39 + 46 + 50 + 51 + 57 + 61 + 66 + 70 + 73 + 76 + 77 + 78 + 79 + 87 + 89 + 92 + 98 + 102 + 104 + 121 + 122 + 123 + 124 + 131 + 132**

### Build constraints
- Inline NEXUS kernel as `<script>` block.
- Dark canvas `#010409`, Action Gold `#FFD700` accent, Electric Cyan `#00D2FF` for logo drop-shadow and INSPIRON link only.
- Inline SVG INSPIRON authority footer (golden dot at top-right of mark — Idea 78).
- PAID/OVERDUE status stamp (Idea 87) — bordered badge, 2.5px tracking, uppercase.
- Customization API HTML header comment block (Idea 18 canonical template).
- `THEME_FLAGS.ENABLE_DEMO_WATERMARK: true` for forum release.
- DEMO data: NEXUS PROPERTIES & MARKETING (PVT.) LTD.

### Files OFF LIMITS
- Other three theme files
- Kernel (sealed in Phase E.0)
- v1.0 legacy files
- `INTELLIGENCE-CORE\.context\`

### Acceptance criteria
- Doctrine baseline checks 1–12 pass
- Renders against `/api4/view-v1` test data
- No console errors
- `view-source:` confirms no `innerHTML` with API data, no script re-execution, no Google Fonts CDN
- Lab and release copies are identical

---

## PHASE E.2 — BUILD ATLAS STATEMENT v1.1

### Source
Read base: `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\04-ATLAS-STATEMENT.html` (sanitized v1.0 base).

### Permitted writes
- `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\02-ATLAS-STATEMENT.html` (lab build, renumbered)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\02-ATLAS-STATEMENT.html` (release copy)

### Composition
**1 + 5 + 7 + 17 + 21 + 22 + 23 + 24 + 25 + 38 + 53 + 54 + 55 + 56 + 58 + 59 + 60 + 62 + 63 + 64 + 65 + 67 + 68 + 69 + 91 + 92 + 93 + 95 + 96 + 99 + 100 + 101 + 103 + 109 + 110 + 119 + 133 + 134 + 135**

### Build constraints
- Identity: information density, NOT visual decoration. Charcoal text on white. Single accent color (no Action Gold competition with Midnight).
- `THEME_FLAGS.AUTO_DENSITY_LONG_THRESHOLD = 20`. Auto-trigger `document-long` when rows > 20.
- `thead { display: table-header-group; }` to repeat table headers across pages (Idea 22).
- `page-break-inside: avoid` on totals/status/signatures only — NOT on `tr` (Idea 23).
- Footer band fix doctrine fully applied (Ideas 58–69): `flex: 1 0 auto` content, `flex-shrink: 0` footer, NO `position: absolute` ever.
- Short-invoice spacer: `min-height: 60mm` when rows < 4 (Idea 64).
- Test render must verify clean output at 1, 12, 35, 60 rows (Idea 68).

### Acceptance criteria
- All doctrine baseline checks pass
- Multi-page test: 35+ rows → headers repeat, no mid-page footer banding, no orphan totals
- Short-invoice test: 1 row → spacer pushes footer to natural bottom

---

## PHASE E.3 — BUILD JADE CLINICAL v1.1

### Source
Read base: `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\02-JADE-CLINICAL.html` (sanitized v1.0 base).

### Permitted writes
- `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\03-JADE-CLINICAL.html` (lab build, renumbered)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\03-JADE-CLINICAL.html` (release copy)

### Composition
**3 + 8 + 9 + 27 + 29 + 34 + 35 + 37 + 40 + 41 + 42 + 43 + 44 + 45 + 47 + 48 + 49 + 88 + 94 + 96 + 99 + 103 + 108 + 109 + 112 + 117 + 118 + 125 + 126 + 127**

### Build constraints
- Clinical teal palette: `#007A6E` accent, `#F0FAF8` soft surface. NOT cyan (reserved for INSPIRON brand mark only).
- ECG heartbeat pulse bar: 6px gradient line under header (decorative — screen and print).
- Profile-aware custom fields (Idea 8): if `data.fields` contains "Patient ID", "Doctor", "Department", "Visit Date" — place in a dedicated info zone above the table.
- Mobile-first primary: `clamp(11px, 1.4vw, 13px)` font sizing on screen, fixed in print.
- Action bar with three buttons: Print, Save PDF, Share (Ideas 47–49). Hidden in print.
- 3-box signature panel (Idea 88): Authorized / Acknowledgment / Stamp.
- Status: ALWAYS paired with text label, never color alone (Idea 99).
- Glassmorphism allowed in screen, suppressed in print (Idea 117).
- DEMO data: NEXUS CLINICAL LABS (fictional healthcare entity, not derived from real clients).

### Acceptance criteria
- Doctrine baseline checks pass
- Mobile viewport test at 375px: header stacks, table scrolls horizontally, no overflow
- Contrast check: body text ≥ 4.5:1 against background
- Print test: glassmorphism suppressed, ECG line still visible

---

## PHASE E.4 — BUILD RIYADH RTL v1.1 (NEW BUILD FROM SCRATCH)

### Source
No v1.0 base exists. Build from doctrine + NEXUS kernel.

### Permitted writes
- `D:\000. REPOS\SECTOR-CHARLIE-CONTRACTS\INSPIRON-THEMES\COMMUNITY-EDITION\04-RIYADH-RTL.html` (lab build)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\04-RIYADH-RTL.html` (release copy)

### Composition
**2 + 6 + 7 + 10 + 12 + 20 + 72 + 80 + 81 + 82 + 83 + 84 + 86 + 90 + 97 + 106 + 108 + 111 + 113 + 114 + 115 + 116 + 120 + 128 + 129 + 130**

### Build constraints
- `<html dir="rtl" lang="ar">` as primary direction.
- Layout fully respects `view.direction` and reverses on `dir="ltr"` (Idea 97). Test both modes.
- Bilingual labels: Arabic primary + English secondary smaller below. Standard accounting vocabulary. Where Sonnet is uncertain about exact Arabic accounting terms, use placeholder `[AR: term-en-translation]` for Commander to fill before release.
- Multi-currency pipeline scaffold (Idea 113): SAR primary, AED/USD detected via `data.business.division` (paid logic deferred — public theme ships with display-only currency adaptation).
- ZATCA QR panel container (Idea 115): 80×80px fixed-position bottom-right with HTML comment:
  ```html
  <!-- ZATCA Phase 2 TLV encoding hook — paid layer feature.
       Public theme ships with QR container scaffold only. -->
  ```
- Geometric ornament only (Idea 106): subtle diamond fret pattern in header strip. NO flags, NO calligraphy, NO Kaaba/mosque/landmark imagery.
- Accent: Electric Cyan `#00D2FF` for headers — visually distinct from Midnight's gold.
- DEMO data: `مؤسسة النخبة العقارية والخدمات` (Elite Real Estate & Services Establishment), Riyadh. VAT 15% applied. Side-by-side AR/EN line items.

### Files OFF LIMITS
- Same as other phases

### Acceptance criteria
- Doctrine baseline checks pass
- Render in both `dir="rtl"` (default) and `dir="ltr"` (force via URL param `?dir=ltr` or kernel detection) — both directions produce clean layout
- Numerals stay LTR while text flows RTL
- ZATCA QR container is visible in screenshot (empty placeholder OK)
- No `[AR: ...]` placeholders shipped — Commander fills before push to remote
- Arabic text renders without mojibake

---

## PHASE E.5 — V1.0 LEGACY HANDLING

### Permitted writes
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\01_UNIVERSAL-BRONZE.html` (overwrite with hardened v1.1 code + deprecation banner)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\02_CORPORATE-BLUE-COLUMN.html` (overwrite with hardened v1.1 code + deprecation banner)
- Optional deletion: `UNIVERSAL-BRONZE-v1.html`, `MIDNIGHT-CORPORATE-v1.html`, `JADE-CLINICAL-v1.html` if redundant with new sequence-numbered files. Defer deletion decision to Commander — Sonnet flags but does not delete in this phase.

### Build constraints (for v1.0 path overwrites)
- The same security baseline as new themes — kernel inlined, no innerHTML, no Google Fonts.
- Visual identity preserved (Universal Bronze stays bronze-accent on white; Corporate Blue Column keeps 3-column header).
- At the top of the rendered output, a small dismissible banner (screen-only, hidden in print):
  ```
  ℹ This theme has been hardened and superseded. For the latest INSPIRON theme catalog visit:
    suite.inspiron.tech/global-suite/themes/
  ```
- This preserves the existing forum links from the eko thread while making the upgrade path visible.

### Acceptance criteria
- Both v1.0 files lint-clean and doctrine-compliant
- Banner visible in screen render, suppressed in print
- Forum links continue to resolve and serve safe code
- Sonnet flags any v1-suffix files that should be removed; does NOT delete

---

## PHASE E.6 — RELEASE DOCS

### Permitted writes
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\README.md` (rewrite for v1.1 four-theme catalog)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\global-suite\themes\CHANGELOG.md` (new)
- `D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\README.md` (update Community Edition table)

### README must reflect
- Four-theme slate (Midnight Executive, Atlas Statement, Jade Clinical, Riyadh RTL)
- Universal Bronze + Corporate Blue Column listed as "Legacy v1.0 — superseded" with install URLs still pointing to hardened files
- Graphite Industrial NOT listed (moved to backlog)
- Install URL pattern: `https://suite.inspiron.tech/global-suite/themes/[01-04]-[THEME-NAME].html`

### CHANGELOG.md must include
- v1.0 release date and what shipped
- @eko's security review (linked to forum thread URL)
- v1.1 changes: kernel extraction, four-theme catalog, security hardening (XSS, script re-exec, font CDN, nested tr)
- **Contributors section:** @eko credited as Security Reviewer; @lubos credited for `/api4/view-v1` framework
- Backlog note: Graphite Industrial deferred to v1.2; Universal Bronze v1.0 + Corporate Blue Column v1.0 archived in place with deprecation banner

### Acceptance criteria
- README displays correctly in GitHub render
- CHANGELOG is valid markdown
- All install URLs in README resolve to existing files in the repo

---

## PHASE E.7 — FORUM REPLY DRAFTS (OPUS DELIVERABLE)

**This phase does NOT involve Sonnet.** Opus writes the forum replies after Phase E.6 closes and Commander confirms visual quality of all four themes.

### Deliverables
1. **Reply in eko's thread** (https://forum.manager.io/t/...universal-bronze-corporate-blue-column/68281): acknowledgment + adoption + named credit + link to v1.1 release post.
2. **NEW forum thread:** "INSPIRON v1.1 — Four community themes for /api4/view-v1" featuring the four-theme slate.
3. **Cross-link reply** in April 10 thread (https://forum.manager.io/t/.../67601) closing the original "clean generic versions" loop.

### Tone constraints
- Acknowledge eko sharply, no hedging — each technical point is correct.
- Credit Lubos for framework. Credit eko by name as "Security Reviewer."
- No defensive language about v1.0.
- No marketing CTAs.
- Riyadh RTL positioned last in the new-thread post (the reveal).

---

## 🔒 OFF LIMITS — ALL PHASES, ALWAYS

- `INTELLIGENCE-CORE\.context\` — read only unless triggered
- `.env`, `.key`, `.pem`, `.manager` files
- Hardcoded Manager.io API keys, business IDs, or customer credentials
- ARGUS-derived data (real client) — must be scrubbed; replaced with NEXUS or generic fictional identities per doctrine Appendix G
- `node_modules/`, `.next/`, `dist/`, `.vercel/`
- Any folder named `ARCHIVED`

## 📝 RULE 3 — REPORT FORMAT (every Phase E.x)

Save reports to:
`D:\000. REPOS\SECTOR-BRAVO-OPERATIONS\INSPIRON-SUITE\DOCS\STRATEGY\EXECUTION-REPORTS\PHASE-E[N]-REPORT-[YYYY-MM-DD].md`

Required sections:
- Phase executed
- Files modified (full paths)
- What was NOT done (scope respected)
- Known issues (never hide)
- Doctrine checklist results (the 12 baseline checks)
- If failed: exact cause (file, line, error, root cause), what completed, what rolled back
- Ready for: [next phase name]

## 🚦 EXECUTION ORDER

Phases run **strictly sequentially**. No phase begins until prior phase report is saved.

**Recommended Sonnet trigger sequence:**
1. `SONNET CODE PHASE E.0` → kernel + backlog move
2. `SONNET CODE PHASE E.1` → Midnight Executive
3. `SONNET CODE PHASE E.2` → Atlas Statement
4. `SONNET CODE PHASE E.3` → Jade Clinical
5. `SONNET CODE PHASE E.4` → Riyadh RTL
6. `SONNET CODE PHASE E.5` → v1.0 legacy handling
7. `SONNET CODE PHASE E.6` → release docs
8. `OPUS DRAFT FORUM` → Phase E.7

After Commander visual-checks each theme on live Manager.io, Opus runs `OPUS CHECK` per phase report and approves or routes back.

---

## 🛡️ IP PROTECTION DOCTRINE (R1–R7)
- No proprietary logic in browser-side files.
- All high-fidelity analysis processed via INSPIRON NEXUS secure endpoint.
- Zero-logic client-side components; all data flow through /lib/manager-client.ts.
