# braid-design-system

## 29.1.1

### Patch Changes

- **List, BulletList:** Limit width to 100% of parent ([#715](https://github.com/seek-oss/braid-design-system/pull/715))

## 29.1.0

### Minor Changes

- Add `List` component ([#710](https://github.com/seek-oss/braid-design-system/pull/710))

  `List` serves as a replacement for the `BulletList` and `Bullet` components which adds the following improvements:

  - Support for numbers and alpha characters as bullets
  - Support for custom start positions in number/alpha lists
  - Rich content support, e.g. list items with multiple paragraphs, nested lists, etc.

  _Note: The `BulletList` and `Bullet` components have been marked as deprecated and will be removed in an upcoming major release._

  **MIGRATION GUIDE**

  If you want to migrate from `BulletList` to `List`, you can simply replace `BulletList` with `List`, and `Bullet` with `Text`:

  ```diff
  -<BulletList>
  -  <Bullet>...</Bullet>
  -  <Bullet>...</Bullet>
  -  <Bullet>...</Bullet>
  -</BulletList>

  +<List>
  +  <Text>...</Text>
  +  <Text>...</Text>
  +  <Text>...</Text>
  +</List>
  ```

- **TextLink, TextLinkButton, TextLinkRenderer:** Default `weight` prop to `"regular"` when nested inside secondary text ([#714](https://github.com/seek-oss/braid-design-system/pull/714))

  As of [v28.13.0](https://github.com/seek-oss/braid-design-system/releases/tag/braid-design-system%4028.13.0), `TextLink` components that were nested inside secondary text would be `"weak"` by default, i.e. the same tone as the surrounding text and underlined. In practice, this turned out to be somewhat unpredictable behaviour for consumers. We've now reverted this to the previous behaviour of being `"regular"` weight by default, i.e. blue and medium font weight.

  Note that, if needed, you can still use the weaker link treatment within secondary text via an explicit prop override:

  ```jsx
  <Text tone="secondary">
    The TextLink in this sentence is{' '}
    <TextLink href="..." weight="weak">
      weak.
    </TextLink>
  </Text>
  ```

### Patch Changes

- **AccordionItem:** Prevent Safari from clipping label text ([#712](https://github.com/seek-oss/braid-design-system/pull/712))

## 29.0.1

### Patch Changes

- Throw meaningful error when using 'BraidProvider' in unit tests ([#707](https://github.com/seek-oss/braid-design-system/pull/707))

## 29.0.0

### Major Changes

- Improved trimming of white space around text ([#696](https://github.com/seek-oss/braid-design-system/pull/696))

  Migrated from our custom [Basekick](https://github.com/michaeltaranto/basekick) implementation to [🛶 Capsize](https://seek-oss.github.io/capsize/) to more accurately trim the white space around text. This will have subtle white space changes throughout the UI, but will largely just be improvements to the balance of space around text.

  **BREAKING CHANGES**

  **Heading/Text: Removed _LEGACY_SPACE_**

  The `_LEGACY_SPACE_` prop was provided to support consumers migrating to [`v14`](https://github.com/seek-oss/braid-design-system/releases/tag/v14.0.0) when the white space cropping and layout components were originally introduced. This has now been removed to allow us to further improve on our approach.

  Migrating off this prop will require consumers to perform the following steps:

  - Remove the usage of `_LEGACY_SPACE_` on a component
  - Conduct a visual review of the impact (component will appear closer to neighbouring elements)
  - Use existing layout components, e.g. `Stack`, to define/control the reintroduction of the desired space.

  Any issues, please reach out to the team as we are happy to help support consumers in migrating.

  **Theme Tokens: Text and Heading definitions**

  There have been strutural theme changes for `heading` and `text` definitions to support the defining of `capHeight` in the system. Previously a definition contained `size` that was the specified font size inclusive of surrounding white space.

  A definition now has `capHeight` which is representative of the visual height, supporting improved alignment with other elements like, icons etc.

  ```diff
  {
    text: {
      standard: {
        mobile: {
  -        size: 16,
  +        capHeight: 11.43,
          rows: 6
        }
      }
    }
  }
  ```

  This is not likely to affect consumers, unless these theme values are used explicitly in custom treat files.

  **Theme Tokens: Descender and Cap Height scales**

  Instead of the calculated values of `capHeightScale` and `decenderHeightScale`, a theme now accepts `fontMetrics`—a structure that represents the metadata from the font itself.

  ```diff
  -const capHeight = 24 * theme.typography.capHeightScale;
  +const capHeight = 24 * (theme.typography.fontMetrics.capHeight / theme.typography.fontMetrics.unitsPerEm);
  ```

  ```diff
  -const descender = 24 * theme.typography.decenderHeightScale;
  +const descender = 24 * (Math.abs(theme.typography.fontMetrics.descent) / theme.typography.fontMetrics.unitsPerEm);
  ```

### Patch Changes

- Fix type error in Textarea formatRanges ([#706](https://github.com/seek-oss/braid-design-system/pull/706))

## 28.14.0

### Minor Changes

- Add Notification icon ([#702](https://github.com/seek-oss/braid-design-system/pull/702))

- Add useBreakpoint ([#700](https://github.com/seek-oss/braid-design-system/pull/700))

  `useBreakpoint` will return the breakpoint the browser viewport currently falls within (mobile, tablet or desktop). As this can only be calculated in the browser, the value may also be null. Window resizing is supported.

  **Note:** Avoid use of this hook where possible. Responsive properties and media queries are a better option in most cases.

## 28.13.0

### Minor Changes

- **TextLink, TextLinkButton:** Add `weight` prop, add `weak` weight variant ([#697](https://github.com/seek-oss/braid-design-system/pull/697))

  You can now render links that are underlined while inheriting the tone and weight of its surrounding text.

  **EXAMPLE USAGE**

  ```jsx
  <Text>
    This sentence contains a{' '}
    <TextLink href="..." weight="weak">
      weak TextLink.
    </TextLink>
  </Text>
  ```

## 28.12.0

### Minor Changes

- **`seekBusiness` theme:** Inherit from new `apac` theme rather than the deprecated `seekAnz` theme ([#694](https://github.com/seek-oss/braid-design-system/pull/694))

  Just like the migration from `seekAnz` to `apac`, the visual changes are as follows:

  - The body background has changed from `#eeeeee` to `#f5f6f8`.
  - All grey colours now have a hint of blue.
  - Buttons and form fields have decreased in height from `48px` to `44px`.
  - Border radiuses have increased from `2px` to `4px`.

  It's possible that your application has custom design elements that depend on these older values in order to look correct. It's also possible that your application is part of a broader user journey that makes use of these older design standards. As a result, a **design review is highly recommended.**

### Patch Changes

- **Inline:** Prevent overlapping of preceding interactive components ([#692](https://github.com/seek-oss/braid-design-system/pull/692))

## 28.11.0

### Minor Changes

- **TextLinkButton:** Pass click event object to `onClick` handler ([#688](https://github.com/seek-oss/braid-design-system/pull/688))

  The `onClick` handler was previously called without any arguments. We now pass the click event object through as expected.

## 28.10.0

### Minor Changes

- **Button:** Add `aria-controls` and `aria-expanded` props ([#686](https://github.com/seek-oss/braid-design-system/pull/686))

- Add `Disclosure` component ([#686](https://github.com/seek-oss/braid-design-system/pull/686))

  This component serves as a replacement for `ToggleContent` from [SEEK Style Guide.](https://github.com/seek-oss/seek-style-guide)

  **SEEK STYLE GUIDE MIGRATION GUIDE**

  - `ToggleContent` has been renamed to `Disclosure`.
  - The `onShowMore` prop has been renamed to `onToggle`.
  - The spacing around the button has changed to follow [Braid's layout guidelines.](https://seek-oss.github.io/braid-design-system/foundations/layout) Design review is recommeded.

  ```diff
  -<ToggleContent onShowMore={(expanded) => { ... }} {...rest}>
  +<Disclosure onToggle={(expanded) => { ... }} {...rest}>
  ```

- **TextLinkButton:** Add `aria-controls`, `aria-describedby` and `aria-expanded` props ([#686](https://github.com/seek-oss/braid-design-system/pull/686))

## 28.9.0

### Minor Changes

- Add `TextLinkButton` component ([#683](https://github.com/seek-oss/braid-design-system/pull/683))

  Allows you to render a semantic button that looks like a `TextLink`.

  This component renders a native `span` element with an ARIA role of `button` so that, unlike a standard button element, text can wrap across multiple lines.

## 28.8.0

### Minor Changes

- Add IconLanguage ([#680](https://github.com/seek-oss/braid-design-system/pull/680))

## 28.7.0

### Minor Changes

- Introduce `apac` theme ([#676](https://github.com/seek-oss/braid-design-system/pull/676))

  The `seekAnz` theme has always been held back by the need to maintain visual consistency with [SEEK Style Guide.](https://github.com/seek-oss/seek-style-guide)

  In order to provide a path forwards, this release introduces a new `apac` theme, giving teams the opportunity to adopt newer design standards while still providing the `seekAnz` theme as a backwards compatibility layer.

  Consumers of the `seekAnz` theme are under no immediate pressure to migrate and both themes will be provided for the forseeable future. For now, this theme is aimed at those teams that are explicitly wanting to adopt newer design standards.

  The visual changes to `seekAnz` are as follows:

  - The body background has changed from `#eeeeee` to `#f5f6f8`.
  - All grey colours now have a hint of blue.
  - Buttons and form fields have decreased in height from 48px to 44px.
  - Border radiuses have increased from 2px to 4px.

  It's possible that your application has custom design elements that depend on these older values in order to look correct. It's also possible that your application is part of a broader user journey that makes use of these older design standards. As a result, a **design review is highly recommended.**

  This release also signifies that the `seekUnifiedBeta` theme is coming out of beta. Any references to this theme should be replaced with `apac`. As with `seekAnz`, both themes will be provided for the timebeing to give you an opportunity to migrate.

  **EXAMPLE USAGE**

  ```jsx
  import apac from 'braid-design-system/themes/apac';

  <BraidProvider theme={apac}>
  ```

  ```jsx
  <BraidLoadableProvider themeName="apac">
  ```

## 28.6.0

### Minor Changes

- Box: Add `body` background ([#677](https://github.com/seek-oss/braid-design-system/pull/677))

  You can now use the theme's body background on arbitrary elements within the page.

  **EXAMPLE USAGE**

  ```jsx
  <Box background="body">...</Box>
  ```

## 28.5.0

### Minor Changes

- MonthPicker: Support custom month and year labels ([#672](https://github.com/seek-oss/braid-design-system/pull/672))

  To support internationalisation, you can now pass the following props to `MonthPicker`:

  - **monthLabel** (`string`)
  - **yearLabel** (`string`)
  - **monthNames** (`string[]`)

## 28.4.0

### Minor Changes

- Expose docs theme ([#670](https://github.com/seek-oss/braid-design-system/pull/670))

  In order to support internal documentation sites that leverage Braid, we're now exposing a `docs` theme.

  ```js
  import docsTheme from 'braid-design-system/themes/docs';
  ```

## 28.3.0

### Minor Changes

- Add Tabs component ([#666](https://github.com/seek-oss/braid-design-system/pull/666))

  Follows the [WAI Aria Tabs Pattern.](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel)

  **EXAMPLE USAGE:**

  ```jsx
  <TabsProvider id="id">
    <Stack space="medium">
      <Tabs label="Label">
        <Tab>The first tab</Tab>
        <Tab>The second tab</Tab>
        <Tab badge={<Badge tone="positive">New</Badge>}>The third tab</Tab>
      </Tabs>
      <TabPanels>
        <TabPanel>...</TabPanel>
        <TabPanel>...</TabPanel>
        <TabPanel>...</TabPanel>
      </TabPanels>
    </Stack>
  </TabsProvider>
  ```

### Patch Changes

- Autosuggest: Fix suggestion double tap bug on iOS ([#668](https://github.com/seek-oss/braid-design-system/pull/668))

  Tapping a suggestion on iOS triggers the hover state rather than a selection, forcing users to tap a second time to select the suggestion.

  This is due to the way that iOS simulates mouse events in a touch environment. If the document is updated during a `mouseover`, `mouseenter` or `mousemove` event, the subsequent `click` event is never fired. While it may seem counterintuitive, this ensures that touch users are able to see hover effects that make changes to the page.

  To fix this, we now trigger our suggestion hover logic on `touchstart` so that the document doesn't change during mouse events, which then allows the `click` event to fire uninterrupted.

## 28.2.1

### Patch Changes

- Fix CSS ordering issue in production mode ([#664](https://github.com/seek-oss/braid-design-system/pull/664))

  Files within the top-level `themes` directory were not correctly marked as [side effects](https://webpack.js.org/guides/tree-shaking/) which meant that, when importing from `braid-design-system/themes/*`, the CSS order could differ between development and production.

## 28.2.0

### Minor Changes

- useToast: Add deduplication of toasts ([#662](https://github.com/seek-oss/braid-design-system/pull/662))

  Passing `key` when creating new toasts will now remove existing Toasts on screen with the same `key` before adding the new Toast. This is useful when a toast is created as part of a repeatable process that happens frequently.

  ```ts
  const showToast = useToast();

  showToast({
    message: 'There can only be one of me',
    tone: 'positive',
    key: 'deduped',
  });
  ```

## 28.1.0

### Minor Changes

- Inline: Add support for semantic list elements ([#654](https://github.com/seek-oss/braid-design-system/pull/654))

  As already featured on `Stack`, when rendering `<Inline component="ul|ol">`, its children will be rendered as `li` elements.

### Patch Changes

- Hide icons from screen readers that have no title ([#656](https://github.com/seek-oss/braid-design-system/pull/656))

  Icons are mostly used for decorative purposes and as such are now hidden from screen readers unless providing a `title`. In this case, an Icon is identified as an image.

## 28.0.0

### Major Changes

- **Alert, Notice:** Support rich content ([#647](https://github.com/seek-oss/braid-design-system/pull/647))

  **BREAKING CHANGE**

  Since `Alert` and `Notice` no longer render a `Text` component for you, you'll need to ensure that you're providing an enclosing `Text` element as a direct child.

  Alert:

  ```diff
  <Alert tone="positive">
  -  Success!
  +  <Text>Success!</Text>
  </Alert>
  ```

  Notice:

  ```diff
  <Notice tone="positive">
  -  Success!
  +  <Text>Success!</Text>
  </Notice>

  ```

  **WHY?**

  The [Alert](https://seek-oss.github.io/braid-design-system/components/Alert) and [Notice](https://seek-oss.github.io/braid-design-system/components/Notice) components were originally designed to render a single paragraph of text, but in practice we've found that there's a lot of demand for richer content, e.g. multiple paragraphs, bullet lists, etc.

  In order to support this level of flexibility, `Alert` and `Notice` no longer render an enclosing `Text` component for you. While this means you'll need a bit more boilerplate in simple cases, it also means you now have much more fine-grained control over the layout.

  For example, if you wanted to render an `Alert` using both `Text` and `BulletList` with `"medium"` space between them:

  ```jsx
  <Alert tone="positive">
    <Stack space="medium">
      <Text>The quick brown fox jumps over the lazy dog.</Text>
      <BulletList space="small">
        <Bullet>Bullet 1</Bullet>
        <Bullet>Bullet 2</Bullet>
      </BulletList>
    </Stack>
  </Alert>
  ```

  This same pattern applies to `Notice`:

  ```jsx
  <Notice tone="positive">
    <Stack space="medium">
      <Text>The quick brown fox jumps over the lazy dog.</Text>
      <BulletList space="small">
        <Bullet>Bullet 1</Bullet>
        <Bullet>Bullet 2</Bullet>
      </BulletList>
    </Stack>
  </Notice>
  ```

### Patch Changes

- **MonthPicker:** Fix internal `<Hidden screen>` deprecation warning ([#650](https://github.com/seek-oss/braid-design-system/pull/650))

  The `MonthPicker` component was mistakenly using `<Hidden screen>` to provide labels to screen readers rather than the new [`HiddenVisually`](https://seek-oss.github.io/braid-design-system/components/HiddenVisually) component. As a result, deprecation warnings were being logged in the console during development.

## 27.3.1

### Patch Changes

- Use [`assert`](https://www.npmjs.com/package/assert) for runtime assertions during development ([#624](https://github.com/seek-oss/braid-design-system/pull/624))

  **Please ensure you are on sku v10.3.0 or higher so that these assertions are [removed in production.](https://seek-oss.github.io/sku/#/./docs/extra-features?id=assertion-removal)** This ensures that these checks don't have a negative performance impact on users.

  The main driver for this change is to ensure that runtime design validation occurs within the [Braid Playroom.](https://seek-oss.github.io/braid-design-system/playroom)

  Playroom is built in production mode to maximise performance, but this means that our custom development-time validation code isn't being executed. As a result, it's becoming increasingly common for prototypes to contain invalid code that only throws an error when transposed into a proper development environment. This change ensures that invalid designs are caught as early as possible.

## 27.3.0

### Minor Changes

- Improve field border contrast ratio ([#638](https://github.com/seek-oss/braid-design-system/pull/638))

  To improve accessibility, field borders have been darkened for the following themes:

  - `seekAnz`
  - `seekBusiness`
  - `seekUnifiedBeta`
  - `catho` (based on referencing Quantum)

  Since this is a noticeable visual change that may introduce inconsistincies with custom design elements, **design review is recommended.**

### Patch Changes

- Toggle: Hide border on dark backgrounds ([#638](https://github.com/seek-oss/braid-design-system/pull/638))

  In order to reduce visual noise, similar to other fields, we now hide the border on `Toggle` elements when rendered on dark backgrounds.

- Dropdown: Lighten chevron when disabled ([#638](https://github.com/seek-oss/braid-design-system/pull/638))

  The visual prominence of the chevron icon is now lower when `disabled` is set to `true`.

- Autosuggest: Apply darker background when disabled ([#638](https://github.com/seek-oss/braid-design-system/pull/638))

  When disabled, `Autosuggest` elements didn't have the same dark background as other disabled fields. This has now been fixed.

## 27.2.0

### Minor Changes

- Add `HiddenVisually` component ([#643](https://github.com/seek-oss/braid-design-system/pull/643))

  You can now easily provide content to assistive technologies while hiding it from the screen.

  ```js
  <Text>
    This content is available to everyone.
    <HiddenVisually>
      This content is only available to screen readers.
    </HiddenVisually>
  </Text>
  ```

### Patch Changes

- Hidden: Infer `inline` prop when nested inside Text or Heading ([#643](https://github.com/seek-oss/braid-design-system/pull/643))

  Currently, if you want to hide content using the `Hidden` component in an inline context (e.g. hiding part of a sentence), you need to remember to set the `inline` boolean prop.

  Since most usages of this feature are within text, we now infer this for you automatically within the context of a `Text` or `Heading` component.

  **MIGRATION GUIDE**

  This change is not strictly required, but you can now clean up your code like this:

  ```diff
  -<Text>The end of this sentence is... <Hidden inline below="tablet">hidden on mobile.</Hidden>
  +<Text>The end of this sentence is... <Hidden below="tablet">hidden on mobile.</Hidden>
  ```

## 27.1.1

### Patch Changes

- MonthPicker: Preserve touchable height on iOS ([#641](https://github.com/seek-oss/braid-design-system/pull/641))

  Fix for the native variant of `MonthPicker` having a reduced height on iOS when no value is provided.

## 27.1.0

### Minor Changes

- Stack: Add support for Hidden stack items ([#632](https://github.com/seek-oss/braid-design-system/pull/632))

  You can now responsively hide stack items using the [`Hidden`](https://seek-oss.github.io/braid-design-system/components/Hidden) component while maintaining the correct spacing between all visible elements.

  For example, if you wanted to hide a stack item on mobile:

  ```jsx
  <Stack space="small">
    <Text>...</Text>
    <Hidden below="tablet">
      <Text>...</Text>
    </Hidden>
    <Text>...</Text>
  </Stack>
  ```

## 27.0.0

### Major Changes

- seekAnz, seekBusiness, seekUnifiedBeta: Change critical colour to red ([#634](https://github.com/seek-oss/braid-design-system/pull/634))

  As part of the colour uplift work, this updates the `critical` colour in the `seekAnz` (and subsequently `seekBusiness` and `seekUnifiedBeta`) theme from pink to red. This brings the theme into line with our colour usage guide documented under [Tones](https://seek-oss.github.io/braid-design-system/foundations/tones) on the website.

  **BREAKING CHANGE**
  While not technically a breaking change, you may want to review usage of the `critical` tone in your application, particularly in custom scenarios, for example:

  #### Usage of `background` props on `Box`

  ```tsx
  <Box background="critical">...</Box>
  ```

  or

  ```tsx
  <Box background="criticalLight">...</Box>
  ```

  #### Usage of `tone` props on `Icon` or `Text`

  ```tsx
  <Icon tone="critical">...</Icon>
  ```

  or

  ```tsx
  <Text tone="critical">...</Text>
  ```

## 26.0.0

### Major Changes

- Stack, Inline, Tiles: Flatten fragments when provided as direct children ([#626](https://github.com/seek-oss/braid-design-system/pull/626))

  The following patterns should now work as you might have previously expected:

  ```jsx
  <Stack space="small">
    <React.Fragment>
      <Text>...</Text>
      <Text>...</Text>
    </React.Fragment>
    <Text>...</Text>
  </Stack>
  ```

  ```jsx
  <Inline space="small">
    <React.Fragment>
      <Badge>...</Badge>
      <Badge>...</Badge>
    </React.Fragment>
    <Badge>...</Badge>
  </Inline>
  ```

  ```jsx
  <Tiles space="small" columns={3}>
    <React.Fragment>
      <Card>...</Card>
      <Card>...</Card>
    </React.Fragment>
    <Card>...</Card>
  </Tiles>
  ```

  **BREAKING CHANGE**

  While _highly_ unlikely, if you were using a fragment to group unspaced sibling nodes within a `Stack`, `Inline` or `Tiles` element, you'll need to replace it with a `Box`, for example:

  ```diff
  <Stack space="small">
    ...
  -  <React.Fragment>
  +  <Box>
      <Box>...</Box>
      <Box>...</Box>
  -  <React.Fragment>
  +  </Box>
    ...
  </Stack>
  ```

  ```diff
  <Inline space="small">
    ...
  -  <React.Fragment>
  +  <Box>
      <Box>...</Box>
      <Box>...</Box>
  -  <React.Fragment>
  +  </Box>
    ...
  </Inline>
  ```

  ```diff
  <Tiles space="small" columns={3}>
    ...
  -  <React.Fragment>
  +  <Box>
      <Box>...</Box>
      <Box>...</Box>
  -  <React.Fragment>
  +  </Box>
    ...
  </Tiles>
  ```

## 25.7.1

### Patch Changes

- TextField, Autosuggest, PasswordField: Improved support for field buttons with browser extensions. ([#625](https://github.com/seek-oss/braid-design-system/pull/625))

  The implementation of internal spacing within fields has been adjusted to better support browser extensions for password managers.

  Affects the following components:

  - PasswordField: visibility toggle button
  - TextField: clear button
  - Autosuggest: clear button

- Textarea: Fix border radius on dark backgrounds ([#625](https://github.com/seek-oss/braid-design-system/pull/625))

  When rendering a `Textarea` on a background other than white, the field background extended out beyond the field's border radius.

- TextField, Autosuggest, PasswordField: Prevent field buttons firing on right click ([#625](https://github.com/seek-oss/braid-design-system/pull/625))

  Field buttons, such as clear and password visibility toggle, fire on mouse down to ensure focus is retained on the relevant field. We now ensure that the button only recognises left mouse button clicks.

  Affects the following components:

  - PasswordField: visibility toggle button
  - TextField: clear button
  - Autosuggest: clear button

## 25.7.0

### Minor Changes

- Add zero opacity to Box ([#621](https://github.com/seek-oss/braid-design-system/pull/621))

  Provide zero opacity on `Box` as an optimisation.

  Example usage:

  ```tsx
  <Box opacity={0}>...</Box>
  ```

- Add PasswordField component ([#620](https://github.com/seek-oss/braid-design-system/pull/620))

  Provides a password field complete with visibility toggle to switch between a masked and unmasked field value.

## 25.6.0

### Minor Changes

- Autosuggest: Support suggestion descriptions ([#613](https://github.com/seek-oss/braid-design-system/pull/613))

  You can now provide a `description` as part of each suggestion item, e.g.:

  ```jsx
  <Autosuggest
    suggestions={[
      {
        text: 'Apples',
        value: 123,
        description: 'Juicy and delicious',
      },
    ]}
    {...rest}
  />
  ```

## 25.5.1

### Patch Changes

- Autosuggest: Don't select suggestions onBlur when using automaticSelection and suggestions are closed ([#609](https://github.com/seek-oss/braid-design-system/pull/609))

## 25.5.0

### Minor Changes

- AccordionItem: Support `onToggle` prop without `expanded` to allow tracking in uncontrolled mode ([#605](https://github.com/seek-oss/braid-design-system/pull/605))

  For example:

  ```jsx
  <AccordionItem
    id="id"
    label="Label"
    onToggle={expanded => trackSomething(expanded)}
  >
    ...
  </AccordionItem>
  ```

## 25.4.1

### Patch Changes

- Autosuggest: When using the `automaticSelection` prop, we now prevent automatic selection from ocurring if the input value hasn't changed since focusing the field ([#601](https://github.com/seek-oss/braid-design-system/pull/601))

## 25.4.0

### Minor Changes

- Text: Add data attribute support ([#596](https://github.com/seek-oss/braid-design-system/pull/596))

- Heading: Add data attribute support ([#596](https://github.com/seek-oss/braid-design-system/pull/596))

## 25.3.0

### Minor Changes

- Inline: Add `collapseBelow` and `reverse` props. ([#593](https://github.com/seek-oss/braid-design-system/pull/593))

  Similar to [Columns](https://seek-oss.github.io/braid-design-system/components/Columns), you can now responsively collapse an `Inline` into a vertical stack on mobile with the `collapseBelow` prop.

  For example, if you want items to stack vertically below tablet:

  ```js
  <Inline space="small" collapseBelow="tablet">
    ...
  </Inline>
  ```

  Also similar to `Columns`, you can now reverse the order of items horizontally. This is particularly useful when combined with `align="right"`.

  For example, if you're rendering buttons and you want your primary action on the right on desktop, but at the top on mobile:

  ```js
  <Inline space="small" collapseBelow="tablet" align="right" reverse>
    <Button>Primary action</Button>
    <Button weight="weak">Secondary action</Button>
  </Inline>
  ```

- Columns: Add `align` prop ([#593](https://github.com/seek-oss/braid-design-system/pull/593))

  When collapsing columns into a vertical stack on smaller screens, you can now control the alignment.

  For example, if you want your columns to be horizontally centred on mobile:

  ```js
  <Columns space="small" collapseBelow="tablet" align="center">
    <Column>...<Column>
    <Column>...<Column>
    <Column>...<Column>
  </Columns>
  ```

  As a side effect, this also means that you can control the alignment of columns when the total width doesn't reach 100%.

  For example:

  ```js
  <Columns space="small" align="center">
    <Column width="1/3">...<Column>
    <Column width="1/3">...<Column>
  </Columns>
  ```

- Add TextDropdown component ([#594](https://github.com/seek-oss/braid-design-system/pull/594))

  An inline dropdown that can be used as part of a sentence or as an
  alternative to `Dropdown`, outside of a more structured form.

  Inherits its styling from the parent typographic component, and as such
  must be used nested within either a `Text` or `Heading` component.

  Example usage:

  ```tsx
  const [jobTitle, setJobTitle] = useState('Developer');

  <Text>
    <TextDropdown
      id="jobTitle"
      label="Job Title"
      value={jobTitle}
      onChange={setJobTitle}
      options={['Developer', 'Designer', 'Product Manager']}
    />
  </Text>;
  ```

### Patch Changes

- Hide native focus rings on Box elements during mouse interactions ([#589](https://github.com/seek-oss/braid-design-system/pull/589))

## 25.2.0

### Minor Changes

- Theme: Introduce the Catho theme ([#550](https://github.com/seek-oss/braid-design-system/pull/550))

  Adds support to build product for the Catho market. This theme is an adaption of the [Quantum Design System](https://catho.github.io/quantum).

- Add `Accordion` and `AccordionItem` components ([#587](https://github.com/seek-oss/braid-design-system/pull/587))

  Example usage:

  ```jsx
  <Accordion>
    <AccordionItem id="item_1" label="Accordion item 1">
      <Text>Accordion item content</Text>
    </AccordionItem>
    <AccordionItem id="item_2" label="Accordion item 2">
      <Text>Accordion item content</Text>
    </AccordionItem>
    <AccordionItem id="item_3" label="Accordion item 3">
      <Text>Accordion item content</Text>
    </AccordionItem>
  </Accordion>
  ```

  Accordions manage their own state internally by default. If you'd like to take control of them yourself, you can pass an `expanded` prop to `AccordionItem` as well as an `onToggle` callback.

  ```jsx
  const [expanded, setExpanded] = useState(false);

  <AccordionItem
    id="id"
    label="Accordion item"
    expanded={expanded}
    onToggle={setExpanded}
  >
    <Text>Accordion item content</Text>
  </AccordionItem>;
  ```

- Box: Add support for `outline="none"` ([#587](https://github.com/seek-oss/braid-design-system/pull/587))

### Patch Changes

- Drop lodash usage to decrease bundle size. ([#585](https://github.com/seek-oss/braid-design-system/pull/585))

  This directly affects `MonthPicker` and any components using the `data` prop:

  - All field components
  - OverflowMenu
  - MenuRenderer
  - Button

## 25.1.0

### Minor Changes

- Add ButtonLink component ([#581](https://github.com/seek-oss/braid-design-system/pull/581))

  You can now easily render semantic links that look like [Button](https://seek-oss.github.io/braid-design-system/components/Button) elements without needing to use the lower level [ButtonRenderer](https://seek-oss.github.io/braid-design-system/components/ButtonRenderer).

  This component renders a native `a` element by default, but this can be customised via the `linkComponent` prop on [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider).

  Example usage:

  ```jsx
  <ButtonLink href="#" weight="strong">
    Submit
  </ButtonLink>
  ```

## 25.0.0

### Major Changes

- BraidProvider: Add `linkComponent` prop to customise link rendering. ([#574](https://github.com/seek-oss/braid-design-system/pull/574))

  If you'd like to customise the technical implementation of all `Link` and `TextLink` components from Braid, you can now pass a custom component to the `linkComponent` prop on `BraidProvider`. For example, if you wanted to ensure that all relative links are [React Router](https://reacttraining.com/react-router/) links:

  ```tsx
  import React from 'react';
  import { Link as ReactRouterLink } from 'react-router-dom';
  import { BraidProvider, LinkComponent } from 'braid-design-system';
  import wireframe from 'braid-design-system/themes/wireframe';

  // First create the custom link implementation:
  const CustomLink: LinkComponent = ({ href, ...restProps }) =>
    href[0] === '/' ? (
      <ReactRouterLink to={href} {...restProps} />
    ) : (
      <a href={href} {...restProps} />
    );

  // Then pass it to BraidProvider:
  export const App = () => (
    <BraidProvider theme={wireframe} linkComponent={CustomLink}>
      ...
    </BraidProvider>
  );
  ```

  In order to make your custom link component available for any type of link (not just usages of `TextLink`), this release introduces a new `Link` component which renders an unstyled `a` tag by default.

  **BREAKING CHANGES**

  - `TextLink` now requires an `href` prop. Even though this is unlikely to affect anyone (a `TextLink` without an `href` isn't terribly useful), this is still technically a breaking change.

    However, if you find an instance of `TextLink` that you think _shouldn't_ have an `href`, this is a sign that it's not _actually_ a link and you should use a [`TextLinkRenderer`](https://seek-oss.github.io/braid-design-system/components/TextLinkRenderer) instead. Unfortunately, because there's no way for us to know the semantics of your usage ahead of time, we're unable to provide a migration guide, so you'll need to be mindful of how this might impact accessibility.

  - The props for `TextLink` now extend React's `AnchorHTMLAttributes<HTMLAnchorElement>` type rather than `AllHTMLAttributes<HTMLAnchorElement>`. While highly unlikely, this may cause type errors if you've passed props to `TextLink` that aren't considered to be valid anchor props.

### Patch Changes

- Themes: Fix OCC theme export ([#576](https://github.com/seek-oss/braid-design-system/pull/576))

  The `braid-design-system/themes/occ` theme export is now exposed correctly.

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
