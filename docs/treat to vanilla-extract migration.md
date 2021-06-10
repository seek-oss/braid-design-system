# treat to vanilla-extract migration

This document provides guidance for consumers looking to migrate Braid-based styles from [treat](https://seek-oss.github.io/treat) to [vanilla-extract.](http://vanilla-extract.style)

Since they use different file extensions (`.css.ts` vs `.treat.ts`), we're able to ease the migration by supporting both approaches simultaneously in the same project.

While we encourage you to write new CSS with vanilla-extract files and slowly migrate your existing treat files over time, the goal is to eventually remove treat entirely to enable further improvements to build tooling.

If you have any questions or concerns, or if you need assistance with implementation or migration work, please reach out to us in the `#braid-support` channel.

## `styleRefs`/`useStyles` is not needed for vanilla-extract files

No more plumbing required. Just access the CSS exports directly.

```diff
-import { useStyles } from 'react-treat';
-import * as styleRefs from './styles.treat';
+import * as styles from './styles.css';

export const Foo = () => {
-  const styles = useStyles(styleRefs);

  return (
    <div className={styles.root}>
      ...
    </div>
  );
}
```

## Theme variables are provided via an import rather than `style` callbacks

To get access to Braid's theme variables, import them from `braid-design-system/css`.

```diff
-import { style } from 'treat';
+import { style } from '@vanilla-extract/css';
+import { vars } from 'braid-design-system/css';

-export const className = style(theme => ({
-  paddingTop: theme.space.small
-}));
+export const className = style({
+  paddingTop: vars.space.small
+});
```

## The `vars` object has a simpler, flattened structure compared to Braid's treat theme

The following theme variables are available:

- `vars.grid`
- `vars.touchableSize`
- `vars.space[spaceName]`
- `vars.foregroundColor[colorName]`
- `vars.backgroundColor[colorName]`
- `vars.borderColor[colorName]`
- `vars.borderWidth[widthName]`
- `vars.borderRadius[radiusName]`

Please note that we've omitted theme variables that we consider to be unnecessary for consumers. Please reach out if something is missing so we can offer assistance.

## Themed style calculations must now use calc

Theme variables are now opaque strings (i.e. `"var(--g7vce91)"`) rather than actual token values, which means you can't perform JavaScript calculations on them. Instead, calculations should use CSS's `calc` function. To make this easier in TypeScript, vanilla-extract's `css-utils` package provides a [`calc` utility.](https://vanilla-extract.style/documentation/utility-functions/#calc)

```diff
-import { style } from 'treat';
+import { style } from '@vanilla-extract/css';
+import { calc } from '@vanilla-extract/css-utils';
+import { vars } from 'braid-design-system/css';

-export const className = style(theme => ({
-  marginTop: theme.space.small * -1
-}));
+export const className = style({
+  marginTop: calc.negate(vars.space.small)
+});
```

## `styleMap` has been renamed to `styleVariants`

```diff
-import { styleMap } from 'treat';
+import { styleVariants } from '@vanilla-extract/css';

-export const background = styleMap({
+export const background = styleVariants({
  red: { background: 'red' },
  blue: { background: 'blue' },
});
```

Note that it also now accepts a map function as the second argument, so there may be some opportunities to simplify your code if you were mapping over objects before passing them to `styleMap`.

## The `responsiveStyle` util is now an import

```diff
-import { style } from 'treat';
+import { style } from '@vanilla-extract/css';
+import { responsiveStyle } from 'braid-design-system/css';

-export const className = style(theme => theme.utils.responsiveStyle({
-  mobile: { ... },
-  tablet: { ... },
-  desktop: { ... },
-}));
+export const className = style(responsiveStyle({
+  mobile: { ... },
+  tablet: { ... },
+  desktop: { ... },
+}));
```

## Animations must me defined with the new `keyframes` function

The `@keyframes` property is no longer supported on style objects. Instead, you should create keyframes separately with the `keyframes` function.

```diff
-import { style } from 'treat';
+import { style, keyframes } from '@vanilla-extract/css';
+
+const myAnimationName = keyframes({ ... });

-export const className = style({
-  '@keyframes': { ... },
-  animationName: '@keyframes'
-});
+export const className = style({
+  animationName: myAnimationName
+});
```
