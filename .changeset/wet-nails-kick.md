---
'braid-design-system': minor
---

---
new:
 - vars
---

Add **vars** object for accessing themed CSS variables within [vanilla-extract stylesheets](http://vanilla-extract.style) and runtime files.

Theming is now achieved natively with CSS variables rather than generating separate styles for each theme. CSS variables are exposed via the `braid-design-system/css` import.

```ts
// styles.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const className = style({
  paddingTop: vars.space.small
});
```
