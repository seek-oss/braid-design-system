---
'braid-design-system': minor
---

Migrate to vanilla-extract

Braid now uses [vanilla-extract](http://vanilla-extract.style) rather than [treat](https://seek-oss.github.io/treat) to power its theme-based styling.

Since they use different file extensions (`.css.ts` vs `.treat.ts`), we're able to ease the migration by supporting both approaches simultaneously in the same project.

While we encourage you to write new CSS with vanilla-extract files and slowly migrate your existing treat files over time, the goal is to eventually remove treat entirely to enable further improvements to build tooling.

---

**MIGRATION GUIDE**

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

**Migrating treat files to vanilla-extract**

We've written a **[treat to vanilla-extract migration guide](https://github.com/seek-oss/braid-design-system/blob/master/docs/treat%20to%20vanilla-extract%20migration.md)** to make it easier when opting to migrate a treat file. If you have any questions or concerns, or if you need assistance with implementation or migration work, please reach out to us in the `#braid-support` channel.

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
