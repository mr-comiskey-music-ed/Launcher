import fs from 'fs';
import path from 'path';

function writeVarLength(value) {
  const buffer = [];
  let v = value & 0x7F;
  while ((value >>= 7) > 0) {
    buffer.unshift((value & 0x7F) | 0x80);
  }
  buffer.push(v);
  return buffer;
}

function generatePatternMidiBuffer(pat) {
  const ticksPerBeat = 480;
  const stepsPerBeat = pat.stepsPerBeat || 4;
  const ticksPerStep = Math.round(ticksPerBeat / stepsPerBeat);
  const bpm = (pat.meta && pat.meta.bpmRange && pat.meta.bpmRange[0]) ? pat.meta.bpmRange[0] : 120;
  const usPerQuarter = Math.round(60000000 / bpm);

  const DRUM_MAP = {
    kick: 36,     // C1
    snare: 38,    // D1
    hihatC: 42,   // F#1
    hihatO: 46    // A#1
  };

  const events = [];
  const voices = pat.voices || {};

  for (const [voiceKey, noteNumber] of Object.entries(DRUM_MAP)) {
    const activeSteps = voices[voiceKey] || [];
    for (const step of activeSteps) {
      const startTime = step * ticksPerStep;
      const dur = voiceKey === 'hihatO' ? ticksPerStep * 2 : Math.max(1, ticksPerStep - 10);
      events.push({ time: startTime, type: 'on', note: noteNumber, vel: 100 });
      events.push({ time: startTime + dur, type: 'off', note: noteNumber, vel: 0 });
    }
  }

  events.sort((a, b) => a.time === b.time ? (a.type === 'off' ? -1 : 1) : a.time - b.time);

  const trackBytes = [];
  const nameStr = pat.name || 'Drum Pattern';
  const nameBytes = [];
  for (let i = 0; i < nameStr.length; i++) nameBytes.push(nameStr.charCodeAt(i));
  trackBytes.push(0x00, 0xFF, 0x03, nameBytes.length, ...nameBytes);
  trackBytes.push(0x00, 0xFF, 0x51, 0x03, (usPerQuarter >> 16) & 0xFF, (usPerQuarter >> 8) & 0xFF, usPerQuarter & 0xFF);
  trackBytes.push(0x00, 0xFF, 0x58, 0x04, 0x04, 0x02, 0x18, 0x08);

  let lastTime = 0;
  for (const ev of events) {
    const deltaTime = ev.time - lastTime;
    lastTime = ev.time;
    trackBytes.push(...writeVarLength(deltaTime));
    if (ev.type === 'on') {
      trackBytes.push(0x99, ev.note, ev.vel);
    } else {
      trackBytes.push(0x89, ev.note, 0);
    }
  }

  trackBytes.push(0x00, 0xFF, 0x2F, 0x00);

  const header = [
    0x4D, 0x54, 0x68, 0x64,
    0x00, 0x00, 0x00, 0x06,
    0x00, 0x00,
    0x00, 0x01,
    (ticksPerBeat >> 8) & 0xFF, ticksPerBeat & 0xFF
  ];

  const trackLen = trackBytes.length;
  const trackHeader = [
    0x4D, 0x54, 0x72, 0x6B,
    (trackLen >> 24) & 0xFF,
    (trackLen >> 16) & 0xFF,
    (trackLen >> 8) & 0xFF,
    trackLen & 0xFF
  ];

  return Buffer.from([...header, ...trackHeader, ...trackBytes]);
}

export default async function handler(req, res) {
  try {
    const patternId = req.query.id;
    const patternsPath = path.join(process.cwd(), 'public', 'patterns.json');
    let patterns = [];
    if (fs.existsSync(patternsPath)) {
      patterns = JSON.parse(fs.readFileSync(patternsPath, 'utf-8'));
    }

    const pat = patterns.find((p) => p.id === patternId) || patterns[0];
    if (!pat) {
      return res.status(404).send('Pattern not found');
    }

    const fileName = `${(pat.name || 'Drum_Pattern').replace(/[^a-zA-Z0-9_-]/g, '_')}.mid`;
    const midiBuffer = generatePatternMidiBuffer(pat);

    res.setHeader('Content-Type', 'audio/midi');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Length', midiBuffer.length.toString());
    res.send(midiBuffer);
  } catch (err) {
    console.error('Error generating MIDI download:', err);
    res.status(500).send('Error generating MIDI');
  }
}
