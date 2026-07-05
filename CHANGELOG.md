# Changelog

All notable changes to INSPIRON-SUITE are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.2.0] — 2026-07-06

### Added — ATLAS STATEMENT v1.0

- **Atlas Statement V1.0 — DARK** (`05-ATLAS-STATEMENT-V1.0-DARK.html`): Purpose-built account statement theme. Deep navy-black canvas with electric cyan and vivid gold accents. NEXUS Core Engine on `/api4/view-v1`.
- **Atlas Statement V1.0 — LIGHT** (`05-ATLAS-STATEMENT-V1.0-LIGHT.html`): Clean slate-white print-ready variant. Identical feature set to the Dark variant.
- All Manager.io statement archetypes supported: Customer Statement (Transactions), Customer Statement (Unpaid Invoices), Supplier Statement (Transactions), Supplier Statement (Unpaid Invoices), Receipts & Payments Summary, Customer Summary.
- Portrait ↔ Landscape orientation toggle built into the theme UI (print-safe).
- Amount in Words: automatic English numeral rendering for closing balance.
- Multi-currency tested: PKR (Indian comma grouping), BDT, AED, USD.
- Zero `innerHTML` security model throughout — all dynamic values via `textContent` / DOM node creation.
- Self-hosted Neo Sans Pro font stack (5 weights, woff2+woff) — no Google CDN dependency.
- 13 preview images added to `global-suite/themes/COMMUNITY-EDITION/previews/05-ATLAS-STATEMENT/`.
- Removed generic `05-ATLAS-STATEMENT.html` base file.

## [1.1.0] — 2026-06-01

### Added — GLOBAL-THEME-SUITE v1.1.0

- **Midnight Executive v1.1.1** print layout: Premium dark-theme layout with advanced HTML/CSS Liquid rendering, whitelisted client-side DOM sanitizer for XSS protection, and native system typography stack (offline-ready).
- **Riyadh RTL v1.1** print layout: Bilingual Arabic/English theme with RTL-first rendering logic, automatic duplicate label collapse, and ZATCA Phase 2 compliance integration.
- CSS-only A4 Flexbox page-fitting anchoring: Eliminates legacy JavaScript dynamic height calculations to ensure reliable rendering across different print engines without extra overflow page-breaks.
- Updated `manifests/discovery.json` global suite registry.

## [1.0.0] — 2026-04-07

### Added — TAX-CALENDAR-BD v1.0

- Unified NBR compliance calendar: VAT, TDS, VDS, Income Tax, Advance Tax
- Business type filter (Trading, Service, Manufacturing, Individual, Limited Company, Import/Export)
- Dynamic penalty estimator per tax type
- Mushak form explainer (Mushak-6.3, Mushak-9.1, Mushak-16, Mushak-19)
- One-click Manager.io Journal Entry CSV export (UTF-8 BOM, Blob fixed)
- Claude Q&A endpoint (`/api/ask`) — Haiku model, server-side proxy
- Stat cards: Urgent Deadlines + Due This Month
- Glassmorphism card design, chip hover animations
- Comparison table: TAX-CALENDAR-BD vs Prime VAT, Troyee, eVAT
- Mobile-first responsive layout
- SEO: canonical, og:url, og:image, og:type, twitter:card, inline SVG favicon
- Deployed to `tools.inspiron.tech` via Vercel
- MIT licensed, public under `INSPIRONTECH/COMMUNITY-TOOLS`
