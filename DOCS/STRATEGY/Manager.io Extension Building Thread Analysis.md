# Manager.io Extension Building — Thread Analysis
**Analysis Date:** 2026-05-02
**Commander:** MD ABU HASAN | INSPIRON TECH
**Topic:** Manager.io Theme Extension Architecture & Build

---

## CRITICAL INTEL — LUBOS EMAIL (2026-05-02, 1:02 AM)

> **"The new transaction themes will no longer depend on postMessage API. They will just internally call AJAX api endpoint(s). This is simpler and more future-proof."**
> — Lubos Hasko, Manager.io Founder

This is the single most important signal of the session. **Architecture is shifting.** Transaction themes are moving away from postMessage toward direct AJAX. Full impact is TBD — Lubos confirmed this is "just the beginning."

Additional Lubos confirmations:
- Anyone will be able to **publish themes** — open ecosystem coming
- Extensions will provide **easy install mechanism** for published themes
- Developer Portal access changes incoming — currently only e-invoicing developers have access

---

## DECISIONS MADE

### 1. API Architecture — Confirmed Current Method
The current (v26.5.1) extension protocol:
- Extensions run in an **IFRAME** — plain HTML/CSS/JS, no SDK
- Communication via **`window.parent.postMessage`** with `requestId` pattern
- Manager auto-scopes requests to the current business
- **Endpoint:** `POST /api4/theme` to create/save a transaction theme
- **Key fields:** `name`, `uniqueName` (slug), `template` (full HTML), `inactive`
- **Returns:** UUID string on 200 OK

### 2. Report Themes vs Transaction Themes — Fully Separated
- `Settings → Custom Themes → Reports` → uses `PUT /api4/report-theme`
- `Settings → Custom Themes → Transactions` → uses `POST /api4/theme`
- Two completely separate APIs, separate UI sections
- Lubos: consolidation planned but not yet done

### 3. Extension Registration Fields (confirmed from official guide)
| Field | Options |
|---|---|
| Source | `ExternalURL` (iframe) or `CustomHTML` (inline) |
| Endpoint | HTTPS URL of the extension |
| Placement | Path segment e.g. `sales-invoice-view`, `/` for server-level |
| Inactive | Checkbox to disable without deleting |

### 4. Report Themes Extension — Lubos's Architecture (SOURCE CODE OBTAINED)
Lubos's official Report Themes extension uses:
- **`PUT /api4/report-theme`** — install (idempotent overwrite by UUID)
- **`DELETE /api4/report-theme?Key=<uuid>&Business=<name>`** — uninstall
- **`GET /api4/report-theme-batch?Business=<name>&Skip=<n>&PageSize=50`** — list installed
- Theme files are separate HTML files with UUID embedded in filename: `{slug}-{uuid32}.html`
- UUID is **fixed per theme** — reinstalling overwrites same record, non-destructive
- The `index.html` fetches theme HTML files at install time via relative URL

### 5. Transaction Themes Extension — Built This Session
Delivered: `transaction-themes-extension.html`
- Modeled on Lubos's Report Themes UI pattern
- Uses `POST /api4/theme` with `business`, `name`, `uniqueName`, `template`, `inactive`
- Contains Universal Bronze (full HTML embedded)
- Batch install/uninstall, status badges, toast notifications
- Ready for GitHub Pages hosting

---

## PROGRESS SUMMARY

| Item | Status |
|---|---|
| Manager.io extension API architecture decoded | ✅ Complete |
| Official `/extend/openapi/post-theme` schema captured | ✅ Complete (from screenshots) |
| Lubos Report Themes source code obtained | ✅ Complete (12 themes + README) |
| Correct API endpoints confirmed (report vs transaction) | ✅ Complete |
| Transaction Themes Extension built | ✅ Delivered |
| Lubos email decoded — architecture shift incoming | ✅ Logged |

---

## OPEN ITEMS

### HIGH PRIORITY
1. **Transaction theme AJAX pivot** — Lubos confirmed transaction themes will move to direct AJAX (no postMessage). Monitor Manager.io releases closely. The extension's `POST /api4/theme` call may need to be rearchitected.

2. **DELETE endpoint for transaction themes** — Exact shape of `DELETE /api4/theme` not confirmed from official docs. Needs DevTools verification. Current extension uses `{ key: uuid }` in body — verify this works.

3. **`GET /api4/theme-batch` query param support** — Extension attempts `?business=<key>` filter. If unsupported, falls back to unfiltered batch. Needs live test.

### MEDIUM PRIORITY
4. **Developer Portal access** — Lubos mentioned access changes. Request Developer Portal access for NBR/FBR compliance injection (as raised in your email to Lubos).

5. **Transaction theme UUID strategy** — Lubos's report themes use fixed UUIDs per theme file. Transaction themes should adopt same pattern — embed UUID in filename for idempotent installs.

6. **Multi-theme expansion** — Current extension has Universal Bronze only. Additional themes (01-MISSION-CONTROL, 02-INSTITUTIONAL-WHITE, 03-NEON-EDGE, 04-BLUEPRINT-LAB, 05-SOVEREIGN-GOLD, etc.) visible in your Transactions list — need to be added.

### LOW PRIORITY
7. **GitHub Pages deployment** — Extension HTML needs to be hosted. Recommend repo: `inspiron-tech/manager-themes-extension`

8. **Theme publishing ecosystem** — Lubos said "anyone will be able to publish themes." Monitor for official publish mechanism — could be a major distribution channel for your themes.

---

## KEY TECHNICAL REFERENCE

### Transaction Theme POST Body
```json
{
  "business": "<business-key-or-null>",
  "value": {
    "name": "Theme Display Name",
    "uniqueName": "theme-slug-id",
    "template": "<full HTML string>",
    "inactive": false
  }
}
```

### postMessage Bridge Pattern (current)
```javascript
async function apiRequest(message) {
  const requestId = crypto.randomUUID();
  return new Promise((resolve, reject) => {
    function onMsg(event) {
      if (event.data?.type?.endsWith('-response') 
          && event.data?.requestId === requestId) {
        window.removeEventListener('message', onMsg);
        resolve(event.data.body);
      }
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ ...message, requestId }, '*');
  });
}
```

### Report Theme Endpoints (Lubos's extension)
```
GET  /api4/report-theme-batch?Business=<name>&Skip=<n>&PageSize=50
PUT  /api4/report-theme
DELETE /api4/report-theme?Key=<uuid>&Business=<name>
```

### Transaction Theme Endpoints (current extension)
```
GET  /api4/businesses
GET  /api4/theme-batch
POST /api4/theme
DELETE /api4/theme  (body: { key: uuid })
```

---

## FILES DELIVERED THIS SESSION

| File | Purpose |
|---|---|
| `transaction-themes-extension.html` | Complete transaction theme extension — ready to host |

---

*Thread Analysis · NEURAL-BRIDGE GLOBAL · inspiron.tech*
