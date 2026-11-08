<div align="center">

# INSPIRON Suite
### Open Community Extensions & Document Themes for Manager.io

[![Live Showroom](https://img.shields.io/badge/Showroom-suite.inspiron.tech-00D2FF?style=for-the-badge&logo=vercel&logoColor=white)](https://suite.inspiron.tech)
[![Manager.io Advisor](https://img.shields.io/badge/Advisor-Listed%20Manager.io%20Advisor-FFD700?style=for-the-badge)](https://www.manager.io/advisors)
[![Alfabase Gallery](https://img.shields.io/badge/Alfabase-Verified%20%26%20Live-10B981?style=for-the-badge)](https://extensions.alfabase.com)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg?style=for-the-badge)](LICENSING.md)

<p align="center">
  <b>Architected by MD ABU HASAN · INSPIRON TECH</b><br>
  <i>ERP Architect | Listed Manager.io Advisor · Founder & Chief Architect</i>
</p>

[🖥️ Interactive Gallery](https://suite.inspiron.tech) · [🎨 Theme Catalog](THEMES.md) · [🧩 Extension Catalog](EXTENSIONS.md) · [🛡️ Security Doctrine](SECURITY.md)

---

</div>

## Overview

**INSPIRON Suite** is an open community collection of document themes, read-only executive dashboards, and statutory localization extensions for [Manager.io](https://www.manager.io).

All themes and extensions are built with strict adherence to Manager.io’s sandboxed iframe security architecture, zero-external-CDN tracking, and the official `/api4/` and `/api4/view-v1` schemas.

---

## 🚀 Live Extensions & Deployments

| Surface | Canonical Endpoint | Alfabase Gallery Listing | Description |
|---|---|---|---|
| **Extension #1 (Global)** | [`https://suite.inspiron.tech/dashboard`](https://suite.inspiron.tech/dashboard) | [✅ **Live on Alfabase (`HEw6dQld`)**](https://extensions.alfabase.com/extensions/HEw6dQld) | 100% Read-Only Executive Dashboard, 6-KPI Engine & 12-Point Ledger Auditor |
| **Extension #2 (BD VAT/NBR)** | [`https://tax.inspiron.tech`](https://tax.inspiron.tech) *(or `/bd-compliance`)* | [✅ **Live on Alfabase (`OOeV8KF0`)**](https://extensions.alfabase.com/extensions/OOeV8KF0) | Bangladesh VAT, Mushak-9.1, Mushak-6.3, VDS & NBR Compliance Toolkit |
| **Extension #3 (Utility)** | [`https://suite.inspiron.tech/checklist`](https://suite.inspiron.tech/checklist) | Direct Endpoint | Real-time invoice pre-send and compliance validator |
| **Interactive Gallery** | [`https://suite.inspiron.tech`](https://suite.inspiron.tech) | — | Open documentation & live preview gallery |

---

## 🎨 Community Edition Themes (`/api4/view-v1`)

Install with one click via [themes.alfabase.com](https://themes.alfabase.com) or copy raw URLs into Manager.io **Settings → Custom Themes**:

| # | Theme | Status | Alfabase 1-Click | Raw GitHub URL |
|---|---|---|---|---|
| 01 | **Atlas Statement V1.0 — Light** | ✅ **Live (111+ installs)** | [themes.alfabase.com/themes/LRgUDkiP](https://themes.alfabase.com/themes/LRgUDkiP) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/05-ATLAS-STATEMENT/05-ATLAS-STATEMENT-V1.0-LIGHT.html) |
| 02 | **Atlas Statement V1.0 — Dark** | ✅ **Live (34+ installs)** | [themes.alfabase.com/themes/nCbfGayH](https://themes.alfabase.com/themes/nCbfGayH) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/05-ATLAS-STATEMENT/05-ATLAS-STATEMENT-V1.0-DARK.html) |
| 03 | **Midnight Executive V1.1.1 — Dark** | ✅ **Live** | [themes.alfabase.com/themes/q9Tj8UzY](https://themes.alfabase.com/themes/q9Tj8UzY) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/03-MIDNIGHT-EXECUTIVE/03-MIDNIGHT-EXECUTIVE.html) |
| 04 | **Riyadh RTL V1.1.0 (Arabic/English ZATCA)** | ✅ **Live** | [themes.alfabase.com/themes/qzMmReST](https://themes.alfabase.com/themes/qzMmReST) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/04-RIYADH-RTL/04-RIYADH-RTL.html) |
| 05 | **Universal Bronze V1.1.0** | ✅ **Live** | [themes.alfabase.com/themes/dwbDb3mv](https://themes.alfabase.com/themes/dwbDb3mv) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/01-UNIVERSAL-BRONZE/01-UNIVERSAL-BRONZE.html) |
| 06 | **Corporate Blue Column V1.1.0** | ✅ **Live** | [themes.alfabase.com/themes/HIsD356Y](https://themes.alfabase.com/themes/HIsD356Y) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/02-CORPORATE-BLUE-COLUMN/02-CORPORATE-BLUE-COLUMN.html) |
| 07 | **Mushak-6.3 Statutory Tax Invoice V1.1.0 (BD)** | ✅ **Alfabase + Raw URL** | [themes.alfabase.com/themes/aqa9zT1P](https://themes.alfabase.com/themes/aqa9zT1P) | [Raw URL](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/06-MUSHAK-63-TAX-INVOICE/06-MUSHAK-63-TAX-INVOICE.html) |

👉 *See full theme descriptions and installation instructions in [THEMES.md](THEMES.md).*

---

## 🧩 Extension #1: INSPIRON Executive Dashboard & Ledger Auditor

- **Alfabase Listing:** [https://extensions.alfabase.com/extensions/HEw6dQld](https://extensions.alfabase.com/extensions/HEw6dQld)
- **Endpoint URL:** `https://suite.inspiron.tech/dashboard`
- **Data Access:** 100% Read-Only (`GET /api4/*` only — zero writes or mutations to accounting data).
- **Core Capabilities:**
  - **6-KPI Executive Focus Strip:** Revenue, Net Margin, Operating Margin, Cash Flow, Working Capital, Suspense Leaks.
  - **Project & Division Profitability Register:** Realized margins across active tenders and divisions.
  - **880px Slide-Over Voucher Inspector Drawer:** Deep voucher telemetry without leaving the dashboard.
  - **12-Point Automated Forensic COA & Ledger Diagnostics:** Read-only diagnostic scan for Suspense accounts, negative cash, unlinked payments, and untagged costs.
  - **Multi-Currency Support:** Auto-detects base currency or runs demo profiles in USD, EUR, SAR, and BDT.

---

## 🇧🇩 Extension #2: Bangladesh VAT & NBR Toolkit (Mushak-9.1, 6.3, VDS & Tax Codes)

- **Alfabase Listing:** [https://extensions.alfabase.com/extensions/OOeV8KF0](https://extensions.alfabase.com/extensions/OOeV8KF0)
- **Endpoint URL:** `https://suite.inspiron.tech/bd-compliance` *(or [`https://tax.inspiron.tech`](https://tax.inspiron.tech))*
- **Core Capabilities:**
  - **NBR Tax Calendar & Calculators (FY 2026–27):** Live countdown to the 15th VAT deadline, Section 127 `1%/month` simple interest calculator, VDS `15%-to-7.5%` gross-to-net solver, and IT Act 2023 slab simulator.
  - **Mushak-9.1 Return Worksheet (`/api4`):** Maps sales and purchase invoices into official Mushak-9.1 Parts 3, 4, 5, 6, and 7 with interactive Note Inspector drawer.
  - **Explicit-Consent 1-Click BD Tax Code Installer:** Previews all 9 standard Bangladesh VAT/VDS tax codes and requires explicit user checkbox confirmation before creating missing codes via `POST /api4/tax-code`.
  - **10-Point NBR Statutory Compliance Audit:** Automated read-only check for missing 13-digit BINs, Mushak-6.6 VDS certificates, and input rebate deadlines.

👉 *See full extension documentation in [EXTENSIONS.md](EXTENSIONS.md).*

---

## 🛡️ Security & Integrity

- **Sandboxed Execution:** Zero interference with Manager.io core databases or unauthenticated servers.
- **Zero-External CDNs:** All fonts and styles are self-hosted or embedded to eliminate DNS tracking.
- **Audit-Trail Preserving:** All operations honor Manager.io's official API and security model.

👉 *Read our full security policy in [SECURITY.md](SECURITY.md).*

---

## 👤 Author & Community Feedback

- **Author:** MD ABU HASAN · INSPIRON TECH (*ERP Architect | Listed Manager.io Advisor*)
- **Manager.io Forum:** [@Abu_Hasan](https://forum.manager.io/u/abu_hasan/summary)

---

<div align="center">
  <sub>© 2026 INSPIRON TECH. Open Community Themes & Extensions licensed under CC BY 4.0.</sub>
</div>
