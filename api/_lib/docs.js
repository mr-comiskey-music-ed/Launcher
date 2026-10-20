// Shared "list the assignment docs in a Drive folder" logic, used by api/get-docs.js and server.ts.
import { SHORTCUT_TARGETS } from './checklist.js';

export const SE_FOLDER_ID = '15pkshnr9luUQY9oZfpyxSZ4wI9oH4Bge';
export const AMP_FOLDER_ID = '1EvIPUXvf5PiSenapOKapb_N8QWUDuxMp';

const DOC_MIME = 'application/vnd.google-apps.document';
const SHORTCUT_MIME = 'application/vnd.google-apps.shortcut';
const CACHE_TTL_MS = 5 * 60 * 1000;
const FETCH_TIMEOUT_MS = 8000;

const docEntry = (title, id) => ({
  title,
  id,
  webViewLink: `https://docs.google.com/document/d/${id}/view`
});

export const FALLBACK_SE = [
  docEntry('Mixing Help #1: Hip Hop', '1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7'),
  docEntry('Mixing Help #2: DnB (more intense)', '1ZcFem-9KIgbeVmCQKGca7gddHAIjVoLM'),
  docEntry('Mixing Help #2: House (less intense)', '1xrvdgsHTTJRHWkduzYdl7rAPj1oXC21g'),
  docEntry('Mixing Help #3: Rock', '1ZQPgtCrR3SnQoOVt59eKNnaJoxEK6M5V'),
  docEntry('Mixing Help #4: "Common Cents." - Mike DFG & Nate Vintage', '1h4OlLHRCNHoYPA8HHd7KOCuFtaDI4Fd3'),
  docEntry('Project #1: Loops in Soundtrap', '1S_B2FHY70GZ1WRpb0EXtVPMGe9CU9KZ7'),
  docEntry('Project #2: My Musical Life (interview audio version) & Recording Practice Check', '1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb'),
  docEntry('Project #3: Drums & Loops', '1hVgmdXWZkHEn-uBKDzW7TVnvrF_Hxzuc'),
  docEntry('Project #5: Podcast Project', '1h2Aw7CYnYL-euY8I4tYQlIw4yAdbKK0m'),
  docEntry('Project #8: Mixing Raw Stems Steps', '1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8'),
  docEntry('Project #9: Drum Programming Mini-Project', '13bhoBvhksf6bpuSqlIEZzdJNCxdK4oBY'),
  docEntry('Project #10: Class Song Docs', '1DyXK1aqcnaMBMyurdrj676e_ep0JtmRV'),
  docEntry('Project #11: Pingu Project', '1TrTE8Y1FR0NR71BpN188hKmPRJBgJjN0'),
  docEntry('Project #12: Foley/SFX Project', '1U2POTmWCCCPboAkuu2P14QBY-zm-WluZ'),
  docEntry('Project #13: Found Sound Composition', '1MnEjo4h7vkQ-94nNMhdHFMqdVEDxv7Nn'),
  docEntry('Project #14: Sampling Project', '1f2Hk8i1x72gy3cT_eEqcbuJApEpyiSK4')
];

export const FALLBACK_AMP = [
  docEntry('Autodidact #1', '1K4co7I5S-zcpXhOtjO7Y0H3JW9lqnlkpenyIFn5HgHQ'),
  docEntry('Project #1: Partner Project & Logic Review', '118H-sHLE_Ezjn_rooh52rVnDZ6Kf_f7h0Wlioj24Wx4')
];

/**
 * Turns the raw Drive file list into docs.google.com links.
 * Keeps native Google Docs and shortcuts that point at Google Docs; skips everything else
 * (folders, Slides, PDFs...). Shortcuts are resolved from the listing itself, so no
 * per-file follow-up request is needed.
 */
export function filesToDocs(files) {
  const seen = new Set();
  const docs = [];
  for (const f of files || []) {
    let id = null;
    if (SHORTCUT_TARGETS[f.id]) {
      id = SHORTCUT_TARGETS[f.id];
    } else if (f.mimeType === DOC_MIME) {
      id = f.id;
    } else if (f.mimeType === SHORTCUT_MIME && f.shortcutDetails && f.shortcutDetails.targetId) {
      const targetMime = f.shortcutDetails.targetMimeType;
      if (!targetMime || targetMime === DOC_MIME) id = f.shortcutDetails.targetId;
    }
    if (!id) continue;
    id = SHORTCUT_TARGETS[id] || id;
    if (seen.has(id)) continue;
    seen.add(id);
    docs.push(docEntry(f.name, id));
  }
  return docs.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));
}

export async function listFolderDocs(folderId, apiKey, fetchImpl = fetch) {
  const files = [];
  let pageToken = '';
  for (let page = 0; page < 5; page++) {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed=false`,
      key: apiKey,
      fields: 'nextPageToken,files(id,name,mimeType,shortcutDetails(targetId,targetMimeType))',
      pageSize: '200',
      supportsAllDrives: 'true',
      includeItemsFromAllDrives: 'true',
      orderBy: 'name'
    });
    if (pageToken) params.set('pageToken', pageToken);
    const response = await fetchImpl(`https://www.googleapis.com/drive/v3/files?${params}`, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
    });
    if (!response.ok) throw new Error(`Google Drive API error (${response.status})`);
    const data = await response.json();
    files.push(...(data.files || []));
    pageToken = data.nextPageToken || '';
    if (!pageToken) break;
  }
  return filesToDocs(files);
}

let cache = { at: 0, data: null };

/** Returns { se, amp, cacheable }. Falls back to the built-in lists if Drive is unreachable. */
export async function getDocLists(apiKey, { fetchImpl = fetch, now = Date.now() } = {}) {
  if (!apiKey) return { se: FALLBACK_SE, amp: FALLBACK_AMP, cacheable: false };
  if (cache.data && now - cache.at < CACHE_TTL_MS) return { ...cache.data, cacheable: true };

  let failed = false;
  const load = async (folderId, fallback) => {
    try {
      const docs = await listFolderDocs(folderId, apiKey, fetchImpl);
      if (docs.length > 0) return docs;
    } catch (e) {
      console.error('Drive folder fetch failed:', e.message);
    }
    failed = true;
    return fallback;
  };

  const [se, amp] = await Promise.all([load(SE_FOLDER_ID, FALLBACK_SE), load(AMP_FOLDER_ID, FALLBACK_AMP)]);
  if (!failed) cache = { at: now, data: { se, amp } };
  return { se, amp, cacheable: !failed };
}

export function resetDocCache() {
  cache = { at: 0, data: null };
}
