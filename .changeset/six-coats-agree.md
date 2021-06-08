---
'braid-design-system': minor
---

Migrate to vanilla-extract

Braid now uses [vanilla-extract](http://vanilla-extract.style) rather than [treat](https://seek-oss.github.io/treat) to power its theme-based styling.

Since they use different file extensions (`.css.ts` vs `.treat.ts`), we're able to ease the migration by supporting both treat and vanilla-extract simultaneously in the same project.

While we encourage you to write new CSS in vanilla-extract files and slowly migrate your existing treat files over time, the goal is to eventually remove treat to enable further improvements to build tooling.

---

**NEW FEATURES**

**Type-safe CSS variables**

With vanilla-extract, we now have support for [type-safe CSS variables.](https://vanilla-extract.style/documentation/styling-api/#createvar)

**Theming via CSS variables**

Theming is now achieved natively with CSS variables rather than generating separate styles for each theme. CSS variables are exposed via the `braid-design-system/css` import for use within vanilla-extract and runtime files.

```ts
import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const className = style({
  paddingTop: vars.space.small
});
```

**Reusable atomic classes via `atoms` function**

Braid's re-usable atomic classes were previously only available via `Box`, but they are now accessible within vanilla-extract stylesheets via the new `atoms` function.

```ts
import { atoms } from 'braid-design-system/css';

export const className = atoms({
  paddingTop: 'small'
});
```

This allows you to co-locate custom styles with Braid's atomic classes in your stylesheets.

```ts
import { style, composeStyles } from '@vanilla-extract/css';
import { atoms } from 'braid-design-system/css';

export const className = composeStyles(
  atoms({ position: 'absolute' }),
  style({ top: 300 })
);
```

---

**MIGRATION GUIDE**

**`styleRefs`/`useStyles` is not needed for vanilla-extract files**

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

**Theme variables are provided via an import rather than `style` callbacks**

To get access to Braid's theme variables, we now import them from `braid-design-system/css`.

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

**The `vars` object has a simpler, flattened structure compared to Braid's treat theme**

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


**Themed style calculations must now use calc**

Theme variables are now opaque strings (i.e. `"var(--g7vce91)"`) rather than actual token values, which means you can't perform JavaScript calculations on them. Instead, calculations should use CSS's `calc` function. To make this easier in TypeScript, vanilla-extract's `css-utils` package provides a [`calc` utility.](https://github.com/seek-oss/vanilla-extract#calc)

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

**`styleMap` has been renamed to `styleVariants`**

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

```diff
import { styleVariants } from '@vanilla-extract/css';

export const background = styleVariants({
-  red: { background: 'red' },
-  blue: { background: 'blue' },
-});
+  red: 'red',
+  blue: 'blue',
+}, (value) => ({ background: value }));
```

**The `responsiveStyle` util is now an import**

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

**Animations must me defined with the new `keyframes` function**

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

**React Portals should use the new `BraidPortal` component**

CSS-based theming doesn't automatically cascade through React portals. The new [`BraidPortal`](https://seek-oss.github.io/braid-design-system/components/BraidPortal) component handles this for you.

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
