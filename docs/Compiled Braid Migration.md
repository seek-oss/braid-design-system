# Compiled Braid migration

`braid-design-system@32.0.0` includes some significant changes that affect how the package is
used.

## Compiled Source Code

Braid's source code is written in TypeScript.
Up until now, the `braid-design-system` package contained that same TypeScript code, pushing the
burden of compiling that code into JavaScript onto the consumer.
SEEK's front-end development toolkit [sku] knows to compile Braid's source code as it is an implicit
[compile package].

As of `v32.0.0`, Braid's source code is now distributed as JavaScript, so consumers no longer need
to compile it themselves.
This should bring noticeable build time improvements to consumers' local and CI builds.
Braid's public API is not affected by this change.

[sku]: https://github.com/seek-oss/sku
[compile package]: https://seek-oss.github.io/sku/#/./docs/extra-features?id=compile-packages

## Explicit Entrypoints

In previous versions of Braid, it was possible to import APIs from any path within the package, even if that path was never intentionally exposed publicly:

```tsx
// Standard method of importing components
import { Text } from 'braid-design-system';

// Possible, but not recommended
import { Text } from 'braid-design-system/lib/components/Text/Text';
```

The above example is relatively benign; both `Text` components resolve to the same definition, so
they're ultimately identical.
However, it was also possible to import private Braid APIs that were not intended for use by consumers:

```tsx
// These two vars are not the same!
import { vars as publicVars } from 'braid-design-system/css';
import { vars as privateVars } from 'braid-design-system/lib/themes/vars.css';

// Error: fontFamily is not available on public vars
const { fontFamily } = publicVars;

// fontFamily is available on private vars
const { fontFamily } = privateVars;
```

In the case of `vars`, the publicly exported `vars` object contains a subset of the properties available within the private `vars` object.
This was done intentionally in order to only expose the CSS variables that are relevant to Braid consumers.

In general, private APIs should be considered implementation detail and **should not** be depended on externally.
Private APIs may change behaviour, be renamed, move location, or be removed at any point in time without warning, so depending on them can result in unintended breaking changes.

As of `braid-design-system@32.0.0`, it is no longer possible to import APIs that are not exposed from explicit entrypoints.
While no existing **public** APIs have changed, this is a breaking change that will affect any consumers that depend on private APIs.

Common usages of private Braid APIs are documented below, as well as suggested remediations.
If you depend on a private API that is not listed below, or you depend on an API that has
no public alternative, please reach out in the #braid-support Slack channel.

### Issues Caused by Automatic Imports

#### Public Components

Many IDEs provide a feature that automatically inserts missing imports when a suggestion is accepted by the user.
Sometimes, a component import will be inserted that references that component's file path in the package, rather than the public entrypoint for all Braid components:

```diff
// Error in Braid v32
-import { Text } from 'braid-design-system/lib/components/Text/Text';
// Correct way to import components
+import { Text } from 'braid-design-system';
```

#### Themes

Automatic imports can result in themes being imported via a private import.
These private imports resolve the same themes available via the public `braid-design-system/themes`
entrypoints.

```diff
// Either of these can occur, both will cause errors in Braid v32
-import { apac } from 'braid-design-system/lib/themes';
-import apac from 'braid-design-system/lib/themes/apac';
// Correct way to import themes
+import apac from 'braid-design-system/themes/apac';
```

#### Styling APIs

Automatic imports can result in `vars`, `atoms` and `responsiveStyle` being imported via private imports.
To migrate, these should be imported via the public `css` entrypoint:

```diff
// These will all cause errors in Braid v32
-import { vars } from 'braid-design-system/lib/themes/vars.css';
-import { atoms } from 'braid-design-system/lib/css/atoms/atoms';
-import { responsiveStyle } from 'braid-design-system/lib/css/responsiveStyle';
// Correct, and less code too!
+import { vars, atoms, responsiveStyle } from 'braid-design-system/css';
```

The `vars` object imported from `braid-design-system/lib/themes/vars.css` contains extra properties
compared to the `vars` object imported from `braid-design-system/css`.
If you depend on any of these extra properties and cannot find alternatives to replace them with,
please reach out in the [#braid-support] Slack channel.

### Component Prop Types

Custom components that forward props to Braid components may need access to the types of some of the
Braid component's props.
These types should be derived from the comopnent itself using the `ComponentProps` type available
from `react`:

```diff
// Error in Braid v32
-import { TextProps } from 'braid-design-system/lib/components/Text/Text';
// Derive props from `Text` instead
+import { Text } from 'braid-design-system';
+import { ComponentProps } from 'react';

+type TextProps = ComponentProps<typeof Text>;

interface MyComponentProps {
  tone: TextProps['tone'];
}
```

#### Autosuggest props

If your component wraps Braid's `Autosuggest` component, then you need to derive its props in a
slightly different way.
This is because `Autosuggest` is a generic component, so just using `ComponentProps<typeof Autosuggest>` will
get you the prop type instantiated with the type `unknown`, effectively allowing any value to be
passed into the `Autosuggest` :

```tsx
import { ComponentProps } from 'react';
import { Autosuggest } from 'braid-design-system';

type AutosuggestProps = ComponentProps<typeof Autosuggest>;

// Equivalent to AutosuggestValue<unknown>
type Value = AutosuggestProps['value'];

const autosuggestValue: Value = {
  text: 'myValue',
  // value is of type unknown
  value: ['this', 'can', 'be', 'literally', 'anything'],
};

// No errors!
autosuggestValue.value = [1, 2, 3, 4, { whatever: 'you want' }];
```

The correct way to derive `Autosuggest`'s props is to use [typescript 4.7's instantiation expression feature][instantiation expression].
This feature allows you to create a specialized version of a generic function that only accepts
specific types. Since functional components are just functions, we can do this for components too:

```tsx
import { ComponentProps } from 'react';
import { Autosuggest } from 'braid-design-system';

// A specialized Autosuggest component that only accepts `string`s
const StringAutosuggest = Autosuggest<string>;
type AutosuggestProps = ComponentProps<typeof StringAutosuggest>;

// Equivalent to AutosuggestValue<string>
type Value = AutosuggestProps['value'];

const autosuggestValue: Value = {
  text: 'myValue',
  // value is of type string
  value: 'foo',
};

// Error: value must be of type string
autosuggestValue.value = 123;
```

This has the obvious caveat that you must be on at least typescript 4.7 in order to use this
feature.
Your app will need to be on at least `sku@11.6.0` in order to use typescript 4.7.

[instantiation expression]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#instantiation-expressions

### Toast types

Braid does not expose a public `Toast` component.
Instead, toasts are shown by calling the function returned from the [`useToast` hook][usetoast docs].
If you wish to expose the parameters of this function on a component as props, then the types for those parameters can be derived from the `useToast` hook:

```diff
// Error in Braid v32
-import { Toast } from 'braid-design-system/lib/components/useToast/ToastTypes';
// Derive type from useToast instead
+import { useToast } from 'braid-design-system';

+type ShowToastFunction = ReturnType<typeof useToast>;
+type Toast = Parameters<ShowToastFunction>[0];

interface MyComponentProps {
  toast: Toast;
}

const MyComponent = ({ toast }: MyComponentProps) => {
  const showToast = useToast();

  return (
    <Button onClick={() => showToast(toast)}}>
      Show toast
    </Button>
  );
};
```

[usetoast docs]: https://seek-oss.github.io/braid-design-system/components/useToast

### Custom Icons

If you use the private `useIcon` API in a custom icon within your app, there are a few options you
should evaluate in order to migrate off this API:

1. Evaluate the usage of your custom icon across your app. If your icon is only used at one specific size,
1. Consider whether the icon could be replaced by an existing [Braid icon][braid icons]. Braid's iconography suite has expanded over the years, and your custom icon may have a suitable replacement available in Braid.
1. If there is no suitable replacement for your custom icon available within Braid, then it could be worth adding to Braid. If your icon represents something generic, and not something product specific (e.g. product logo), then it could be a good candidate for Braid. Please reach out in the #braid-support Slack channel if you think your custom icon would fit into Braid's iconography suite.
1. If none of the above options are suitable for your custom icon, then you can migrate to the `IconRenderer` API. By using `IconRenderer`, you can benefit from the consistent styling and alignment afforded by the Braid icon API, with a few restrictions. Please ensure you read the [Braid custom icon docs][custom icon docs] to ensure you understand these restrictions while also adhering to accessibility requirements.

[braid icons]: https://seek-oss.github.io/braid-design-system/foundations/iconography/browse/
[custom icon docs]: https://seek-oss.github.io/braid-design-system/foundations/iconography#using-custom-icons

#### Icon Slot Prop Type

If you wish to provide an icon slot on a component, you can derive the type of an icon component from an
existing Braid component with an icon slot:

```diff
// Error in Braid v32
-import { UseIconProps } from 'braid-design-system/lib/hooks/useIcon';
// Derive type from Button instead
+import { Button } from 'braid-design-system';
+import { ComponentProps, ReactElement } from 'react';

+type ElementProps<T> = T extends ReactElement<infer P> ? P : never;
+type IconProps = ElementProps<ComponentProps<typeof Button>['icon']>;

interface MyComponentProps {
-  icon?: FunctionComponent<UseIconProps>;
+  icon?: FunctionComponent<IconProps>;
}
```
