# Dynamic Image Gallery

A React app that renders an image gallery dynamically from a plain JavaScript data array, built to practice component composition, props, and the `map()` method.

## Objective

Display a responsive grid of image cards where every card is generated from a single array of data rather than hardcoded JSX, so adding a new entry to the array is the only step needed to add a new image to the UI.

## How it works

- `src/data/images.js` holds an array of objects, each with a `url`, `title`, and `description`.
- `src/components/Gallery.jsx` maps over that array and renders one `<ImageCard />` per entry, passing the data down as props.
- `src/components/ImageCard.jsx` is a small, reusable presentational component that only knows how to render the props it receives.
- Layout is a responsive CSS Grid (`src/App.css`) that adjusts the column count at different breakpoints via media queries.

## Tech

- React 19 (Vite template)
- Plain CSS (Grid + media queries)

## Run locally

```bash
npm install
npm run dev
```

## Add a new image

Add another object (`url`, `title`, `description`) to the array in `src/data/images.js` — no JSX changes needed.

## Build & deploy

```bash
npm run build
npm run deploy
```

`npm run deploy` publishes the production build to the `gh-pages` branch via the `gh-pages` package.
