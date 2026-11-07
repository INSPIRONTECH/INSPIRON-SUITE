# BD Compliance — Bangladesh VAT & NBR Localization Suite (`FY 2026–27`)

Regional compliance extension and statutory document theme for the Bangladesh National Board of Revenue (NBR) environment (`VAT & SD Act 2012`, `October 2026 Amendment Ordinance`, `VDS Rules 2025/2026`, and `Income Tax Act 2023`).

- **Live Extension Endpoint:** [https://tax.inspiron.tech](https://tax.inspiron.tech) *(or [https://suite.inspiron.tech/bd-compliance](https://suite.inspiron.tech/bd-compliance))*
- **Official Alfabase Listing:** [https://extensions.alfabase.com/extensions/OOeV8KF0](https://extensions.alfabase.com/extensions/OOeV8KF0)

---

## Live Modules

| Module | Description | Data Access | Status |
|---|---|---|---|
| **1. NBR Tax Calendar & Calculators** | Monthly 15th VAT countdown (`Oct 2026 Ordinance`), Section 85/127 penalty & `1%/mo` interest calculator, VDS/TDS withholding simulator (`SRO 182-Ain/2025` & `SRO 140-Ain/2026`), and Section 154 quarterly Advance Tax planner | Read-Only (`GET`) | ✅ Live |
| **2. Mushak-9.1 Return Worksheet (`/api4`)** | Multi-page `/api4` retrieval mapping Manager.io sales & purchase invoices, credit/debit notes, receipts, and payments into Mushak-9.1 Parts 3, 4, 5, 6 & 7 (`Notes 1–34`) with slide-over Note Inspector drawer | Read-Only (`GET /api4/*-batch`) | ✅ Live |
| **3. Explicit-Consent BD Tax Code Installer** | Previews 12 deterministic Bangladesh VAT/VDS/TDS tax codes mapped to Mushak-9.1 reporting categories; strictly gated behind an explicit user confirmation checkbox before any `POST /api4/tax-code` request | Explicit Consent (`POST /api4/tax-code`) | ✅ Live |
| **4. Mushak-6.3 Statutory Challan Theme** | 11-column bilingual Bengali/English Tax Invoice (`কর চালানপত্র`) theme built on `/api4/view-v1` (Rule 40(1)(c)) | Stateless `/api4/view-v1` | ✅ Live |
| **5. 10-Point NBR Statutory Audit** | Dynamic validation of 13-digit e-BINs, Section 46(1)(গ) 6-tax-period ITC window, Section 46(1)(ক) `>= Tk 1L` banking rule, Section 46(1)(ঠ) truncated ITC block, Note 24/29 VDS reconciliation, and Rule 42 Mushak-6.10 (`> Tk 2L`) invoices | Read-Only (`GET`) | ✅ Live |

---

## 📍 Where to Place in Manager.io (3-Method Setup Guide)

### Method 1 — As a Full Workspace Extension (Recommended for Monthly Mushak-9.1 Return & Tax Code Setup)
1. Open Manager.io → **Settings** → **Extensions** → **New Extension**.
2. **Name:** `Bangladesh VAT & NBR Toolkit (Mushak-9.1 & 6.3)`
3. **Endpoint URL:** `https://tax.inspiron.tech` *(or install via [Alfabase `OOeV8KF0`](https://extensions.alfabase.com/extensions/OOeV8KF0))*
4. Click **Create**.

### Method 2 — As a Contextual Custom Button (`Settings → Custom Buttons`)
Go to **Settings** → **Custom Buttons** → **New Custom Button** and use any of the following placements:

| Where the Button Appears | Button Label | Exact `Placement` Value | Source | URL to Paste |
|---|---|---|---|---|
| **Top of Summary Screen** | `🇧🇩 BD VAT & Mushak-9.1` | `/summary-view` | `Url` | `https://tax.inspiron.tech` |
| **Inside Every Sales Invoice** | `🔍 Check Mushak-6.3 & VDS` | `/sales-invoice-view` | `Url` | `https://tax.inspiron.tech` |
| **Inside Every Purchase Invoice** | `🔍 Check Sec 46 ITC & VDS` | `/purchase-invoice-view` | `Url` | `https://tax.inspiron.tech` |
| **Inside Receipts / Payments** | `🔍 Check VDS & TDS` | `/receipt-view` or `/payment-view` | `Url` | `https://tax.inspiron.tech` |

### Method 3 — Companion Mushak-6.3 Statutory Custom Theme (`Settings → Custom Themes`)
1. Open Manager.io → **Settings** → **Custom Themes** → **New Custom Theme**.
2. **Name:** `Mushak-6.3 Statutory VAT Challan (11-Column Bilingual)`
3. Paste the Raw Theme HTML from:
   [`https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/06-MUSHAK-63-TAX-INVOICE/06-MUSHAK-63-TAX-INVOICE.html`](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/06-MUSHAK-63-TAX-INVOICE/06-MUSHAK-63-TAX-INVOICE.html)
4. When creating or editing a Sales Invoice, tick **Custom Theme** and select `Mushak-6.3 Statutory VAT Challan`.

---

*Architected by MD ABU HASAN · INSPIRON TECH (ERP Architect | Listed Manager.io Advisor)*
