# @braid-design-system/docs-ui

## 4.0.1

### Patch Changes

- Migrate source code bundling to use `tsdown`. ([#1971](https://github.com/seek-oss/braid-design-system/pull/1971))

## 4.0.0

## 3.0.5

### Patch Changes

- Fixes a bug that caused versions 3.0.1 to 3.0.4 to be published with broken artifacts ([#1860](https://github.com/seek-oss/braid-design-system/pull/1860))

## 3.0.4

### Patch Changes

- Add `repository` info to `package.json` ([#1855](https://github.com/seek-oss/braid-design-system/pull/1855))

## 3.0.3

### Patch Changes

- Expand the peer dependency range to support React 19. ([#1822](https://github.com/seek-oss/braid-design-system/pull/1822))

## 3.0.2

### Patch Changes

- **LinkableHeading:** Simplify DOM elements and improve focus and scroll styling. ([#1810](https://github.com/seek-oss/braid-design-system/pull/1810))

## 3.0.1

### Patch Changes

- Apply import order rules internally ([#1689](https://github.com/seek-oss/braid-design-system/pull/1689))

- Remove default React import internally ([#1690](https://github.com/seek-oss/braid-design-system/pull/1690))

## 3.0.0

### Major Changes

- Bump Braid peer dependency to v33 ([#1628](https://github.com/seek-oss/braid-design-system/pull/1628))

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
