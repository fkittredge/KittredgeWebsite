# Kittredge Technologies Website — Status

*Updated February 14, 2026*

---

## Live Site

- **URL:** https://kittredge.com
- **Hosting:** Netlify (site name: `idyllic-croissant-9f378e.netlify.app`)
- **Repo:** https://github.com/fkittredge/KittredgeWebsite
- **Auto-deploy:** Yes — every push to `master` triggers a Netlify build

---

## Tech Stack

- **Static site generator:** Eleventy (11ty) v2.0.1
- **Source files:** `src/`
- **Build output:** `_site/` (not committed to git)
- **Build command:** `npm run build`
- **Dev server:** `npm run serve` → http://localhost:8080
- **Config:** `.eleventy.js`, `netlify.toml`, `package.json`

---

## Site Structure

Four sections on a single page (`src/index.html`):

1. **Hero** — Circular headshot (400px), centered headline, two body paragraphs, services list, "Learn more" CTA button
2. **About Fletcher** — Narrative bio + three-column grid (Education, Recognition, Board Roles)
3. **Services** — Four service items in card-style blocks
4. **Contact** — Two-column layout: text + Formspree contact form

---

## Contact Form

- **Provider:** Formspree
- **Endpoint:** `https://formspree.io/f/xkovjleo`
- **Notification email:** fletcher@kittredge.com (verified)
- **Fields:** First Name, Last Name, Email, Message

---

## Design

- **Fonts:** Playfair Display (serif, via Google Fonts) for h1/h2; system sans-serif for body
- **Color scheme:** Black/white/grey — Harvard Crimson and hunter green deferred
- **Hero layout:** Centered single column, circular headshot at top
- **Image:** `src/images/fletcher-kittredge-2.jpg` (note: original had `+` in filename which broke URLs — renamed)

---

## Key Files

| File | Purpose |
|------|---------|
| `src/index.html` | Main page (Nunjucks template) |
| `src/styles.css` | All styles |
| `src/images/fletcher-kittredge-2.jpg` | Headshot |
| `src/insights/*.md` | Blog/insight posts |
| `src/_includes/` | Nunjucks layout templates |
| `.eleventy.js` | Eleventy config |
| `netlify.toml` | Netlify build + headers config |

---

## Insight Posts (current)

Three posts exist, two are placeholder content:
- `src/insights/example-post.md` — placeholder, should be replaced or removed
- `src/insights/2025-12-19-Ratching-Technology.md` — real post (URL slug: `url-slug-for-this-post`, needs updating)
- `src/insights/2026-12-17-scarcity.md` — real post

---

## Outstanding Items

- [ ] Replace or remove placeholder insight post (`example-post.md`)
- [ ] Fix URL slug on `2025-12-19-Ratching-Technology.md` (currently `url-slug-for-this-post`)
- [ ] Add Formspree spam protection / reCAPTCHA
- [ ] Add thank-you redirect page after form submission
- [ ] Generate a logo / wordmark (Canva recommended)
- [ ] Consider adding analytics (Plausible or Google Analytics)

---

## DNS

| Record | Value |
|--------|-------|
| `kittredge.com` (A) | `75.2.60.5` (Netlify load balancer) |
| `www.kittredge.com` (CNAME) | `idyllic-croissant-9f378e.netlify.app` |

---

## Notes

- The old `kittredge-technologies-website-handoff.md` in the repo root is from a prior conversation (Jan 27, 2026) and references Squarespace — it is superseded by this document.
- The `_site/` directory is gitignored; Netlify runs its own build from source.
