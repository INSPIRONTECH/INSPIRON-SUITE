# INSPIRON Suite — Manager.io Extensions Catalog

**Author:** MD ABU HASAN · INSPIRON TECH (*ERP Architect | Listed Manager.io Advisor*)  
**Manager.io Forum:** [@Abu_Hasan](https://forum.manager.io/u/abu_hasan/summary)  
**Interactive Gallery:** [https://suite.inspiron.tech](https://suite.inspiron.tech)  

> Open community extensions and workflow tools for [Manager.io](https://www.manager.io). Engineered using sandboxed iframe security, zero-external-CDN architecture, and official `postMessage` / `/api4/` bridge protocols.

---

## Active Extensions

### 1. INSPIRON Executive Dashboard & Ledger Auditor
- **Status:** ✅ **Approved & Live on Alfabase**
- **Alfabase Listing:** [https://extensions.alfabase.com/extensions/HEw6dQld](https://extensions.alfabase.com/extensions/HEw6dQld)
- **Canonical Endpoint:** `https://suite.inspiron.tech/dashboard` (alias: `/executive-dashboard`)
- **Data Access:** **100% Read-Only (`GET /api4/*` only)** — never modifies or writes to your Chart of Accounts or ledger data.
- **Capabilities:**
  - **Auto-Detection:** Detects business name, base currency, and fiscal date range via live Manager.io `/api4/` bridge.
  - **Executive 6-Card Focus Engine:** Realized Revenue, Net Margin, Operating Margin, Cash Velocity, Working Capital, Suspense Leakage.
  - **Project Realization Register:** Profitability breakdown by Tender, Project, and Division with dynamic search.
  - **880px Slide-Over Voucher Inspector Drawer:** Deep inspection of project-tagged payments, receipts, and invoices without leaving the dashboard.
  - **12-Point Automated Forensic COA & Ledger Diagnostics:** Instant read-only scan for Suspense accounts, negative cash, unlinked payments, and untagged costs.
  - **Institutional Demo Switcher:** 4 built-in commercial profiles (*Apex Global Infrastructure USD*, *Nordic Precision Engineering EUR*, *Al-Riyadh Trading SAR*, *BAUS Govt Contractor BDT*).

#### How to Install in Manager.io:
1. Open Manager.io → **Settings** → **Extensions** (or **Custom Buttons**)
2. Click **New Extension**
3. Enter Endpoint URL: `https://suite.inspiron.tech/dashboard`
4. Click **Create** — Done!

---

### 2. Bangladesh VAT & NBR Toolkit (Mushak-9.1, 6.3, VDS & Tax Codes)
- **Status:** ✅ **Approved & Live on Alfabase**
- **Alfabase Listing:** [https://extensions.alfabase.com/extensions/OOeV8KF0](https://extensions.alfabase.com/extensions/OOeV8KF0)
- **Canonical Endpoints:** `https://suite.inspiron.tech/bd-compliance` and [`https://tax.inspiron.tech`](https://tax.inspiron.tech)
- **Target Audience:** Bangladeshi SMEs, commercial importers, manufacturing groups, and government contractors.
- **Capabilities:**
  - **NBR Tax Calendar & Calculators (FY 2026–27):** Live countdown to the 15th VAT return deadline, Section 127 `1%/month` interest calculator, VDS `15%-to-7.5%` solver, and Income Tax Act 2023 slab simulator.
  - **Mushak-9.1 Monthly VAT Return Worksheet (`/api4`):** Maps sales and purchase invoices into official Mushak-9.1 Parts 3, 4, 5, 6, and 7 with a slide-over Note Inspector drawer.
  - **Explicit-Consent 1-Click BD Tax Code & Mushak-6.3 Installer:** Previews all 9 standard Bangladesh VAT/VDS tax codes and requires explicit user checkbox confirmation before creating missing tax codes via `POST /api4/tax-code`.
  - **10-Point NBR Statutory Compliance Audit:** Automated read-only check for missing 13-digit BINs, Mushak-6.6 VDS certificates, and 4-tax-period input rebate windows.

---

### 3. Invoice Pre-Send & Regulatory Checklist
- **Status:** ✅ **Production Live**
- **Canonical Endpoint:** [https://suite.inspiron.tech/checklist](https://suite.inspiron.tech/checklist) (alias: `/invoice-checklist`)
- **Capabilities:**
  - Real-time pre-send sanity check before sending invoices to clients
  - Tax calculation verification, bank detail validation, and missing attachment audit
