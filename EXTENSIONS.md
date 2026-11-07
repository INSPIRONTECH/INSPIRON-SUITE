# INSPIRON Suite — Manager.io Extensions Catalog & Placement Guide

**Author:** MD ABU HASAN · INSPIRON TECH (*ERP Architect | Listed Manager.io Advisor*)  
**Manager.io Forum:** [@Abu_Hasan](https://forum.manager.io/u/abu_hasan/summary)  
**Interactive Gallery:** [https://suite.inspiron.tech](https://suite.inspiron.tech)  

> Open community extensions and workflow tools for [Manager.io](https://www.manager.io). Engineered using sandboxed iframe security, zero-external-CDN architecture, multi-page `/api4` batch retrieval, and official `postMessage` bridge protocols.

---

## 📍 Where to Place Extensions, Custom Buttons & Themes in Manager.io

Every extension in this repository supports both **Full Workspace Extension Mode** (`Settings → Extensions`) and **Contextual Custom Button Mode** (`Settings → Custom Buttons`).

| Extension / Tool | Method 1: Full Workspace Extension (`Settings → Extensions`) | Method 2: Contextual Custom Button (`Settings → Custom Buttons`) | Exact `Placement` Values for Custom Buttons |
|---|---|---|---|
| **1. Executive Dashboard & Ledger Auditor** ([`HEw6dQld`](https://extensions.alfabase.com/extensions/HEw6dQld)) | Endpoint: `https://suite.inspiron.tech/dashboard` | Source: `Url` · Url: `https://suite.inspiron.tech/dashboard` | `/summary-view` (Summary Page)<br>`/project-view` (Project Screen)<br>`/sales-invoice-view` (Sales Invoice)<br>`/purchase-invoice-view` (Purchase Invoice) |
| **2. Bangladesh VAT & NBR Toolkit** ([`OOeV8KF0`](https://extensions.alfabase.com/extensions/OOeV8KF0)) | Endpoint: `https://tax.inspiron.tech` *(or `https://suite.inspiron.tech/bd-compliance`)* | Source: `Url` · Url: `https://tax.inspiron.tech` | `/summary-view` (Summary Page)<br>`/sales-invoice-view` (Mushak-6.3 & VDS Check)<br>`/purchase-invoice-view` (Sec 46 ITC & VDS Check)<br>`/receipt-view` & `/payment-view` |
| **3. Invoice Pre-Send Checklist** | Endpoint: `https://suite.inspiron.tech/checklist` | Source: `Url` · Url: `https://suite.inspiron.tech/checklist` | `/sales-invoice-view` (Sales Invoice)<br>`/purchase-invoice-view` (Purchase Invoice) |
| **4. Mushak-6.3 Statutory Invoice Theme** (11-Column VAT Challan) | `Settings → Custom Themes → New Custom Theme` | Paste Raw URL: [`06-MUSHAK-63-TAX-INVOICE.html`](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/06-MUSHAK-63-TAX-INVOICE/06-MUSHAK-63-TAX-INVOICE.html) | Select under **Custom Theme** on any Sales Invoice or Credit Note |

---

## Active Extensions

### 1. Executive Dashboard & Ledger Auditor
- **Status:** ✅ **Approved & Live on Alfabase**
- **Alfabase Listing:** [https://extensions.alfabase.com/extensions/HEw6dQld](https://extensions.alfabase.com/extensions/HEw6dQld)
- **Forum Topic:** [Topic #70159](https://forum.manager.io/t/executive-dashboard-ledger-auditor-free-extension-6-community-themes/70159)
- **Canonical Endpoint:** `https://suite.inspiron.tech/dashboard` (alias: `/executive-dashboard`)
- **Data Access:** **100% Read-Only (`GET /api4/*` only)** — never modifies or writes to your Chart of Accounts or ledger data.
- **Capabilities:**
  - **Multi-Page `/api4` Pagination & Error Surface:** Retrieves all pages of invoices, purchases, credit/debit notes, journal entries, expense claims, inventory write-offs, receipts, payments, and P&L/BS accounts via `skip`/`pageSize` loop, surfacing any failed request explicitly.
  - **Executive 6-Card Focus Engine:** Recognised Billed Revenue, Net Collected Cash, Recognised Direct Cost (excluding CapEx/Inventory purchases), Retention Security, and Gross Profit.
  - **Project Realization Register:** Profitability breakdown by Tender, Project, and Division including Journal Entries, Expense Claims, and Inventory Write-Offs.
  - **880px Slide-Over Voucher Inspector Drawer:** Deep inspection of project-tagged vouchers without leaving the dashboard.
  - **12-Point Automated Forensic COA & Ledger Diagnostics:** Live validation of the actual Suspense Account (`balance-sheet-suspense-account`), negative cash accounts, unlinked Credit/Debit Notes, and excluded Inter-Account Transfers.

#### How to Install in Manager.io:
1. **As a Full Extension:** Go to `Settings → Extensions → New Extension`, enter `https://suite.inspiron.tech/dashboard`, and click **Create**.
2. **As a Summary Page Button:** Go to `Settings → Custom Buttons → New Custom Button`, set **Label** to `📊 Executive Dashboard & Audit`, **Placement** to `/summary-view`, **Source** to `Url`, **Url** to `https://suite.inspiron.tech/dashboard`, and click **Create**.

---

### 2. Bangladesh VAT & NBR Toolkit (Mushak-9.1, 6.3, VDS & Tax Codes)
- **Status:** ✅ **Approved & Live on Alfabase**
- **Alfabase Listing:** [https://extensions.alfabase.com/extensions/OOeV8KF0](https://extensions.alfabase.com/extensions/OOeV8KF0)
- **Canonical Endpoints:** [`https://tax.inspiron.tech`](https://tax.inspiron.tech) and `https://suite.inspiron.tech/bd-compliance`
- **Target Audience:** Bangladeshi SMEs, commercial importers, manufacturing groups, and government contractors.
- **Capabilities:**
  - **NBR Tax Calendar & Calculators (FY 2026–27):** Live countdown to the 15th VAT return deadline, Section 127 `1%/month` interest calculator, VDS `SRO 182-Ain/2025` & `SRO 140-Ain/2026` withholding simulator, and Section 154 quarterly Advance Tax planner.
  - **Live Multi-Page Mushak-9.1 Monthly VAT Return Worksheet (`/api4`):** Retrieves all pages of Manager.io sales/purchase invoices, credit/debit notes, receipts, payments, and tax codes to populate Mushak-9.1 Parts 3, 4, 5, 6, and 7 (`Notes 1–34`) with a slide-over Note Inspector drawer.
  - **Explicit-Consent 1-Click BD Tax Code & Mushak-6.3 Installer:** Previews all 12 standard Bangladesh VAT/VDS/TDS tax codes and requires ticking an explicit confirmation checkbox before enabling any `POST /api4/tax-code` button.
  - **Dynamic 10-Point NBR Statutory Compliance Audit:** Live validation of 13-digit e-BINs, Section 46(1)(গ) 6-period input rebate windows, Section 46(1)(ক) `>= Tk 1,00,000` banking settlement, Section 46(1)(ঠ) truncated-rate ITC blocking, Note 24/29 VDS reconciliation, and Rule 42 Mushak-6.10 (`> Tk 2,00,000`) statements.

#### How to Install in Manager.io:
1. **As a Full Extension:** Go to `Settings → Extensions → New Extension`, enter `https://tax.inspiron.tech`, and click **Create**.
2. **As a Summary or Invoice Custom Button:** Go to `Settings → Custom Buttons → New Custom Button`, set **Label** to `🇧🇩 BD VAT & Mushak-9.1`, **Placement** to `/summary-view` (or `/sales-invoice-view` / `/purchase-invoice-view`), **Source** to `Url`, **Url** to `https://tax.inspiron.tech`, and click **Create**.
3. **Companion Mushak-6.3 Theme:** Go to `Settings → Custom Themes → New Custom Theme`, paste [`https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/06-MUSHAK-63-TAX-INVOICE/06-MUSHAK-63-TAX-INVOICE.html`](https://raw.githubusercontent.com/INSPIRONTECH/INSPIRON-SUITE/main/global-suite/themes/COMMUNITY-EDITION/06-MUSHAK-63-TAX-INVOICE/06-MUSHAK-63-TAX-INVOICE.html), and select it on your Sales Invoices.

---

### 3. Invoice Pre-Send & Regulatory Checklist
- **Status:** ✅ **Production Live**
- **Canonical Endpoint:** [https://suite.inspiron.tech/checklist](https://suite.inspiron.tech/checklist) (alias: `/invoice-checklist`)
- **Placement:** `Settings → Custom Buttons` → **Placement:** `/sales-invoice-view` or `/purchase-invoice-view`
- **Capabilities:**
  - Real-time pre-send sanity check before sending invoices to clients
  - Recipient billing address, reference number, Mushak-6.3 BIN, total balance, and issue date validation
