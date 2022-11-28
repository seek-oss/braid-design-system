# 🍬 treat to 🧁 vanilla-extract migration

This document provides guidance for consumers looking to migrate Braid-based styles from [treat](https://seek-oss.github.io/treat) to [vanilla-extract.](http://vanilla-extract.style)

Since they use different file extensions (`.css.ts` vs `.treat.ts`), we're able to ease the migration by supporting both approaches simultaneously in the same project.

While we encourage you to write new CSS with vanilla-extract files and slowly migrate your existing treat files over time, the goal is to eventually remove treat entirely to enable further improvements to build tooling.

## vanilla-extract must be manually installed if you want to use it in your project

```bash
$ yarn add @vanilla-extract/css
```

## `styleRefs`/`useStyles` is not needed when consuming vanilla-extract styles

No more plumbing required. Just access the CSS exports directly—just like CSS Modules!

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

```diff
+import { vars } from 'braid-design-system/css';
```

The `vars` object has a simpler, flattened structure compared to Braid's treat theme

The following theme variables are available:

- `vars.grid`
- `vars.touchableSize`
- `vars.space[spaceName]`
- `vars.foregroundColor[colorName]`
- `vars.backgroundColor[colorName]`
- `vars.textWeight[weightName]`
- `vars.borderColor[colorName]`
- `vars.borderWidth[widthName]`
- `vars.borderRadius[radiusName]`

Please note that we've omitted theme variables that we consider to be unnecessary for consumers. Please reach out if something is missing so we can offer assistance.

## The `space` and `touchableSize` variables have already been multiplied by the grid

Previously all space values needed to be multiplied by the grid. This is no longer necessary as it's been precomputed.

```diff
-import { style } from 'sku/treat';
+import { style } from '@vanilla-extract/css';
+import { vars } from 'braid-design-system/css';

-export const className = style(theme => ({
-  padding: theme.space.standard * theme.grid,
-  minHeight: theme.touchableSize * theme.grid
-}));
+export const className = style({
+  padding: vars.space.standard,
+  minHeight: vars.touchableSize
+});
```

> ⚠️ Be wary when migrating template strings where units were being appended manually. The unit is no longer necessary as it's baked into the value of the variable, e.g.
>
> ```diff
> -export const className = style(theme => ({
> -  margin: `${theme.space.standard * grid}px 0`
> +export const className = style({
> +  margin: `${vars.space.standard} 0`
> });
> ```

## Themed style calculations must now use calc

Theme variables are now opaque strings (e.g. `"var(--g7vce91)"`) rather than actual token values, which means you can't perform JavaScript calculations on them. Instead, calculations should use CSS's `calc` function.

To make this easier in TypeScript, vanilla-extract's `css-utils` package (which you'll need to install manually) provides a [`calc` utility](https://vanilla-extract.style/documentation/utility-functions/#calc).

```bash
$ yarn add @vanilla-extract/css-utils
```

```diff
-import { style } from 'sku/treat';
+import { style } from '@vanilla-extract/css';
+import { calc } from '@vanilla-extract/css-utils';
+import { vars } from 'braid-design-system/css';

-export const className = style(theme => ({
-  marginTop: theme.space.small * theme.grid * -1
-}));
+export const className = style({
+  marginTop: calc.negate(vars.space.small)
+});
```

For nested calculations, the `calc` utility also supports chaining.

```ts
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const className = style({
  marginTop: calc(vars.space.large).divide(2).negate().toString(),
});
```

## The `responsiveStyle` util is now an import

```diff
-import { style } from 'sku/treat';
+import { style } from '@vanilla-extract/css';
+import { responsiveStyle } from 'braid-design-system/css';

-export const className = style(theme => theme.utils.responsiveStyle({
+export const className = style(responsiveStyle({
  mobile: { ... },
  tablet: { ... },
  desktop: { ... },
}));
```

## `styleMap` has been renamed to `styleVariants`

```diff
-import { styleMap } from 'sku/treat';
+import { styleVariants } from '@vanilla-extract/css';

-export const background = styleMap({
+export const background = styleVariants({
  red: { background: 'red' },
  blue: { background: 'blue' },
});
```

Note that it also now accepts a map function as the second argument, so there may be some opportunities to simplify your code if you were mapping over objects before passing them to `styleMap`.

## Animations must be defined with the new `keyframes` function

The `@keyframes` property is no longer supported on style objects. Instead, you should create keyframes separately with the [`keyframes` function.](https://vanilla-extract.style/documentation/styling-api/#keyframes)

```diff
-import { style } from 'sku/treat';
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

## Optional: CSS bundle size can be optimised with Braid's `atoms` function

If you want to reduce the amount of CSS in your app, you can leverage Braid's [`atoms` function](https://seek-oss.github.io/braid-design-system/css/atoms) which gives you low-level access to the same re-usable classes provided by [`Box`](https://seek-oss.github.io/braid-design-system/components/Box).

If all of the values passed to `style` are provided by `atoms`, you can use it as a drop-in replacement.

```diff
-import { style } from 'sku/treat';
+import { style } from '@vanilla-extract/css';
+import { atoms } from 'braid-design-system/css';

-export const className = style({
+export const className = atoms({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  right: 0,
});
```

If you need to combine atomic classes with custom styles, you can pass an array to vanilla-extract's [`style` function.](https://vanilla-extract.style/documentation/styling-api/#style)

```diff
-import { style } from 'sku/treat';
+import { style } from '@vanilla-extract/css';
+import { atoms } from 'braid-design-system/css';

-export const className = style({
-  position: 'absolute',
-  top: 50,
-  left: 50,
-});
+export const className = style([
+  atoms({
+    position: 'absolute',
+  }),
+  style({
+    top: 50,
+    left: 50,
+  }),
+]);
```
