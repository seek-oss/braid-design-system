# @braid-design-system/docs-ui

## 2.2.0

### Minor Changes

- **LinkableHeading:** Add `badge` support ([#1574](https://github.com/seek-oss/braid-design-system/pull/1574))

  **EXAMPLE USAGE:**

  ```jsx
  <LinkableHeading level="3" badge={<Badge tone="caution">Deprecated</Badge>}>
    Heading
  </LinkableHeading>
  ```

## 2.1.1

### Patch Changes

- Update Crackle CLI dependency ([#1480](https://github.com/seek-oss/braid-design-system/pull/1480))

- **MenuButton:** Improve virtual touch target positioning for narrow elements ([#1493](https://github.com/seek-oss/braid-design-system/pull/1493))

  To maintain accessibility for smaller interactive elements, Braid uses a virtual touch target to maintain the minimum hit area.
  This change ensures that the virtual element is always centered to the visual target, in particular when the width of the visual target is narrower than the minimum hit area.

## 2.1.0

### Minor Changes

- Add optional `logoHref` prop to `HeaderNavigation`, which allows you to customise the route when clicking the `Logo`. ([#1435](https://github.com/seek-oss/braid-design-system/pull/1435))

## 2.0.0

### Minor Changes

- Add `HeaderNavigation` component, used for showing site Logo, theme picker, and displaying the `MenuButton` component on smaller screens. ([#1429](https://github.com/seek-oss/braid-design-system/pull/1429))

## 1.2.0

### Minor Changes

- Add `SideNavigationSection` component used to create groups of links in the side bar. ([#1415](https://github.com/seek-oss/braid-design-system/pull/1415))

## 1.1.0

### Minor Changes

- Add `MenuButton` component used to show and hide the navigation sidebar on mobile devices. ([#1409](https://github.com/seek-oss/braid-design-system/pull/1409))

### Patch Changes

- Provide correct types according to https://arethetypeswrong.github.io ([#1413](https://github.com/seek-oss/braid-design-system/pull/1413))

## 1.0.0

### Major Changes

- Create new package named `docs-ui`. ([#1401](https://github.com/seek-oss/braid-design-system/pull/1401))

  This package will contain components for building documentation sites with a consistent user experience to the [Braid Design System] website.

  Currently, this package contains:

  - A single component: `LinkableHeading`.
  - A README.md for documenting this package and all its components.

  [Braid Design System]: https://seek-oss.github.io/braid-design-system/

### Patch Changes

- **LinkableHeading:** Remove space character between heading and link icon, instead use only margin value. ([#1403](https://github.com/seek-oss/braid-design-system/pull/1403))
