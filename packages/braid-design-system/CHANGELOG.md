# braid-design-system

## 32.13.0

### Minor Changes

- **seekJobs:** Update `formAccent` colour ([#1387](https://github.com/seek-oss/braid-design-system/pull/1387))

  The `formAccent` tone, used through our form fields and buttons, is being updated to a derivative of the SEEK brand blue.

  As this update only relates to the `seekJobs` theme, consumers of other themes will not be affected.

## 32.12.5

### Patch Changes

- The Braid Provider contains some code to check that it's running in a browser context (otherwise a BraidTestProvider should be used). ([#1382](https://github.com/seek-oss/braid-design-system/pull/1382))

  Part of this check was looking to see if there was a `navigator` object, which was not available in Node.
  If there were, it would check the `userAgent` to determine if it was inside jsdom.

  Node 21 has a `navigator` object, but it doesn't have a `userAgent` property, so this check was failing (cannot read property 'indexOf' of undefined).

  The "are we in JSDom" check in the BraidProvider has now been reworked slightly to account for the potentially existing but empty `navigator` object.

## 32.12.4

### Patch Changes

- **TextLink, TextLinkButton:** Ensure consistent underline thickness on weak links ([#1380](https://github.com/seek-oss/braid-design-system/pull/1380))

  A subtle bug affecting weak links was resulting in a change in underline thickness on hover.
  This bug has been fixed such that weak links now always have the same underline thickness regardless of hover state.

## 32.12.3

### Patch Changes

- Fix an arbitrary code execution [vulnerability](https://github.com/seek-oss/braid-design-system/security/dependabot/25) ([#1377](https://github.com/seek-oss/braid-design-system/pull/1377))

## 32.12.2

### Patch Changes

- **TooltipRenderer:** Re-evaluate position when `trigger` or `children` changes ([#1374](https://github.com/seek-oss/braid-design-system/pull/1374))

  Fixes an issue where the tooltip would not re-evaluate its position when the `trigger` or `children` prop changed while the tooltip was already open.

## 32.12.1

### Patch Changes

- When animating an SVG circle, it seems that the width changes slightly, which on Loader was causing the right-most one to push off the boundaries of the SVG View Box. ([#1370](https://github.com/seek-oss/braid-design-system/pull/1370))

  This has been fixed so clipping should no longer occur.

## 32.12.0

### Minor Changes

- **Button, ButtonLink:** Default to neutral ghost in non-legacy themes ([#1363](https://github.com/seek-oss/braid-design-system/pull/1363))

  By default, a button now has a `neutral` tone and uses the `ghost` variant, allowing the visual prominence to be increased or decreased as required, enabling colour to be applied as accents and with purpose, rather than by default.

  ```jsx
  <Button />
  // => tone="neutral" & variant="ghost"
  ```

  To compliment this, when a `tone` is purposefully applied, the default variant becomes `solid` to maximise its impact — allowing the visual prominence to be reduced as needed.

  ```jsx
  <Button tone="brandAccent" />
  // => tone="brandAccent" & variant="solid"
  ```

  ### No change for `apac` and `seekBusiness` consumers

  Given the fundamental change in approach to colour and usage of such a core component, this change has been isolated to newer themes and **does not impact `apac` and `seekBusiness` consumers**.

  These themes will continue to have a tone of `formAccent` and a `solid` variant by default, allowing consumers to adopt this new approach as part of the design uplift when migrating to an updated theme, e.g. `seekJobs`.

## 32.11.0

### Minor Changes

- **Button, ButtonLink:** Provide `formAccent` as the name for undefined tone ([#1359](https://github.com/seek-oss/braid-design-system/pull/1359))

  Formalise the name of the `undefined` tone as `formAccent`, making it more discoverable as an accent available for increased prominence.

  Note: Consumers should only apply this tone where an action should be emphasized explicitly. The `undefined` value is still valid for buttons that should follow the default button style of the theme.

  **EXAMPLE USAGE:**

  ```jsx
  <Button tone="formAccent">...</Button>
  ```

## 32.10.0

### Minor Changes

- **seekJobs:** Change link colour to neutral ([#1347](https://github.com/seek-oss/braid-design-system/pull/1347))

  Changing the `foregroundColor` token for `link` on the `seekJobs` theme to align with neutral text.
  Our different approach to using colour has seen links dialled back to compete less with other messaging and CTAs.

  This affects the following usages across the system:

  - `vars.foregroundColor.link`
  - `Text` (using `tone="link"`)
  - `TextLink` and (`TextLinkButton`)

### Patch Changes

- **TextLink, TextLinkButton:** Underline regular links in non-legacy themes ([#1347](https://github.com/seek-oss/braid-design-system/pull/1347))

  To improve affordance beyond primarily being colour, a `TextLink` (and `TextLinkButton`) will now always be underlined, in line with [best practice accessibility guidelines].

  Given this has not been the case previously, this decision has been applied to non-legacy themes only, as such only affecting consumers of `seekJobs`, `docs` and `wireframe`.

  [best practice accessibility guidelines]: https://webaim.org/techniques/hypertext/link_text#appearance

- **TextLink, TextLinkButton:** Apply themed focus outline ([#1347](https://github.com/seek-oss/braid-design-system/pull/1347))

  Apply a focus outline using the relevant focus attributes from the theme, bringing `TextLink` (and `TextLinkButton`) into line with the focus treatment applied to rest of the system.

- **TextLink, TextLinkButton:** Reduce `weak` links to `regular` font weight ([#1347](https://github.com/seek-oss/braid-design-system/pull/1347))

  The font weight of a `weak` link is now reduced to `regular` weight, reducing the link's visual prominence in addition to following the neutral text colour.

- **docs:** Lighten soft background tokens ([#1347](https://github.com/seek-oss/braid-design-system/pull/1347))

  Lighten the `brandAccentSoft` and `formAccentSoft` background tokens for the `docs` theme.

- **Dialog, Drawer:** Adapt max height to available viewport space ([#1352](https://github.com/seek-oss/braid-design-system/pull/1352))

  Make use of the new [dynamic viewport units] for applying a max height to modal elements such as `Dialog` and `Drawer`. These new units take into account dynamic browser toolbars that expand and contract as the user scrolls, ensuring the browser interface never obscures the web site content.

  Fix also incorporates fallback for older browsers to use regular viewport units.

  [Dynamic Viewport units]: https://web.dev/viewport-units/

## 32.9.2

### Patch Changes

- Update dependencies for codemod ([#1353](https://github.com/seek-oss/braid-design-system/pull/1353))

## 32.9.1

### Patch Changes

- **Drawer:** Prevent close button protruding in left position ([#1351](https://github.com/seek-oss/braid-design-system/pull/1351))

  Fixes an issue where the close button could protrude from a `Drawer`.
  This was only visible when setting `position` to `left` and between a small range of screen widths — above 660px (`small` content width) and below 768px (`tablet` breakpoint).

- **RadioGroup:** Ensure `reserveMessageSpace` prevents layout shift correctly ([#1349](https://github.com/seek-oss/braid-design-system/pull/1349))

  Consider the `reserveMessageSpace` prop as well as `message` when conditionally applying internal padding between radio list and field message.

## 32.9.0

### Minor Changes

- **Page:** Add component ([#1343](https://github.com/seek-oss/braid-design-system/pull/1343))

  The new `Page` component establishes a consistent page-level layout by managing the relationship between the footer and the main content.

  By default, for pages with limited content the `footer` will at a minimum be placed at the bottom of the screen, pushed beyond as the page content grows.

  For pages with dynamic content, it is recommended to place the footer out of view by setting the `footerPosition` prop to `belowFold` to prevent the footer from popping in and out of view when the page content changes, e.g. toggling between a loading indicator and content.

  **EXAMPLE USAGE:**

  ```jsx
  <Page footer={<Footer />}>
    <Header />
    {/* page content... */}
  </Page>
  ```

### Patch Changes

- **TabPanel:** Align focus outline radius to scale ([#1345](https://github.com/seek-oss/braid-design-system/pull/1345))

  Increase the radius of the focus outline to better align to the scale. A `TabPanel` is typically a "large" element containing entire sections of UI, so using the `large` radius to better align to the radius scale.

## 32.8.3

### Patch Changes

- **apac, seekBusiness:** Increase `medium` font weight ([#1331](https://github.com/seek-oss/braid-design-system/pull/1331))

  The unicode range of Thai characters is not satisfied by the preferred fonts specified for the `apac` theme, resulting in these characters falling through and being rendered by `sans-serif` — which applies a platform-specific font.
  These system fonts do not have support for the semi-bold weight chosen for `medium`, resulting in the visual weight of `medium` text being rounded down to `regular` — providing no differentiation relative to other text in the UI.

  In addition, due to both `Helvetica` and `Arial` not having a `medium` weight, these fallbacks also have the same problem, even for Latin characters.

  By increasing the value of `medium`, it will now round to `strong` when the rendered font cannot satisfy `medium` — preventing the loss of hierarchy.

  This only affects apac-based themes, namely `apac` and `seekBusiness`.

## 32.8.2

### Patch Changes

- **Drawer, Dialog:** Increase gutter around close button ([#1328](https://github.com/seek-oss/braid-design-system/pull/1328))

  Fix for a regression where the gutter around the close button was reduced — resulting in visually clashing with the content when scrolling.

## 32.8.1

### Patch Changes

- **seekJobs:** Update visited link colour tokens ([#1323](https://github.com/seek-oss/braid-design-system/pull/1323))

  Darken the visited link colour tokens within the `seekjobs` theme.

## 32.8.0

### Minor Changes

- **IconEnlarge:** Add new component ([#1320](https://github.com/seek-oss/braid-design-system/pull/1320))

  **EXAMPLE USAGE:**

  ```jsx
  <IconEnlarge />
  ```

  The `active` prop can be used to toggle the icon into the "reduce" state:

  ```jsx
  <IconEnlarge active={true} />
  ```

## 32.7.0

### Minor Changes

- **Drawer, Dialog:** Support validation blocking closure of modal ([#1318](https://github.com/seek-oss/braid-design-system/pull/1318))

  To prevent a `Dialog` or `Drawer` from closing, e.g. due to validation, the `onClose` function can now return **false**.

  **EXAMPLE USAGE:**

  ```jsx
  <Drawer
    open={open}
    onClose={() => {
      const valid = runValidation();
      if (!valid) {
        return false;
      }

      setOpen(false);
    }}
  />
  ```

### Patch Changes

- **TooltipRenderer:** Fix arrow overlapping tooltip corner radius ([#1316](https://github.com/seek-oss/braid-design-system/pull/1316))

  Fix for an edge case where the arrow on a small tooltip could the overlap the corner radius of the tooltip.

- **Drawer:** Darken backdrop in dark mode ([#1316](https://github.com/seek-oss/braid-design-system/pull/1316))

  Increase the weight of the backdrop in dark mode to ensure the content is suffiently obscured.

- **Drawer:** Fix entrance animation from `left` position ([#1316](https://github.com/seek-oss/braid-design-system/pull/1316))

  Apply the entrance animation correctly for a `Drawer` using the `left` position.
  Also reduced the horizontal overshoot for the transition for a smoother feel.

- **Drawer:** Increase space between `title` and `description` on tablet ([#1316](https://github.com/seek-oss/braid-design-system/pull/1316))

- **Drawer:** Align horizontal gutters with PageBlock ([#1316](https://github.com/seek-oss/braid-design-system/pull/1316))

  Given a `Drawer` is full width on a mobile device, applying the same horizontal gutter rules as `PageBlock` makes sense.
  This ensures content on a mobile will have the same available space whether its in the page, or inside a `Drawer`.

## 32.6.0

### Minor Changes

- **PageBlock:** Add new component ([#1307](https://github.com/seek-oss/braid-design-system/pull/1307))

  Provides a top-level page container, constraining the content width (using `ContentBlock`) while establishing common screen gutters on smaller devices.

  **EXAMPLE USAGE:**

  ```jsx
  <PageBlock width="large">...</PageBlock>
  ```

- **Button, TextLinkButton:** Add `aria-label` support ([#1304](https://github.com/seek-oss/braid-design-system/pull/1304))

  Provide support for `aria-label`, enabling additional context to be given to assistive technologies where context is typically visual.

  **EXAMPLE USAGE:**

  ```jsx
  <Button aria-label="Save job">Save</Button>
  ```

- **IconMessage:** Add new component ([#1303](https://github.com/seek-oss/braid-design-system/pull/1303))

  Add new `IconMessage` component.

  **EXAMPLE USAGE:**

  ```jsx
  <IconMessage />
  ```

## 32.5.0

### Minor Changes

- Hide field borders in dark containers ([#1294](https://github.com/seek-oss/braid-design-system/pull/1294))

  Reduce visual noise when a form field is displayed in a dark container by hiding the default border.
  As fields are light on light backgrounds, the border is used to delineate its bounds against the container, which is not relevant in a dark container.

- Add `seekJobs` theme ([#1281](https://github.com/seek-oss/braid-design-system/pull/1281))

  The `seekJobs` theme encapsulates the system changes necessary to apply and deliver the updated visual design language for SEEK Jobs.
  Through the development of this theme, we have been able improve the fidelity of the various scales in our tokens, while also ensuring that the tokens themselves are consumed and applied more consistently throughout the system itself.

  **EXAMPLE USAGE:**

  ```tsx
  import seekJobs from 'braid-design-system/themes/seekJobs';

  <BraidProvider theme={seekJobs}>...</BraidProvider>;
  ```

  **MIGRATION**

  Consumers of the `apac` theme are not recommended to migrate independently. The `seekJobs` theme represents an uplifted visual identity that is part of a wider visual uplift.
  Instead, we’ll be guiding the initial teams through a staged migration in coordination with the centralised team process.
  There are some differences in how certain concepts are applied, whether it's the space scale, or `Card` usage, etc., and we will be documenting these in due course.

  If you would like to talk about migrating, please reach out to us in our **#braid-support** channel on slack.

## 32.4.1

### Patch Changes

- **Text, Heading:** Only show truncate deprecation message when true ([#1289](https://github.com/seek-oss/braid-design-system/pull/1289))

  Only show the truncate deprecation message when `truncate` is provided and set to `true`

- **TextLink, TextLinkButton:** Improve underline position for wrapping text ([#1290](https://github.com/seek-oss/braid-design-system/pull/1290))

  Refine the underline position to be consistent across the whole typographic hierarchy, ensuring it does not interfere with wrapping lines of text.

## 32.4.0

### Minor Changes

- **Text, Heading:** Add `maxLines` support ([#1286](https://github.com/seek-oss/braid-design-system/pull/1286))

  Provide support for limiting the number of lines shown by a `Text` or `Heading` component.

  **EXAMPLE USAGE:**

  ```jsx
  <Text maxLines={3}>...</Text>
  ```

  **MIGRATION:**

  With the addition of this feature, the `truncate` prop is now deprecated and will be removed in a future release.
  Existing consumers should start migrating as below:

  ```diff
   <Text
  -   truncate
  +   maxLines={1}
   />
  ```

- **Card:** Add full height support ([#1285](https://github.com/seek-oss/braid-design-system/pull/1285))

  Provide support for making a `Card` use all available vertical space.
  This is useful when laying out rows of `Card` elements and having them all be equal height.

  **EXAMPLE USAGE:**

  ```jsx
  <Card height="full">...</Card>
  ```

### Patch Changes

- **TextLink, TextLinkButton:** Update underline design ([#1288](https://github.com/seek-oss/braid-design-system/pull/1288))

  Uplift the design of the the text underline used on `TextLink` and `TextLinkButton` components.

- **Column:** Support full height content ([#1285](https://github.com/seek-oss/braid-design-system/pull/1285))

  Provide support for full height content by growing all `Column` elements to be uniform in height.

  This will have no effect on the content itself, but enables consumers to create designs of uniform content, such as rows of `Card` elements.

## 32.3.1

### Patch Changes

- **RadioItem, Checkbox:** Fix stacking context behaviour ([#1284](https://github.com/seek-oss/braid-design-system/pull/1284))

  A `RadioItem` and `Checkbox` previously created a new stacking context with an elevated `z-index` applied on hover, resulting in their labels overlaying other elements in an unpredictable ways — most noticable when [toggling nested content].

  For example, toggling nested content containing an `Autosuggest`, would see the list of suggestions list would be overlayed by the next `RadioItem` on hover.

  To fix this, the `z-index` is no longer elevated on hover, and additionally the nested content container applies an elevated index when the field is **checked**.

  [toggling nested content]: https://seek-oss.github.io/braid-design-system/components/RadioGroup#toggling-nested-content

- **Textarea:** Adjust `highlightRange` background to support different line heights ([#1279](https://github.com/seek-oss/braid-design-system/pull/1279))

  Remove the vertical padding on the highlight element to prevent the background colour overlapping the wavy underline in themes with tighter line heights.

- **MenuItemCheckbox:** Align checkbox size with a `small` Checkbox ([#1276](https://github.com/seek-oss/braid-design-system/pull/1276))

  Align the size of a `MenuItemCheckbox` with a `small` sized `Checkbox`.

- **Checkbox, RadioItem:** Fix alignment with updated Badge layout ([#1280](https://github.com/seek-oss/braid-design-system/pull/1280))

  Improve layout to work with updated Badge layout which is no longer driven by line height.

- **MonthPicker:** Reduce space between fields ([#1277](https://github.com/seek-oss/braid-design-system/pull/1277))

  Reduce the space between the month and year fields.

## 32.3.0

### Minor Changes

- **Box, atoms:** Add `borderBrandAccent` variants to available boxShadows ([#1274](https://github.com/seek-oss/braid-design-system/pull/1274))

  Add `borderBrandAccent` and `borderBrandAccentLight` to the available boxShadows, combining the `brandAccent` and `brandAccentLight` border colours with the `standard` border width token.
  Previously, `brandAccent` was only available with the `large` border width.

  **EXAMPLE USAGE:**

  ```jsx
  <Box boxShadow="borderBrandAccent" />;
  {
    /* or */
  }
  <Box boxShadow="borderBrandAccentLight" />;
  ```

  ```ts
  import { atoms } from 'braid-design-system/css';

  atoms({ boxShadow: 'borderBrandAccent' });
  atoms({ boxShadow: 'borderBrandAccentLight' });
  ```

- **useToast:** Design uplift with increased page contrast ([#1269](https://github.com/seek-oss/braid-design-system/pull/1269))

  As a means to increase constrast against page content, the design has been updated to be presented on inverted backgrounds based on the color mode.
  The design has also be refined to remove the sidebar/keyline (consistent with `Alert`), while also applying the `tone` to the provided `message`.

- **Textarea:** Add support for disabling built-in spell checker ([#1272](https://github.com/seek-oss/braid-design-system/pull/1272))

  Provide support for disabling the built-in browser spell checker using the native HTML attribute `spellCheck`.

  When highlighting ranges you may choose to turn spell check off to prevent colliding highlights. This can be done be setting `spellCheck` to `false`.

  **EXAMPLE USAGE:**

  ```jsx
  <Textarea spellCheck={false} />
  ```

- Add support for `caution` tone to form fields ([#1271](https://github.com/seek-oss/braid-design-system/pull/1271))

  Provide support for applying a `caution` tone to form fields.
  Specifying this `tone` will show the `IconCaution` alongside the provided `message`.

  **EXAMPLE USAGE:**

  ```jsx
  <TextField tone="caution" message="Caution message" />
  ```

- **Textarea:** Add support for `caution` highlightRanges ([#1272](https://github.com/seek-oss/braid-design-system/pull/1272))

  Providing a `tone` of `caution` along with a set of `highlightRanges` will now apply the `caution` tone to the text being highlighted.
  To complement this feature, the design has been uplifted to work consistently across both the `critical` and `caution` tones.

  **EXAMPLE USAGE:**

  ```jsx
  <Textarea
    tone="caution"
    message="Caution message"
    highlightRanges={...}
  />
  ```

- **Alert:** Design uplift ([#1269](https://github.com/seek-oss/braid-design-system/pull/1269))

  Refine the design to use consistent horizontal container inset, aligning content with elements like `Card`, as well as simplifying the design by removing the sidebar/keyline (consistent with `useToast`).

### Patch Changes

- **Button, ButtonLink:** Align `ghost` border width with field border width ([#1274](https://github.com/seek-oss/braid-design-system/pull/1274))

  Align the border width of `ghost` variants with the border width of fields.
  This is the final re-alignment piece to ensure all components use theme scales consistently, improving the ability of Braid themes to deliver cohesive design uplift.

- **Stepper:** Reduce size of `Step` indicators ([#1275](https://github.com/seek-oss/braid-design-system/pull/1275))

  Refine the design of `Step` indicators by reducing their size.

- **TooltipRenderer:** Remove custom background ([#1268](https://github.com/seek-oss/braid-design-system/pull/1268))

  Use the correct semantic token for the background of tooltips.
  While there is no visual change, this is just a clean up to ensure the palette usage remains consistent.

## 32.2.0

### Minor Changes

- **Box, atoms, vars:** Add `small` to border radius scale ([#1253](https://github.com/seek-oss/braid-design-system/pull/1253))

  Extends the border radius scale to include `small` as a step below `standard`.
  This addition is to support an upcoming design uplift that requires greater fidelity in the scale.
  Note, the new value is also available as a responsive property.

  **EXAMPLE USAGE:**

  ```jsx
  <Box borderRadius="small" />;

  {
    /* Or responsively: */
  }
  <Box borderRadius={{ mobile: 'small', tablet: 'standard' }} />;
  ```

  ```ts
  import { atoms } from 'braid-design-system/css';

  atoms({ borderRadius: 'small' });
  ```

  ```ts
  import { vars } from 'braid-design-system/css';

  const radius = vars.borderRadius.small;
  ```

- **theme:** Add support for defining line heights with lineGap ([#1267](https://github.com/seek-oss/braid-design-system/pull/1267))

  Provide support for themes to define their typographic line heights via `lineGap`.
  This allows us to reason about the white space between wrapping lines of text in the same way we think about `Stack` spacing.

  For a visual preview of this mental model head over to the [Capsize website].

  [Capsize website]: https://seek-oss.github.io/capsize/

- Add `xxxlarge` to the space scale ([#1262](https://github.com/seek-oss/braid-design-system/pull/1262))

  Extends the range of the space scale to include `xxxlarge`.
  This addition is to support an upcoming design uplift that requires greater fidelity in the scale.
  Note, the new value is also available as a responsive property.

  **EXAMPLE USAGE:**

  ```jsx
  <Stack space="xxxlarge">...</Stack>;

  {
    /* Or responsively: */
  }
  <Stack space={{ mobile: 'large', tablet: 'xxxlarge' }}>...</Stack>;
  ```

  ```ts
  import { atoms } from 'braid-design-system/css';

  atoms({ paddingY: 'xxxlarge' });
  ```

  ```ts
  import { vars } from 'braid-design-system/css';

  const space = vars.space.xxxlarge;
  ```

### Patch Changes

- **theme:** Add support for webfonts beyond Google Fonts ([#1255](https://github.com/seek-oss/braid-design-system/pull/1255))

  Previously the `webFont` on the theme was the `familyName` and was being used to construct a link tag to a Google Fonts stylesheet and provide to consumers via a runtime token.
  To enable fonts beyond Google Fonts, we are changing `webFont` to be a URL.

  This does not impact existing themes (as there are no themes currently with a web font), and the contract of the runtime token (a constructed link tag) remains unchanged.

- **MenuRenderer:** Hide overflow on menu ([#1264](https://github.com/seek-oss/braid-design-system/pull/1264))

  Fixes a bug where the selection/highlight for a `MenuItem` could extend outside of the menu itself.

- **Badge:** Adjust height to support different typographic scales ([#1257](https://github.com/seek-oss/braid-design-system/pull/1257))

  Adjusts the height of `Badge` to be driven by the capHeight of `xsmall` text plus vertical padding, rather than `xsmall` line height.
  This enables different typographic scales across themes, while ensuring the `Badge` height is relative.

- **RadioItem, Toggle:** Use formAccent border when selected ([#1251](https://github.com/seek-oss/braid-design-system/pull/1251))

  Switch to using the `formAccent` border colour, rather than the `field` border color, when in the selected state (e.g. `checked` for `RadioItem`, `on` for `Toggle`).

- Fix error reading `standard` of undefined ([#1256](https://github.com/seek-oss/braid-design-system/pull/1256))

  The use of dynamic property access left some styles exposed to being marked as unused and tree shaken away.

  Refactoring these styles to be explicitly referenced to ensure this will not be the case.

- **TooltipRenderer:** Refine padding to complement radius scale ([#1263](https://github.com/seek-oss/braid-design-system/pull/1263))

  Removes the custom padding on tooltips in favour of using the space scale.
  Previously, a custom value was used to complement the over sized radius which has now be reduced.

- **Button, ButtonLink:** Improve support for different typographic scales ([#1259](https://github.com/seek-oss/braid-design-system/pull/1259))

  Ensure the height of a `small` sized `Button` is not reliant on the text line height.

  This enables different typographic scales across themes, while ensuring the `Button` height is relative.

- **Alert, Card, useToast:** Decouple keyline width from space scale ([#1266](https://github.com/seek-oss/braid-design-system/pull/1266))

  Previously the keyline width on the left determined its width using the space scale.
  Re-aligning this to use the grid unit to enable themes with larger space scales.

- Improve consistency of border radius usage across components ([#1253](https://github.com/seek-oss/braid-design-system/pull/1253))

  Over time, individual components have reached for a larger radius in the scale, rather than increasing the scale at a theme level. This resulted in inconsistent use across the system, preventing uplift of the scale.

  Re-aligning all components to use the scale consistently enables themes to apply very different radius scales — enabling an upcoming design uplift theme.

- **Dialog, Drawer:** Reduce space between title and description ([#1265](https://github.com/seek-oss/braid-design-system/pull/1265))

  Reducing the space between `title` and `description` to `small` to improve association of the header block content

## 32.1.1

### Patch Changes

- Prevent wrong entry point paths from appearing as suggestions in VS Code. ([#1247](https://github.com/seek-oss/braid-design-system/pull/1247))

  For example, wanting to use [Braid's CSS variables](https://seek-oss.github.io/braid-design-system/css/vars) (`vars`) VS Code would suggest `braid-design-system/dist/css` instead of `braid-design-system/css`.

## 32.1.0

### Minor Changes

- **Disclosure:** Add `weight` support ([#1240](https://github.com/seek-oss/braid-design-system/pull/1240))

  Provides support for reducing the visual weight of the Disclosure's call to action. Follows the same contextual styling rules as `TextLink`.

  **EXAMPLE USAGE:**

  ```jsx
  <Disclosure weight="weak">...</Disclosure>
  ```

- **Disclosure:** Add inline content support ([#1240](https://github.com/seek-oss/braid-design-system/pull/1240))

  Provides support for using a Disclosure within a sentence by allowing it to be nested within a typographic component, i.e. `Text`.

  All size and weight properties will inherit from the parent component.

  **EXAMPLE USAGE:**

  ```jsx
  <Text>
    Preceding text content that is followed by a Disclosure.
    <Disclosure expandLabel="Read more">...</Disclosure>
  </Text>
  ```

- **Button, ButtonLink, TextLink, TextLinkButton:** Add support for trailing icons ([#1242](https://github.com/seek-oss/braid-design-system/pull/1242))

  Provide support for choosing the position of the `icon` slot within a `Button` or `TextLink`.

  By default, the `iconPosition` will be `leading` the label, but optionally, can be set to `trailing`.

  **EXAMPLE USAGE:**

  ```jsx
  <Button icon={<IconArrow direction="right" />} iconPosition="trailing">
    Next
  </Button>
  ```

### Patch Changes

- Show `description` on form fields when no `label` provided ([#1239](https://github.com/seek-oss/braid-design-system/pull/1239))

  Previously, a `FieldLabel` without a `label` would return nothing. However, now that form fields can opt for [indirect or hidden labels] (via `aria-label` or `aria-labelledby`), the `description` should still be shown if provided.

  > Note: The `secondaryLabel` and `tertiaryLabel` remain conditional based on the presence of a `label`. This is due to their location in the layout being anchored off the `label`.

  **EXAMPLE USAGE:**

  ```jsx
  <FieldLabel description="Description now visible without label" />
  ```

  [indirect or hidden labels]: https://seek-oss.github.io/braid-design-system/components/TextField#indirect-or-hidden-field-labels

- **TextLink, TextLinkButton:** Increase text weight of weak links ([#1237](https://github.com/seek-oss/braid-design-system/pull/1237))

  Increases the text weight of `weak` links to `medium`, increasing the affordance against standard text.
  As a result, this makes the weight of all text links consistent.

- **Disclosure:** Ensure chevron does not wrap alone ([#1240](https://github.com/seek-oss/braid-design-system/pull/1240))

  Fixes the scenario where based on copy length and container size, the chevron could wrap independently of the rest of the label. By using a zero-width, non-breaking space, the chevron will now wrap together with the last word of the label.

## 32.0.0

The is a huge enablement release that sees the removal of legacy themes and [treat](https://seek-oss.github.io/treat/) our previous styling solution, as well as a migration to our new build tool [Crackle](https://github.com/seek-oss/crackle/).

By moving to Crackle, Braid will now be published as a pre-compiled artefact, no longer requiring TypeScript to be transpiled by consumers. This should see faster build times and clearer boundaries between Braid and consuming applications.

Outside of the removal of `treat` and the legacy themes, there is no impact on the public API of Braid. However, if a consuming web app is reaching into Braid internals, this will no longer work and require code changes.

For these cases, to support teams in upgrading we have provided a [Compiled Braid Migration Guide](https://github.com/seek-oss/braid-design-system/blob/master/docs/Compiled%20Braid%20Migration.md) based on patterns observed in code bases.

For more detail on the specific changes in this release, please read on.

### Major Changes

- Drop support for React 16. ([#1229](https://github.com/seek-oss/braid-design-system/pull/1229))

  To support the pre-compilation of Braid, it is now a requirement that consumers are on React 17 or later.
  Originally the plan was to drop React 17 as well, however the team has been able to maintain support for a little longer — but there is a catch (see migration guide below).

  **MIGRATION GUIDE:**

  ### React 16 consumers

  As this version is no longer supported it is a requirement that consumers upgrade.
  For more information on the differences between v16 and v17, [see the React blog][react17].
  We strongly encourage teams to take this opportunity to upgrade to [v18][react18] as well.

  ### React 17 consumers

  The way React 17 exposes the `jsx-runtime` is [not compatible with ESM], which means the bundler will need instructions on how to resolve the import.
  This can be done by adding a [fallback module resolve rule][resolve fallback] to the webpack configuration.

  For [sku] consumers, this can be done as follows:

  ```ts
  // sku.config.ts
  {
    dangerouslySetWebpackConfig: (config) =>
      webpackMerge(config, {
        resolve: {
          fallback: {
            'react/jsx-runtime': require.resolve('react/jsx-runtime'),
          },
        },
      }),
  }
  ```

  We recommend using [webpack-merge] to ensure both configurations are deep merged correctly.

  _Note: This rule can be removed after upgrading to React 18, which has ESM support._

  ### React 18 consumers

  No action required.

  [react17]: https://reactjs.org/blog/2020/10/20/react-v17.html
  [react18]: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
  [resolve fallback]: https://webpack.js.org/configuration/resolve/#resolvefallback
  [not compatible with ESM]: https://github.com/facebook/react/issues/20235#issuecomment-1095345193
  [webpack-merge]: https://www.npmjs.com/package/webpack-merge
  [sku]: https://seek-oss.github.io/sku/

- Playroom imports are now formalised entrypoints rather than path imports, and as such no longer require the file path extensions to be provided. ([#1229](https://github.com/seek-oss/braid-design-system/pull/1229))

  **EXAMPLE USAGE:**

  ```jsx
  // playroom.config.js
  module.exports = {
    frameComponent: require.resolve(
      'braid-design-system/playroom/FrameComponent',
    ),
    components: require.resolve('braid-design-system/playroom/components'),
    snippets: require.resolve('braid-design-system/playroom/snippets'),
    scope: require.resolve('braid-design-system/playroom/scope'),
  };
  ```

- Remove legacy themes: `catho`, `occ` and `seekAnz` ([#1229](https://github.com/seek-oss/braid-design-system/pull/1229))

  The `seekAnz` theme facilitated consumers migrating like-for-like from `seek-style-guide`, while the `catho` and `occ` themes intended to enable a specific use case that never eventuated.

  Removing these themes allows us to move faster with upcoming theme uplift work.

  **MIGRATION GUIDE:**

  Any remaining consumers of the `catho`, `occ` or `seekAnz` themes should migrate to the `apac` theme like so:

  ```diff
  -import seekAnz from 'braid-design-system/themes/seekAnz';
  +import apac from 'braid-design-system/themes/apac';
  ```

- Remove treat support ([#1229](https://github.com/seek-oss/braid-design-system/pull/1229))

  [Treat](https://seek-oss.github.io/treat/) has been deprecated for nearly 2 years, superseded by [vanilla-extract](https://vanilla-extract.style/).
  `.treat.ts` files can no longer be used for styling and should be converted to `.css.ts` (vanilla-extract) stylesheets.

- Remove experimental color-mode check script ([#1229](https://github.com/seek-oss/braid-design-system/pull/1229))

  The experimental script for checking which color mode to render has been formalised to an entrypoint specific to the mechanism that is being used — in this case the query parameter.
  In the future we may add other mechanisms, such as local storage for example, but for now all existing consumers should have been migrated to the query-param check.

  **MIGRATION GUIDE:**

  ```diff
  - import { __experimentalDarkMode__ } from 'braid-design-system/color-mode'
  + import { colorModeQueryParamCheck } from 'braid-design-system/color-mode/query-param'
  ```

## 31.24.2

### Patch Changes

- Use theme tokens for shape of font metrics ([#1214](https://github.com/seek-oss/braid-design-system/pull/1214))

  Internally some theme utilities were using Capsize’s `FontMetrics` as their expected payload, rather than correctly using the shape of the theme tokens.
  This makes Braid compatible with Capsize v3.x.

## 31.24.1

### Patch Changes

- Whitelist only the required FontMetrics for theme tokens ([#1212](https://github.com/seek-oss/braid-design-system/pull/1212))

  The latest version of `FontMetrics` type in Capsize adds more properties, and we only populate the properties we require on the theme. Whitelisting the required properties to keep the themes explicit.

## 31.24.0

### Minor Changes

- **Accordion, AccordionItem:** Add `weight` support ([#1211](https://github.com/seek-oss/braid-design-system/pull/1211))

  Add support for customising the `weight` of `AccordionItem`s.
  This can be either at an `Accordion` level or on a standalone `AccordionItem` based on design requirements.

  Note, in order to maintain visual consistency, the `weight` prop can only be specified on an `AccordionItem` when outside of an `Accordion`.

  **EXAMPLE USAGE:**

  ```jsx
  <Accordion weight="strong">
    <AccordionItem />
    ...
  </Accordion>
  ```

  or

  ```jsx
  <AccordionItem weight="strong" />
  ```

### Patch Changes

- **CheckboxStandalone:** Enable alignment with Text ([#1209](https://github.com/seek-oss/braid-design-system/pull/1209))

  Enables `CheckboxStandalone` to be wrapped in a `Text` component, ensuring it only occupies the same layout as text.
  This is useful for visually aligning checkboxes in a custom layout alongside other text-based components, e.g. `AccordionItem`.

  **EXAMPLE USAGE:**

  ```jsx
  <Columns>
    <Column>
      <Text>
        <CheckboxStandalone />
      </Text>
    </Column>
    <Column>
      <AccordionItem />
    </Column>
  </Columns>
  ```

## 31.23.0

### Minor Changes

- **color-mode:** Add query-param entry ([#1205](https://github.com/seek-oss/braid-design-system/pull/1205))

  Add new `query-param` entry, providing a script for resolving the color mode preference from query string, as well as a utility function for retrieving the preference for constructing subsequent links.

## 31.22.2

### Patch Changes

- **Tab, Tabs:** Updated visual design ([#1180](https://github.com/seek-oss/braid-design-system/pull/1180))

  The appearance of a `Tab` has been updated. Changes include:

  - Tab button use `regular` text weight
  - Hover state of inactive tab toggles `neutral` tone instead of underline
  - Active tab indicator underlines content only, without the horizontal gutter and animates between tabs
  - The `minimal` divider under `Tabs` underlines content only, without the horizontal gutter

- The `braid-upgrade` command now tries to preserve newlines as best as possible ([#1194](https://github.com/seek-oss/braid-design-system/pull/1194))

## 31.22.1

### Patch Changes

- Fix type checking for Playroom config ([#1192](https://github.com/seek-oss/braid-design-system/pull/1192))

## 31.22.0

### Minor Changes

- Expose Playroom config ([#1190](https://github.com/seek-oss/braid-design-system/pull/1190))

  This allows consuming packages (e.g. Metropolis) to enhance the Playroom experience by leveraging Braid's internal Playroom configuration.

  **EXAMPLE USAGE:**

  ```jsx
  // playroom.config.js
  module.exports = {
    frameComponent: require.resolve(
      'braid-design-system/playroom/FrameComponent.tsx',
    ),
    components: require.resolve('braid-design-system/playroom/components.ts'),
    snippets: require.resolve('braid-design-system/playroom/snippets.ts'),
    scope: require.resolve('braid-design-system/playroom/scope.ts'),
  };
  ```

## 31.21.1

### Patch Changes

- **TextDropdown:** Fix a type error affecting consumers on TypeScript versions >=4.9.0 ([#1187](https://github.com/seek-oss/braid-design-system/pull/1187))

## 31.21.0

### Minor Changes

- **TextLink, TextLinkButton:** Add `icon` support ([#1184](https://github.com/seek-oss/braid-design-system/pull/1184))

  Provides a designed slot for adding an `icon` to a `TextLink` or `TextLinkButton`.
  This solves for the problem of underlining the space between the icon and text.

  **EXAMPLE USAGE:**

  ```jsx
  <Text>
    <TextLink icon={<IconLink />}>...</TextLink>
  </Text>
  ```

- **IconRenderer:** Support the sizing and alignment of custom icons ([#1185](https://github.com/seek-oss/braid-design-system/pull/1185))

  Provides support for sizing and aligning custom icons with Braid’s typographic components. The new `IconRenderer` component supports being used within `Text` and `Heading` components as well as inside `icon` slots of other components.

  Uses the render prop pattern to provide the required classes to style and align a custom icon.

  **EXAMPLE USAGE:**

  ```jsx
  <Heading level="1">
    <IconRenderer>
      {({ className }) => <svg className={className}>...</svg>}
    </IconRenderer>
  </Heading>
  ```

## 31.20.0

### Minor Changes

- **Link:** Support custom `data` prop format for attributes ([#1182](https://github.com/seek-oss/braid-design-system/pull/1182))

  While `Link` already supports the native HTML syntax for data attributes, e.g. `data-testid="123"`, it now supports the `data` prop too. This allows data attributes to be provided consistently to all components.

  **EXAMPLE USAGE:**

  ```diff
   <Link
  +  data={{ testId: 'myComponent' }}
   />

  ```

  The above example results in the following HTML attribute being set on the element: `data-testId="myComponent"`.

- **Bleed:** Add `data` attribute support ([#1182](https://github.com/seek-oss/braid-design-system/pull/1182))

  **EXAMPLE USAGE:**

  ```jsx
  <Bleed data={{ testid: 123 }}>...</Bleed>
  ```

### Patch Changes

- Support data attribute boolean values ([#1182](https://github.com/seek-oss/braid-design-system/pull/1182))

  The `data` attribute map now supports boolean values. This provides an improvement for the developer experience, no longer having to convert values to strings explicitly.

  **EXAMPLE USAGE:**

  ```tsx
  <Component
    data={{
      'custom-attribute': true,
    }}
  />
  // => <div data-custom-attribute="true" />
  ```

- **TextLink:** Allow native data attributes with anchor api ([#1182](https://github.com/seek-oss/braid-design-system/pull/1182))

  Disables the validation against the use of data attributes on `TextLink`. Given it exposes the full native anchor tag api, it is `not invalid` to use the native syntax.

## 31.19.0

### Minor Changes

- **TextField:** Add `inputMode` and `step` support ([#1174](https://github.com/seek-oss/braid-design-system/pull/1174))

  Provide support for the native `inputMode` and `step` attributes.

  The `inputMode` will also be defaulted based on the specified `type`. For example: `<TextField type="number" />` will default the `inputMode` to `numeric`.

  **EXAMPLE USAGE:**

  ```jsx
  <TextField inputMode="numeric" step=".01" />
  ```

### Patch Changes

- **Rating:** Only fill star for scores .75 and above ([#1176](https://github.com/seek-oss/braid-design-system/pull/1176))

  A star is only `filled` when the score is .75 and above. Fixes an issue where all scores .5 or above are shown as half filled stars.

  **EXAMPLE USAGE:**
  Now when a rating reaches .75 it will round up to a full star.

  ```jsx
  <Rating rating={3.75} /> // 4 filled
  ```

- **ButtonLink:** Allow native data attributes with anchor api ([#1178](https://github.com/seek-oss/braid-design-system/pull/1178))

  Disables the validation against the use of data attributes on `ButtonLink`. Given it exposes the full native anchor tag api, it is **not invalid** to use the native syntax.

- **Box, atoms:** Remove native buttons on number input field ([#1174](https://github.com/seek-oss/braid-design-system/pull/1174))

  Extends the CSS reset behaviour of HTML input fields where `type="number"` to remove the native increment and decrement buttons.

  **EXAMPLE USAGE:**
  The following will now render a HTML input of type `number` without native buttons:

  ```jsx
  <Box component="input" type="number" />
  ```

  Additionally, if using the `atoms` function to build styles, when resetting an `input` field, the native buttons will also be removed.

  ```ts
  const customClasses = atoms({
    reset: 'input',
    ...
  });
  ```

## 31.18.1

### Patch Changes

- **Button, ButtonLink:** Improve alignment of transparent buttons with icons against Text with icons ([#1170](https://github.com/seek-oss/braid-design-system/pull/1170))

  To improve optical balance of a `Button` with an `icon`, the icon container is bled to the left to balance against the larger horizontal inset of a `standard` button.
  This alignment correction is now only applied on `standard` sized buttons that are not using the `transparent` variant.

  Isolating this alignment correction enables transparent buttons to better align with other components with `icon` slots, for example:

  ```jsx
  <Stack space="small">
    <Text icon={<IconSend />}>Text</Text>
    <Button icon={<IconSend />} variant="transparent" bleed>
      Button
    </Button>
  </Stack>
  ```

  Icons and text will now be perfectly aligned between Button components and others icon slots with the same text size.

## 31.18.0

### Minor Changes

- **Box:** Support custom `data` prop format for attributes ([#1168](https://github.com/seek-oss/braid-design-system/pull/1168))

  While `Box` already supports the native HTML syntax for data attributes, e.g. `data-testid="123"`, it now supports the **data** prop too. This allows data attributes to be provided consistently to all components.

  **EXAMPLE USAGE:**

  ```diff
   <Box
  +  data={{ testId: 'myComponent' }}
   />
  ```

  The above example results in the following HTML attribute being set on the element:
  `data-testId="myComponent"`.

- **Text, Heading:** Add icon slots ([#1160](https://github.com/seek-oss/braid-design-system/pull/1160))

  Provides a designed slot for adding an icon to `Text` and `Heading` components

  **EXAMPLE USAGE:**

  ```jsx
  <Text icon={<IconPromote />}>{...}</Text>
  ```

  or with a `Heading`:

  ```jsx
  <Heading level="3" icon={<IconPromote />}>{...}</Heading>
  ```

- **useToast:** Add `data` attribute support ([#1168](https://github.com/seek-oss/braid-design-system/pull/1168))

  Support applying custom data attributes to Toast elements.

  **EXAMPLE USAGE:**

  ```diff
   export const Component = () => {
     const showToast = useToast();

     return (
       <Button onClick={() =>
         showToast({
  +        data: { testId: 'myToastMessage' },
           ...
         })
       }>
         Show
       </Button>
     );
   }
  ```

  The above example results in the following HTML attribute being set on the toast element:
  `data-testId="myToastMessage"`.

### Patch Changes

- Provide dev time validation/warnings when the native data attribute format is provided to components that do not support it. ([#1168](https://github.com/seek-oss/braid-design-system/pull/1168))
  This is required as TypeScript does not validate kebab cased properties, and Braid components do not spread abritrary props.

  This validation will prevent silent failures where attributes are seemingly provided, but not applied.

  For example:

  ```jsx
  <Card data-testid={123} />
  // => Would not be applied and TypeScript would not error.
  ```

  However, now the following console warning will guide users to use the `data` prop:

  ```diff
   Braid components do not support the native data attribute format. Use the “data” prop instead.
    <Component
  -    data-testid={123}
  +    data={{
  +      testid: 123,
  +    }}
    />
   For more details, see the “Data Attributes” documentation:
   https://seek-oss.github.io/braid-design-system/components/Box#data-attributes
  ```

- **Pagination:** Increase chevron spacing on prev/next links ([#1160](https://github.com/seek-oss/braid-design-system/pull/1160))

  Increases the space between the "Previous" and "Next" text and their chevron icons to balance with the larger icon size.

- **MenuItemCheckbox:** Align with increased icon size ([#1160](https://github.com/seek-oss/braid-design-system/pull/1160))

  Ensure menu item text has uniform spacing to the checkbox of `MenuItemCheckbox` and the `icon` slot of `MenuItem`.

- **Text, Heading:** Increase icon size inside typographic elements ([#1160](https://github.com/seek-oss/braid-design-system/pull/1160))

  The size of icons has been increased by 20% when used inside of `Text` and `Heading` components. There is no layout impact expected for consumers, with only the visual ratio of icon to text size changing.

  This applies to icons using the new `icon` slots, as well as inline icons within the text content.

  > Icons used outside of typographic elements are not affected by this change.

- **ButtonIcon:** Increase standard icon size ([#1160](https://github.com/seek-oss/braid-design-system/pull/1160))

  Adopt the increased standard icon size.

  > Note this does not affect overall dimensions of `ButtonIcon`, or the layout of surrounding components.

- Removes custom icon sizing and layout in favour of new typography icon sizes and layout. ([#1162](https://github.com/seek-oss/braid-design-system/pull/1162))

## 31.17.2

### Patch Changes

- Update `@vanilla-extract/css` dependency ([#1158](https://github.com/seek-oss/braid-design-system/pull/1158))

  This fixes a type error that was occurring with typescript versions >=4.5.0

- **Heading**: Nested icons inherit text colour ([#1153](https://github.com/seek-oss/braid-design-system/pull/1153))

  When using icons inside of a `Heading`, the default `tone` was always `neutral`, rather than inheriting the colour of the nearest component.

  For example, when an icon was used inside of a `TextLink` within a `Heading`:

  ```jsx
  <Heading level="1">
    Title with{' '}
    <TextLink>
      link <IconArrow />
    </TextLink>
  </Heading>
  // => Previously, IconArrow was the heading text colour
  // `neutral`, now inherits the `link` colour.
  ```

  or equally, when an icon was used inside of a `Secondary` component within a `Heading`:

  ```jsx
  <Heading level="1">
    Title with{' '}
    <Secondary>
      secondary <IconArrow />
    </Secondary>
  </Heading>
  // => Previously, IconArrow was the heading text colour
  // `neutral`, now inherits the `secondary` colour.
  ```

## 31.17.1

### Patch Changes

- Fixes an issue with a missing dependency ([#1143](https://github.com/seek-oss/braid-design-system/pull/1143))

## 31.17.0

### Minor Changes

- **Autosuggest:** Add configurable message for no suggestions ([#1140](https://github.com/seek-oss/braid-design-system/pull/1140))

  Provides consumers a way to give the user more context when no suggestions are available. The `noSuggestionsMessage` prop accepts a simple message by providing a single piece of text. Alternatively, a more structured prompt can be shown by providing an object containing **title** and **description**.

  This message is only displayed when there are no available suggestions provided.

  **EXAMPLE USAGE:**
  For the simple case:

  ```jsx
  <Autosuggest
    ...
    suggestions={[]}
    noSuggestionsMessage="No results found"
  />
  ```

  Or, for more a structured prompt:

  ```jsx
  <Autosuggest
    ...
    suggestions={[]}
    noSuggestionsMessage={{
      title: "No results found",
      description: "Try searching for something else",
    }}
  />
  ```

  **MIGRATION GUIDE:**

  In addition, the old mechanism allowing consumers to pass an object to `suggestions` containing a `message` has been deprecated. This will continue to work for now but will be removed in a future release.

  It is recommended to migrate to the `noSuggestionsMessage` prop.

  ```diff
   <Autosuggest
     ...
  -  suggestions={{ message: 'No results found' }}
  +  noSuggestionsMessage="No results found"
   />
  ```

- **useToast:** Add neutral tone support ([#1141](https://github.com/seek-oss/braid-design-system/pull/1141))

  Add support for `neutral` tone. When using a `neutral` tone, an icon may optionally be provided. For consistency, the tone of the icon is set to **secondary** and cannot be customised.

  **EXAMPLE USAGE:**

  ```jsx
  import { useToast } from 'braid-design-system';

  export const DemoButton = () => {
    const showToast = useToast();

    return (
      <Button
        onClick={() =>
          showToast({
            tone: 'neutral',
            icon: <IconBookmark />,
            message: 'Neutral with icon',
          })
        }
      >
        Show Toast
      </Button>
    );
  };
  ```

### Patch Changes

- Add `react-dom` as a peer dependency ([#1136](https://github.com/seek-oss/braid-design-system/pull/1136))

## 31.16.0

### Minor Changes

- **vars:** Expose shadow palette ([#1133](https://github.com/seek-oss/braid-design-system/pull/1133))

  Provide access to the themed `shadow` scale on the `vars` object

  **EXAMPLE USAGE:**

  ```jsx
  import { vars } from 'braid-design-system/css';

  export const dropShadow = style({
    boxShadow: vars.shadow.small,
  });
  ```

## 31.15.0

### Minor Changes

- **IconArrow:** Add component ([#1130](https://github.com/seek-oss/braid-design-system/pull/1130))

  Add new `IconArrow` component. The orientation of the arrow can be controlled using the `direction` prop.

  **EXAMPLE USAGE:**

  ```jsx
  <IconArrow direction="left" />
  ```

- **Stepper:** Add align prop ([#1126](https://github.com/seek-oss/braid-design-system/pull/1126))

  Provide the `align` prop which now includes support for `left` alignment.

  **EXAMPLE USAGE:**

  ```jsx
  <Stepper align="left">...</Stepper>
  ```

### Patch Changes

- **RadioGroup:** Remove surrounding white space with no visual label ([#1129](https://github.com/seek-oss/braid-design-system/pull/1129))

  Removes additional white space applied above the `RadioItem`s when no visible `label` is provided, i.e. when labelling via `aria-label` or `aria-labelledby`.

- **Stepper:** Fix clipping of step name in Safari ([#1126](https://github.com/seek-oss/braid-design-system/pull/1126))

  Fixes issue where the descenders in Step labels were being clipped only in Safari.

## 31.14.0

### Minor Changes

- **Rating:** Add `variant` prop and deprecate `showTextRating` ([#1123](https://github.com/seek-oss/braid-design-system/pull/1123))

  Provide the `variant` prop to allow customising the appearance. This supports the new `minimal` appearance, which presents a single star alongside the text rating.

  Also adding the `starsOnly` variant as a replacement for the now deprecated `showTextRating={false}`.

  **EXAMPLE USAGE:**

  ```jsx
  <Rating rating={3.7} variant="minimal" />
  ```

  **MIGRATION GUIDE:**

  The `showTextRating` prop is now deprecated. If you were using this previously, please migrate to the new `variant` prop using `starsOnly`.

  ```diff
  <Rating
    rating={3.7}
  - showTextRating={false}
  + variant="starsOnly"
  />
  ```

- **IconPlatformAndroid, IconPlatformApple, IconSocialYouTube:** Add new icons ([#1121](https://github.com/seek-oss/braid-design-system/pull/1121))

  Add icons for the Apple and Android mobile platforms as well as YouTube

  **EXAMPLE USAGE:**

  ```jsx
  <IconPlatformAndroid />
  <IconPlatformApple />
  <IconSocialYouTube />
  ```

### Patch Changes

- **`apac` and `seekBusiness` themes:** Update colour palette ([#1104](https://github.com/seek-oss/braid-design-system/pull/1104))

  The colours used in these themes have been updated to the latest design standards as they were subtly off due to coming from an incorrect source.

## 31.13.0

### Minor Changes

- **MenuRenderer, OverflowMenu:** Provide context data to onClose ([#1115](https://github.com/seek-oss/braid-design-system/pull/1115))

  The `onClose` handler now receives data to allow consumers to discern why the menu closed — either by exiting or selecting an action. See the [documentation](https://seek-oss.github.io/braid-design-system/components/MenuRenderer#menu-interactions) for more details.

  **EXAMPLE USAGE:**

  ```jsx
  <MenuRenderer
    onClose={closeReason => {
      // ...
    }}
  />
  ```

## 31.12.0

### Minor Changes

- **RadioItem:** Add `disabled` support ([#1108](https://github.com/seek-oss/braid-design-system/pull/1108))

  Provide support for disabling individual `RadioItem`s within a `RadioGroup`.

  **EXAMPLE USAGE:**

  ```jsx
  <RadioGroup>
    <RadioItem label="One" value="1" />
    <RadioItem label="Two" value="2" />
    <RadioItem label="Three" value="3" disabled={true} />
  </RadioGroup>
  ```

### Patch Changes

- **Dropdown:** React 18 compatibility ([#1114](https://github.com/seek-oss/braid-design-system/pull/1114))

## 31.11.1

### Patch Changes

- **Button, ButtonLink:** Ensure `bleedY` is backwards compatibile for `transparent` variant ([#1106](https://github.com/seek-oss/braid-design-system/pull/1106))

  Ensure that `bleedY` applies bleed only vertically on `transparent` variant, isolating the new horizontal bleed to the new `bleed` prop exclusively.

## 31.11.0

### Minor Changes

- **Button, ButtonLink:** Improve Button `bleed` ([#1103](https://github.com/seek-oss/braid-design-system/pull/1103))

  Previously the `bleedY` prop allowed the background of `Button` to bleed vertically into the surrounding layout. This worked well for all variants except `transparent`, which needed to bleed horizontally as well.

  To support this we have introduced the `bleed` prop which will apply the bleed based on the `variant`. We have also deprecated `bleedY` which will be removed in a future release.

  **EXAMPLE USAGE:**

  ```diff
   <Button
  -  bleedY
  +  bleed
     {...}
   >
     Button
   </Button>
  ```

  **MIGRATION GUIDE**

  Migration from `bleedY` to `bleed` can be automated by running the Braid upgrade command, passing the `v31.11` version. You must provide a glob to target your project’s source files. For example:

  ```
  yarn braid-upgrade v31.11 "**/*.{ts,tsx}"
  ```

  It is recommended to visually review the any `Button` usage with the `transparent` variant, to ensure the layout is as expected.

## 31.10.0

### Minor Changes

- **Bleed:** Support using span elements via component prop ([#1094](https://github.com/seek-oss/braid-design-system/pull/1094))

  Setting the `component` prop to `span` will now ensure all elements controlled by `Bleed` are `span`s. This is useful when using layout components inside dom elements that should not contain `div`s from a HTML validation perspective.

  **EXAMPLE USAGE:**

  ```jsx
  <Bleed space="medium" component="span">
    ...
  </Bleed>
  ```

### Patch Changes

- **Dialog, Drawer:** Prevent sticky close button container from blocking content ([#1097](https://github.com/seek-oss/braid-design-system/pull/1097))

  Fix regression introduced when migrating the close action to use `ButtonIcon`. The close action container was blocking the content of the `Dialog`/`Drawer`, and when scrolling could prevent a user from interacting with the content as it went behind the container.

  Additionally, re-introduced the surface coloured background behind the button to prevent the button from visually colliding with content when scrolling.

## 31.9.0

### Minor Changes

- **Tab:** Add icon support ([#1089](https://github.com/seek-oss/braid-design-system/pull/1089))

  Provides a designed slot for adding an icon to a `Tab`

  **EXAMPLE USAGE:**

  ```jsx
  <Tab icon={<IconPromote />}>{...}</Tab>
  ```

- **AccordionItem:** Add icon support ([#1086](https://github.com/seek-oss/braid-design-system/pull/1086))

  Provides a designed slot for adding an icon to an `AccordionItem`

  **EXAMPLE USAGE:**

  ```jsx
  <AccordionItem
    icon={<IconPromote />}
    {...}
  />
  ```

- **Tag:** Add `id` support ([#1081](https://github.com/seek-oss/braid-design-system/pull/1081))

- **Button, ButtonLink:** Add icon support ([#1090](https://github.com/seek-oss/braid-design-system/pull/1090))

  Provides a designed slot for adding an icon to a `Button` or `ButtonLink`

  **EXAMPLE USAGE:**

  ```jsx
  <Button icon={<IconSend />}>{...}</Button>
  ```

- **Tag:** Add icon support ([#1087](https://github.com/seek-oss/braid-design-system/pull/1087))

  Provides a designed slot for adding an icon to a `Tag`

  **EXAMPLE USAGE:**

  ```jsx
  <Tag
    icon={<IconPromote />}
    {...}
  />
  ```

- **OverflowMenu:** Add `id` support ([#1081](https://github.com/seek-oss/braid-design-system/pull/1081))

- **ButtonIcon:** Add component ([#1084](https://github.com/seek-oss/braid-design-system/pull/1084))

  See [documentation](https://seek-oss.github.io/braid-design-system/components/ButtonIcon) for full feature set.

  **EXAMPLE USAGE:**

  ```jsx
  <ButtonIcon
    icon={<IconShare/>}
    label="Share"
    id="share"
    onClick={...}
  />
  ```

### Patch Changes

- **Divider:** Use span element ([#1089](https://github.com/seek-oss/braid-design-system/pull/1089))

  As the `Divider` component is not used as a container element, we now use a `span`. This allows it to be used inside `button` elements, such as a `Tab`, without producing invalid html.

- **Badge:** Use span element ([#1086](https://github.com/seek-oss/braid-design-system/pull/1086))

  As the `Badge` component is not used as a container element, we now use a `span`. This allows it to be used inside `button` elements, such as an `AccordionItem`, without producing invalid html.

- **TooltipRenderer:** Ignore pointer events on tip container ([#1082](https://github.com/seek-oss/braid-design-system/pull/1082))

  Fix for the container of the tooltip interferring with pointer events of the tooltip trigger itself.

- **MenuRenderer, OverflowMenu:** Guard against open/close handlers firing incorrectly ([#1088](https://github.com/seek-oss/braid-design-system/pull/1088))

  Add guard to ensure open and close handlers are not re-fired when handler instances are updated.

- **Autosuggest, PasswordField, TextField, useToast:** Add `id` to internal close/clear buttons ([#1081](https://github.com/seek-oss/braid-design-system/pull/1081))

- **Autosuggest, Dialog, Drawer, OverflowMenu, Tag, TextField, useToast:** Migrate to use ButtonIcon ([#1084](https://github.com/seek-oss/braid-design-system/pull/1084))

  Adopt new `ButtonIcon` for clear/close actions in favour of custom internal buttons.

## 31.8.0

### Minor Changes

- **useToast:** Add `closeLabel` prop ([#1079](https://github.com/seek-oss/braid-design-system/pull/1079))

  To support translations, the close button can now be customised using the `closeLabel` prop.

  **EXAMPLE USAGE:**

  ```jsx
  <Button
    onClick={() =>
      showToast({
        closeLabel: 'Close',
        // ...
      })
    }
  />
  ```

- **Autosuggest, TextField:** Add `clearLabel` prop ([#1079](https://github.com/seek-oss/braid-design-system/pull/1079))

  To support translations, the clear button in the field can now be customised using the `clearLabel` prop.

  **EXAMPLE USAGE:**

  ```jsx
  <Autosuggest
    clearLabel="Clear"
    // ...
  />
  ```

- **Loader:** Apply WAI-ARIA alert pattern ([#1079](https://github.com/seek-oss/braid-design-system/pull/1079))

  To improve the feedback of the `Loader` provided to screen readers, we now apply the [WAI-ARIA Alert Pattern](https://www.w3.org/TR/wai-aria-practices/#alert) using an [assertive](https://www.w3.org/TR/wai-aria/#aria-live) level of importance.

### Patch Changes

- **IconThumb:** Update artwork ([#1080](https://github.com/seek-oss/braid-design-system/pull/1080))

- **MenuRenderer, OverflowMenu:** Mouse leave no longer affects focus state ([#1077](https://github.com/seek-oss/braid-design-system/pull/1077))

  Previously, moving the mouse from hovering a menu item to outside of the menu would shift focus the to the menu trigger. This is not a requirement for accessibility and introduces undesired behaviour when the trigger is used in conjunction with [TooltipRenderer](https://seek-oss.github.io/braid-design-system/components/TooltipRenderer).

  Note: As per the [menu accessibility guidelines](https://www.w3.org/TR/wai-aria-practices-1.2/#menu), focus will still be returned to the trigger when clicking outside the menu, selecting a menu item or pressing the escape key.

## 31.7.0

### Minor Changes

- **MenuRenderer, OverflowMenu:** Add menu `width` and `placement` support ([#1075](https://github.com/seek-oss/braid-design-system/pull/1075))

  Provides a set of `width`s to control how wide the menu is, where `content` is the default. The available widths are ratioed off the `contentWidth`s specified on the theme.

  Additionally the `placement` of the menu can choose from either `top` or `bottom` where the latter remains the default.

  **EXAMPLE USAGE:**

  ```jsx
  <MenuRenderer
    // ...
    width="small"
    placement="top"
  >
    ...
  </MenuRenderer>
  ```

- **MenuItem, MenuItemLink, MenuRenderer, OverflowMenu:** Add `icon` support ([#1075](https://github.com/seek-oss/braid-design-system/pull/1075))

  Provides a designed slot for adding an icon to `MenuItem` and `MenuItemLink`. To compliment this we have introduced `reserveIconSpace` on both `MenuRenderer` and `OverflowMenu` so the labels in menu items without icons align with the labels of menu items with an icon.

  **EXAMPLE USAGE:**

  ```jsx
  <MenuRenderer reserveIconSpace>
    <MenuItem
      // ...
      icon={<IconBookmark />}
    >
      Menu Item
    </MenuItem>
  </MenuRenderer>
  ```

- **MenuItem, MenuItemLink, MenuItemChecklist:** Add `badge` support ([#1075](https://github.com/seek-oss/braid-design-system/pull/1075))

  Provides a designed slot for adding a `Badge` to all the variants of a menu item.

  **EXAMPLE USAGE:**

  ```jsx
  <MenuRenderer>
    <MenuItem
      // ...
      badge={<Badge>Badge</Badge>}
    >
      Menu Item
    </MenuItem>
  </MenuRenderer>
  ```

### Patch Changes

- **Button:** Support using as menu trigger ([#1075](https://github.com/seek-oss/braid-design-system/pull/1075))

  Allow a `Button` to receive all of the required props for a menu trigger. As a result a `Button` now accepts `onKeyUp`, `onKeyDown` and `aria-haspopup`.

  **EXAMPLE USAGE:**

  ```jsx
  <MenuRenderer
    trigger={triggerProps => <Button {...triggerProps}>Button</Button>}
  >
    ...
  </MenuRenderer>
  ```

- **Column:** Enure inner element honours `component` prop ([#1075](https://github.com/seek-oss/braid-design-system/pull/1075))

## 31.6.0

### Minor Changes

- **Bleed:** Add component ([#1066](https://github.com/seek-oss/braid-design-system/pull/1066))

  Introduce `Bleed` layout component that allows content to bleed out into the parent layout by a specified amount, useful when a content needs to negate the indent provided by a parent component.

  See the [documentation](https://seek-oss.github.io/braid-design-system/components/Bleed) and [layout guide](https://seek-oss.github.io/braid-design-system/foundations/layout#bleed) for more information.

  **EXAMPLE USAGE:**

  ```diff
   <Card>
     <Stack space="gutter">
  +    <Bleed horizontal="gutter" top="gutter">
         <Placeholder height={200} label="Header Image" />
  +    </Bleed>
       <Heading level="3">Heading</Heading>
       <Text>Text content</Text>
     </Stack>
   </Card>
  ```

- **Box, BoxRenderer, atoms:** Add support for `inset` shorthand ([#1069](https://github.com/seek-oss/braid-design-system/pull/1069))

  Introduces the `inset` shorthand as a convenience for applying `top`, `bottom`, `left` and `right` properties.

  **EXAMPLE USAGE:**

  ```jsx
  <Box position="absolute" inset={0} />
  ```

  or

  ```ts
  atoms({
    position: 'absolute',
    inset: 0,
  });
  ```

- **Pagination:** Add `pageLimit` support ([#1070](https://github.com/seek-oss/braid-design-system/pull/1070))

  Add support for configuring the number of pages displayed using the `pageLimit` prop. The default is still set to 7, but consumers can now reduce this, useful when `Pagination` is used inside column layouts.

  In addition, the layout has been stabilised, preventing the links moving when the next/prev actions are shown/hidden.

  **EXAMPLE USAGE:**

  ```jsx
  <Pagination
    ...
    pageLimit={3}
  />
  ```

- **Columns:** Support using span elements via component prop ([#1064](https://github.com/seek-oss/braid-design-system/pull/1064))

  Setting the `component` prop to `span` will now ensure all elements controlled by `Columns` are `span`s. This is useful when using layout components inside dom elements that should not contain `div`s from a HTML validation perspective.

  **EXAMPLE USAGE:**

  ```jsx
  <Columns space="medium" component="span">
    ...
  </Columns>
  ```

- **Drawer:** Support positioning on the left ([#1067](https://github.com/seek-oss/braid-design-system/pull/1067))

  A `Drawer` can now enter from and be positioned on the left. The default remains unchanged and will enter from and be docked to the right.

  **EXAMPLE USAGE:**

  ```jsx
  <Drawer
    ...
    position="left"
  />
  ```

- **Inline:** Support using span elements via component prop ([#1068](https://github.com/seek-oss/braid-design-system/pull/1068))

  Setting the `component` prop to `span` will now ensure all elements controlled by `Inline` are `span`s. This is useful when using layout components inside dom elements that should not contain `div`s from a HTML validation perspective.

  **EXAMPLE USAGE:**

  ```jsx
  <Inline space="medium" component="span">
    ...
  </Inline>
  ```

## 31.5.0

### Minor Changes

- **Stack:** Add support for span elements ([#1060](https://github.com/seek-oss/braid-design-system/pull/1060))

  Stack now supports using `span` elements for it's markup, this is useful when using layout components inside elements that should not contain a `div` element, e.g. `button`.

  **EXAMPLE USAGE:**

  ```jsx
  <Stack component="span" space="medium">
    ...
  </Stack>
  ```

- **Stepper:** Add component ([#1060](https://github.com/seek-oss/braid-design-system/pull/1060))

  See [documentation](https://seek-oss.github.io/braid-design-system/components/Stepper) for full feature set and usage details.

  **EXAMPLE USAGE:**

  ```jsx
  <Stepper label="Linear steps" progress={3}>
    <Step>1. First step</Step>
    <Step>2. Second step</Step>
    <Step>3. Third step</Step>
    <Step>4. Forth step</Step>
  </Stepper>
  ```

## 31.4.0

### Minor Changes

- **AccordionItem:** Add badge support ([#1057](https://github.com/seek-oss/braid-design-system/pull/1057))

  The `AccordionItem` now has support for the `badge` prop.

  **EXAMPLE USAGE:**

  ```jsx
  <AccordionItem label="Label" badge={<Badge>New</Badge>}>
    ...
  </AccordionItem>
  ```

### Patch Changes

- **Autosuggest:** Scroll list into view ([#1058](https://github.com/seek-oss/braid-design-system/pull/1058))

  The suggestions list will now be scrolled into view (on tablet and above) if it extends beyond the bottom of the window. This prevents suggestions (particularly those loaded asynchronously) from being obscured by the edge of the window.

## 31.3.1

### Patch Changes

- **MenuRenderer, OverflowMenu:** Ensure layout of the trigger is controlled by the parent ([#1055](https://github.com/seek-oss/braid-design-system/pull/1055))

  Fixes an issue where the trigger container did not adhere to the parent layout, preventing consumers from providing triggers that take up the full width of their available space. This goes against one of Braid's key layout principles which says [spacing between elements is owned entirely by layout components](https://seek-oss.github.io/braid-design-system/foundations/layout).

## 31.3.0

### Minor Changes

- **vars:** Expose `contentWidth` theme tokens ([#1052](https://github.com/seek-oss/braid-design-system/pull/1052))

## 31.2.3

### Patch Changes

- Update experimental color mode flags ([#1050](https://github.com/seek-oss/braid-design-system/pull/1050))

## 31.2.2

### Patch Changes

- **BraidProvider:** Add `backgroundColor` to html node when `styleBody` is set (defaults to `true`) ([#1047](https://github.com/seek-oss/braid-design-system/pull/1047))

## 31.2.1

### Patch Changes

- useIcon: Return props compatible with public Box component ([#1045](https://github.com/seek-oss/braid-design-system/pull/1045))

## 31.2.0

### Minor Changes

- **vars:** Add light variant foreground colors ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

  **New foregrounds**
  The following foregrounds are now available on the `vars.foregroundColor` theme object:

  - `cautionLight`
  - `infoLight`
  - `linkLight`
  - `linkLightVisited`
  - `positiveLight`
  - `promoteLight`

- **Text:** Improve contrast of `caution`, `positive`, `info`, `promote` and `link` tones ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

  When using any of the above tones in a dark container, a lighter colour will be used to improve the text contrast against the background.

### Patch Changes

- **OverflowMenu:** Use `neutral` tone button style ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

- **Alert, Card, Toast:** Improve highlight keyline ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

  Ensures that components using a highlight keyline have the correct border radius and mask their overflow correctly.

- **Alert, Autosuggest, Tag, TextField:** Use `neutral` tone button style for clear action ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

- **Box:** Reset background color on `input` and `select` elements ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

  When specifying a `component` of `input` or `select` the background color was not being reset, falling through to the user agent styles. Reseting it to `transparent` to ensure predicatble styles across browsers and colour modes.

- **MenuItem, MenuItemLink, MenuItemCheckbox:** Use `span` elements internally for more valid HTML. ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

- **Loader:** Use current text color ([#1042](https://github.com/seek-oss/braid-design-system/pull/1042))

## 31.1.0

### Minor Changes

- **IconTip:** Add tip icon ([#1040](https://github.com/seek-oss/braid-design-system/pull/1040))

- **IconZoomIn, IconZoomOut:** Add zoom in/out icons ([#1035](https://github.com/seek-oss/braid-design-system/pull/1035))

## 31.0.0

### Major Changes

- **BraidTestProvider:** Move to separate entry ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  By moving `BraidTestProvider` to it’s own entry, we can prevent importing all the themes at dev-time. This improves the developer experience when debugging the stylesheet that is output by the development server.

  **MIGRATION GUIDE**

  Migration can largely be automated by running the Braid upgrade command. You must provide a glob to target your project’s source files. For example:

  ```
  yarn braid-upgrade v31 "**/*.{ts,tsx}"
  ```

  ***

  It may be necessary to manually migrate code in some cases, here are the affected use cases:

  ```diff
  - import { BraidTestProvider } from 'braid-design-system';
  + import { BraidTestProvider } from 'braid-design-system/test';
  ```

- **BackgroundProvider** Removed in favour of setting a `background` of `customDark`/`customLight` directly on the `Box` that has the custom background color. ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **MIGRATION GUIDE**

  ```diff
  -<Box style={{ backgroundColor: 'purple' }}>
  +<Box background="customDark" style={{ backgroundColor: 'purple' }}>
  -   <BackgroundProvider value="UNKNOWN_DARK">
       <Text>Inverted text given dark context</Text>
  -   </BackgroundProvider>
   </Box>
  ```

- Remove previously deprecated `ButtonRenderer` component in favour of [`Button`](https://seek-oss.github.io/braid-design-system/components/Button) and [`ButtonLink`](https://seek-oss.github.io/braid-design-system/components/ButtonLink). ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **MIGRATION GUIDE**

  If you were using this to render an `a` element that visually looks like a button, you should be using [`ButtonLink`](https://seek-oss.github.io/braid-design-system/components/ButtonLink)

  ```diff
  -  <ButtonRenderer>
  -    {(ButtonChildren, buttonProps) => (
  -      <a to="#" {...buttonProps}>
  -        Visually a button
  -      </a>
  -    )}
  -  </ButtonRenderer>
  +  <ButtonLink>
  +    Visually a button
  +  </ButtonLink>
  ```

- **Button, ButtonLink:** Add `neutral` tone ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  Introduces a `neutral` tone for cases where actions need to be de-emphasised. As a result, there is a breaking change to the contextual design rules that invert buttons in dark containers.

  **BREAKING CHANGE:**

  A `Button` with a `variant` of `ghost`, `soft`, or `transparent` and no specified `tone` would previously invert when inside a dark container. Now, instead of inverting the foreground colour, these cases will use a lighter version of the default tone, i.e. `formAccent`.

  **MIGRATION GUIDE:**

  To maintain previous behaviour, consumers should opt into the `neutral` tone.

  ```diff
   <Box background="brand" padding="gutter">
  -   <Button variant="ghost">Click</Button>
  +   <Button variant="ghost" tone="neutral">Click</Button>
   </Box>
  ```

- Remove legacy seekAsia themes ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  Since the rebrand went live earlier this year, all consumers of `jobsDb`, `jobStreet`, `jobStreetClassic` and `seekUnifiedBeta` themes should now be using the `apac` theme in production.

  **MIGRATION GUIDE**

  ```diff
  -import jobStreet from 'braid-design-system/themes/jobStreet';
  +import apac from 'braid-design-system/themes/apac';

  -<BraidProvider theme={jobStreet}>
  +<BraidProvider theme={apac}>
     ...
   </BraidProvider>
  ```

- **BulletList** Remove deprecated component ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **MIGRATION GUIDE**

  ```diff
  -<BulletList>
  -  <Bullet large>Bullet</Bullet>
  -  <Bullet large>Bullet</Bullet>
  -  <Bullet large>Bullet</Bullet>
  -</BulletList>

  +<List size="large">
  +  <Text>Bullet</Text>
  +  <Text>Bullet</Text>
  +  <Text>Bullet</Text>
  +</List>
  ```

- Remove previously deprecated `TextLinkRenderer` component in favour of [`TextLink`](https://seek-oss.github.io/braid-design-system/components/TextLink) and [`TextLinkButton`](https://seek-oss.github.io/braid-design-system/components/TextLinkButton). ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **MIGRATION GUIDE**

  If you were using this to render a `button` element that visually looks like a link, you should be using [`TextLinkButton`](https://seek-oss.github.io/braid-design-system/components/TextLinkButton)

  ```diff
  <Text>
  -  <TextLinkRenderer reset={false}>
  -    {(textLinkProps) => (
  -      <Box component="button" {...textLinkProps}>
  -        Visually a link
  -      </Box>
  -    )}
  -  </TextLinkRenderer>
  +  <TextLinkButton>
  +    Visually a link
  +  </TextLinkButton>
    , rendered as a button.
  </Text>
  ```

  If you were using this to render an `a` element or using a client side router link component you should ensure you have configured the [`linkComponent on BraidProvider`](https://seek-oss.github.io/braid-design-system/components/BraidProvider#providing-a-custom-link-component) in your app. Once handled, migrating to [`TextLink`](https://seek-oss.github.io/braid-design-system/components/TextLink) should be straight forward.

  ```diff
  <Text>
  -  <TextLinkRenderer reset={false}>
  -    {(textLinkProps) => (
  -      <Link {...textLinkProps}>
  -        ...
  -      </Link>
  -    )}
  -  </TextLinkRenderer>
  +  <TextLink>
  +    ...
  +  </TextLink>
  </Text>
  ```

- **Button, ButtonLink:** Remove weight prop ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  Removing support for the `weight` prop. This was deprecated back in [v29.26.0](https://seek-oss.github.io/braid-design-system/releases#29.26.0) in favour of using the [`variant`](https://seek-oss.github.io/braid-design-system/components/Button#variants) prop.

- **TextLink, TextLinkButton:** Remove support inside `Actions` component ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  Removing support for `TextLink` and `TextLinkButton` components inside of `Actions`. This was previously deprecated back in [v29.26.0](https://seek-oss.github.io/braid-design-system/releases#29.26.0) in favour of using the `transparent` `variant` of [`ButtonLink`](https://seek-oss.github.io/braid-design-system/components/Button#variants).

  **MIGRATION GUIDE**

  ```diff
    <Actions>
      <Button>...</Button>
  -   <TextLink href="...">...</TextLink>
  +   <ButtonLink href="..." variant="transparent">...</ButtonLink>
    </Actions>
  ```

- Remove `BraidLoadableProvider` ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  As most Apps should run the `apac` theme across all brands, it no longer makes sense to centralise a loadable version of the `BraidProvider`. This should simplify builds across the board and may result in a small build-speed increase.

  **MIGRATION GUIDE**

  If you are only using a single theme, then you should migrate your `BraidLoadableProvider` usage to `BraidProvider`.

  ```diff
  +import apac from 'braid-design-system/themes/apac';
  +import { BraidProvider } from 'braid-design-system';
  -import { BraidLoadableProvider } from 'braid-design-system';

  export const App = () => (
  -    <BraidLoadableProvider themeName="apac">
  +    <BraidProvider theme={apac}>
      ...
  -    </BraidLoadableProvider>
  +    </BraidProvider>
  );
  ```

  If your app still needs to render different themes then you can replicate the `BraidLoadableProvider` functionality locally using the `loadable.lib` API.

  ```tsx
  import { BraidProvider } from 'braid-design-system';
  import React, { ReactNode } from 'react';
  import loadable from 'sku/@loadable/component';

  type ThemeName = 'apac' | 'catho';

  const BraidTheme = loadable.lib((props: { themeName: ThemeName }) =>
    import(`braid-design-system/themes/${props.themeName}`),
  );

  interface AppProps {
    themeName: ThemeName;
    children: ReactNode;
  }
  export const App = ({ themeName, children }: AppProps) => (
    <BraidTheme themeName={themeName}>
      {({ default: theme }) => (
        <BraidProvider theme={theme}>{children}</BraidProvider>
      )}
    </BraidTheme>
  );
  ```

- **Box, atoms, vars:** Update theme colour tokens with improved semantics. ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  Simplifies the semantics of the colour-based tokens to support upcoming colour mode work. Changes to the property values on `backgroundColor` and `borderColor` has flow on affects to the apis on `Box` and `atoms`.

  **TOKEN CHANGES**

  **New**

  - **backgroundColor:** `surface`, `neutralSoft`
  - **borderColor:** `neutral`, `neutralInverted`, `neutralLight`

  **Removed**

  - **backgroundColor:** `card`, `formAccentDisabled`, `input`, `inputDisabled`, `selection`
  - **borderColor:** `formHover`, `standard`, `standardInverted`

  **MIGRATION GUIDE**

  Migration can largely be automated by running the Braid upgrade command. You must provide a glob to target your project’s source files. For example:

  ```
  yarn braid-upgrade v31 "**/*.{ts,tsx}"
  ```

  ***

  It may be necessary to manually migrate code in some cases, here are the affected use cases:

  **`Box` backgrounds**

  ```diff
  - <Box background="card" />
  + <Box background="surface" />

  - <Box background="formAccentDisabled" />
  + <Box background="neutralLight" />

  - <Box background="input" />
  + <Box background="surface" />

  - <Box background="inputDisabled" />
  + <Box background="neutralSoft" />

  - <Box background="selection" />
  + <Box background="formAccentSoft" />
  ```

  **`Box` boxShadows**

  ```diff
  - <Box boxShadow="borderStandard" />
  + <Box boxShadow="borderNeutralLight" />

  - <Box boxShadow="borderStandardInverted" />
  + <Box boxShadow="borderNeutralInverted" />

  - <Box boxShadow="borderStandardInvertedLarge" />
  + <Box boxShadow="borderNeutralInvertedLarge" />

  - <Box boxShadow="borderFormHover" />
  + <Box boxShadow="borderFormAccent" />
  ```

  **`vars`**

  ```diff
  - vars.borderColor.standard
  + vars.borderColor.neutralLight

  - vars.borderColor.standardInverted
  + vars.borderColor.neutralInverted

  - vars.borderColor.formHover
  + vars.borderColor.formAccent
  ```

  **`atoms`**

  ```diff
   atoms({
  -  boxShadow: 'borderStandard',
  +  boxShadow: 'borderNeutralLight',
   });

   atoms({
  -  boxShadow: 'borderStandardInverted',
  +  boxShadow: 'borderNeutralInverted',
   });

   atoms({
  -  boxShadow: 'borderStandardInvertedLarge',
  +  boxShadow: 'borderNeutralInvertedLarge',
   });

   atoms({
  -  boxShadow: 'borderFormHover',
  +  boxShadow: 'borderFormAccent',
   });
  ```

### Minor Changes

- **Box:** Add neutral background variants and new boxShadow border variants ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **New backgrounds**
  The following backgrounds are now available:

  - `neutralActive`
  - `neutralHover`
  - `neutralSoftActive`
  - `neutralSoftHover`

  **New boxShadows**
  The following box shadows are now available:

  - `borderBrandAccentLightLarge`
  - `borderCriticalLightLarge`
  - `borderFormAccentLight`
  - `borderFormAccentLightLarge`

- **atoms:** Add boxShadow border variants ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **New boxShadows**
  The following box shadows are now available:

  - `borderBrandAccentLightLarge`
  - `borderCriticalLightLarge`
  - `borderFormAccentLight`
  - `borderFormAccentLightLarge`

- **vars:** Darken neutral background for the `occ` theme. ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  A `neutral` background should be able to hold tone-based text. Moving from `grey700` to `grey800` as per the [Atomic Design System color palette](https://occmundial.github.io/occ-atomic/#Colors)

- **vars:** Add new backgrounds and light variant border colors ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  **New backgrounds**
  The following backgrounds are now available on the `vars.backgroundColor` theme object:

  - `neutralActive`
  - `neutralHover`
  - `neutralSoftActive`
  - `neutralSoftHover`

  **New borderColors**
  The following border colors are now available on the `vars.borderColor` theme object:

  - `brandAccentLight`
  - `criticalLight`
  - `formAccentLight`

- **vars:** Darken neutral background for the `seekAnz` theme. ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  A `neutral` background should be able to hold tone-based text. Moving from `sk-mid-gray-dark` to `sk-charcoal` as per the [Seek Style Guide color palette](https://seek-oss.github.io/seek-style-guide/palette)

### Patch Changes

- **Text:** Improve contrast of `brandAccent`, `critical` and `formAccent` tones ([#1031](https://github.com/seek-oss/braid-design-system/pull/1031))

  When using any of the above tones in a dark container, a lighter colour will be used to improve the text contrast against the background.

## 30.7.0

### Minor Changes

- **Toggle:** Add ref support ([#1029](https://github.com/seek-oss/braid-design-system/pull/1029))

## 30.6.0

### Minor Changes

- **TextLinkButton:** Add support for `tabIndex` ([#1025](https://github.com/seek-oss/braid-design-system/pull/1025))

## 30.5.1

### Patch Changes

- Move `@types/react` to devDependencies ([#1023](https://github.com/seek-oss/braid-design-system/pull/1023))

  Braid requires consumers to provide React, therefore they should also provide the appropriate version of `@types/react` rather than rely on the version installed in Braid.

## 30.5.0

### Minor Changes

- **FieldLabel:** Dim label when `disabled` ([#1019](https://github.com/seek-oss/braid-design-system/pull/1019))

### Patch Changes

- **Autosuggest, Dropdown, MonthPicker, PasswordField, TextField, Textarea:** Hide `placeholder` text when field is `disabled` ([#1019](https://github.com/seek-oss/braid-design-system/pull/1019))

- **Autosuggest, Checkbox, CheckboxStandalone, Dropdown, MonthPicker, TextField, Textarea, Radio, RadioGroup:** Dim the field value and label when field is `disabled` ([#1019](https://github.com/seek-oss/braid-design-system/pull/1019))

- **Autosuggest, TextField:** Hide clear button when field is `disabled`. ([#1019](https://github.com/seek-oss/braid-design-system/pull/1019))

## 30.4.3

### Patch Changes

- **Buttons, Fields, TextLinks, Toggle:** Use `span` for field state overlays instead of `div` ([#1006](https://github.com/seek-oss/braid-design-system/pull/1006))

  Produce more valid HTML as `div` elements are not as flexible with which elements they can be inside (from a validators perspective).

- Update vanilla-extract dependencies ([#1008](https://github.com/seek-oss/braid-design-system/pull/1008))

## 30.4.2

### Patch Changes

- Add support for Typescript 4.4 ([#995](https://github.com/seek-oss/braid-design-system/pull/995))

## 30.4.1

### Patch Changes

- Migrate to @capsizecss/core and @capsizecss/vanilla-extract ([#989](https://github.com/seek-oss/braid-design-system/pull/989))

- Textarea, TextField: Fix for characterLimit adding whitespace below field ([#994](https://github.com/seek-oss/braid-design-system/pull/994))

  Fix for additional white space being shown below a field when a `characterLimit` is specified and the count is not yet displayed.

## 30.4.0

### Minor Changes

- **`apac` and `seekBusiness` themes:** Update colour palette ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

  The colours used in these themes have been updated to the latest design standards.

  **A design review is highly recommended to ensure any custom design elements in your application still look correct when combined with these new colours.**

- **Box:** Add new background and border colours ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

  New `background` values:

  - `brandAccentSoft`
  - `brandAccentSoftActive`
  - `brandAccentSoftHover`
  - `criticalSoft`
  - `criticalSoftActive`
  - `criticalSoftHover`
  - `formAccentSoft`
  - `formAccentSoftActive`
  - `formAccentSoftHover`

  New `boxShadow` values:

  - `borderCautionLight`
  - `borderCriticalLight`
  - `borderInfoLight`
  - `borderPositiveLight`
  - `borderPromoteLight`

- **atoms:** Add new `boxShadow` values: ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

  - `borderCautionLight`
  - `borderCriticalLight`
  - `borderInfoLight`
  - `borderPositiveLight`
  - `borderPromoteLight`

- **vars:** Add new background and border colours ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

  New `backgroundColor` values:

  - `brandAccentSoft`
  - `brandAccentSoftActive`
  - `brandAccentSoftHover`
  - `criticalSoft`
  - `criticalSoftActive`
  - `criticalSoftHover`
  - `formAccentSoft`
  - `formAccentSoftActive`
  - `formAccentSoftHover`

  New `borderColor` values:

  - `cautionLight`
  - `criticalLight`
  - `infoLight`
  - `positiveLight`
  - `promoteLight`

- **Button, ButtonLink, ButtonRenderer:** The `soft` variant now has a solid background colour rather than an opacity. You may need to review any usage on top of coloured backgrounds. ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

- **Box, atoms, vars:** Add `large` and `xlarge` to `borderRadius` scale ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

- **`apac` and `seekBusiness` themes:** Increase size of focus ring (accessed via the `boxShadow` value of `"outlineFocus"`) and use updated colour palette. ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

- Display `formAccent` outline on form elements when focused ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

### Patch Changes

- **Dialog, Drawer:** Support long, unbroken title text ([#986](https://github.com/seek-oss/braid-design-system/pull/986))

- **Alert, Badge, Button, ButtonLink, ButtonRenderer, Card, Dialog, MenuRenderer, OverflowMenu, Pagination, TooltipRenderer, useToast:** Increase border radius using updated `borderRadius` scale ([#983](https://github.com/seek-oss/braid-design-system/pull/983))

## 30.3.0

### Minor Changes

- **IconThumb, IconFlag:** Add new icons ([#980](https://github.com/seek-oss/braid-design-system/pull/980))

- **Autosuggest, Dropdown, MonthPicker, PasswordField, Textarea, TextField:** Add aria-label & aria-labelledby support ([#979](https://github.com/seek-oss/braid-design-system/pull/979))

  In some cases it may be necessary for a field to be labelled by another element or even not to have a visual label. Instead of providing a **label** either **aria-label** or **aria-labelledby** can be provided.

  **EXAMPLE USAGE:**

  ```jsx
  // Standard field label
  <TextField label="My field" />

  // Hidden field label
  <TextField aria-label="My field" />

  // Labelled by another element
  <Heading id="title">Title</Heading>
  <TextField aria-labelledby="title" />
  ```

## 30.2.2

### Patch Changes

- Fix bug where patch-package attempts to run for consumers when installing ([#975](https://github.com/seek-oss/braid-design-system/pull/975))

## 30.2.1

### Patch Changes

- **Checkbox, RadioGroup, Radio:** Use atoms for label cursor styles ([#973](https://github.com/seek-oss/braid-design-system/pull/973))

  Since the disabled state of a checkbox can only be changed via JavaScript, cursor styles can be toggled via `Box` props rather than generating additional CSS.

  While this is an improvement in and of itself, this change is being made to work around a third-party testing bug where our use of `:disabled` in a complex CSS selector is causing an exception to be thrown.

## 30.2.0

### Minor Changes

- **TextField:** Add `characterLimit` prop ([#963](https://github.com/seek-oss/braid-design-system/pull/963))

  You can now provide a `characterLimit` that will communicate when the input text approaches or exceeds the specified limit.

  To prevent loss of information, exceeding the limit is permitted, however the count will be presented in a critical tone.

## 30.1.0

### Minor Changes

- Add `wide` breakpoint of 1200px ([#960](https://github.com/seek-oss/braid-design-system/pull/960))

  This adds support for `wide` to the following touchpoints:

  - Responsive values, e.g.
    ```ts
    { mobile: 'small', wide: 'large' }
    ```
  - Responsive range props, e.g.
    ```tsx
    <Columns collapseBelow="wide" space={{ mobile: 'small', wide: 'large' }}>
    ```
  - The `responsiveStyle` function, e.g.
    ```ts
    export const className = style(responsiveStyle({ wide: '...' }));
    ```
  - The `breakpoints` object, which now exposes the number `1200` via `breakpoints.wide`, i.e.
    ```ts
    {
      mobile: 0,
      tablet: 740,
      desktop: 940,
      wide: 1200
    }
    ```

- Add `useResponsiveValue` Hook ([#960](https://github.com/seek-oss/braid-design-system/pull/960))

  This Hook will return the resolved value based on the breakpoint the browser viewport currently falls within (`mobile`, `tablet`, `desktop` or `wide`). As this can only be calculated in the browser, the value will also be `null` when rendering server-side or statically rendering.

  Note that this Hook returns a function so that it can be called anywhere within your component.

  **EXAMPLE USAGE**

  ```tsx
  const responsiveValue = useResponsiveValue();

  const screenSize = responsiveValue({
    mobile: 'Small',
    desktop: 'Large',
  });
  ```

  You can also resolve to boolean values for breakpoint detection.

  ```tsx
  const responsiveValue = useResponsiveValue();

  const isMobile = responsiveValue({
    mobile: true,
    tablet: false,
  });

  const isDesktopOrAbove = responsiveValue({
    mobile: false,
    desktop: true,
  });
  ```

- **Dialog, Drawer:** Support nested Dialogs & Drawers ([#959](https://github.com/seek-oss/braid-design-system/pull/959))

  Remove restriction preventing the nesting of modal components, e.g. `Dialog` and `Drawer`. While it is still discouraged to keep experiences simple, there is no longer a technical guard against it.

### Patch Changes

- Deprecate `useBreakpoint` ([#960](https://github.com/seek-oss/braid-design-system/pull/960))

  This Hook has been deprecated in favour of the new `useResponsiveValue` Hook.

  This is because `useBreakpoint` leads consumers to inadvertently couple themselves to the current set of breakpoints, making it risky for us to introduce new breakpoints.

  For example, you may have chosen to detect large screens by checking that the user is on the (current) largest breakpoint (e.g. `const isDesktop = useBreakpoint() === "desktop"`), but this logic would break if we introduced an even larger breakpoint and the Hook started returning other values.

  To maintain backwards compatibility, `useBreakpoint` will continue to return `"desktop"` when the user is technically on larger breakpoints.

  **MIGRATION GUIDE**

  _Note that the `useResponsiveValue` Hook returns a `responsiveValue` function, so in these cases we're double-calling the function._

  ```diff
  -const isMobile = useBreakpoint() === 'mobile';
  +const isMobile = useResponsiveValue()({
  +  mobile: true,
  +  tablet: false
  +});
  ```

  ```diff
  -const isTablet = useBreakpoint() === 'tablet';
  +const isTablet = useResponsiveValue()({
  +  mobile: false,
  +  tablet: true,
  +  desktop: false,
  +});
  ```

  ```diff
  -const isDesktop = useBreakpoint() === 'desktop';
  +const isDesktop = useResponsiveValue()({
  +  mobile: false,
  +  desktop: true
  +});
  ```

## 30.0.3

### Patch Changes

- Ensure atoms are always lowest specificity ([#955](https://github.com/seek-oss/braid-design-system/pull/955))

## 30.0.2

### Patch Changes

- Replace [classnames](https://github.com/JedWatson/classnames) with [clsx](https://github.com/lukeed/clsx) ([#953](https://github.com/seek-oss/braid-design-system/pull/953))

## 30.0.1

### Patch Changes

- Narrow `fontWeight` token type from `string | number` to the expected values ([#952](https://github.com/seek-oss/braid-design-system/pull/952))

- **Textarea:** Fix "Received NaN for the `rows` attribute." warning. ([#950](https://github.com/seek-oss/braid-design-system/pull/950))

  Fixes the warning in node testing environments where updating the `rows` attribute was failing due to `line-height` being `normal`. Now falling back to the predefined `lines` prop when the dynamic `grow` size is not valid.

## 30.0.0

### Major Changes

- **Box:** Remove `transform="touchable"` in favour of `transform={{ active: 'touchable' }}` ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  **MIGRATION GUIDE**

  ```diff
  -<Box transform="touchable">
  +<Box transform={{ active: 'touchable' }}>
  ```

- Updated minimum browser requirement to browsers that support CSS variables ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  For the major browsers this includes:

  - Chrome 49+
  - iOS 9.3+
  - Safari 9.1+
  - Microsoft Edge 16+
  - Firefox 31+
  - Samsung 5+

- Update minimum required sku version to `10.13.1` ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  **BREAKING CHANGE**

  Ensure your version of [sku](https://github.com/seek-oss/sku) is at least `10.13.1`. This is required as Braid now uses [vanilla-extract](https://vanilla-extract.style/) for styling.

- Standardise breakpoints across all themes ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  All themes now use the following breakpoints:

  - Mobile: `0px`
  - Tablet: `740px`
  - Desktop: `992px`

  **BREAKING CHANGE**

  This is a change for the following themes:

  **jobStreet, jobStreetClassic, jobsDb, occ, wireframe**

  - Tablet: `768px` → `740px`

  **catho**

  - Tablet: `600px` → `740px`
  - Desktop: `1024px` → `992px`

  **docs**

  - Tablet: `768px` → `740px`
  - Desktop: `1136px` → `992px`

- Migrate to vanilla-extract ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  Braid now uses [vanilla-extract](http://vanilla-extract.style) rather than [treat](https://seek-oss.github.io/treat) to power its theme-based styling.

  Since they use different file extensions (`.css.ts` vs `.treat.ts`), we're able to ease the migration by supporting both approaches simultaneously in the same project.

  While we encourage you to write new CSS with vanilla-extract files and slowly migrate your existing treat files over time, the goal is to eventually remove treat entirely to enable further improvements to build tooling.

  We've written a **[treat to vanilla-extract migration guide](https://github.com/seek-oss/braid-design-system/blob/master/docs/treat%20to%20vanilla-extract%20migration.md)** to make it easier when opting to migrate a treat file. If you have any questions or concerns, or if you need assistance with implementation or migration work, please reach out to us in the `#braid-support` channel.

  **BREAKING CHANGE**

  **React Portals containing Braid components/styles must use the new `BraidPortal` component**

  CSS-based theming doesn't automatically cascade through React portals. The new [`BraidPortal`](https://seek-oss.github.io/braid-design-system/components/BraidPortal) component handles this for you by forwarding Braid's CSS variables through the portal.

  ```diff
  -import { createPortal } from 'react-dom';
  +import { BraidPortal } from 'braid-design-system';

  // ...

  -return open ? createPortal(<SomeComponent />) : null;
  +return open ? (
  +  <BraidPortal>
  +    <SomeComponent />
  +  </BraidPortal>
  +) : null;
  ```

### Minor Changes

- **TextLinkRenderer:** Allow custom CSS reset via the `reset` prop, and allow it to be disabled by setting the prop to `false`. ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

- Support object notation for responsive props ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  Responsive prop values can now be written as objects with named breakpoints, which is now the recommended notation.

  ```ts
  { mobile: 'small', tablet: 'medium', desktop: 'large' }
  ```

  This also means that breakpoints can be skipped.

  ```ts
  { mobile: 'small', desktop: 'large' }
  ```

- Add **breakpoints** object for accessing standard breakpoint values ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  The breakpoints object provides a named set of screen sizes that form the basis of all responsive rules in Braid, available in the following format:

  ```ts
  {
    mobile: 0,
    tablet: 740,
    desktop: 992
  }
  ```

- Add **globalTextStyle** and **globalHeadingStyle** functions for applying standard text styles to foreign markup in [vanilla-extract stylesheets](http://vanilla-extract.style) ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  Note: These utilities should only be used when you have no control over the HTML.

  **EXAMPLE USAGE**

  ```ts
  // styles.css.ts
  import { style, globalStyle } from '@vanilla-extract/css';
  import { globalHeadingStyle, globalTextStyle } from 'braid-design-system/css';

  export const root = style({});

  // Target all <h2> elements within the root class
  globalStyle(
    `${root} h2`,
    globalHeadingStyle({
      level: '2',
    }),
  );

  // Target all <p> elements within the root class
  globalStyle(
    `${root} p`,
    globalTextStyle({
      size: 'standard',
      weight: 'regular',
    }),
  );
  ```

- Add **atoms** function for accessing re-usable atomic classes within [vanilla-extract stylesheets](http://vanilla-extract.style) ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  Braid's re-usable atomic classes were previously only available via `Box`, but they are now accessible via the new `atoms` function.

  ```ts
  // styles.css.ts
  import { atoms } from 'braid-design-system/css';

  export const className = atoms({
    paddingTop: 'small',
  });
  ```

  This allows you to co-locate custom styles with Braid's atomic classes in your stylesheets.

  ```ts
  // styles.css.ts
  import { style, composeStyles } from '@vanilla-extract/css';
  import { atoms } from 'braid-design-system/css';

  export const className = composeStyles(
    atoms({ position: 'absolute' }),
    style({ top: 300 }),
  );
  ```

- Add **responsiveStyle** function for creating custom mobile-first styles within [vanilla-extract stylesheets](http://vanilla-extract.style) ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  **EXAMPLE USAGE**

  ```ts
  // styles.css.ts
  import { style } from '@vanilla-extract/css';
  import { vars, responsiveStyle } from 'braid-design-system/css';

  export const className = style(
    responsiveStyle({
      mobile: {
        flexBasis: vars.space.small,
      },
      tablet: {
        flexBasis: vars.space.medium,
      },
      desktop: {
        flexBasis: vars.space.large,
      },
    }),
  );

  // is equivalent to
  import { style } from '@vanilla-extract/css';
  import { vars, breakpoints } from 'braid-design-system/css';

  export const className = style({
    flexBasis: vars.space.small,
    '@media': {
      [`screen and (min-width: ${breakpoints.tablet}px)`]: {
        flexBasis: vars.space.medium,
      },
      [`screen and (min-width: ${breakpoints.desktop}px)`]: {
        flexBasis: vars.space.large,
      },
    },
  });
  ```

- Add **vars** object for accessing themed CSS variables within [vanilla-extract stylesheets](http://vanilla-extract.style) and runtime files. ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  Theming is now achieved natively with CSS variables rather than generating separate styles for each theme. CSS variables are exposed via the `braid-design-system/css` import.

  ```ts
  // styles.css.ts
  import { style } from '@vanilla-extract/css';
  import { vars } from 'braid-design-system/css';

  export const className = style({
    paddingTop: vars.space.small,
  });
  ```

### Patch Changes

- **Loader:** Adjust size to better match text ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

- **Badge:** Use correct text size for `bleedY` positioning ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

- **Box, Tag, Toggle:** Make `borderRadius="full"` always circular ([#947](https://github.com/seek-oss/braid-design-system/pull/947))

  Fixes circular border radius bug where non-square elements would result in an ellipse.

## 29.32.1

### Patch Changes

- **MenuItem:** Prevent click events from bubbling ([#939](https://github.com/seek-oss/braid-design-system/pull/939))

- **Autosuggest:** Fix missing/invalid group headings in some cases ([#937](https://github.com/seek-oss/braid-design-system/pull/937))

## 29.32.0

### Minor Changes

- **CheckboxStandalone:**: Add component ([#935](https://github.com/seek-oss/braid-design-system/pull/935))

  Adds support for cases where a Checkbox needs to be used without a form field style label.

  To maintain accessibility, it is required to provide either a **aria-label** or **aria-labelledby** property, to describe the field's intent.

  Given there is no visual label, the following features from a standard Checkbox cannot be supported:

  - description
  - message
  - badge
  - children (nested content)

  **EXAMPLE USAGE:**

  ```jsx
  <CheckboxStandalone
    id={...}
    checked={...}
    onChange={...}
    aria-label="Label"
  />
  ```

- Add support for data attribute maps on all components. ([#934](https://github.com/seek-oss/braid-design-system/pull/934))

  **EXAMPLE USAGE:**

  ```tsx
  <Alert
    data={{
      testId: 'message',
    }}
  />

  // => <div data-testId="message" />
  ```

### Patch Changes

- Sku dependencies update ([#924](https://github.com/seek-oss/braid-design-system/pull/924))

## 29.31.0

### Minor Changes

- **Checkbox,RadioGroup,Toggle:** Add `size` support to Checkbox, RadioGroup & Toggle ([#928](https://github.com/seek-oss/braid-design-system/pull/928))

  Adds support for adjusting the `size` of a `Checkbox`, the RadioItems within a `RadioGroup` or a `Toggle`. Setting the size adjusts both the visual control and the text size of the label.

  **EXAMPLE USAGE:**

  ```jsx
  <Checkbox size="small" label="Label" />
  ```

  ```jsx
  <RadioGroup size="small" label="Label">
    ...
  </RadioGroup>
  ```

  ```jsx
  <Toggle size="small" label="Label" />
  ```

### Patch Changes

- **Pagination:** Add keyline to improve active page indicator contrast ([#926](https://github.com/seek-oss/braid-design-system/pull/926))

  Improves the contrast of the active page indicator by adding a keyline when `Pagination` is used outside of a `Card`.

## 29.30.0

### Minor Changes

- **Accordion, AccordionItem:** Allow customisation of size, tone, space and dividers. ([#925](https://github.com/seek-oss/braid-design-system/pull/925))

  Note that, to ensure adequate space for touch targets, the `space` prop only accepts values of `"medium"`, `"large"` and `"xlarge"`.

  **EXAMPLE USAGE**

  ```tsx
  <Accordion size="standard" tone="secondary" space="xlarge" dividers={false}>
    <AccordionItem label="Accordion item 1">...</AccordionItem>
    <AccordionItem label="Accordion item 2">...</AccordionItem>
    <AccordionItem label="Accordion item 3">...</AccordionItem>
  </Accordion>
  ```

### Patch Changes

- Update capsize dependency ([#921](https://github.com/seek-oss/braid-design-system/pull/921))

## 29.29.3

### Patch Changes

- **Textarea:** Highlight excess characters when `characterLimit` is provided ([#919](https://github.com/seek-oss/braid-design-system/pull/919))

## 29.29.2

### Patch Changes

- Fix type errors in TypeScript v4.2.2 ([#915](https://github.com/seek-oss/braid-design-system/pull/915))

## 29.29.1

### Patch Changes

- **TooltipRenderer:** Support usage within `Text` elements ([#912](https://github.com/seek-oss/braid-design-system/pull/912))

## 29.29.0

### Minor Changes

- **Box:** Support responsive `borderRadius` ([#910](https://github.com/seek-oss/braid-design-system/pull/910))

  Adds support for responsive values to `borderRadius`.

  **EXAMPLE USAGE:**

  ```jsx
  <Box borderRadius={['none', 'standard']}>...</Box>
  ```

- **Button:** Add support for `ref` and `tabIndex` props ([#905](https://github.com/seek-oss/braid-design-system/pull/905))

- **Card:** Add `component` support ([#910](https://github.com/seek-oss/braid-design-system/pull/910))

  The HTML tag can be customised to ensure the underlying document semantics are meaningful. This can be done using the component prop and supports `div` (default), `article`, `aside`, `details`, `main` and `section`.

  **EXAMPLE USAGE:**

  ```jsx
  <Card component="article">...</Card>
  ```

- **Badge:** Add support for `ref`, `tabIndex` and `aria-describedby` props ([#905](https://github.com/seek-oss/braid-design-system/pull/905))

- **Card:** Add `tone` support ([#910](https://github.com/seek-oss/braid-design-system/pull/910))

  Specifying a `tone` will now add a keyline down the left hand side of the container. The supported tones are `promote` and `formAccent`.

  **As a result, Cards are now position relative containers.**

  **EXAMPLE USAGE:**

  ```jsx
  <Card tone="formAccent">...</Card>
  ```

- **TextLink, ButtonLink:** Add support for `ref` prop ([#905](https://github.com/seek-oss/braid-design-system/pull/905))

- **Card:** Add `rounded` and `roundedAbove` support ([#910](https://github.com/seek-oss/braid-design-system/pull/910))

  Card corners can be rounded by providing the `rounded` prop.

  Alternatively, rounding may be applied responsively using the `roundedAbove` prop, and providing either `mobile` or `tablet`. This enables card edges to be softened on larger screens, but squared off if it runs full bleed on smaller devices.

  **EXAMPLE USAGE:**

  ```jsx
  <Card rounded>...</Card>
  ```

  or

  ```jsx
  <Card roundedAbove="mobile">...</Card>
  ```

### Patch Changes

- **Badge:** Ensure `ref`, `title`, `tabIndex` and `aria-describedby` props are applied to the visual badge element, not its container element ([#908](https://github.com/seek-oss/braid-design-system/pull/908))

- **TooltipRenderer:** Add arrow to tooltip ([#908](https://github.com/seek-oss/braid-design-system/pull/908))

## 29.28.1

### Patch Changes

- **TextLink, TextLinkButton, TextLinkRenderer:** Scope deprecation warning to only be in Actions context. ([#903](https://github.com/seek-oss/braid-design-system/pull/903))

## 29.28.0

### Minor Changes

- **Box:** Support value of `default` on `cursor` prop ([#901](https://github.com/seek-oss/braid-design-system/pull/901))

  **EXAMPLE USAGE**

  ```tsx
  <Box cursor="default">...</Box>
  ```

- **TooltipRenderer:** Add `placement` prop, support `top` and `bottom`. Set default placement to `top`. ([#901](https://github.com/seek-oss/braid-design-system/pull/901))

  **EXAMPLE USAGE**

  ```tsx
  <TooltipRenderer
    id={id}
    tooltip={<Text>This is a tooltip!</Text>}
    placement="bottom"
  >
    {({ triggerProps }) => (
      <Box aria-label="Help" {...triggerProps}>
        <IconHelp />
      </Box>
    )}
  </TooltipRenderer>
  ```

- **Button, ButtonLink, ButtonRenderer:** Add `bleedY` prop ([#900](https://github.com/seek-oss/braid-design-system/pull/900))

  You can now choose to allow the button’s background colour to bleed out into the surrounding layout, making it easier to align with other elements.

  For example, we can align a button to a Heading element using an Inline, even though the button is actually taller than the heading. If we didn’t use the **bleedY** prop in this case, the button would introduce unwanted space above and below the heading.

  **EXAMPLE USAGE:**

  ```jsx
  <Inline space="small" alignY="center">
    <Heading level="4">Heading</Heading>
    <Button bleedY>Button</Button>
    <Button bleedY size="small">
      Button
    </Button>
  </Inline>
  ```

## 29.27.0

### Minor Changes

- Add **TooltipRenderer** component ([#897](https://github.com/seek-oss/braid-design-system/pull/897))

  Tooltips appear on mouse hover, tap and keyboard focus, and are hidden when scrolling and clicking/tapping/focusing on other elements.

  Tooltips cannot contain interactive elements like links, buttons or form elements.

  Note: The trigger element must support `ref`, `tabIndex` and `aria-describedby` props.

  **EXAMPLE USAGE**

  ```tsx
  <TooltipRenderer id={id} tooltip={<Text>This is a tooltip!</Text>}>
    {({ triggerProps }) => (
      <Box aria-label="Help" {...triggerProps}>
        <IconHelp />
      </Box>
    )}
  </TooltipRenderer>
  ```

## 29.26.0

### Minor Changes

- **Box:** Add `borderBrandAccentLarge` to `boxShadow` prop ([#893](https://github.com/seek-oss/braid-design-system/pull/893))

- **Text, Icons:** Add brandAccent tone to Text and Icons ([#893](https://github.com/seek-oss/braid-design-system/pull/893))

  **EXAMPLE USAGE:**

  ```jsx
  <Text tone="brandAccent">...</Text>
  ```

- **Button,ButtonLink:** Add variant to Button and deprecate weight ([#893](https://github.com/seek-oss/braid-design-system/pull/893))

  Introduces a new `variant` prop to `Button`/`ButtonLink` giving consumers a single prop to use for selecting the visual style of the button. Choose from `solid` (default), `ghost`, `soft` or `transparent`. The colour of the button is now consistently controlled via the `tone` prop, with supported values being `"brandAccent"`, `"critical"` or `undefined`.

  As a result the `weight` prop is now deprecated. See the migration guide below.

  **EXAMPLE USAGE:**

  ```jsx
  <Inline space="small" collapseBelow="desktop">
    <Button>Solid</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="soft">Soft</Button>
    <Button variant="transparent">Transparent</Button>
  </Inline>
  ```

  **MIGRATION GUIDE:**
  The `weight` prop is now deprecated. If you are not specifying a `weight` there is no change required.

  If you are, each weight can be migrated as follows:

  #### Regular

  Can be replicated with a `variant` of `solid` (default).

  ```diff
  -<Button weight="regular">...</Button>
  +<Button variant="solid">...</Button>
  ```

  Given it is the default `variant`, you could also choose to simply remove the `weight` prop.

  ```diff
  -<Button weight="regular">...</Button>
  +<Button>...</Button>
  ```

  #### Strong

  Can be replicated with a `variant` of `solid` (default), with a `tone` of `brandAccent`.

  ```diff
  -<Button weight="strong">...</Button>
  +<Button tone="brandAccent">...</Button>
  ```

  #### Weak

  Can be replicated with a `variant` of `ghost`.

  ```diff
  -<Button weight="weak">...</Button>
  +<Button variant="ghost">...</Button>
  ```

### Patch Changes

- **TextLink,TextLinkButton:** Deprecate inside of Actions in favour of transparent Button ([#893](https://github.com/seek-oss/braid-design-system/pull/893))

  Usage of `TextLink` or `TextLinkButton` inside of an `Actions` container should now use a `Button` with a `variant` of `transparent`.

  Previously when a `TextLink` or `TextLinkButton` was placed inside of an `Actions` container, it would be given a custom layout to align with the `Button` elements. We are deprecating this behaviour.

  **MIGRATION GUIDE:**
  Going forward `Actions` should only contain `Button` elements. To migrate towards this, both `TextLink` and `TextLinkButton` should now use either a `ButtonLink` or `Button` respectively, with a `variant` or `transparent`.

  #### TextLink

  ```diff
  <Actions>
    <Button>...</Button>
  - <TextLink href="...">...</TextLink>
  + <ButtonLink href="..." variant="transparent">...</ButtonLink>
  </Actions>
  ```

  #### TextLinkButton

  ```diff
  <Actions>
    <Button>...</Button>
  - <TextLinkButton onClick={...}>...</TextLinkButton>
  + <Button onClick={...} variant="transparent">...</Button>
  </Actions>
  ```

- **Button, ButtonLink:** Remove all interactive styles when loading ([#895](https://github.com/seek-oss/braid-design-system/pull/895))

  No longer applies hover and cursor pointer styles when a `Button` is set to `loading`.

## 29.25.0

### Minor Changes

- **Tabs:** Support fragments and `null`/`undefined` as children in `Tabs` and `TabPanels` ([#889](https://github.com/seek-oss/braid-design-system/pull/889))

### Patch Changes

- Add space between page and navigation controls above mobile to improve affordance between the current page and the hover state of surrounding buttons. ([#888](https://github.com/seek-oss/braid-design-system/pull/888))

## 29.24.0

### Minor Changes

- **Hidden:** Add `component` support ([#880](https://github.com/seek-oss/braid-design-system/pull/880))

  You can now customise the DOM element rendered when using `Hidden`. If no `component` is specified, it will fall back to the current behaviour — a `div` by default, or a `span` when setting `inline` to `true`.

  **EXAMPLE USAGE:**

  ```jsx
  <Hidden component="li">...</Hidden>
  ```

- **Pagination:** Add component ([#880](https://github.com/seek-oss/braid-design-system/pull/880))

  **EXAMPLE USAGE:**

  ```jsx
  <Pagination
    label="Search results pagination"
    page={1}
    total={20}
    linkProps={({ page }) => ({
      href: `/results?page=${page}`,
    })}
  />
  ```

### Patch Changes

- Update dependencies ([#883](https://github.com/seek-oss/braid-design-system/pull/883))

## 29.23.0

### Minor Changes

- **Button, ButtonLink, ButtonRenderer, Actions:** Add `size` prop, support `small` size ([#879](https://github.com/seek-oss/braid-design-system/pull/879))

  You can now render smaller variants of button/action elements by setting the `size` prop to `small`.

  **EXAMPLE USAGE**

  **Small Button**

  ```jsx
  <Button size="small">Small Button</Button>
  ```

  **Small Actions**

  ```jsx
  <Actions size="small">
    <Button>Regular Button</Button>
    <Button weight="weak">Weak Button</Button>
    <TextLink href="#">TextLink</TextLink>
  </Actions>
  ```

### Patch Changes

- **Button, ButtonLink, ButtonRenderer:** Reduce horizontal padding of `standard` size from `gutter` to `medium` ([#879](https://github.com/seek-oss/braid-design-system/pull/879))

## 29.22.0

### Minor Changes

- **Tabs:** Add `divider` prop, support `full` and `none` ([#875](https://github.com/seek-oss/braid-design-system/pull/875))

  You can now customise the width of the divider line underneath the tab strip. The default value is `minimal`, but you can now set it to `full` or `none`.

  **EXAMPLE USAGE**

  ```jsx
  <TabsProvider id="id">
    <Tabs label="Label" divider="full">
      <Tab>The first tab</Tab>
      <Tab>The second tab</Tab>
    </Tabs>
    <TabPanels>
      <TabPanel>...</TabPanel>
      <TabPanel>...</TabPanel>
    </TabPanels>
  </TabsProvider>
  ```

## 29.21.1

### Patch Changes

- **Autosuggest:** Ensure input occupies the full width of its container ([#872](https://github.com/seek-oss/braid-design-system/pull/872))

## 29.21.0

### Minor Changes

- Add IconMobile and IconDesktop icons. ([#867](https://github.com/seek-oss/braid-design-system/pull/867))

- **TextField:** Add `prefix` prop ([#866](https://github.com/seek-oss/braid-design-system/pull/866))

  The `prefix` prop allows you to prepend read-only content on the left-hand side of the field. This is typically used for currency symbols, country codes, etc.

  **EXAMPLE USAGE**

  ```jsx
  <TextField prefix="+61" {...rest} />
  ```

## 29.20.1

### Patch Changes

- Use JSDoc comments to flag deprecated components ([#860](https://github.com/seek-oss/braid-design-system/pull/860))

  You will now receive in-editor warnings and migration guidance when using deprecated components.

- **Autosuggest:** Fix bug where async suggestions may not be visible ([#862](https://github.com/seek-oss/braid-design-system/pull/862))

  This fixes a bug where suggestions wouldn't become visible if the `suggestions` prop was initially empty and then populated asynchronously, only becoming visible on the next user interaction, e.g. typing in the field.

## 29.20.0

### Minor Changes

- **MenuItem, MenuItemLink:** Add support for `critical` tone ([#855](https://github.com/seek-oss/braid-design-system/pull/855))

  For destructive actions (e.g. "Delete") you can now provide a `tone` prop with a value of `"critical"`.

  **EXAMPLE USAGE**

  ```tsx
  <OverflowMenu label="Options">
    <MenuItem tone="critical" onClick={() => {}}>
      Delete
    </MenuItem>
  </OverflowMenu>
  ```

### Patch Changes

- **OverflowMenu, MenuRenderer, MenuItemDivider:** Remove horizontal padding ([#855](https://github.com/seek-oss/braid-design-system/pull/855))

## 29.19.0

### Minor Changes

- **Box:** Add `"criticalActive"` and `"criticalHover"` to `background` prop ([#851](https://github.com/seek-oss/braid-design-system/pull/851))

- **Button, ButtonLink, ButtonRenderer:** Add support for `critical` tone ([#851](https://github.com/seek-oss/braid-design-system/pull/851))

  For destructive actions (e.g. "Delete") you can now provide a `tone` prop with a value of `"critical"`.

  **EXAMPLE USAGE**

  ```tsx
  <Button tone="critical">
    <IconDelete /> Delete
  </Button>
  ```

- **Box:** Add `"borderCriticalLarge"` to `boxShadow` prop ([#851](https://github.com/seek-oss/braid-design-system/pull/851))

## 29.18.0

### Minor Changes

- **Autosuggest:** Add support for custom messages when no suggestions are present ([#847](https://github.com/seek-oss/braid-design-system/pull/847))

  If no suggestions are available and you'd like to provide an explanation to the user, you can now pass an object with a `messages` property to the `suggestions` prop.

  **EXAMPLE USAGE**

  ```tsx
  <Autosuggest
    suggestions={{ message: 'No suggestions available.' }}
    {...restProps}
  />
  ```

## 29.17.3

### Patch Changes

- **Checkbox:** Support inferring of tri-state checked value ([#843](https://github.com/seek-oss/braid-design-system/pull/843))

  To simplify the use of tri-state checkboxes, the **checked** prop now supports resolving the tri-state value from an array of checked values.

  **EXAMPLE USAGE:**

  ```jsx
  <Checkbox
    label="Select all"
    checked={[true, false, false]} // Will resolve to "mixed"
  />
  ```

- **Dropdown:** Only show a blank option in the list when the `value` prop is blank and a placeholder isn't present ([#846](https://github.com/seek-oss/braid-design-system/pull/846))

- **PasswordField:** Ensure disabled is handled correctly ([#845](https://github.com/seek-oss/braid-design-system/pull/845))

  Fixes a bug where the **disabled** prop was hiding the visibility toggle but leaving the field enabled.

## 29.17.2

### Patch Changes

- Fix type definitions for Stack and scroll components ([#841](https://github.com/seek-oss/braid-design-system/pull/841))

## 29.17.1

### Patch Changes

- **Toggle:** Fix layout issue when label text wraps to multiple lines ([#838](https://github.com/seek-oss/braid-design-system/pull/838))

## 29.17.0

### Minor Changes

- **Autosuggest:** Add `filterSuggestions` function, allow `suggestions` prop to be a function ([#831](https://github.com/seek-oss/braid-design-system/pull/831))

  The logic for filtering suggestions typically lives on the server rather than the client because it’s impractical to send all possible suggestions over the network. However, when prototyping in Playroom or working with smaller datasets, you may want to perform this filtering on the client instead. For this case, we now provide a `filterSuggestions` function to make this as painless as possible.

  To better support this behaviour, you can now pass a function to the `suggestions` prop. When executed, this function will be passed the current `value` of the field.

  **EXAMPLE USAGE**

  ```tsx
  import { Autosuggest, filterSuggestions } from 'braid-design-system';

  <Autosuggest
    suggestions={filterSuggestions([
      { text: 'Apples', value: 1 },
      { text: 'Bananas', value: 2 },
    ])}
    {...restProps}
  />;
  ```

## 29.16.0

### Minor Changes

- **Checkbox:** Add support for mixed state ([#822](https://github.com/seek-oss/braid-design-system/pull/822))

  A checkbox can now accept a boolean or `mixed` as the `checked` property. When `mixed`, the checkbox is marked as being in an `indeterminate` state and announced as `mixed` to a screen reader.

  **EXAMPLE USAGE:**

  ```jsx
  <Checkbox checked="mixed" onChange={handler} label="Label" />
  ```

## 29.15.0

### Minor Changes

- **Autosuggest:** Support custom label text for suggestions ([#821](https://github.com/seek-oss/braid-design-system/pull/821))

  You can now optionally provide different suggestion text from the value that gets inserted into the text field.

  **EXAMPLE USAGE**

  ```tsx
  <Autosuggest
    suggestions={[{ text: 'apples', label: 'Add "apples"' }]}
    {...restProps}
  />
  ```

## 29.14.0

### Minor Changes

- **Autosuggest:** Forward `ref` prop to input element ([#819](https://github.com/seek-oss/braid-design-system/pull/819))

## 29.13.1

### Patch Changes

- **Checkbox,RadioGroup,Radio:** Fix element type passed to onChange event ([#814](https://github.com/seek-oss/braid-design-system/pull/814))

  Fixes a bug where the `onChange` event previously received the change event for a `form` element rather than an `input` element.

## 29.13.0

### Minor Changes

- **List:** Add support for icons ([#810](https://github.com/seek-oss/braid-design-system/pull/810))

  Provides a way to use an icon for all the items in a list. When using `type="icon"` you must also provide the `icon` prop. See example below:

  **EXAMPLE USAGE:**

  ```jsx
  <List type="icon" icon={<IconTick tone="positive" />}>
    <Text>This is a list item.</Text>
    <Text>This is a list item.</Text>
    <Text>This is a list item.</Text>
  </List>
  ```

## 29.12.0

### Minor Changes

- **RadioGroup,RadioItem:** Add RadioGroup & RadioItem components ([#807](https://github.com/seek-oss/braid-design-system/pull/807))

  The RadioGroup provides an accessible way to group and control a set of **RadioItem** components. The RadioGroup is responsible for handling the value, tone, message, and disabled state—determining the presentation and selection of the items in the list.

  **EXAMPLE USAGE:**

  ```jsx
  <RadioGroup id="experience" label="Experience" value="" onChange={() => {}}>
    <RadioItem label="Less than one year" value="0" />
    <RadioItem label="1 year" value="1" />
    <RadioItem label="2 years" value="2" />
    <RadioItem label="3+ years " value="3" />
  </RadioGroup>
  ```

## 29.11.3

### Patch Changes

- **Tabs:** Only scroll tabs when necessary on large screens ([#806](https://github.com/seek-oss/braid-design-system/pull/806))

  Previously, when there were enough tabs to require horizontal scrolling, we would always scroll the active tab to the left-hand side of the scroll container (with a slight offset). This was primarily designed as a mobile interaction, and in practice was found to be a bit unexpected on large screens.

  Instead, when the tabs are scrollable on large screens, we now only scroll the active tab into view if it's partially off-screen or positioned too close to the edge of the scroll container. This ensures that automatic scrolling only occurs when absolutely necessary.

## 29.11.2

### Patch Changes

- **Radio,Checkbox:** Apply aria-describedby only when needed ([#802](https://github.com/seek-oss/braid-design-system/pull/802))

  Only apply aria-describedby when needed, e.g. either a message or description is passed.

- **IconVisibility:** Simplify visibility icon ([#804](https://github.com/seek-oss/braid-design-system/pull/804))

## 29.11.1

### Patch Changes

- **TextField,Dropdown,PasswordField,MonthPicker,Textarea:** Apply aria-describedby to form elements only when needed ([#798](https://github.com/seek-oss/braid-design-system/pull/798))

  Only apply `aria-describedby` to form elements when needed, e.g. either a `message`, `description`, or an explicit `aria-describedby` is passed.

- **MonthPicker:** Announce semantic grouping of fields and improved translation support. ([#798](https://github.com/seek-oss/braid-design-system/pull/798))

  When not on a native device, the MonthPicker uses a `fieldset` containing two dropdowns. This change ensures that the grouping is announced correctly. From a translations perspective the labels for the dropdowns are no longer a concatenation of the `label` and `monthLabel`/`yearLabel`, supporting translation of the entire phrase.

## 29.11.0

### Minor Changes

- **Autosuggest:** Add `hideSuggestionsOnSelection` prop ([#792](https://github.com/seek-oss/braid-design-system/pull/792))

  Typically we hide the suggestion list when a selection is made, assuming that the field is now populated with the desired value. However, if the surrounding application clears the text field when a selection is made, this clashes with the user expectation that the field has been reverted back to its initial state with suggestions visible. To cater for this, we now allow you to opt out of this behaviour via the `hideSuggestionsOnSelection` boolean prop.

  **EXAMPLE USAGE**

  ```jsx
  <Autosuggest hideSuggestionsOnSelection={false} {...rest} />
  ```

## 29.10.0

### Minor Changes

- **List:** Add support for Roman numerals ([#788](https://github.com/seek-oss/braid-design-system/pull/788))

  **EXAMPLE USAGE**

  ```jsx
  <List type="roman">
    <Text>This is a Roman list item.</Text>
    <Text>This is a Roman list item.</Text>
    <Text>This is a Roman list item.</Text>
  </List>
  ```

## 29.9.0

### Minor Changes

- **Radio,Checkbox:** Add description and badge support ([#786](https://github.com/seek-oss/braid-design-system/pull/786))

  Allows a way to provide more detail about a `Radio` or `Checkbox` item using `description`, bringing these fields into line with the rest of the form fields in Braid. Also allows a `badge` to be provided to be placed alongside the `label`.

  **EXAMPLE USAGE:**

  ```jsx
  <Radio
    label="Option"
    description="This option is your favourite"
    badge={
      <Badge tone="positive" weight="strong">
        New
      </Badge>
    }
  />
  ```

  or

  ```jsx
  <Checkbox
    label="Option"
    description="This option is your favourite"
    badge={
      <Badge tone="positive" weight="strong">
        New
      </Badge>
    }
  />
  ```

## 29.8.1

### Patch Changes

- **Loader, Button, ButtonLink, ButtonRenderer:** Improve performance of loading animations ([#784](https://github.com/seek-oss/braid-design-system/pull/784))

  Adjust animations properties and values to reduce CPU recalculation overheads.

- **Toggle:** Ensure there is a minimum amount of space between the label and the toggle when using justified alignment ([#782](https://github.com/seek-oss/braid-design-system/pull/782))

## 29.8.0

### Minor Changes

- Add **Drawer** component ([#775](https://github.com/seek-oss/braid-design-system/pull/775))

  You can now open a modal panel on the right-hand side of the screen, following the [WAI Aria Dialog (Modal) Pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal).

  See the [documentation](https://seek-oss.github.io/braid-design-system/components/Drawer) for more details and interactive examples.

- **Box:** Add `maxWidth` prop ([#775](https://github.com/seek-oss/braid-design-system/pull/775))

  The sizes from [ContentBlock](https://seek-oss.github.io/braid-design-system/components/ContentBlock) are now available at a lower level for more primitive-based layouts.

  **EXAMPLE USAGE:**

  ```jsx
  <Box maxWidth="large">...</Box>
  ```

### Patch Changes

- **Dialog:** Fix close button to the corner of the dialog when scrolling ([#775](https://github.com/seek-oss/braid-design-system/pull/775))

- **Autosuggest, Dialog:** Lighten backdrop opacity from 0.7 to 0.4 ([#775](https://github.com/seek-oss/braid-design-system/pull/775))

## 29.7.0

### Minor Changes

- **FieldLabel:** Add descriptionId prop ([#766](https://github.com/seek-oss/braid-design-system/pull/766))

  **EXAMPLE USAGE:**

  ```jsx
  <FieldLabel
    htmlFor="id"
    label="This is a field label"
    description="Extra info about the field"
    descriptionId="id-description"
  />
  ```

### Patch Changes

- **TextField, PasswordField, Textarea, Autosuggest, Dropdown, MonthPicker:** Add decription to aria-describedby ([#766](https://github.com/seek-oss/braid-design-system/pull/766))

## 29.6.0

### Minor Changes

- **HiddenVisually:** Add support for passing IDs ([#757](https://github.com/seek-oss/braid-design-system/pull/757))

  This is useful when mapping a `HiddenVisually` component to `aria-describedby`

  **EXAMPLE USAGE:**

  ```jsx
  <HiddenVisually id="my-hidden-desciption">Hidden desciption</HiddenVisually>
  ```

- **Autosuggest:** Add translations prop to enable internationalisation ([#757](https://github.com/seek-oss/braid-design-system/pull/757))

### Patch Changes

- **Autosuggest:** Improve screen reader experience ([#757](https://github.com/seek-oss/braid-design-system/pull/757))

  Add description informing user that suggestions will appear below field. Also, notify users about how many suggestions are available, and about automatic selections.

- **TextField, PasswordField, Textarea, Dropdown:** Add support for multiple field descriptions ([#757](https://github.com/seek-oss/braid-design-system/pull/757))

  Previously, if a custom `aria-describedby` prop was passed, it would take precedence over the `message` prop, which also uses `aria-describedby`. Both descriptions can now be applied at the same time.

## 29.5.1

### Patch Changes

- **MenuRenderer, OverflowMenu:** Fix circular dependency issue ([#761](https://github.com/seek-oss/braid-design-system/pull/761))

## 29.5.0

### Minor Changes

- Add **MenuItemDivider** component ([#751](https://github.com/seek-oss/braid-design-system/pull/751))

  You can now place visual separators between groups of menu items when using [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu)/[MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer).

  **EXAMPLE USAGE**

  ```jsx
  <OverflowMenu label="Options">
    <MenuItem onClick={() => {}}>Button</MenuItem>
    <MenuItemLink href="#">Link</MenuItemLink>
    <MenuItemDivider />
    <MenuItem onClick={() => {}}>Another button</MenuItem>
  </OverflowMenu>
  ```

- Add **MenuItemCheckbox** component ([#751](https://github.com/seek-oss/braid-design-system/pull/751))

  You can now render checkboxes within [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu)/[MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer) elements.

  **EXAMPLE USAGE**

  ```jsx
  <OverflowMenu label="Checklist">
    <MenuItemCheckbox checked={true} onChange={() => {}}>
      Checkbox 1
    </MenuItemCheckbox>
    <MenuItemCheckbox checked={false} onChange={() => {}}>
      Checkbox 2
    </MenuItemCheckbox>
    <MenuItemCheckbox checked={false} onChange={() => {}}>
      Checkbox 3
    </MenuItemCheckbox>
  </OverflowMenu>
  ```

- **Loader:** Add support for `aria-label` ([#752](https://github.com/seek-oss/braid-design-system/pull/752))

  Provides a mechanism for consumers to better communicate to assistive technologies what is happening.

  **EXAMPLE USAGE:**

  ```jsx
  <Loader aria-label="Loading search results" />
  ```

### Patch Changes

- **Autosuggest**: Update to ARIA 1.2 combobox spec ([#754](https://github.com/seek-oss/braid-design-system/pull/754))

## 29.4.0

### Minor Changes

- **Badge:** Add `bleedY` prop ([#743](https://github.com/seek-oss/braid-design-system/pull/743))

  You can now choose to allow the badge’s background colour to bleed out into the surrounding layout, making it easier to align with other elements.

  For example, we can align a badge to a [Heading](https://seek-oss.github.io/braid-design-system/components/Heading) element using an [Inline](https://seek-oss.github.io/braid-design-system/components/Inline), even though the badge is actually taller than the heading. If we didn’t use the `bleedY` prop in this case, the badge would introduce unwanted space above and below the heading.

  ```jsx
  <Inline alignY="center" space="xsmall">
    <Heading level="4">Heading</Heading>
    <Badge bleedY tone="positive">
      New
    </Badge>
  </Inline>
  ```

- Add `Dialog` component ([#746](https://github.com/seek-oss/braid-design-system/pull/746))

  Follows the [WAI Aria Dialog (Modal) Pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal).

  **EXAMPLE USAGE:**

  ```jsx
  <Fragment>
    <Actions>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
    </Actions>

    <Dialog title="Dialog Example" id={id} open={open} onClose={setOpen}>
      <Placeholder height={100} width="100%" />
    </Dialog>
  </Fragment>
  ```

  See [the documentation](https://seek-oss.github.io/braid-design-system/components/Dialog) for an exhaustive list of features.

### Patch Changes

- **List, BulletList:** Ensure list items are full width ([#745](https://github.com/seek-oss/braid-design-system/pull/745))

  Fixes an issue where list content was unable to stretch to the edge of its container. To allow this, we now set the list item container itself to be full width so that content is no longer constrained.

- **ContentBlock:** Ensure block is full width ([#746](https://github.com/seek-oss/braid-design-system/pull/746))

  Fixes an issue where `ContentBlock`s inside of flex containers would not grow to their defined `max-width`.

## 29.3.0

### Minor Changes

- **Badge:** Allow custom title text ([#738](https://github.com/seek-oss/braid-design-system/pull/738))

  **EXAMPLE USAGE**

  ```jsx
  <Badge tone="positive" title="3 new jobs">
    3
  </Badge>
  ```

- Improved server rendering of Tabs ([#737](https://github.com/seek-oss/braid-design-system/pull/737))

  Previously, `Tab` and `TabPanel` components only showed their content and active states after the first render, which meant server rendering was not ideal. Active Tabs and TabPanel content can now be server rendered. Uncontrolled usages of Tabs should just work.

  For controlled Tabs using the `selectedItem` prop, you now need to pass the `item` prop (already on `Tab`) to `TabPanel` as well.

  ```diff
  <TabsProvider id="id" selectedItem="second">
    <Tabs label="Test tabs">
      <Tab item="first">The first tab</Tab>
      <Tab item="second">The second tab</Tab>
      <Tab item="third">The third tab</Tab>
    </Tabs>
    <TabPanels>
  -    <TabPanel>
  +    <TabPanel item="first">
        <Placeholder height={200} label="Panel 1" />
      </TabPanel>
  -    <TabPanel>
  +    <TabPanel item="second">
        <Placeholder height={200} label="Panel 2" />
      </TabPanel>
  -    <TabPanel>
  +    <TabPanel item="third">
        <Placeholder height={200} label="Panel 3" />
      </TabPanel>
    </TabPanels>
  </TabsProvider>
  ```

- **ContentBlock:** Add support for xsmall & small widths ([#735](https://github.com/seek-oss/braid-design-system/pull/735))

  **EXAMPLE USAGE**

  ```jsx
  <ContentBlock width="small">...</ContentBlock>
  ```

## 29.2.2

### Patch Changes

- **OverflowMenu, MenuRenderer:** Assert that all child nodes are valid menu items ([#731](https://github.com/seek-oss/braid-design-system/pull/731))

  In order to maintain accessibility, we now throw assertion errors in development if any child node within an [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu) or [MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer) component is not a [MenuItem/MenuItemLink](https://seek-oss.github.io/braid-design-system/components/MenuItem).

## 29.2.1

### Patch Changes

- **Loader:** Fix rendering issues due to browser rounding errors ([#728](https://github.com/seek-oss/braid-design-system/pull/728))

## 29.2.0

### Minor Changes

- **Box:** Added `zIndex` prop ([#726](https://github.com/seek-oss/braid-design-system/pull/726))

  The following z-index palette is now available on `Box`:

  **Local stacking**

  - `0`
  - `1`
  - `2`

  **Global stacking**

  - `"dropdownBackdrop"`
  - `"dropdown"`
  - `"sticky"`
  - `"modalBackdrop"`
  - `"modal"`
  - `"notification"`

  **EXAMPLE USAGE**

  ```jsx
  <Box position="fixed" zIndex="sticky">
    ...
  </Box>
  ```

- TabPanels: Add `renderInactivePanels` prop ([#722](https://github.com/seek-oss/braid-design-system/pull/722))

  By default, the children of `TabPanel` components are only rendered when they are selected. However, in cases where you want to preserve local component state when switching tabs, this behaviour is undesirable. Setting `renderInactivePanels` will cause the `TabPanel` children to be rendered even when visually hidden.

  **Note:** This is not a visual change, the panels will still be hidden from the user.

  e.g.

  ```jsx
  <TabsProvider selectedItem={0}>
    <Tabs>
      <Tab>First</Tab>
      <Tab>Second</Tab>
    </Tabs>
    <TabPanels renderInactivePanels>
      <TabPanel>
        <Text>Tab 1</Text>
      </TabPanel>
      <TabPanel>
        {/* This TabPanel is hidden but still in the DOM */}
        <Text>Tab 2</Text>
      </TabPanel>
    </TabPanels>
  </TabsProvider>
  ```

- Added support for refs on [Link](https://seek-oss.github.io/braid-design-system/components/Link) ([#725](https://github.com/seek-oss/braid-design-system/pull/725))

  Forwarding refs is necessary for certain accessibility patterns (e.g. managing focus states), but the `Link` component wasn't doing this correctly.

  Please note that, if you're passing a custom `linkComponent` implementation to [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider), you'll need to ensure that you're using the new `makeLinkComponent` helper function to forward refs, otherwise any attempt to pass a ref to `Link` will throw an error.

  **MIGRATION GUIDE**

  ```diff
  -import { BraidProvider, LinkComponent } from 'braid-design-system';
  +import { BraidProvider, makeLinkComponent } from 'braid-design-system';

  -const CustomLink: LinkComponent = ({ href, ...restProps }) =>
  +const CustomLink = makeLinkComponent({ href, ...restProps }, ref) =>
    href[0] === '/' ? (
  -    <ReactRouterLink to={href} {...restProps} />
  +    <ReactRouterLink to={href} {...restProps} ref={ref} />
    ) : (
  -    <a href={href} {...restProps} />
  +    <a href={href} {...restProps} ref={ref} />
    );

  export const App = () => (
    <BraidProvider linkComponent={CustomLink} {...rest}>
      ...
    </BraidProvider>
  );
  ```

- **Link:** Fixed types for `className` prop to support the full [classnames](https://www.npmjs.com/package/classnames) API ([#725](https://github.com/seek-oss/braid-design-system/pull/725))

  You can now pass arrays and objects to the `className` prop on `Link` without type errors.

  For example:

  ```jsx
  <Link
    href="#"
    className={[
      'someClass',
      ['anotherClass', 'yetAnotherClass'],
      { someConditionalClass: someBoolean },
    ]}
  >
    ...
  </Link>
  ```

- Added **MenuItemLink** component ([#725](https://github.com/seek-oss/braid-design-system/pull/725))

  You can now render semantic links within menu components, e.g. [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu), [MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer)

  For example:

  ```jsx
  <OverflowMenu label="Options">
    <MenuItem onClick={() => {}}>Button</MenuItem>
    <MenuItemLink href="...">Link</MenuItemLink>
  </OverflowMenu>
  ```

  Note that links are rendered internally using [Link](https://seek-oss.github.io/braid-design-system/components/Link). If you want to customise the rendering of these links, you need to provide a custom `linkComponent` implementation to [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider).

## 29.1.2

### Patch Changes

- Change SEEK Business formAccent token to match Seek ANZ ([#718](https://github.com/seek-oss/braid-design-system/pull/718))

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

  ```jsx
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

  ```jsx
  <Inline space="small" collapseBelow="tablet">
    ...
  </Inline>
  ```

  Also similar to `Columns`, you can now reverse the order of items horizontally. This is particularly useful when combined with `align="right"`.

  For example, if you're rendering buttons and you want your primary action on the right on desktop, but at the top on mobile:

  ```jsx
  <Inline space="small" collapseBelow="tablet" align="right" reverse>
    <Button>Primary action</Button>
    <Button weight="weak">Secondary action</Button>
  </Inline>
  ```

- Columns: Add `align` prop ([#593](https://github.com/seek-oss/braid-design-system/pull/593))

  When collapsing columns into a vertical stack on smaller screens, you can now control the alignment.

  For example, if you want your columns to be horizontally centred on mobile:

  ```jsx
  <Columns space="small" collapseBelow="tablet" align="center">
    <Column>...<Column>
    <Column>...<Column>
    <Column>...<Column>
  </Columns>
  ```

  As a side effect, this also means that you can control the alignment of columns when the total width doesn't reach 100%.

  For example:

  ```jsx
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
