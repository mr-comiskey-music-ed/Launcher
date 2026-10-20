import test from 'node:test';
import assert from 'node:assert/strict';
import { filesToDocs, getDocLists, resetDocCache, FALLBACK_SE, FALLBACK_AMP } from '../api/_lib/docs.js';

const DOC = 'application/vnd.google-apps.document';
const SHORT = 'application/vnd.google-apps.shortcut';

test('filesToDocs keeps Google Docs and doc shortcuts, with docs.google.com links', () => {
  const docs = filesToDocs([
    { id: 'D2', name: 'Project #10', mimeType: DOC },
    { id: 'D1', name: 'Project #2', mimeType: DOC },
    { id: 'S1', name: 'Project #1 (shortcut)', mimeType: SHORT, shortcutDetails: { targetId: 'T1', targetMimeType: DOC } },
    { id: 'S2', name: 'A slides shortcut', mimeType: SHORT, shortcutDetails: { targetId: 'T2', targetMimeType: 'application/vnd.google-apps.presentation' } },
    { id: 'P1', name: 'worksheet.pdf', mimeType: 'application/pdf' },
    { id: 'F1', name: 'A folder', mimeType: 'application/vnd.google-apps.folder' }
  ]);
  assert.deepEqual(docs.map(d => d.title), ['Project #1 (shortcut)', 'Project #2', 'Project #10']);
  assert.deepEqual(docs.map(d => d.id), ['T1', 'D1', 'D2']);
  for (const d of docs) assert.match(d.webViewLink, /^https:\/\/docs\.google\.com\/document\/d\/[^/]+\/view$/);
});

test('filesToDocs always honours the hard-coded shortcut mapping and dedupes', () => {
  const docs = filesToDocs([
    { id: '1mWPHycBDUv8cpk7NkUXC-ypx-J2Qa5AN', name: 'Project #8 (shortcut)', mimeType: 'application/octet-stream' },
    { id: '1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8', name: 'Project #8', mimeType: DOC }
  ]);
  assert.equal(docs.length, 1);
  assert.equal(docs[0].id, '1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8');
});

function driveFetch(calls) {
  return async (url) => {
    calls.push(String(url));
    return { ok: true, json: async () => ({ files: [{ id: 'X', name: 'Doc ' + calls.length, mimeType: DOC }] }) };
  };
}

test('getDocLists makes ONE Drive call per folder and caches the result', async () => {
  resetDocCache();
  const calls = [];
  const a = await getDocLists('key', { fetchImpl: driveFetch(calls), now: 1000 });
  assert.equal(calls.length, 2);
  assert.equal(a.cacheable, true);
  assert.ok(calls.every(u => u.includes('shortcutDetails') && !u.includes('/files/X')));

  const b = await getDocLists('key', { fetchImpl: driveFetch(calls), now: 2000 });
  assert.equal(calls.length, 2, 'second call served from cache');
  assert.deepEqual(b.se, a.se);

  await getDocLists('key', { fetchImpl: driveFetch(calls), now: 1000 + 6 * 60 * 1000 });
  assert.equal(calls.length, 4, 'cache expires after 5 minutes');
});

test('getDocLists falls back (and does not cache) when Drive fails or has no key', async () => {
  resetDocCache();
  const failing = async () => ({ ok: false, status: 403, json: async () => ({}) });
  const out = await getDocLists('key', { fetchImpl: failing, now: 1 });
  assert.deepEqual(out.se, FALLBACK_SE);
  assert.deepEqual(out.amp, FALLBACK_AMP);
  assert.equal(out.cacheable, false);

  const calls = [];
  const next = await getDocLists('key', { fetchImpl: driveFetch(calls), now: 2 });
  assert.equal(calls.length, 2, 'the failure was not cached');
  assert.equal(next.cacheable, true);

  resetDocCache();
  const noKey = await getDocLists('', {});
  assert.deepEqual(noKey.se, FALLBACK_SE);
});

test('fallback lists only contain valid-looking docs.google.com links', () => {
  for (const d of [...FALLBACK_SE, ...FALLBACK_AMP]) {
    assert.match(d.id, /^[A-Za-z0-9_-]{20,}$/);
    assert.equal(d.webViewLink, `https://docs.google.com/document/d/${d.id}/view`);
  }
});
