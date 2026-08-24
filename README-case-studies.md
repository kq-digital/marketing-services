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

## Your existing pages

All eight — `index`, `about`, `services`, `seo`, `ppc`, `creative-design`, `email-marketing`, `contact` — are included in this package, already updated with:

- the **Case studies** link in the header nav (before the "Get a free audit" button) and in the footer nav
- the new Google Fonts link (Oswald + Inter + IBM Plex Mono)
- `styles.css?v=4` and `script.js?v=4` so browsers pick up the new stylesheet

Nothing else on those pages was touched. Upload the whole package and the site is consistent — there is no manual edit left to do.

## What changed in styles.css

Your original file is intact — the changes are:

- `:root` — `--display` is now `Oswald`, `--body` is now `Inter`, `--mono` is now `Inter` (so eyebrow and label type is Inter, not monospace)
- Everything else is appended in one block at the end, marked `/* ---------- case studies ---------- */` onwards. That block also carries a few fixes to shared components that the new section exposed: the mobile menu now scrolls internally instead of pushing the CTA off short screens, `.crumbs a` links are now ultra blue rather than the same grey as the surrounding text, and dropdown items get consistent block padding.

## Notes

- All figures come from the source portfolio and are unchanged: referring domains 3→45 and 14→44, +77% / +255% / +20% traffic, top-3 held on ~75% of traffic, 10–15 links per month, DR 36–89.
- Chart images are the original SEMrush screenshots, colour-quantised to keep them under 26 KB each.
- Client names and domains are withheld throughout, per the NDA notes on each page.
