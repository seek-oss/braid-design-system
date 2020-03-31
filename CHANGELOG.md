# braid-design-system

## 24.4.1

### Patch Changes

- Divider: Rename 'standard' weight to 'regular'. ([#572](https://github.com/seek-oss/braid-design-system/pull/572))

## 24.4.0

### Minor Changes

- Divider: Add strong weight variant, e.g. `<Divider weight="strong">`. ([#569](https://github.com/seek-oss/braid-design-system/pull/569))

  Note that this also affects the `dividers` prop on both `Stack` and `Tiles`, e.g. `<Stack space="medium" dividers="strong">`. You can still pass a boolean prop if you want to render the default divider styling, e.g. `<Stack space="medium" dividers>`, so this change is backwards compatible.

## 24.3.1

### Patch Changes

- Update deprecated treat imports ([#566](https://github.com/seek-oss/braid-design-system/pull/566))

## 24.3.0

### Minor Changes

- Theme: Introduce the OCC theme ([#547](https://github.com/seek-oss/braid-design-system/pull/547))

  Adds support to build product for the OCC market. This theme is an adaption of the [Atomic Design System](https://occmundial.github.io/occ-atomic/).

## 24.2.0

### Minor Changes

- Inline: Support vertical alignment ([#562](https://github.com/seek-oss/braid-design-system/pull/562))

  **`Inline`**

  Vertical alignment is now supported via the `alignY` prop, e.g. `<Inline space="small" alignY="center">`.

  This also supports responsive values, e.g. `<Inline space="small" alignY={['center', 'top']}>`

- Box: Add `userSelect="none"`. ([#556](https://github.com/seek-oss/braid-design-system/pull/556))

  **`Box`**

  You can now set `userSelect` to `"none"` directly on `Box`.

  Since the default value of `user-select` in CSS is `"auto"`, you can make this value dynamic by conditionally setting it to `undefined`, e.g. `<Box userSelect={selectable ? undefined : 'none'}`.

## 24.1.3

### Patch Changes

- Textarea: Fix trailing new line highlight issue ([#555](https://github.com/seek-oss/braid-design-system/pull/555))

  **BUG FIXES**

  **`Textarea`**

  Fix for `highlightRanges`, where the highlights could get out of sync with the field value, if the value contained trailing new lines.

## 24.1.2

### Patch Changes

- Checkbox & Radio: Only add aria-describedby when a message is provided ([#542](https://github.com/seek-oss/braid-design-system/pull/542))

  **BUG FIXES**

  **`Checkbox` & `Radio`**

  Both of these inputs were previously always adding the `aria-describedby` attribute, while conditionally rendering the `message` only when provided. This meant that elements without a `message` would be indicating that they are described by an element that does not exist.

## 24.1.1

### Patch Changes

- Tiles: Honour column width for non-breaking content. ([#537](https://github.com/seek-oss/braid-design-system/pull/537))

  **BUG FIXES**

  **`Tiles`**

  The column width of a tile was not being honoured when its child elements contained non-wrapping/breaking content.

## 24.1.0

### Minor Changes

- MenuRenderer: Add support for configuring the menu offset from the trigger ([#532](https://github.com/seek-oss/braid-design-system/pull/532))

  **FEATURES**

  **`MenuRenderer`**

  Configure the offset distance between the menu trigger and menu using the `offsetSpace` prop. As with all space values in the system, this accepts a responsive prop.

  ```diff
   <MenuRenderer
  +  offsetSpace="small"
     trigger={(triggerProps, { open }) => (
       <button {...triggerProps}>Menu</button>
     )}
   >
     <MenuItem onClick={...}>Option</MenuItem>
   </MenuRenderer>
  ```

## 24.0.0

### Major Changes

- Add customisable `MenuRenderer` component ([#514](https://github.com/seek-oss/braid-design-system/pull/514))

  **BREAKING CHANGES**

  - Rename `OverflowMenuItem` to `MenuItem`.
  - Removed `type="link"` from `OverflowMenuItem` due to an accessibility issue with the approach (based on review of consumer usage, it did not seem to be used).

  **FEATURES**

  **`MenuRenderer`**

  Encapsulates all the behaviours of an accessible menu button, allowing consumers to define a custom `trigger` to open the menu. The trigger function receives two arguments:

  1. Props required for accessibility, including mouse/keyboard interactions
  2. Menu state object containing the `open` state.

  ```tsx
  <MenuRenderer
    trigger={(triggerProps, { open }) => (
      <button {...triggerProps}>Menu</button>
    )}
  >
    <MenuItem onClick={...}>Option</MenuItem>
  </MenuRenderer>
  ```

  **MIGRATION GUIDE**

  **`OverflowMenuItem`**

  Rename `OverflowMenuItem` to `MenuItem`.

  ```diff
   <OverflowMenu label="Overflow">
  -  <OverflowMenuItem onClick={...}>Option</OverflowMenuItem>
  +  <MenuItem onClick={...}>Option</MenuItem>
   </OverflowMenu>
  ```

  Changing the `type` is no longer supported due to an accessibility issue with the previous implementation. Please get in contact via Slack if you depended on this.

  ```diff
   <OverflowMenu label="Overflow">
  -  <OverflowMenuItem type="link" onClick={...}>Option</OverflowMenuItem>
  +  <MenuItem onClick={...}>Option</MenuItem>
   </OverflowMenu>
  ```

### Minor Changes

- Add BraidTestProvider component. ([#529](https://github.com/seek-oss/braid-design-system/pull/529))

  This is an alternative to `BraidProvider` for unit test environments. Note that, as the name implies, this should _not_ be used in production code.

  **MIGRATION GUIDE**

  In your unit tests, you can replace usage of `BraidProvider` with `BraidTestProvider`, omitting the theme.

  ```diff
  -<BraidProvider theme={wireframe}>
  +<BraidTestProvider>
  ```

  If for whatever reason your tests are relying on the presence of a specific theme, you can pass the name of the desired theme.

  ```diff
  -<BraidProvider theme={seekAnz}>
  +<BraidTestProvider themeName="seekAnz">
  ```

- Only show focus rings on buttons for keyboard navigation. ([#526](https://github.com/seek-oss/braid-design-system/pull/526))

  This impacts the following components:

  - `Button`
  - `ButtonRenderer`
  - `OverflowMenu`

  Browsers automatically show focus rings on buttons when clicking on them, even though (for our purposes, at least) they're undesirable from a visual design perspective and redudant from a UX perspective.

  We now automatically hide these focus rings if the user has moved their mouse, indicating that they're not navigating via the keyboard. However, to maintain keyboard accessibility, we reinstate these focus rings whenever the keyboard is used. Most typically, this ensures that you'll see focus rings when tabbing around the UI, even if you've previously used the mouse.

  **MIGRATION GUIDE**

  No public APIs are affected by this, but you may find that this causes unit test failues that look like this:

  > Warning: An update to X inside a test was not wrapped in act(...).

  If this is the case, you should replace `BraidProvider` in your tests with `BraidTestProvider`.

  ```diff
  -<BraidProvider theme={wireframe}>
  +<BraidTestProvider>
  ```

## 23.0.3

### Patch Changes

- 273ed8a: seekUnifiedBeta: Decrease touchable height to 44px

## 23.0.2

### Patch Changes

- 9890660: Hide webkit native clear field on search type inputs

## 23.0.1

### Patch Changes

- eae3496: Fix release of v23.0.0

## 23.0.0

### Major Changes

- 33139c8: Clone seekAnz theme to seekUnifiedBeta

  BREAKING CHANGE

  - `jobsDbRebrand` theme has been removed
