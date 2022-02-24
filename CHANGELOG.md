# braid-design-system

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
