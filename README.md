# Ayoub Sowed Portfolio

Bilingual (English/Arabic) personal portfolio site for **Ayoub Sowed**, IT Support Specialist.

## Files

- `index.html`: main website structure
- `styles.css`: dark, technical-themed UI styling
- `script.js`: content rendering, bilingual toggle, project case-study modal, interactions
- `assets/projects/`: project thumbnail images
- `assets/cv/Ayoub_Sowed_IT_Support_Specialist.pdf`: downloadable CV file

## How to open

### Option 1: Open directly
Open `index.html` in your browser.

### Option 2: Run a small local server
If Python is installed:

```powershell
Set-Location "D:\A office\AyoubOS\03 Projects\My portfolio"
python -m http.server 3000
```

Then visit:

```text
http://localhost:3000
```

## Quick edits

- Update text and section content in `script.js` (both `en` and `ar` blocks)
- Replace the CV PDF in `assets/cv/`
- Add or swap project images in `assets/projects/`

## Notes

- The layout supports English and Arabic with RTL, and is fully responsive.
- No build step is required.
