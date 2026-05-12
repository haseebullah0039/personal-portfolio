# Portfolio

Production-ready React portfolio built with Vite.

## Scripts

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
npm.cmd run lint
```

## Structure

- `src/App.jsx` composes the page sections.
- `src/assets` contains image assets.
- `src/components` contains reusable UI components.
- `src/data` contains portfolio content used by sections.
- `src/styles` contains global styles.

## Local Development

Install dependencies, then run:

```powershell
npm.cmd run dev
```

The browser should open automatically at:

`http://localhost:4173/`

If it does not, keep the terminal running and open that exact URL manually.

## Vercel Auto Deploy

This repo includes GitHub Actions workflows for Vercel:

- Preview deploys on every push to branches other than `main`
- Production deploys on every push to `main`

One-time setup:

1. In Vercel, create or link a project for this GitHub repository.
2. In your local terminal, run `vercel link` once for this project.
3. Open `.vercel/project.json` and copy the `projectId` and `orgId` values.
4. In GitHub, add these repository secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

The workflows live in:

- `.github/workflows/vercel-preview.yml`
- `.github/workflows/vercel-production.yml`

`vercel.json` disables Vercel's built-in Git auto-deploy so GitHub Actions stays the single deployment path.
