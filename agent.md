# React Portfolio Project Rules

## Project Goal

Build a high-performance, modern portfolio for a professional graphic designer using React and Vite.

## Principles

- Keep the existing visual design intentional and consistent.
- Keep components reusable and easy to scan.
- Keep runtime JavaScript lean.
- Use accessible headings, labels, alt text, and semantic markup.

## Tech Stack

- Framework: React
- Build tool: Vite
- Styling: global CSS in `src/styles`
- Assets: imported from `src/assets`

## Structure

```text
src/
  App.jsx
  main.jsx
  assets/
  components/
    sections/
  data/
  styles/
```

## Rules

- Keep page composition inside `src/App.jsx`.
- Reusable components go into `src/components`.
- Section components go into `src/components/sections`.
- Shared content data goes into `src/data`.
- Avoid duplicated UI blocks and dead code.
