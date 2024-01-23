# @braid-design-system/docs-ui

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
