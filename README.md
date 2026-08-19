# KQ Digital — Website

Static multi-page website for KQ Digital. No build step, no dependencies.

## Files
- index.html (Home), about.html, services.html, seo.html, ppc.html, creative-design.html, email-marketing.html, contact.html
- styles.css (shared styles), script.js (menu, hero animation, contact form), favicon.svg

## Deploy on GitHub Pages
1. Create a new repository (e.g. `kq-digital-site`).
2. Upload ALL files in this folder to the repository root (keep them together).
3. Go to Settings -> Pages.
4. Under "Build and deployment", set Source to "Deploy from a branch", pick `main` and `/ (root)`, then Save.
5. Your site goes live at `https://<username>.github.io/<repo>/` within a minute or two.

## Contact form (IMPORTANT — one-time step)
The contact form emails submissions to kqdigital.mkt@gmail.com via FormSubmit.
- After deploying, submit the form ONCE yourself.
- FormSubmit will send an activation email to kqdigital.mkt@gmail.com. Click the confirmation link in it.
- Submissions are delivered after that. Check spam for the first few.
The form will not deliver when opened as a local file; test on the live URL.

## Editing
- Colors and fonts live at the top of styles.css (the :root block).
- Brand palette: ultramarine #2B3AE5, marigold #FFB224, ink #14151A, tint #EEF0FF.
