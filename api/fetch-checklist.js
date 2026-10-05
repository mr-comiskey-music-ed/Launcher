export default async function handler(req, res) {
  let rawId = req.query.id;
  if (!rawId) return res.status(200).json({ items: [], note: 'Document ID is required.' });

  try {
    let fileId = rawId;
    if (rawId.includes('/d/')) {
      const match = rawId.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) fileId = match[1];
    } else if (rawId.includes('id=')) {
      const match = rawId.match(/id=([a-zA-Z0-9-_]+)/);
      if (match && match[1]) fileId = match[1];
    }

    const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
    let targetDocId = fileId;

    const SHORTCUT_TARGETS = {
      "1mWPHycBDUv8cpk7NkUXC-ypx-J2Qa5AN": "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8"
    };
    if (SHORTCUT_TARGETS[fileId]) {
      targetDocId = SHORTCUT_TARGETS[fileId];
    }

    // 1. Resolve Drive shortcut if apiKey is available
    if (apiKey && !rawId.includes('docs.google.com/document/d/e/')) {
      try {
        const metaRes = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=id,name,mimeType,shortcutDetails&key=${apiKey}`);
        if (metaRes.ok) {
          const meta = await metaRes.json();
          if (meta.mimeType === 'application/vnd.google-apps.shortcut' && meta.shortcutDetails && meta.shortcutDetails.targetId) {
            targetDocId = meta.shortcutDetails.targetId;
          }
        }
      } catch (e) {
        console.error('Error resolving Drive shortcut:', e);
      }
    }

    // 2. Fetch document content via Drive export endpoint (text/plain)
    let textContent = '';
    if (apiKey) {
      try {
        const exportRes = await fetch(`https://www.googleapis.com/drive/v3/files/${targetDocId}/export?mimeType=text/plain&key=${apiKey}`);
        if (exportRes.ok) {
          textContent = await exportRes.text();
        }
      } catch (e) {
        console.error('Error exporting doc text:', e);
      }
    }

    // 3. Fallback to published web URL or public fetch if export didn't return text
    if (!textContent || textContent.length < 20 || textContent.includes('<!DOCTYPE html>') || textContent.includes('<html')) {
      const PUBLISH_URL_MAP = {
        "mixing-help-hiphop-1": "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub",
        "1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7": "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub",
        "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8": "https://docs.google.com/document/d/e/2PACX-1vSn1zukoDKI95AMWqtZT8FqZMtHL0obm3ay1yEztwAeekKZiEJQR8TYkKkP1piyUaax_hTYSTiV8YdC/pub",
        "1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s": "https://docs.google.com/document/d/e/2PACX-1vQGF7X2VO4t7dbwpR2Fr1lbfl1MAXIgUdI10Mn_cHNuHL9QeQk78EC8adGthyA13M752lnEOM53-IaR/pub"
      };
      let pubUrl = PUBLISH_URL_MAP[rawId] || PUBLISH_URL_MAP[fileId];
      if (!pubUrl) {
        if (rawId.includes('docs.google.com/document/d/e/')) {
          pubUrl = rawId;
        } else if (rawId.startsWith('e/')) {
          pubUrl = `https://docs.google.com/document/d/${rawId}/pub`;
        } else {
          pubUrl = `https://docs.google.com/document/d/${targetDocId}/pub`;
        }
      }
      const pubRes = await fetch(pubUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (pubRes.ok) {
        const html = await pubRes.text();
        textContent = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                          .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                          .replace(/<[^>]+>/g, '\n');
      }
    }

    // 4. Parse checklist items strictly under a "Checklist" section
    const items = [];
    const lines = textContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let inChecklistSection = false;

    for (const line of lines) {
      const lower = line.toLowerCase();
      if (lower.includes('checklist') && (line.startsWith('#') || lower === 'checklist' || lower.endsWith(':'))) {
        inChecklistSection = true;
        continue;
      }
      if (inChecklistSection && line.startsWith('#') && !lower.includes('checklist')) {
        inChecklistSection = false;
        continue;
      }

      if (inChecklistSection) {
        let cleanText = line
          .replace(/^[\s\-•\*]*[\u2610\u2611]\s*/, '')
          .replace(/^[\s\-•\*]*\[\s*[\s\S]*?\s*]\s*/, '')
          .replace(/^[•\-\*]\s*/, '')
          .trim();

        if (cleanText && cleanText.length > 1 && cleanText.length < 300 && !cleanText.toLowerCase().includes('file > share') && !cleanText.toLowerCase().includes('checklist')) {
          if (!items.includes(cleanText)) {
            items.push(cleanText);
          }
        }
      }
    }

    if (items.length === 0) {
      return res.status(200).json({
        items: [],
        note: 'Document loaded successfully, but no checklist items or bullet steps were found under a "## Checklist" section.'
      });
    }

    res.status(200).json({ items });
  } catch (err) {
    console.error('Fetch checklist error:', err);
    res.status(200).json({
      items: [],
      note: `Error loading checklist: ${err.message}`
    });
  }
}
