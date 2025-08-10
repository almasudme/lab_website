# FP University Research Lab — Next.js (GitHub Pages Ready)

Content is driven by a single JSON file: **config/lab.config.json**.

## Local Dev
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (project page)
1. Push this folder as the root of your repo (e.g., `my-lab-site`).
2. Ensure default branch is `main`.
3. GitHub will run the included workflow at `.github/workflows/deploy.yml`:
   - Builds (`next build`), exports static files (`next export`)
   - Sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` automatically
   - Deploys `out/` to GitHub Pages
4. In your repo → **Settings → Pages** → Source **GitHub Actions** (should auto-detect).

If deploying to a **user/organization page** (e.g., `username.github.io`), edit the workflow:
- Set `NEXT_PUBLIC_BASE_PATH` to empty (`""`).

## Notes
- `images.unoptimized` is enabled for static export.
- `trailingSlash` is enabled for stable relative links.
- Static assets live in `public/` and are referenced via Next.js basePath automatically.
