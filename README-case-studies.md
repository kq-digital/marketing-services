# Case studies section — KQ Digital

Drop-in files for the case studies section. Everything goes in the **site root**. Flat — no subfolders.

## Files in this package

Upload **everything**. Every file goes in the site root — there are no folders and no image files to keep track of. The three SEMrush charts are embedded directly inside the two case study pages that use them, so there is nothing that can 404.

**New — 9 files**

| File | What it is |
|---|---|
| `case-studies.html` | Landing page: three clickable columns (Content, Link building, SEO) |
| `cs-content-writing.html` | Content category page, 2 cases |
| `cs-seo-content.html` | Content case 01 — SEO content for an outsourcing group |
| `cs-social-content.html` | Content case 02 — Social and short-form video |
| `cs-link-building.html` | Link building category page, 3 cases |
| `cs-uk-travel-group.html` | Link building case 01 |
| `cs-uk-cbd-brand.html` | Link building case 02 |
| `cs-agency-link-building.html` | Link building case 03 |
| `cs-seo.html` | SEO category page (empty state) |

**Overwrites your existing files — 9**

| File | Why |
|---|---|
| `styles.css` | Font swap + the appended case-studies block |
| `index.html`, `about.html`, `services.html`, `seo.html`, `ppc.html`, `creative-design.html`, `email-marketing.html`, `contact.html` | Case studies nav link, new fonts link, `?v=4` |

**Also included**

- `script.js` — **unchanged** from your existing file. Safe to overwrite or skip.
- `README-case-studies.md` — this file. Don't upload it unless you want it in the repo.

## Navigation structure

```
case-studies.html
├── cs-content-writing.html
│   ├── cs-seo-content.html
│   └── cs-social-content.html
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
