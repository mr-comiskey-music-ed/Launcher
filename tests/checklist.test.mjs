import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDocRef, parseChecklist, htmlToText, decodeEntities, fetchChecklist } from '../api/_lib/checklist.js';

const ID = '1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8';

test('parseDocRef accepts bare IDs, published IDs and Google links', () => {
  assert.equal(parseDocRef('1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb'), '1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb');
  assert.equal(parseDocRef('e/2PACX-1vSn1zukoDKI95'), 'e/2PACX-1vSn1zukoDKI95');
  assert.equal(parseDocRef('https://docs.google.com/document/d/abc123_-XYZ/edit?usp=sharing'), 'abc123_-XYZ');
  assert.equal(parseDocRef('https://docs.google.com/document/d/e/2PACX-1vABC/pub'), 'e/2PACX-1vABC');
  assert.equal(parseDocRef('https://drive.google.com/file/d/abc123/view'), 'abc123');
  assert.equal(parseDocRef('https://drive.google.com/open?id=abc123'), 'abc123');
});

test('parseDocRef maps the known Drive shortcut to its real doc', () => {
  assert.equal(parseDocRef('1mWPHycBDUv8cpk7NkUXC-ypx-J2Qa5AN'), ID);
  assert.equal(parseDocRef('https://docs.google.com/document/d/1mWPHycBDUv8cpk7NkUXC-ypx-J2Qa5AN/view'), ID);
});

test('parseDocRef rejects other sites, odd schemes and junk', () => {
  for (const bad of [
    'https://evil.example/collect?x=docs.google.com/document/d/e/abc',
    'https://docs.google.com.evil.example/document/d/abc/edit',
    'javascript:alert(1)',
    'file:///etc/passwd',
    '<img src=x onerror=alert(1)>',
    'abc def',
    '',
    '   ',
    null,
    undefined,
    ['a'],
    'x'.repeat(600)
  ]) {
    assert.equal(parseDocRef(bad), null, `should reject ${String(bad).slice(0, 40)}`);
  }
});

test('decodeEntities handles named, decimal and hex entities in one pass', () => {
  assert.equal(decodeEntities('a &amp; b &lt;c&gt; &quot;d&quot; &#39;e&#39; &#x2610; &amp;lt;'), 'a & b <c> "d" \'e\' ☐ &lt;');
  assert.equal(decodeEntities('&unknown; &#99999999999;'), '&unknown; &#99999999999;');
});

test('htmlToText keeps headings as "# " lines and joins inline spans', () => {
  const html = '<h2><span>Checklist</span></h2><ul><li><span>☐ </span><span>Record &amp; edit</span></li></ul><script>x()</script>';
  const lines = htmlToText(html).split('\n').map(l => l.trim()).filter(Boolean);
  assert.deepEqual(lines, ['# Checklist', '☐ Record & edit']);
});

test('parseChecklist uses real checkbox markers and ignores prose after them', () => {
  const text = ['Intro paragraph that is long enough.', 'Checklist', '☐ Name your tracks', '[ ] Add a kick', '[x] Bounce it', 'Hint: save often.'].join('\n');
  assert.deepEqual(parseChecklist(text), ['Name your tracks', 'Add a kick', 'Bounce it']);
});

test('parseChecklist falls back to plain lines/bullets when there are no markers', () => {
  const text = ['Checklist', '• Record the drums', '- Add bass', 'Mix it'].join('\n');
  assert.deepEqual(parseChecklist(text), ['Record the drums', 'Add bass', 'Mix it']);
});

test('parseChecklist stops at the next heading and skips the Google footer', () => {
  const text = ['# Checklist', 'Record drums', 'Add bass', '# Next steps', 'Not an item', '# Checklist (part 2)', 'Export', 'Published using Google Docs', 'Report abuse'].join('\n');
  assert.deepEqual(parseChecklist(text), ['Record drums', 'Add bass', 'Export']);
});

test('parseChecklist caps length, dedupes and drops file-sharing hints', () => {
  const text = ['Checklist:', 'Same', 'Same', 'File > Share > Publish', 'x'.repeat(400), ...Array.from({ length: 150 }, (_, i) => `Item ${i}`)].join('\n');
  const items = parseChecklist(text);
  assert.equal(items[0], 'Same');
  assert.equal(items.filter(i => i === 'Same').length, 1);
  assert.ok(!items.some(i => i.includes('Share')));
  assert.ok(!items.some(i => i.length >= 300));
  assert.equal(items.length, 100);
});

test('fetchChecklist only ever contacts Google, never a URL from the request', async () => {
  const urls = [];
  const fetchImpl = async (url) => { urls.push(String(url)); return { ok: false, text: async () => '', json: async () => ({}) }; };
  const evil = await fetchChecklist('https://evil.example/collect?x=docs.google.com/document/d/e/abc', { apiKey: 'k', fetchImpl });
  assert.deepEqual(urls, []);
  assert.equal(evil.items.length, 0);
  assert.match(evil.note, /Google Doc/);

  await fetchChecklist('abc123', { apiKey: 'k', fetchImpl });
  assert.ok(urls.length > 0);
  for (const u of urls) assert.match(u, /^https:\/\/(www\.googleapis\.com|docs\.google\.com)\//);
});

test('fetchChecklist reads the Drive text export when available', async () => {
  const fetchImpl = async (url) => {
    url = String(url);
    if (url.includes('/export')) return { ok: true, text: async () => 'Title\nChecklist\n☐ One\n☐ Two\n' };
    return { ok: true, json: async () => ({ mimeType: 'application/vnd.google-apps.document' }) };
  };
  assert.deepEqual(await fetchChecklist('abc123', { apiKey: 'k', fetchImpl }), { items: ['One', 'Two'] });
});

test('fetchChecklist follows a shortcut to its target doc', async () => {
  const exported = [];
  const fetchImpl = async (url) => {
    url = String(url);
    if (url.includes('/export')) { exported.push(url); return { ok: true, text: async () => 'Checklist\n☐ Real item' }; }
    return { ok: true, json: async () => ({ mimeType: 'application/vnd.google-apps.shortcut', shortcutDetails: { targetId: 'TARGETDOC' } }) };
  };
  const out = await fetchChecklist('SHORTCUTID', { apiKey: 'k', fetchImpl });
  assert.deepEqual(out.items, ['Real item']);
  assert.match(exported[0], /files\/TARGETDOC\/export/);
});

test('fetchChecklist falls back to the published page and parses it like the Drive export', async () => {
  const html = '<html><body><h1>Project</h1><p>Intro text here.</p><h2>Checklist</h2><ul><li><span>Record the drums &amp; bass</span></li><li><span>Name tracks: &quot;Kick&quot;</span></li></ul><h2>Next steps</h2><p>Other stuff</p><p>Published using Google Docs</p></body></html>';
  const fetchImpl = async () => ({ ok: true, text: async () => html });
  const out = await fetchChecklist('e/2PACX-test', { fetchImpl });
  assert.deepEqual(out.items, ['Record the drums & bass', 'Name tracks: "Kick"']);
});

test('fetchChecklist reports a friendly note when nothing is found', async () => {
  const fetchImpl = async () => ({ ok: true, text: async () => '<html><body><p>No list here at all, sorry.</p></body></html>' });
  const out = await fetchChecklist('e/2PACX-test', { fetchImpl });
  assert.deepEqual(out.items, []);
  assert.match(out.note, /Checklist/);
});
