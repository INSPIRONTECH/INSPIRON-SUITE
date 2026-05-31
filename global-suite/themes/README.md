# Theme Suite — Global

Premium HTML/CSS invoice and document themes for Manager.io, rebuilt for the modern `/api4/view-v1` architecture.

## Themes Directory

| Filename | Theme Name | Description | Status |
|---|---|---|---|
| [`01_UNIVERSAL-BRONZE.html`](01_UNIVERSAL-BRONZE.html) | **Universal Bronze** | Modern grayscale layout with high-impact Bronze accents. Fully balances and adapts to empty recipient profiles. | ✅ Released |
| [`02_CORPORATE-BLUE-COLUMN.html`](02_CORPORATE-BLUE-COLUMN.html) | **Corporate Blue Column** | Structured 3-column top bar layout with horizontal metadata strip. Premium corporate shell. | ✅ Released |
| [`MIDNIGHT-EXECUTIVE-v1.1.html`](MIDNIGHT-EXECUTIVE-v1.1.html) | **Midnight Executive** | Premium dark mode datapad-style executive layout with whitelisted HTML sanitization and zero remote dependencies. | ✅ Released |
| [`RIYADH-RTL-v1.1.html`](RIYADH-RTL-v1.1.html) | **Riyadh RTL** | Bilingual Arabic/English theme with RTL-first layout, automated duplicate label collapse, and ZATCA Compliant structures. | ✅ Released |
| [`GRAPHITE-INDUSTRIAL-v1.html`](GRAPHITE-INDUSTRIAL-v1.html) | **Graphite Industrial** | Architectural monochrome theme with heavy structural borders. Bauhaus inspired. | 🟡 Staged |
| [`JADE-CLINICAL-v1.html`](JADE-CLINICAL-v1.html) | **Jade Clinical** | Healthcare-inspired professional theme with clinical teal/mint accents and ECG pulse accenting. | 🟡 Staged |
| [`MIDNIGHT-CORPORATE-v1.html`](MIDNIGHT-CORPORATE-v1.html) | **Midnight Corporate** | Dark/navy high-contrast corporate identity with clean, modern layout blocks. | 🟡 Staged |

## Technical Features

Both **Universal Bronze** and **Corporate Blue Column** are engineered to be 100% compliant with current Manager.io standards:
* **Native API Fetch:** Utilizes `fetch('/api4/view-v1' + window.location.search)` directly (no legacy iframe messaging hooks).
* **Perfect A4 Boundaries:** Enforces standard print dimensions (`210mm` x `297mm`) with active `@media print` style overrides (auto-hiding margins, shadows, and borders).
* **Robust Sub-Row Processing:** Features a recursive nested table row renderer to handle hierarchical subtotals, multi-level deals, and item rows perfectly (keeping vertical borders aligned for middle subtotals).
* **Responsive Dark Mode:** Full adaptation to system theme settings (`prefers-color-scheme: dark`).

---

*Maintained by INSPIRON TECH · hello@inspiron.tech*
