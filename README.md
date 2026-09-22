# Ayoub Sowed Portfolio

A premium, bilingual-ready personal portfolio website for **Ayoub Sowed**.

## Files

- `index.html` — main website structure
- `styles.css` — modern light-theme UI styling
- `script.js` — content rendering, bilingual toggle, project case-study modal, smooth interactions
- `assets/projects/*.webp` — project thumbnail images
- `assets/cv/Ayoub_Sowed_IT_Support_Specialist.pdf` — downloadable CV file

## How to open

### Option 1: Open directly
Open `index.html` in your browser.

### Option 2: Run a small local server
If Python is installed:

```powershell
Set-Location "e:\My portfolio"
python -m http.server 3000
```

Then visit:

```text
http://localhost:3000
```

## Quick edits

- Update text and section content in `script.js`
- Replace contact placeholders like `hello@ayoubsowed.com` and `+971 50 000 0000`
- Replace the placeholder PDF in `assets/cv/`
- Replace project SVGs in `assets/projects/` with real thumbnails later

## Notes

- The layout is prepared for **English + Arabic** with RTL support.
- The site uses a **light premium aesthetic** and is fully responsive.
- No build step is required.
