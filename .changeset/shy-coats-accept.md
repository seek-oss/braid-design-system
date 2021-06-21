---
'braid-design-system': minor
---

---
new:
  - atoms
---

Add **atoms** function for accessing re-usable atomic classes within [vanilla-extract stylesheets](http://vanilla-extract.style)

Braid's re-usable atomic classes were previously only available via `Box`, but they are now accessible via the new `atoms` function.

```ts
// styles.css.ts
import { atoms } from 'braid-design-system/css';

export const className = atoms({
  paddingTop: 'small'
});
```

This allows you to co-locate custom styles with Braid's atomic classes in your stylesheets.

```ts
// styles.css.ts
import { style, composeStyles } from '@vanilla-extract/css';
import { atoms } from 'braid-design-system/css';

export const className = composeStyles(
  atoms({ position: 'absolute' }),
  style({ top: 300 })
);
```
