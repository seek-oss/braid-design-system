---
'braid-design-system': minor
---

---
new:
  - globalTextStyle
  - globalHeadingStyle
---

Add **globalTextStyle** and **globalHeadingStyle** functions for applying standard text styles to foreign markup in [vanilla-extract stylesheets](http://vanilla-extract.style)

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
  })
);

// Target all <p> elements within the root class
globalStyle(
  `${root} p`,
  globalTextStyle({
    size: 'standard',
    weight: 'regular',
  })
);
```
