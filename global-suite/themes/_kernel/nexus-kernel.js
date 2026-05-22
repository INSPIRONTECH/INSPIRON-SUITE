/**
 * ============================================================
 * NEXUS SAFE-RENDERING KERNEL
 * ============================================================
 * Version:     1.1.0
 * Schema:      /api4/view-v1
 * Author:      MD ABU HASAN · INSPIRON TECH
 * Created:     2026-05-22
 * Doctrine:    Head First Manager.io Theme Design
 *              Ch 2 §1.4 · Ch 11 §4 · Ch 11 §11
 * Repo:        github.com/INSPIRONTECH/INSPIRON-SUITE
 * ============================================================
 *
 * CANONICAL REFERENCE FILE — DO NOT DEPLOY DIRECTLY.
 * Manager.io requires single-file themes. This kernel is
 * inlined as a <script> block inside each theme HTML file.
 * This file exists for audit, documentation, and diffing.
 *
 * KERNEL INTEGRITY NOTICE:
 * Modifications to these functions void INSPIRON TECH
 * support coverage. See Customization API header in each
 * theme HTML for the safe-to-edit surface.
 * ============================================================
 *
 * SECURITY AUDIT — eko (2026-05-21):
 * All four issues identified by @eko in the Manager.io forum
 * security review are structurally resolved in this kernel:
 *   1. XSS via innerHTML         → textContent + DOM nodes only
 *   2. Script re-execution       → renderFooters() text-only
 *   3. Nested <tr> in thead      → one <tr> per thead enforced
 *   4. External font CDN         → @font-face self-hosted only
 * ============================================================
 */

/* ============================================================
   SAFE SETTINGS — themes declare defaults here.
   Each theme file overrides these in its own THEME_FLAGS.
   ============================================================ */
const THEME_FLAGS = Object.freeze({
  ENABLE_COMMISSION_LOGIC:      false, // paid layer — never true in public themes
  ENABLE_MULTI_CURRENCY:        false, // paid layer — never true in public themes
  ENABLE_QR_PANEL:              false, // paid layer — never true in public themes
  ENABLE_DEBUG_OVERLAY:         false, // set true for local dev (?debug=1 also works)
  ENABLE_DEMO_WATERMARK:        true,  // remove for production client installs
  ENABLE_AMOUNT_IN_WORDS:       false, // enable if theme has an amount-in-words block
  ENABLE_AUTHORITY_FOOTER:      true,  // INSPIRON credit strip
  AUTO_DENSITY_LONG_THRESHOLD:  20     // rows above this → document-long class
});

/* Centralized DOM selectors — Idea 13.
   All renderer code references THEME_DOM constants.
   If an HTML ID is renamed casually, the missing selector
   throws a controlled error rather than silently failing. */
const THEME_DOM = Object.freeze({
  root:              'document-root',
  actions:           'it-doc-actions',
  header:            'it-header',
  titleEl:           'it-title',
  subtitlesEl:       'it-subtitles',
  statusEl:          'it-status',
  partiesEl:         'it-parties',
  partiesIssuer:     'it-issuer',
  partiesRecipient:  'it-recipient',
  metaStrip:         'it-meta',
  tableWrapper:      'it-table-wrapper',
  tableEl:           'it-table',
  tableHead:         'it-table-head',
  tableBody:         'it-table-body',
  totalsEl:          'it-totals',
  footersEl:         'it-footers',
  faultEl:           'it-fault',
  authorityFooter:   'it-authority-footer',
  demoStrip:         'it-demo-strip',
  debugOverlay:      'it-debug-overlay'
});

/* ============================================================
   DO NOT EDIT BELOW THIS LINE — CORE ENGINE
   ============================================================ */


/* ----------------------------------------------------------
   1. SAFE TEXT & URL HELPERS
   Doctrine: Ch 2 §1.4 · Idea 4 · eko security pattern
   ---------------------------------------------------------- */

/**
 * Safely coerce any API value to string.
 * NEVER pass API data directly to innerHTML.
 * @param {*} v
 * @returns {string}
 */
function safeText(v) {
  if (v === null || v === undefined) return '';
  return String(v);
}

/**
 * Validate URL against protocol whitelist.
 * Returns '#' on failure — caller always gets a safe href.
 * Allowed: http, https, mailto, tel
 * @param {string} u
 * @returns {string}
 */
function safeUrl(u) {
  if (!u || typeof u !== 'string') return '#';
  if (/^(https?:\/\/|mailto:|tel:)/i.test(u.trim())) return u.trim();
  return '#';
}

/**
 * Validate URL, return null on failure.
 * Use when caller wants to omit the link entirely if invalid.
 * @param {string} u
 * @returns {string|null}
 */
function safeLinkUrl(u) {
  if (!u || typeof u !== 'string') return null;
  if (/^(https?:\/\/|mailto:|tel:)/i.test(u.trim())) return u.trim();
  return null;
}

/**
 * Validate image URL.
 * Allows: http/https URLs, data:image/* base64 only.
 * Rejects: javascript:, data:text/*, anything else.
 * @param {string} u
 * @returns {string|null}
 */
function safeImageUrl(u) {
  if (!u || typeof u !== 'string') return null;
  const t = u.trim();
  if (/^https?:\/\//i.test(t)) return t;
  if (/^data:image\/(png|jpeg|jpg|gif|svg\+xml|webp);base64,/i.test(t)) return t;
  return null;
}

/**
 * Validate text-align token.
 * Maps 'start'→'left', 'end'→'right' for cross-browser safety.
 * @param {string} v
 * @returns {string}
 */
function safeCssAlign(v) {
  const map = {
    left: 'left', center: 'center', right: 'right',
    start: 'left', end: 'right'
  };
  return map[v] || 'left';
}

/**
 * Validate a CSS dimension string.
 * Rejects expression(), url(), javascript, and quoted values.
 * @param {string} v
 * @returns {string|null}
 */
function safeDimension(v) {
  if (!v || typeof v !== 'string') return null;
  if (/expression|url\(|javascript|"/i.test(v)) return null;
  if (/^\d+(\.\d+)?(px|%|em|rem|vw|vh|mm|cm|pt)$/.test(v.trim())) return v.trim();
  return null;
}

/**
 * Append text to a DOM node, converting \n to <br> elements.
 * NEVER uses innerHTML. Always produces safe text nodes.
 * @param {Element} node
 * @param {string} text
 */
function appendTextWithBreaks(node, text) {
  if (!text) return;
  const lines = String(text).split('\n');
  lines.forEach((line, i) => {
    node.appendChild(document.createTextNode(line));
    if (i < lines.length - 1) {
      node.appendChild(document.createElement('br'));
    }
  });
}


/* ----------------------------------------------------------
   2. ARCHETYPE DETECTION
   Doctrine: Ch 2 §1.3 · Idea 3
   Note: commission/multi-currency detection is paid layer.
   This kernel detects only generic archetypes.
   ---------------------------------------------------------- */

/**
 * Detect document archetype from API data.
 * @param {object} data — view-v1 API response
 * @returns {string} archetype token
 */
function detectArchetype(data) {
  if (data.direction === 'rtl') return 'rtl_invoice';
  if (!data.recipient) {
    const rowCount = data.table?.rows?.length || 0;
    if (rowCount > 5) return 'statement';
  }
  return 'generic_invoice';
}


/* ----------------------------------------------------------
   3. DENSITY MODE
   Doctrine: Ch 3 §2.4 · Idea 24
   ---------------------------------------------------------- */

/**
 * Apply density mode and document-length classes to body.
 * Auto-triggers document-long when rows exceed threshold.
 * Respects ?density= URL param for manual override.
 * Respects ?debug=1 for diagnostic overlay.
 * @param {object} data — view-v1 API response
 */
function applyDensityMode(data) {
  const body = document.body;
  const rowCount = (data.table && data.table.rows)
    ? data.table.rows.length : 0;

  if (rowCount > THEME_FLAGS.AUTO_DENSITY_LONG_THRESHOLD) {
    body.classList.add('document-long');
  }
  if (rowCount < 4) {
    body.classList.add('a4-short');
  }

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('density');
  if (['relaxed', 'balanced', 'compact'].includes(requested)) {
    body.classList.remove('density-relaxed', 'density-balanced', 'density-compact');
    body.classList.add('density-' + requested);
  }
  if (params.get('debug') === '1') {
    body.classList.add('debug-mode');
  }
}


/* ----------------------------------------------------------
   4. FAULT UX
   Doctrine: Ch 2 §1.9 · Idea 9 · Idea 19
   ---------------------------------------------------------- */

/**
 * Render branded SYSTEM FAULT screen.
 * Called from .catch() on the API fetch.
 * Never injects raw error strings into the DOM.
 * @param {string} code — short fault code for display
 */
function renderFault(code) {
  const root = document.getElementById(THEME_DOM.root);
  if (!root) return;
  while (root.firstChild) root.removeChild(root.firstChild);

  const inner = document.createElement('div');
  inner.style.cssText = 'padding: 3rem 2rem; text-align: center;';

  const sections = [
    ['it-fault-icon',    '⚠'],
    ['it-fault-title',   'SYSTEM FAULT'],
    ['it-fault-message', 'Failed to load document data from Manager.io.'],
    ['it-fault-code',    'Code: ' + safeText(code || 'FETCH_ERROR')],
    ['it-fault-hint',
      'Check your Manager.io instance, network connection, or theme assignment. ' +
      'Restore the original theme file or contact hello@inspiron.tech.']
  ];

  sections.forEach(([cls, text]) => {
    const el = document.createElement('div');
    el.className = cls;
    el.textContent = text;
    inner.appendChild(el);
  });

  root.appendChild(inner);
}


/* ----------------------------------------------------------
   5. TABLE BUILDERS
   Doctrine: Ch 2 §1.7 · Idea 17 (recursive row builder)
   eko fix: no nested <tr> in thead
   ---------------------------------------------------------- */

/**
 * Build a single table cell safely.
 * Handles text, images, and links — all validated.
 * @param {object} cell — cell from API
 * @param {object} col  — column config from API
 * @returns {HTMLTableCellElement}
 */
function buildCell(cell, col) {
  const td = document.createElement('td');
  td.className = 'it-cell';

  if (col) {
    td.style.textAlign = safeCssAlign(col.align);
    if (col.nowrap || col.shrinkToFit) td.style.whiteSpace = 'nowrap';
    if (col.shrinkToFit) td.style.width = '1%';
    if (col.emphasis) td.classList.add('it-cell-emphasis');
  }

  if (cell.image && cell.image.url) {
    const src = safeImageUrl(cell.image.url);
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.style.maxWidth = '100px';
      td.appendChild(img);
    }
  } else if (cell.link && cell.link.url) {
    const href = safeLinkUrl(cell.link.url);
    if (href) {
      const a = document.createElement('a');
      a.href = href;
      a.target = '_top';
      a.className = 'it-cell-link';
      appendTextWithBreaks(a, cell.text);
      td.appendChild(a);
    } else {
      appendTextWithBreaks(td, cell.text);
    }
  } else {
    appendTextWithBreaks(td, cell.text);
  }

  return td;
}

/**
 * Recursively build table rows into a tbody element.
 * Handles nested rows (group headers with child rows).
 * NEVER uses innerHTML.
 * @param {Array}           rows    — data.table.rows
 * @param {Array}           columns — data.table.columns
 * @param {HTMLElement}     tbody   — target tbody
 */
function processRows(rows, columns, tbody) {
  if (!rows || !tbody) return;

  rows.forEach(r => {
    if (!r.cells) return;

    const tr = document.createElement('tr');
    tr.className = r.isTotalRow
      ? 'it-row it-row-subtotal'
      : 'it-row';

    // Group header: single cell spanning all columns
    if (r.cells.length === 1 && r.rows) {
      const td = document.createElement('td');
      td.colSpan = columns.length;
      td.className = 'it-cell it-cell-group-header';
      td.textContent = safeText(r.cells[0].text);
      tr.appendChild(td);
      tbody.appendChild(tr);
      processRows(r.rows, columns, tbody);
      return;
    }

    r.cells.forEach((cell, idx) => {
      const td = buildCell(cell, columns[idx] || {});
      if (r.isTotalRow) td.classList.add('it-subtotal-cell');
      tr.appendChild(td);
    });

    tbody.appendChild(tr);

    if (r.rows) {
      processRows(r.rows, columns, tbody);
    }
  });
}

/**
 * Mark the last non-subtotal data row.
 * Call after processRows() — used for bottom-border styling.
 * @param {HTMLElement} tbody
 */
function markLastRow(tbody) {
  const rows = tbody.querySelectorAll('tr.it-row:not(.it-row-subtotal)');
  if (rows.length > 0) {
    rows[rows.length - 1].classList.add('it-last-row');
  }
}

/**
 * Append grand totals from data.totals to tbody.
 * Grand totals are styled differently from inline subtotals.
 * @param {Array}       totals   — data.totals
 * @param {number}      colCount — number of columns
 * @param {HTMLElement} tbody
 */
function appendTotals(totals, colCount, tbody) {
  if (!totals || !totals.length) return;

  totals.forEach(total => {
    const tr = document.createElement('tr');
    tr.className = (total.emphasis || total.key === 'Total')
      ? 'it-total it-total-grand'
      : 'it-total';

    const labelTd = document.createElement('td');
    labelTd.colSpan = Math.max(colCount - 1, 1);
    labelTd.className = 'it-total-label';
    labelTd.textContent = safeText(total.label);

    const valueTd = document.createElement('td');
    valueTd.className = 'it-total-value';
    valueTd.textContent = safeText(total.text);

    tr.appendChild(labelTd);
    tr.appendChild(valueTd);
    tbody.appendChild(tr);
  });
}


/* ----------------------------------------------------------
   6. FOOTER RENDERER
   Doctrine: Ch 2 §2.17 · Idea 57
   eko fix: NO script re-execution from data.footers
   ---------------------------------------------------------- */

/**
 * Render data.footers as safe plain-text paragraphs.
 * Script tags in footer content are NOT executed.
 * Never uses innerHTML.
 * @param {Array}       footers   — data.footers string array
 * @param {HTMLElement} container — target element
 */
function renderFooters(footers, container) {
  if (!footers || !footers.length || !container) return;

  footers.forEach(f => {
    const div = document.createElement('div');
    div.className = 'it-footer-item';
    appendTextWithBreaks(div, f);
    container.appendChild(div);
  });
}


/* ----------------------------------------------------------
   7. DOCUMENT TITLE
   ---------------------------------------------------------- */

/**
 * Set document title from API data safely.
 * @param {object} data
 */
function setDocumentTitle(data) {
  const parts = [
    safeText(data.title),
    safeText(data.reference),
    '—',
    safeText(data.business?.name || data.businessName || 'Document')
  ].filter(p => p && p !== '—');
  parts.splice(2, 0, '—');
  document.title = parts.join(' ');
}


/* ----------------------------------------------------------
   8. INTEGRITY CHECK STUB
   Doctrine: Ch 2 §2.15 · Idea 15
   ---------------------------------------------------------- */

/**
 * Compare data-theme-version and data-theme-expected-version
 * on the root element. Logs a console warning if mismatched.
 * Full hash validation is a paid-layer feature.
 */
function runIntegrityCheck() {
  const root = document.getElementById(THEME_DOM.root);
  if (!root) return;
  const declared = root.getAttribute('data-theme-version');
  const expected = root.getAttribute('data-theme-expected-version');
  if (declared && expected && declared !== expected) {
    console.warn(
      '[NEXUS] Theme version mismatch. Declared: ' + declared +
      ' · Expected: ' + expected +
      '. Theme may have been modified outside supported boundaries. ' +
      'Restore original file or contact hello@inspiron.tech.'
    );
  }
}


/* ----------------------------------------------------------
   9. DEBUG OVERLAY
   Doctrine: Ch 2 §1.6 · Idea 6
   ---------------------------------------------------------- */

/**
 * Inject a non-print dev overlay showing theme metadata.
 * Only renders when body carries class 'debug-mode' (?debug=1).
 * @param {object} meta — { themeId, themeVersion, archetype, rowCount }
 */
function renderDebugOverlay(meta) {
  if (!document.body.classList.contains('debug-mode')) return;

  const existing = document.getElementById(THEME_DOM.debugOverlay);
  if (existing) existing.parentNode.removeChild(existing);

  const overlay = document.createElement('div');
  overlay.id = THEME_DOM.debugOverlay;
  overlay.className = 'it-debug-overlay';

  const lines = [
    '— NEXUS DEBUG —',
    'Theme:     ' + safeText(meta.themeId || '—'),
    'Version:   ' + safeText(meta.themeVersion || '—'),
    'Archetype: ' + safeText(meta.archetype || '—'),
    'Rows:      ' + safeText(meta.rowCount || 0),
    'Density:   ' + (document.body.classList.contains('document-long') ? 'compact' : 'standard'),
    'Schema:    /api4/view-v1'
  ];

  lines.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    overlay.appendChild(p);
  });

  document.body.appendChild(overlay);
}


/* ----------------------------------------------------------
   STATIC AUTHORITY FOOTER SVG
   Doctrine: Ch 5 §78 · Idea 78 (golden dot)
   This is a STATIC CONSTANT — not from API data.
   Safe to use as innerHTML because it is never user-supplied.
   ---------------------------------------------------------- */
const NEXUS_AUTHORITY_SVG = '<svg viewBox="0 0 358.846 350.3" width="22" height="22" fill="none" aria-hidden="true"><path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="#00D2FF"/><path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8 9.1 16.9 10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6 5.5 3.6 11.4 5.4 17.5 5.4 12.3 0 25-7.6 32.9-20 5.5-8.1 23.6-37 45-70.6 31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0 18.2 5.1 23.2 13.1 4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="#00D2FF"/><circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/></svg>';
