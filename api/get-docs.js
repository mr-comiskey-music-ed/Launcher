export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
  const SE_FOLDER_ID = '15pkshnr9luUQY9oZfpyxSZ4wI9oH4Bge';
  const AMP_FOLDER_ID = '1EvIPUXvf5PiSenapOKapb_N8QWUDuxMp';

  const FALLBACK_SE = [
    { title: "Mixing Help #1: Hip Hop", id: "1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7", webViewLink: "https://docs.google.com/document/d/1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7/view" },
    { title: "Mixing Help #2: DnB (more intense)", id: "1ZcFem-9KIgbeVmCQKGca7gddHAIjVoLM", webViewLink: "https://docs.google.com/document/d/1ZcFem-9KIgbeVmCQKGca7gddHAIjVoLM/view" },
    { title: "Mixing Help #2: House (less intense)", id: "1xrvdgsHTTJRHWkduzYdl7rAPj1oXC21g", webViewLink: "https://docs.google.com/document/d/1xrvdgsHTTJRHWkduzYdl7rAPj1oXC21g/view" },
    { title: "Mixing Help #3: Rock", id: "1ZQPgtCrR3SnQoOVt59eKNnaJoxEK6M5V", webViewLink: "https://docs.google.com/document/d/1ZQPgtCrR3SnQoOVt59eKNnaJoxEK6M5V/view" },
    { title: "Mixing Help #4: \"Common Cents.\" - Mike DFG & Nate Vintage", id: "1h4OlLHRCNHoYPA8HHd7KOCuFtaDI4Fd3", webViewLink: "https://docs.google.com/document/d/1h4OlLHRCNHoYPA8HHd7KOCuFtaDI4Fd3/view" },
    { title: "Project #1: Loops in Soundtrap", id: "1S_B2FHY70GZ1WRpb0EXtVPMGe9CU9KZ7", webViewLink: "https://docs.google.com/document/d/1S_B2FHY70GZ1WRpb0EXtVPMGe9CU9KZ7/view" },
    { title: "Project #2: My Musical Life (interview audio version) & Recording Practice Check", id: "1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb", webViewLink: "https://docs.google.com/document/d/1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb/view" },
    { title: "Project #3: Drums & Loops", id: "1hVgmdXWZkHEn-uBKDzW7TVnvrF_Hxzuc", webViewLink: "https://docs.google.com/document/d/1hVgmdXWZkHEn-uBKDzW7TVnvrF_Hxzuc/view" },
    { title: "Project #5: Podcast Project", id: "1h2Aw7CYnYL-euY8I4tYQlIw4yAdbKK0m", webViewLink: "https://docs.google.com/document/d/1h2Aw7CYnYL-euY8I4tYQlIw4yAdbKK0m/view" },
    { title: "Project #8: Mixing Raw Stems Steps", id: "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8", webViewLink: "https://docs.google.com/document/d/1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8/view" },
    { title: "Project #9: Drum Programming Mini-Project", id: "13bhoBvhksf6bpuSqlIEZzdJNCxdK4oBY", webViewLink: "https://docs.google.com/document/d/13bhoBvhksf6bpuSqlIEZzdJNCxdK4oBY/view" },
    { title: "Project #10: Class Song Docs", id: "1DyXK1aqcnaMBMyurdrj676e_ep0JtmRV", webViewLink: "https://docs.google.com/document/d/1DyXK1aqcnaMBMyurdrj676e_ep0JtmRV/view" },
    { title: "Project #11: Pingu Project", id: "1TrTE8Y1FR0NR71BpN188hKmPRJBgJjN0", webViewLink: "https://docs.google.com/document/d/1TrTE8Y1FR0NR71BpN188hKmPRJBgJjN0/view" },
    { title: "Project #12: Foley/SFX Project", id: "1U2POTmWCCCPboAkuu2P14QBY-zm-WluZ", webViewLink: "https://docs.google.com/document/d/1U2POTmWCCCPboAkuu2P14QBY-zm-WluZ/view" },
    { title: "Project #13: Found Sound Composition", id: "1MnEjo4h7vkQ-94nNMhdHFMqdVEDxv7Nn", webViewLink: "https://docs.google.com/document/d/1MnEjo4h7vkQ-94nNMhdHFMqdVEDxv7Nn/view" },
    { title: "Project #14: Sampling Project", id: "1f2Hk8i1x72gy3cT_eEqcbuJApEpyiSK4", webViewLink: "https://docs.google.com/document/d/1f2Hk8i1x72gy3cT_eEqcbuJApEpyiSK4/view" }
  ];

  const FALLBACK_AMP = [
    { title: "Autodidact #1", id: "1K4co7I5S-zcpXhOtjO7Y0H3JW9lqnlkpenyIFn5HgHQ", webViewLink: "https://docs.google.com/document/d/1K4co7I5S-zcpXhOtjO7Y0H3JW9lqnlkpenyIFn5HgHQ/view" },
    { title: "Project #1: Partner Project & Logic Review", id: "118H-sHLE_Ezjn_rooh52rVnDZ6Kf_f7h0Wlioj24Wx4", webViewLink: "https://docs.google.com/document/d/118H-sHLE_Ezjn_rooh52rVnDZ6Kf_f7h0Wlioj24Wx4/view" }
  ];

  const SHORTCUT_TARGETS = {
    "1mWPHycBDUv8cpk7NkUXC-ypx-J2Qa5AN": "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8"
  };

  if (!apiKey) {
    return res.status(200).json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
  }

  try {
    const fetchFolder = async (folderId) => {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&key=${apiKey}&fields=files(id,name,mimeType,shortcutDetails)&supportsAllDrives=true&includeItemsFromAllDrives=true&orderBy=name`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Google Drive API error: ${response.statusText}`);
      const data = await response.json();
      
      const files = data.files || [];
      const resolvedFiles = await Promise.all(files.map(async (f) => {
        let resolvedId = f.id;
        let title = f.name;

        if (SHORTCUT_TARGETS[f.id]) {
          resolvedId = SHORTCUT_TARGETS[f.id];
        } else if (f.mimeType === 'application/vnd.google-apps.shortcut' && f.shortcutDetails && f.shortcutDetails.targetId) {
          resolvedId = f.shortcutDetails.targetId;
        } else {
          try {
            const metaRes = await fetch(`https://www.googleapis.com/drive/v3/files/${f.id}?fields=id,name,mimeType,shortcutDetails&key=${apiKey}&supportsAllDrives=true&includeItemsFromAllDrives=true`);
            if (metaRes.ok) {
              const meta = await metaRes.json();
              if (meta.mimeType === 'application/vnd.google-apps.shortcut' && meta.shortcutDetails && meta.shortcutDetails.targetId) {
                resolvedId = meta.shortcutDetails.targetId;
              }
            }
          } catch (e) {}
        }

        return {
          title,
          id: resolvedId,
          webViewLink: `https://docs.google.com/document/d/${resolvedId}/view`
        };
      }));

      return resolvedFiles.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));
    };

    const [se, amp] = await Promise.all([
      fetchFolder(SE_FOLDER_ID).catch(() => FALLBACK_SE),
      fetchFolder(AMP_FOLDER_ID).catch(() => FALLBACK_AMP)
    ]);

    res.status(200).json({
      se: se.length > 0 ? se : FALLBACK_SE,
      amp: amp.length > 0 ? amp : FALLBACK_AMP
    });
  } catch (err) {
    console.error('Error fetching drive docs:', err);
    res.status(200).json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
  }
}
