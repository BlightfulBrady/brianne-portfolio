BRI-ANNE PALACIOS — LOCAL PORTFOLIO

QUICK TEST
1. Open index.html directly in Chrome/Edge/Safari.
2. If your browser blocks local video playback, start a tiny local server instead:
   - Windows/Mac with Python installed: open a terminal in this folder and run:
     python -m http.server 8000
   - Then visit localhost:8000 in your browser.

FILES
- index.html — page structure/content
- styles.css — colors/layout/responsive design
- script.js — mobile menu + contact mailto behavior
- assets/ — supplied photos/videos plus browser-compatible MP4 versions

EDIT LATER
- Instagram/TikTok: replace href="#" in index.html with the real profile URLs.
- Reel titles: search for “Dance Reel 01/02/03” in index.html.
- Hero video: the first <video> in index.html.
- Contact form: currently opens the visitor's email app. For a deployed site, connect it to Formspree, Netlify Forms, a serverless function, or your own backend to submit without an email client.

NOTE
The Google fonts import needs internet access. The site falls back to Georgia/Arial if offline.
