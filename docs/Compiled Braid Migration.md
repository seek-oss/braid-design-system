# Migrating to compiled Braid <!-- omit in toc -->

The compiled version of braid will have explicit entrypoints.
Imports outside of those entrypoints will no longer work.

- [Examples of invalid imports within Metropolis](#examples-of-invalid-imports-within-metropolis)
  - [`import buildDataAttributes` ✅](#import-builddataattributes-)
  - [`import * as themes` ✅](#import--as-themes-)
  - [`import { UseTextProps }` ✅](#import--usetextprops--)
  - [`import from 'braid-design-system/lib/playroom'` 👉](#import-from-braid-design-systemlibplayroom-)
  - [`import { Placeholder }` ✅](#import--placeholder--)
  - [`import { SVGProps }` ✅](#import--svgprops--)
  - [`import { UseIconProps }` ✅](#import--useiconprops--)
  - [`import { iconSize }` ✅](#import--iconsize--)
  - [`import useIcon, { UseIconProps }` ✅](#import-useicon--useiconprops--)
  - [`import { AutosuggestProps }` ✅](#import--autosuggestprops--)
  - [`import { palette }` ✅](#import--palette--)
  - [`import from 'braid-design-system/lib/components/index'` ✅](#import-from-braid-design-systemlibcomponentsindex-)
  - [`import tokens` ✅](#import-tokens-)
- [Examples of invalid imports within other repos](#examples-of-invalid-imports-within-other-repos)
  - [`import { Toast }` 👉](#import--toast--)
  - [`import { BoxProps }` 👉](#import--boxprops--)
  - [`import { useDisclosure, UseDisclosureProps }` ❓](#import--usedisclosure-usedisclosureprops--)
  - [`import { virtualTouchable }` ❓](#import--virtualtouchable--)
  - [`import { ResponsiveSpace }` 👉](#import--responsivespace--)
  - [`import { ReactNodeNoStrings }` 👉](#import--reactnodenostrings--)
  - [`import { vars } from 'braid-design-system/lib/themes/vars.css'` 👉](#import--vars--from-braid-design-systemlibthemesvarscss-)
  - [`import { apac } from 'braid-design-system/lib/themes'` 👉](#import--apac--from-braid-design-systemlibthemes-)
  - [`import { HeadingLevel }` 👉](#import--headinglevel--)
  - [`import { useText }` 👉](#import--usetext--)

Emoji key:

- ✅ fixed
- 👉 proposed solution
- ❓ solution TBD

WIP: This section is the start of the rewrite of this document to be an actual migration guide rather than a Jira board.

Below are common usages of private Braid API and their migration path.

## Types

### Component prop types

Components that forward props to Braid components may need access to Braid component prop types.
These types were accessible via deep imports:

```tsx
import { TextProps } from 'braid-design-system/lib/components/Text/Text';

interface MyComponentProps {
  tone: TextProps['tone'];
}
```

To migrate, these props should now be derived from the components themselves:

```tsx
import { ComponentProps } from 'react';
import { Text } from 'braid-design-system';

type TextProps = ComponentProps<typeof Text>;

interface MyComponentProps {
  tone: TextProps['tone'];
}
```

TODO: Autosuggest example as it is slightly more complicated
TODO: Toast types since they're not available on a component but instead on `useToast`
TODO: Icon slot type

## Themes

##

## Examples of invalid imports within Metropolis

### `import buildDataAttributes` ✅

```tsx
import buildDataAttributes, {
  DataAttributeMap,
} from 'braid-design-system/lib/components/private/buildDataAttributes';
```

Used to provide a data prop on the apac candidate header and footer just like the braid data API

Example: https://github.com/SEEK-Jobs/metropolis/blob/129709d4b6e876fc06db833ea83d12661bf40a29/packages/apac-candidate-header-footer/src/ApacCandidateHeader/ApacCandidateHeader.tsx#L111

Solution: As of braid v31.18.0 `Box` supports the custom `data` prop format attributes https://seek-oss.github.io/braid-design-system/releases#31.18.0.
Metropolis would need to upgrade to this version braid as a dev dep, and the `apac-candidate-header-footer` package would need a peer dep on `braid-design-system@31.18.0`.

---

### `import * as themes` ✅

```tsx
import * as themes from 'braid-design-system/lib/themes';
```

Used to concisely import an object containing all themes. Used within the docs site.

Solution: If you need an object with all themes, you can just construct it manually from the individual entrypoints

```tsx
import apac from 'braid-design-system/themes/apac';
import seekBusiness from 'braid-design-system/themes/seekBusiness';
// etc...

export const themes = {
  apac,
  seekBusiness,
  // etc...
};
```

---

### `import { UseTextProps }` ✅

```tsx
import { UseTextProps } from 'braid-design-system/lib/hooks/typography';

interface Props {
  size?: UseTextProps['size'];
}
```

Used to forward some `Text` component props

Solution: Derive `TextProps` from the `Text` component

```tsx
import { ComponentProps } from 'react';
import { Text } from 'braid-design-system';

type TextProps = ComponentProps<typeof Text>;

interface Props {
  size?: TextProps['size'];
}
```

---

### `import from 'braid-design-system/lib/playroom'` 👉

```tsx
export * from 'braid-design-system/lib/playroom/components';
import BraidFrameComponent from 'braid-design-system/lib/playroom/FrameComponent';
import braidSnippets from 'braid-design-system/lib/playroom/snippets';
import useScope from 'braid-design-system/lib/playroom/useScope';
```

Braid's playroom-specific components are re-used for Metropolis' playroom

Examples:

- https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/playroom/components.ts#L3
- https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/playroom/snippets.ts#L2

Solution proposal:

- Playroom components could be split out into their own package and consumed by braid, same for snippets
- `BraidFrameComponent` and `useScope` could potentially be re-made/copied within metropolis, with the caveat that we might have to drop darkmode support as metropolis can't access the `darkMode` class since it's not public API

---

### `import { Placeholder }` ✅

```tsx
import { Placeholder } from 'braid-design-system/lib/playroom/components';
```

Used in a docs example

Example: https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/packages/apac-candidate-header-footer/src/stories/ApacCandidateHeaderFooter.docs.tsx#L3

Solution proposal: Braid's `Placeholder` is intended for use within Braid's playroom. Although this usage is within a documentation page and not used in production, it will be impossible to import in the future, so a custom placeholder component would be the best alternative. Below is an implementation of a simple custom placeholder component. Another option could be to copy Braid's placeholder into metropolis.

```tsx
import { Box, Text } from 'braid-design-system';

interface PlaceholderProps {
  width?: number;
  height?: number;
  label?: string;
}

const Placeholder = ({ width, height = 120, label }: PlaceholderProps) => (
  <Box
    position="relative"
    overflow="hidden"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="borderNeutralLarge"
    style={{
      width: width ? `${width}px` : 'auto',
      height: `${height}px`,
    }}
  >
    <Box paddingX="xsmall" paddingY="xxsmall">
      <Text size="small" weight="strong" align="center" baseline={false}>
        {label}
      </Text>
    </Box>
  </Box>
);
```

---

### `import { SVGProps }` ✅

```tsx
import { SVGProps } from 'braid-design-system/lib/components/icons/SVGTypes';
```

Used only by IconCertsySVG

Example: https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/packages/profile-base-ui/src/components/Icons/IconCertsy/IconCertsySVG.tsx#L1

Solution proposal: Inline the type as it's a relatively simple type and unlikely to change

```tsx
import { SVGProps as ReactSVGProps } from 'react';
import { AllOrNone } from '../private/AllOrNone';

export type OptionalTitle = AllOrNone<{ title: string; titleId: string }>;

export type SVGProps = ReactSVGProps<SVGElement> & OptionalTitle;
```

---

### `import { UseIconProps }` ✅

```tsx
import { UseIconProps } from 'braid-design-system/lib/hooks/useIcon';
```

Used to pass through a prop to an icon. In the example, the `chevronSize` prop is passed to an `IconChevron`.

Solution: Derive the prop type from the component itself, and use the derived type to get the prop(s) you want

```tsx
import { IconChevron } from 'braid-design-system';
import { ComponentProps } from 'react';

type IconChevronProps = ComponentProps<typeof IconChevron>;

interface Props {
  size: IconChevronProps['size'];
}
```

---

```tsx
import { UseIconProps } from 'braid-design-system/lib/hooks/useIcon';

interface Props {
  icon?: FunctionComponent<UseIconProps>;
}
```

`UseIconProps` is used to provide an icon slot passthrough on a component

Example: https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/packages/apac-candidate-header-footer/src/ApacCandidateHeader/components/DropdownMenu/DropdownMenu.tsx#L11

Solution proposal:

- the `icon` prop type could be derived from `Button`, or any other component that has an icon slot

```tsx
import type { Button } from 'braid-design-system';
import { ComponentProps, ReactElement } from 'react';

type ElementProps<T> = T extends ReactElement<infer P> ? P : never;

type IconProps = ElementProps<ComponentProps<typeof Button>['icon']>;
```

---

### `import { iconSize }` ✅

```tsx
import { iconSize } from 'braid-design-system/lib/hooks/useIcon';

<Box
  component="span"
  display="inlineBlock"
  className={iconSize({ size: 'standard' })}
/>;
```

Passed to an empty `Box` to act as a placeholder for a `standard` sized icon

Example: https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/packages/apac-candidate-header-footer/src/ApacCandidateHeader/components/ResponsiveTab/ResponsiveTab.tsx#L75

Solution proposal: Wrap the icon in a `Box` and toggle visibility via the `visibility` css property so the icon still takes up space but is not visible

```tsx
import { Box, IconTick } from 'braid-design-system';

const MyComponent = ({ showIcon }: { showIcon: boolean }) => {
  return (
    <Box style={{ visibility: showIcon ? 'visible' : 'hidden' }}>
      <IconTick />
    </Box>
  );
};
```

---

### `import useIcon, { UseIconProps }` ✅

```tsx
import useIcon, { UseIconProps } from 'braid-design-system/lib/hooks/useIcon';
```

`IconCertsy` is used in a few different products (profile/apply, candiman I think), and will not end up in braid. It is a custom icon that uses Braid's `useIcon` API.

Example: https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/packages/profile-base-ui/src/components/Icons/IconCertsy/IconCertsy.tsx#L2

Solution proposal: Use `IconRenderer`

---

### `import { AutosuggestProps }` ✅

```tsx
import { AutosuggestProps } from 'braid-design-system/lib/components/Autosuggest/Autosuggest';
```

Used by `KeywordAutoSuggest` for the passing through `suggestions`.

Example: https://github.com/SEEK-Jobs/metropolis/blob/fc89a2ee88bcd85d1e91f48024ebc934d939f89c/packages/discover-ui/src/KeywordAutoSuggest/KeywordAutoSuggest.tsx#L3

Solution proposal: Use [typescript 4.7's instantiation expression feature](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#instantiation-expressions), with the obvious caveat being that you're forcing your consumers to use at least typescript 4.7

```tsx
import { Autosuggest } from 'braid-design-system';
import { ComponentProps } from 'react';

type AutosuggestValue = string;
type AutosuggestProps = ComponentProps<typeof Autosuggest<AutosuggestValue>>;
```

---

### `import { palette }` ✅

```tsx
import { palette } from 'braid-design-system/lib/color/palette';
```

`palette` is used to pick a color that's not part of the Braid color vars. It appears to be a brand colour.

Solution: Hard-code the colour value being used from the palette. The colour appears to be used as an approximate sidekicker brand colour, so it should be treated as custom.

---

### `import from 'braid-design-system/lib/components/index'` ✅

```tsx
import { Box, Button } from 'braid-design-system/lib/components/index';
```

Imports like this likely occurred due to a bad auto-import

Solution: Import components from the top-level entrypoint

```tsx
import { Box, Button } from 'braid-design-system';
```

---

### `import tokens` ✅

```tsx
import tokens from 'braid-design-system/lib/themes/docs/tokens';
```

Used to access the `borderRadius` tokens via `tokens.border.radius.standard`.

Solution: Use `vars` instead of `tokens`.

```tsx
import { vars } from 'braid-design-system/css';
```

**Note**: Space tokens, like `token.space.small`, are not multiplied by the theme's grid value, so swapping to `vars.space.small` will yield a different value than the equivalent token, so it's worth checking that this space value is appropriate for the design of your component.

## Examples of invalid imports within other repos

### `import { Toast }` 👉

```ts
import { Toast } from 'braid-design-system/lib/components/useToast/ToastTypes';

interface Foo {
  showToast: (toast: Toast) => void;
}
```

Used to define a passthrough for `showToast`, which is returned the function returned from the `useToast` hook.

Solution: Use `useToast` to derive the type of the function

```tsx
import { useToast } from 'braid-design-system';

type ShowToast = ReturnType<typeof useToast>;

interface Foo {
  showToast: ShowToast;
}
```

The `Toast` type is also used directly in some cases

Solution: Derive the `Toast` type from the `useToast` function

```tsx
import { useToast } from 'braid-design-system';

type ShowToast = ReturnType<typeof useToast>;
type Toast = Parameters<ShowToast>[0];
```

---

### `import { BoxProps }` 👉

```tsx
import { BoxProps } from 'braid-design-system/lib/components/Box/Box';

// Sometimes PublicBoxProps is used to the same effect
import { PublicBoxProps } from 'braid-design-system/lib/components/Box/Box';
```

Used to pass through specific box props on a custom component

Solution: Use the public `Box` component to derive `BoxProps`

```tsx
import { Box } from 'braid-design-system';
import { ComponentProps } from `react`;

type BoxProps = ComponentProps<typeof Box>;
```

---

### `import { useDisclosure, UseDisclosureProps }` ❓

```tsx
import {
  useDisclosure,
  UseDisclosureProps,
} from 'braid-design-system/lib/components/Disclosure/useDisclosure';
```

Used for a custom accordion in cm-ui. The accordion enables you to nest items with checkboxes under a top-level accordion that also has a checkbox, which toggles the child checkboxes.

Example: https://github.com/SEEK-Jobs/cm-ui/blob/0eb73b97ac2ee6fe19b80e1e69163722de6f62f0/src/components/common/CustomAccordionItem/CustomAccordionItem.tsx#L9-L12

Solution proposal: TBD

---

### `import { virtualTouchable }` ❓

```tsx
import { virtualTouchable } from 'braid-design-system/lib/components/private/touchable/virtualTouchable';
```

Used for a custom accordion item in cm-ui

Example: https://github.com/SEEK-Jobs/cm-ui/blob/0eb73b97ac2ee6fe19b80e1e69163722de6f62f0/src/components/common/CustomAccordionItem/CustomAccordionItem.tsx#L24

Solution proposal: TBD

---

### `import { ResponsiveSpace }` 👉

```tsx
import { ResponsiveSpace } from 'braid-design-system/lib/css/atoms/atoms';
```

Used to pass through a responsive space prop

Example: https://github.com/SEEK-Jobs/cm-ui/blob/0eb73b97ac2ee6fe19b80e1e69163722de6f62f0/src/components/common/CustomAccordionItem/CustomAccordionItem.tsx#L25

Solution proposal:

- Could be derived from a component's props, e.g. `Stack`

---

### `import { ReactNodeNoStrings }` 👉

```tsx
import { ReactNodeNoStrings } from 'braid-design-system/lib/components/private/ReactNodeNoStrings';
```

Used for a prop type to forward stuff through to a `Stack`

Example: https://github.com/SEEK-Jobs/rr-caja/blob/cf47fb89032de1fe4d4239f8c47a1e5bf717b4f1/@seek/rr-caja/src/components/CustomQuestions/CustomQuestionList/CustomQuestionList.tsx#L2

Solution proposal:

- Derive the type from `Stack` props

---

### `import { vars } from 'braid-design-system/lib/themes/vars.css'` 👉

```tsx
import { vars } from 'braid-design-system/lib/themes/vars.css';
```

Internal `vars` being used rather than public `vars`. In most cases I think this was likely caused by a bad auto import. I doubt most use cases require internal `vars`, and if they do they won't have access to them after braid is compiled, so we'd need to look at each case.

Example: https://github.com/SEEK-Jobs/seekanalytics-frontend/blob/3b375526f18c750a08d8f41c04e81f579c658b4c/src/App/icons/trendIcon.css.ts#L4

Solution: Use the public `vars` export

```tsx
import { vars } from 'braid-design-system/css';
```

---

### `import { apac } from 'braid-design-system/lib/themes'` 👉

```tsx
import { apac } from 'braid-design-system/lib/themes';
```

Using internal theme export

Example: https://github.com/SEEK-Jobs/grad-bootcamp-sample-hirer-frontend/blob/20bd38dbf9cada3976dda4c7289f891cbb55571f/src/App/App.tsx#L10

Solution: Use the public theme export

```tsx
import apac from 'braid-design-system/themes/apac';
```

---

### `import { HeadingLevel }` 👉

```tsx
import { HeadingLevel } from 'braid-design-system/lib/hooks/typography';
```

`HeadingLevel` is being used as a prop type

Solution: Derive prop type from `Heading` component

```tsx
import { Heading } from 'braid-design-system';
import { ComponentProps } from 'react';

type HeadingProps = ComponentProps<typeof Heading>;

interface Props {
  headingLevel: HeadingProps['level'];
}
```

---

### `import { useText }` 👉

```tsx
import { useText } from 'braid-design-system/lib/hooks/typography';
```

Used to put text styles on a box so it's the same size and in the same position as text that eventually replaces it, i.e the component functions as a placeholder for some text.

Example: https://github.com/SEEK-Jobs/adv-jp-express-ui/blob/b35aa655dff7c2687709e7a8eacf151402792f0d/src/app/views/shared/ContentLoader/index.tsx#L2

**Note**: This API doesn't exist anymore as of [Braid v31.17.2](https://github.com/seek-oss/braid-design-system/releases/tag/braid-design-system%4031.17.2)

Solution proposal: Render the placeholder-styled `Box` inside a `Text` component when `offset` is `true`. Otherwise don't render the `Text` and just render the `Box`. **Note sure if this will cater to all uses of the component**

---

Example: https://github.com/SEEK-Jobs/seekanalytics-frontend/blob/92ce3ccbcc19b4f8a44ba3aaa4ff92e79c09773f/src/App/primitives/MultiAutosuggest/MultiAutosuggest.tsx#L553

Again, can this just be replaced with a `Text` component wrapping a `Box`?
