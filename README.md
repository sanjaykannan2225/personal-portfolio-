# Sanjay K — Personal Portfolio
Plain HTML, CSS and vanilla JavaScript. No build step.

## Run
Open `index.html` in a browser, or run `python3 -m http.server 8000` here and visit http://localhost:8000.
(Inter font loads from Google Fonts; the site falls back to system fonts offline.)

## Customise
- **Social links / email:** `script.js` → `SOCIAL_LINKS`.
- **Project links:** `script.js` → `PROJECTS` (`github`, `live`). Links left as "#" show "(soon)".
- **Resume:** replace `assets/resume.pdf` (keep the filename).
- **Portrait:** replace `assets/profile.png` with a transparent cutout (~800x1000, subject at the bottom).
- **Project images:** replace files in `assets/projects/` with real screenshots (~16:10).
- **Contact form:** edit `sendMessage()` in `script.js` to use Formspree / EmailJS / your backend.
