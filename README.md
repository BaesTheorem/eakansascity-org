# Effective Altruism Kansas City

The eakansascity.org website: a static one-page site (originally a Webflow export).

## Structure

- `index.html` at the root
- `css/`, `js/`, `images/` alongside it

No build step. It's plain HTML/CSS/JS.

## Deploy

Any static host works. Point it at this repo's root:

- **Cloudflare Pages / Netlify / Vercel** — connect the repo, build command none, output directory `/`
- **GitHub Pages** — Settings → Pages → deploy from `main`, folder `/ (root)`

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000
