# INSPIRON Suite — Security Architecture & Compliance

**Authority:** INSPIRON TECH · ERP Architect | Listed Manager.io Advisor  
**Chief Architect:** [MD ABU HASAN](https://forum.manager.io/u/abu_hasan/summary)  
**Verification Standard:** Manager.io Sandboxed Extension Security Laws & CSP Policy

---

## The 4 Manager.io Security Laws

All themes and extensions distributed through INSPIRON Suite strictly adhere to the security doctrine defined by Manager.io lead architect `@eko`:

### Law 1: Strict Sandboxed iframe Isolation
Extensions run exclusively inside sandboxed `<iframe>` boundaries. Previews and interactive views operate within isolated origins with explicit permissions, ensuring zero interference with Manager.io core ledger processes.

### Law 2: Zero Unauthenticated Network Exfiltration
No transaction, customer, supplier, or general ledger data is ever transmitted to unauthorized external servers or third-party analytics. Extensions communicate solely with Manager.io via the official `window.parent.postMessage` bridge.

### Law 3: Zero Unvetted Third-Party CDN Calls
All stylesheets, fonts, and scripts are either self-hosted directly within the bundle or loaded from verified canonical mirrors. Critical fonts (`NeoSansPro`, `LiAdorNoirrit`) are embedded or served locally to prevent DNS leaks and external CDN tracking.

### Law 4: Schema-Compliant `/api4/` & `/api2/` Protocol
All document themes strictly implement the `/api4/view-v1` contract. Custom extensions interact with Manager.io through documented API highways (`/api2` tuple tokens, `/api4` HATEOAS, and `/api3` RFC 7396 MergePatch), preserving the native transaction audit log (`Changes` table).

---

## Content Security Policy (CSP)

INSPIRON Suite web surfaces enforce strict CSP headers configured via `vercel.json`:
- `frame-ancestors 'self' https://*.manager.io http://localhost:* http://127.0.0.1:* https://*.alfabase.com`
- `default-src 'self' data: blob:`
- `script-src 'self' 'unsafe-inline' 'unsafe-eval'`
- `style-src 'self' 'unsafe-inline'`

---

## Vulnerability Disclosure & Support

If you discover a security discrepancy or rendering vulnerability in any INSPIRON Suite theme or extension, report it directly to:

- **Security Desk:** hello@inspiron.tech
- **Subject:** `[SECURITY] INSPIRON Suite Vulnerability Report`
