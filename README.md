# Sunmisola Rejoice — Portfolio Website

A simple, responsive personal portfolio built with plain HTML, CSS and a small amount of JavaScript. It showcases Sunmisola Rejoice — creative storyteller, video editor, photographer and small business owner.

## Features
- Responsive hero, about, skills, portfolio and contact sections
- Mobile-first adjustments (circular hero image on small screens)
- Lightweight, no build step or framework required
- Accessible assets: images in `img/`, styles in `css/style.css`, scripts in `js/`

## Folder structure
- index.html — main landing page
- css/style.css — site styles and responsive rules
- js/typing.js, js/script.js — small interactions/typing effect
- img/ — image assets used by the site

## Local setup
1. Clone or copy the project folder.
2. Open the folder in VS Code.
3. Preview:
   - Use the Live Server extension, or
   - Run a quick local server from the project root:
     - PowerShell / CMD / Git Bash:
       - `python -m http.server 8000`
     - Then open `http://localhost:8000` in your browser.
4. For CSS changes, save and hard-refresh (Ctrl+F5) to clear cached styles.

## Quick Git push (example)
1. git init
2. git add .
3. git commit -m "Initial site files"
4. git branch -M main
5. git remote add origin <your-repo-url>
6. git push -u origin main

## Notes / Known issues
- Mobile hero image uses `object-fit: cover` and `object-position` to avoid cropping; tweak `object-position` in `css/style.css` if the subject is misaligned.
- No backend or form processing included.

## License & contact
- Add your preferred license file before publishing.
- Update contact/social links inside `index.html` before pushing.
