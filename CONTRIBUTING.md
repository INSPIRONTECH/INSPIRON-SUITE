# Contributing to INSPIRON Suite

## 🛡️ IP Protection Protocol (R1–R7)

1. **Zero Logic Boundary**: Public code only READS and DISPLAYS. No detection or classification logic.
2. **No Cross-Repo References**: Never link to private SECTOR-ALPHA paths.
3. **Behavior-Only Docs**: Document what is shown, never how decisions are made.
4. **Sanitized History**: Scrub all internal feature names before pushing public.
5. **Standalone Modules**: No shared `utils.js`. Every file is self-contained.
6. **GET-Only postMessage**: Only `api-request` GET calls permitted. No write operations.
7. **CC BY 4.0 Credit**: License protects your brand credit, not your logic.

---

All contributions are reviewed by the INSPIRON TECH architecture team before merge.
Contact: hello@inspiron.tech

---

## Promotion Pipeline

INSPIRON-SUITE receives content from `CyberHasan/INSPIRON-ERP-OPS` (private workbench) via a promote-gate. The following rules govern what can enter this repo:

### What can be promoted here
- Themes that passed the 5-check promote-gate (verified/ or public-ready/ stage)
- Generic utility scripts with CC-BY-4.0 license headers
- Cross-links to standalone INSPIRON products (README only — not source code)

### What can NEVER enter this repo

| Category | Examples |
|---|---|
| Client-specific content | Client names, UUIDs, contract references |
| Proprietary themes | Leather-Source, production client themes |
| Product source code | Client Toolkit, VAT Extension internals |
| Private strategy | ecosystem-2.0/, service agreements |
| Sensitive data | Bank account numbers, financial records |

### Promote-gate checks (all 5 must pass)
1. No overlap with Manager.io vendor source
2. Theme/script has `LICENSE: CC-BY-4.0` header
3. No client names or UUIDs found
4. No BAUS account numbers (333-4686, 580-5271, 580-5489)
5. No `PROPRIETARY` marker
