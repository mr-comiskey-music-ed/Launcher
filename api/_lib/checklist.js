// Shared checklist logic used by BOTH api/fetch-checklist.js (Vercel) and server.ts (local dev),
// so the two can never drift apart again.

const DOC_HOSTS = new Set(['docs.google.com', 'drive.google.com']);
const FILE_ID_RE = /^[A-Za-z0-9_-]{1,200}$/;
const PUBLISHED_ID_RE = /^e\/[A-Za-z0-9_-]{1,300}$/;

// Drive shortcut ID -> the real Google Doc it points to
export const SHORTCUT_TARGETS = {
  '1mWPHycBDUv8cpk7NkUXC-ypx-J2Qa5AN': '1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8'
};

// Docs that are "published to the web" (used when the Drive API can't read the doc directly)
const PUBLISH_URL_MAP = {
  'mixing-help-hiphop-1': 'https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub',
  '1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7': 'https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub',
  '1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8': 'https://docs.google.com/document/d/e/2PACX-1vSn1zukoDKI95AMWqtZT8FqZMtHL0obm3ay1yEztwAeekKZiEJQR8TYkKkP1piyUaax_hTYSTiV8YdC/pub',
  '1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s': 'https://docs.google.com/document/d/e/2PACX-1vQGF7X2VO4t7dbwpR2Fr1lbfl1MAXIgUdI10Mn_cHNuHL9QeQk78EC8adGthyA13M752lnEOM53-IaR/pub'
};

const FETCH_TIMEOUT_MS = 8000;
const MAX_ITEMS = 100;

/**
 * Turns whatever the browser sent (a bare doc ID, a "e/2PACX…" published ID, or a
 * docs.google.com / drive.google.com link) into a validated ID. Returns null for anything else.
 * The server NEVER fetches a URL taken from the request — it only builds Google URLs from this ID.
 */
export function parseDocRef(raw) {
  if (typeof raw !== 'string') return null;
  const s = raw.trim();
  if (!s || s.length > 500) return null;

  let id = null;
  if (/^https?:\/\//i.test(s)) {
    let u;
    try { u = new URL(s); } catch (e) { return null; }
    if (!DOC_HOSTS.has(u.hostname.toLowerCase())) return null;
    const m = u.pathname.match(/\/d\/(e\/[A-Za-z0-9_-]+|[A-Za-z0-9_-]+)/);
    id = m ? m[1] : u.searchParams.get('id');
  } else {
    id = s.replace(/[\/%\s]+$/, '');
    const m = id.match(/\/d\/(e\/[A-Za-z0-9_-]+|[A-Za-z0-9_-]+)/);
    if (m) id = m[1];
  }

  if (!id || !(FILE_ID_RE.test(id) || PUBLISHED_ID_RE.test(id))) return null;
  return SHORTCUT_TARGETS[id] || id;
}

const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
  ndash: '–', mdash: '—', hellip: '…'
};

export function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, e) => {
    if (e[0] === '#') {
      const code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      try { return String.fromCodePoint(code); } catch (err) { return match; }
    }
    const named = NAMED_ENTITIES[e.toLowerCase()];
    return named === undefined ? match : named;
  });
}

/** Published-page HTML -> plain text. Block tags become line breaks, headings become "# Heading". */
export function htmlToText(html) {
  const text = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<h([1-6])\b[^>]*>/gi, '\n# ')
    .replace(/<\/(p|li|div|tr|h[1-6]|ul|ol|table)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '');
  return decodeEntities(text);
}

const MARKER_RE = /^[\s\-•*]*(?:\[[\s ]*[xX]?[\s ]*\]|[☐☑☒])\s*(.*)$/;
const FOOTER_RE = /^(published using google docs|learn more|report abuse|updated automatically every \d+ minutes)$/i;

/**
 * Finds the "Checklist" section and returns its items.
 * - If the section has real checkbox markers (☐ ☑ [ ] [x]) only those lines are used.
 * - Otherwise every line in the section counts (bullets are stripped), until the next heading.
 */
export function parseChecklist(textContent) {
  const lines = String(textContent || '')
    .split(/\r?\n/)
    .map(l => l.replace(/ /g, ' ').trim())
    .filter(Boolean);

  const marked = [];
  const loose = [];
  let inSection = false;

  const add = (list, text) => {
    const clean = text.trim();
    const lower = clean.toLowerCase();
    if (clean.length > 1 && clean.length < 300 && !lower.includes('file > share') && !lower.includes('checklist') && !list.includes(clean)) {
      list.push(clean);
    }
  };

  for (const line of lines) {
    const lower = line.toLowerCase();
    const isHeading = line.startsWith('#');

    if (lower.includes('checklist') && (isHeading || lower === 'checklist' || lower.endsWith(':'))) {
      inSection = true;
      continue;
    }
    if (inSection && isHeading) {
      inSection = false;
      continue;
    }
    if (!inSection || FOOTER_RE.test(line)) continue;

    const m = line.match(MARKER_RE);
    if (m) add(marked, m[1] || '');
    else add(loose, line.replace(/^[\s\-•*]+/, ''));
  }

  return (marked.length ? marked : loose).slice(0, MAX_ITEMS);
}

async function timedFetch(fetchImpl, url, options = {}) {
  return fetchImpl(url, { ...options, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
}

/** Loads a doc's text (Drive API first, published page as backup) and returns { items, note? }. */
export async function fetchChecklist(rawId, { apiKey, fetchImpl = fetch } = {}) {
  const id = parseDocRef(rawId);
  if (!id) {
    return { items: [], note: 'That does not look like a Google Doc link or ID. Paste the link from the doc’s Share button.' };
  }

  let targetId = id;
  let textContent = '';

  if (apiKey && !id.startsWith('e/')) {
    try {
      const metaRes = await timedFetch(fetchImpl, `https://www.googleapis.com/drive/v3/files/${id}?fields=id,name,mimeType,shortcutDetails&key=${apiKey}`);
      if (metaRes.ok) {
        const meta = await metaRes.json();
        if (meta.mimeType === 'application/vnd.google-apps.shortcut' && meta.shortcutDetails && meta.shortcutDetails.targetId) {
          targetId = meta.shortcutDetails.targetId;
        }
      }
    } catch (e) {
      console.error('Error resolving Drive shortcut:', e.message);
    }

    try {
      const exportRes = await timedFetch(fetchImpl, `https://www.googleapis.com/drive/v3/files/${targetId}/export?mimeType=text/plain&key=${apiKey}`);
      if (exportRes.ok) textContent = await exportRes.text();
    } catch (e) {
      console.error('Error exporting doc text:', e.message);
    }
  }

  if (!textContent || textContent.length < 20 || textContent.includes('<!DOCTYPE html>') || textContent.includes('<html')) {
    const pubUrl = PUBLISH_URL_MAP[id] || PUBLISH_URL_MAP[targetId] ||
      (id.startsWith('e/') ? `https://docs.google.com/document/d/${id}/pub` : `https://docs.google.com/document/d/${targetId}/pub`);
    try {
      const pubRes = await timedFetch(fetchImpl, pubUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (pubRes.ok) textContent = htmlToText(await pubRes.text());
    } catch (e) {
      console.error('Error fetching published doc:', e.message);
    }
  }

  const items = parseChecklist(textContent);
  if (items.length === 0) {
    return {
      items: [],
      note: 'Document loaded, but no checklist items were found under a "Checklist" heading.'
    };
  }
  return { items };
}
