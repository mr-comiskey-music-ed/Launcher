# Implementation Plan - Break Image Zoom Out of Floating Window

## Problem
When users click to expand reference charts (EQ charts, compression steps, descriptive audio terms) inside the floating PiP window, the lightbox is constrained by the small PiP window bounds (`640x820`), making detailed inspection difficult.

## Solution
When a user clicks an expandable image card in the Mix Tips modal, open the high-resolution image in a new browser tab (`window.open(imgSrc, '_blank')`). This allows users to view the chart at full native resolution across the main screen and instantly close the tab to return to their workflow.

## Proposed Changes
### `public/index.html` & `index.html`
- Update `openLightbox` and card click handlers to call `window.open(imgSrc, '_blank')` instead of displaying the constrained local lightbox modal.
- Clean up unused `.lightbox-modal` styles if no longer needed.

## Verification Plan
1. Compile the applet.
2. Open the Mix Tips modal in the PiP window.
3. Click any reference chart image (e.g., Easy EQ Tips or Sweetwater EQ Chart) and verify it opens in a new browser tab at full resolution.
