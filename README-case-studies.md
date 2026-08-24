# Case studies section — KQ Digital

Drop-in files for the case studies section. Everything here goes in the **site root**, except `assets/`, which goes in a folder of that name beside the HTML files.

## Files in this package

| File | What it is | Action |
|---|---|---|
| `case-studies.html` | Landing page — three clickable columns (Content, Link building, SEO) | **new** |
| `cs-content-writing.html` | Category page, empty state | **new** |
| `cs-link-building.html` | Category page, 3 case study cards + reporting-standard section | **new** |
| `cs-seo.html` | Category page, empty state | **new** |
| `cs-uk-travel-group.html` | Case study 01 | **new** |
| `cs-uk-cbd-brand.html` | Case study 02 | **new** |
| `cs-agency-link-building.html` | Case study 03 | **new** |
| `styles.css` | Your stylesheet with the case-studies block appended and the font swap | **replaces existing** |
| `script.js` | Unchanged from your existing file | **no change — included for reference only** |
| `assets/*.png` | Three SEMrush chart screenshots | **new** |

## Navigation structure

```
case-studies.html
├── cs-content-writing.html          (empty state)
├── cs-link-building.html
│   ├── cs-uk-travel-group.html
│   ├── cs-uk-cbd-brand.html
│   └── cs-agency-link-building.html
└── cs-seo.html                      (empty state)
```

Breadcrumbs follow the same path: `Case studies / Link building / UK travel group`.

## Two things to do to your existing pages

`styles.css` in this package replaces your current one, so the font change and CSS fixes apply site-wide the moment you upload it. But your other seven pages (`index`, `about`, `services`, `seo`, `ppc`, `creative-design`, `email-marketing`, `contact`) still need two manual edits each:

**1. Update the Google Fonts link.** Replace the existing `<link href="https://fonts.googleapis.com/css2?family=Bricolage...">` with:

```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Without this those pages will fall back to system fonts.

**2. Add the Case studies nav item.** In the header `<ul class="nav-links">`, immediately **before** the `<li class="nav-audit">` line:

```html
<li><a href="case-studies.html">Case studies</a></li>
```

And in the footer `<ul class="foot-nav">`, after the Services `</li>`:

```html
<li><a href="case-studies.html">Case studies</a></li>
```

Also bump `styles.css?v=3` to `styles.css?v=4` (and `script.js?v=3` to `?v=4`) in those pages so browsers pick up the new stylesheet instead of a cached copy.

## What changed in styles.css

Your original file is intact — the changes are:

- `:root` — `--display` is now `Oswald`, `--body` is now `Inter`, `--mono` is now `Inter` (so eyebrow and label type is Inter, not monospace)
- Everything else is appended in one block at the end, marked `/* ---------- case studies ---------- */` onwards. That block also carries a few fixes to shared components that the new section exposed: the mobile menu now scrolls internally instead of pushing the CTA off short screens, `.crumbs a` links are now ultra blue rather than the same grey as the surrounding text, and dropdown items get consistent block padding.

## Notes

- All figures come from the source portfolio and are unchanged: referring domains 3→45 and 14→44, +77% / +255% / +20% traffic, top-3 held on ~75% of traffic, 10–15 links per month, DR 36–89.
- Chart images are the original SEMrush screenshots, colour-quantised to keep them under 26 KB each.
- Client names and domains are withheld throughout, per the NDA notes on each page.
