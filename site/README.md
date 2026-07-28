# Braid documentation site

This is the source for the Braid Design System documentation website (the site
published to <https://seek-oss.github.io/braid-design-system>). It's a
[sku](https://github.com/seek-oss/sku) app that statically renders a set of
documentation pages and reads most of its content directly from the
`braid-design-system` package.

## Getting started

```sh
# from the repo root
pnpm install

# start the docs site
pnpm --filter site start:site

# start Playroom
pnpm --filter site start:playroom
```

Useful checks before pushing:

```sh
pnpm --filter site lint:tsc       # type check
pnpm --filter site lint:eslint    # lint
pnpm --filter site build:site     # production build / pre-render
```

## How the site fits together

There are three concepts worth understanding up front: **sections**, **routes**,
and **content pages**.

### 1. Navigation sections (the single source of truth)

[`src/App/navigationSections.ts`](./src/App/navigationSections.ts) declares the
top-level sections of the site (Foundations, Components, Patterns, Templates,
Styles). Each entry has an `id`, `label`, landing `href`, the `pathPrefixes`
that mark it active, and a `description` used on the landing page.

This one file drives:

- the header navigation — [`src/App/Navigation/Navigation.tsx`](./src/App/Navigation/Navigation.tsx)
- the contextual side navigation — [`src/App/SideNavigation/SideNavigation.tsx`](./src/App/SideNavigation/SideNavigation.tsx)
- the "Explore Braid" cards on the landing page — [`src/App/routes/home/index.tsx`](./src/App/routes/home/index.tsx)

Keep `navigationSections.ts` free of React/runtime imports so it stays cheap to
import anywhere.

The landing page (`/`) has **no side navigation**. The side column is hidden on
wide screens (via `hideSideNavOnWide` in
[`Navigation.css.ts`](./src/App/Navigation/Navigation.css.ts)) and the page runs
full width. Its resource links (Releases, Gallery, Playroom, GitHub) are
rendered inline as `ButtonLink`s in
[`src/App/routes/home/index.tsx`](./src/App/routes/home/index.tsx) instead of in
the sidebar.

### 2. Routes

Routes are declared in **two** places that must stay in sync:

- [`sku.routes.ts`](./sku.routes.ts) — the build-time manifest sku uses to
  **pre-render** static HTML. It intentionally avoids importing the React app;
  instead it derives page routes by scanning the section `index.ts` files
  (`getPages(...)`) and the component/CSS/icon/template exports.
- [`src/App/App.tsx`](./src/App/App.tsx) — the runtime
  [react-router](https://reactrouter.com) route table.

Component, CSS, icon and template pages are handled generically (see the
`:docsType/:docsName` catch-all in `App.tsx`). The hand-authored sections
(guides, foundations, examples, getting-started) are spread in from their
`index.ts` files.

### 3. Content pages

Hand-authored pages live under [`src/App/routes/`](./src/App/routes/), grouped
by section:

| Folder                   | Section             | Notes                                           |
| ------------------------ | ------------------- | ----------------------------------------------- |
| `home/`                  | Landing page        | Intro + "Getting started" + section cards       |
| `getting-started/`       | Getting Started     | Currently the Job Summary tutorial              |
| `guides/`                | Guides              | Nested under the Foundations section in the nav |
| `foundations/`           | Foundations         | layout, tones, iconography                      |
| `patterns/`              | Patterns            | Placeholder — `Patterns.tsx` + empty `index.ts` |
| `templates/`             | Templates           | Reads template docs from the braid package      |
| `components/`, `styles/` | Components / Styles | Render docs sourced from the braid package      |

Each section `index.ts` exports an object keyed by route `path`, e.g.

```ts
export default {
  '/getting-started/job-summary': jobSummary,
};
```

Each value is a `Page` (see [`src/types.d.ts`](./src/types.d.ts)) — a
react-router `RouteProps` plus a `title` (used in the side nav) and optional
`badge`.

Most component and CSS content is **not** authored here — it comes from
`*.docs.tsx` files inside the `braid-design-system` package and is pulled in via
`require.context` in [`src/App/navigationHelpers.ts`](./src/App/navigationHelpers.ts).

## Adding a page

1. Create the page module under the relevant `src/App/routes/<section>/`
   folder, exporting a `Page` (with a `title`).
2. Register it in that section's `index.ts` under its route `path`.
3. That's it for hand-authored sections — both `App.tsx` (spread) and
   `sku.routes.ts` (`getPages`) pick it up automatically.

To add a whole new top-level section, also add an entry to
[`navigationSections.ts`](./src/App/navigationSections.ts) and wire the
section's side-nav content in
[`SideNavigation.tsx`](./src/App/SideNavigation/SideNavigation.tsx).

## Redirects

Relocated or removed pages are redirected client-side with react-router
`<Navigate>` routes in [`src/App/App.tsx`](./src/App/App.tsx). Add a redirect
here whenever you move or delete a page that may have external inbound links.
