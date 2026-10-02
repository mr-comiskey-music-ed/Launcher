export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  const SE_FOLDER_ID = '15pkshnr9luUQY9oZfpyxSZ4wI9oH4Bge';
  const AMP_FOLDER_ID = '1EvIPUXvf5PiSenapOKapb_N8QWUDuxMp';

  const FALLBACK_SE = [
    { title: "Project #1: Loops in Soundtrap", id: "1HOLjorJv6ONr7ACmGEcJq6CFbhi_Rr41dNDNvRFtngE" },
    { title: "Project #2: My Musical Life", id: "1Tiy5EIDgB1-_XDSe1aX0pLpIYnL2YYmWuJjWR38PFok" },
    { title: "Project #3: Soundtrap Drums & Loops", id: "1JCTDjoXTgTqK7goxczUCbN-nk4afQAUlrhrOH5TShtw" },
    { title: "Project #5: Podcast Project", id: "1RkESXLqDIc36SlzUOzu3kz1ciqwcW7VSOCOPJqADTDY" },
    { title: "Project #8: Mixing Raw Stems", id: "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8" },
    { title: "Project #9: Drum Programming", id: "15HKH1U--ZCv9xFkxOvbmyeDWeSpN1dci3sONnmc6RcA" },
    { title: "Project #11: Pingu Project", id: "1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s" },
    { title: "Project #12: Foley/SFX Project", id: "1mhrnMKKxMBXWL8UwwS9lz7BotftIy-RYvbwjtpZ5cBs" },
    { title: "Project #13: Found Sound Composition", id: "16Flq6UC0EKrCDdx_Nd-7tk5QzEDlrlF0GjAgmdedRRM" },
    { title: "Project #14: Sampling Project", id: "1EZG-3EZbeMK3MzlMOunfylgxU6p2QM8Xnl7HA9tl6nA" }
  ];

  const FALLBACK_AMP = [
    { title: "Autodidact #1", id: "1K4co7I5S-zcpXhOtjO7Y0H3JW9lqnlkpenyIFn5HgHQ" },
    { title: "Project #1: Partner Project & Logic Review", id: "118H-sHLE_Ezjn_rooh52rVnDZ6Kf_f7h0Wlioj24Wx4" }
  ];

  if (!apiKey) {
    return res.status(200).json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
  }

  try {
    const fetchFolder = async (folderId) => {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&key=${apiKey}&fields=files(id,name)&orderBy=name`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Google Drive API error: ${response.statusText}`);
      const data = await response.json();
      return (data.files || []).map(f => ({ title: f.name, id: f.id })).sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));
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
