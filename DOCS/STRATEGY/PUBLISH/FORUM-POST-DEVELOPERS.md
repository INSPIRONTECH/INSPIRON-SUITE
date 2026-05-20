# FORUM POST — Developers Category
# Thread: Building Custom Invoice Themes — Architecture Notes
# Category: developers
# Date: 2026-04-10
# Action: ACTION 5

---

## THREAD TITLE:
**Building Custom Invoice Themes with Intelligent Layout — Architecture Notes**

---

## BODY (paste into Discourse):

---

For anyone building custom themes or extensions, sharing a few patterns I've found useful after building a suite of institutional invoice themes for Manager.io.

---

### 1. Zone-Based Layout Architecture

Instead of styling individual elements, I organise the invoice into fixed layout zones:

```
ZONE 1: Top Band      — business identity, logo, brand lockup
ZONE 2: Accent Stripe — visual separator (gradient or solid)
ZONE 3: Info Layout    — meta strip (date/ref/due) + party cells (Bill To / From)
ZONE 4: Body           — table, totals, amount-in-words, custom fields
ZONE 5: Signature      — 3-box layout (Signatory / Acknowledgment / Stamp)
ZONE 6: Footer Band    — persistent branding strip
ZONE 7: Credit Strip   — developer attribution
```

This keeps the CSS modular — you can swap colour schemes by changing zone-level variables without touching the HTML structure.

---

### 2. Print-Safe Patterns

A few things I've learned about `@media print` inside Manager.io iframes:

- **`thead { display: table-row-group !important; }`** — prevents Chrome from repeating oversized headers on multi-page invoices
- **`backdrop-filter: none !important`** — Chromium's print engine crashes on glassmorphism. Force it to plain backgrounds in print mode.
- **`position: static !important`** on `.it2-body` and relative wrappers — fixes a Chromium bug where relative-positioned elements inside tables vanish on print
- **Fixed footers:** Use `position: fixed; bottom: 0;` for credit/branding strips so they lock to the physical A4 page bottom, not the HTML flow
- **`page-break-inside: avoid`** on table rows — prevents line items from splitting across pages

---

### 3. The iframe Context Bridge

For themes that need to process Manager data before rendering:

```javascript
// Request context from Manager.io parent frame
window.addEventListener("load", () => {
  window.parent.postMessage({ type: "context-request" }, "*");
});

// Receive and process the context response
window.addEventListener("message", (ev) => {
  if (ev.source !== window.parent || ev.data.type !== "context-response") return;
  const data = ev.data.body;
  
  // data.business    — company name, address, logo, custom fields
  // data.recipient   — client name, address, identifier
  // data.fields      — invoice date, due date, reference number
  // data.table       — columns, rows, totals
  // data.custom_fields — any custom fields on the document
  // data.footers     — footer content
  // data.emphasis    — status (PAID, OVERDUE, etc.)
  
  // ... render your layout
});
```

**Important:** The `postMessage` must be inside a `window.load` listener, not `DOMContentLoaded`. The iframe bridge isn't ready until the full load event.

---

### 4. Resize Communication

After rendering, tell the parent frame your actual size:

```javascript
function sendResize() {
  window.parent.postMessage({
    type: "resize",
    width: document.documentElement.scrollWidth + 1,
    height: document.documentElement.scrollHeight + 1
  }, "*");
}
```

Call this after every DOM update — especially after images load (`img.addEventListener("load", sendResize)`).

---

### 5. Business Logo Injection

Manager.io provides the business logo via `data.business.logo`. To replace a default SVG placeholder:

```javascript
const logoDiv = document.getElementById("business-logo");
if (biz.logo) {
  const img = document.createElement("img");
  img.addEventListener("load", sendResize);
  img.src = biz.logo;
  img.style = "max-height:80px;max-width:200px;display:block;object-fit:contain";
  logoDiv.innerHTML = "";
  logoDiv.appendChild(img);
}
```

This safely clears any default SVG and replaces it with the actual business logo.

---

Happy to discuss any of these patterns further. These are the basics I use across all my themes — the actual styling is separate from the engineering.

**MD ABU HASAN**
Official Manager.io Advisor & Developer · Dhaka, Bangladesh
hello@inspiron.tech

---

## WHY THIS POST WORKS:
- Shares genuine technical knowledge without giving away proprietary engine
- Establishes you as the technical authority on theme development
- Zone architecture is YOUR naming convention — others will adopt it
- Code snippets are the generic Manager.io bridge (public knowledge) — not your detection engines
- No client-specific code, UUIDs, or business logic exposed
- Other developers (Ealfardan, ibnrawaha, Salman) will find this useful for their own extensions
- Positions you as someone who TEACHES, not just builds
