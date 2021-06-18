---
'braid-design-system': minor
---

---
new:
  - responsiveStyle
---

Add **responsiveStyle** function for creating custom mobile-first styles within [vanilla-extract stylesheets](http://vanilla-extract.style)

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
  })
);

// is equivalent to
import { style } from '@vanilla-extract/css';
import { vars, breakpoints } from 'braid-design-system/css';

export const className = style({
  "flexBasis": vars.space.small,
  "@media": {
    [`screen and (min-width: ${'${breakpoints.tablet}'}px)`]: {
      "flexBasis": vars.space.medium
    },
    [`screen and (min-width: ${'${breakpoints.desktop}'}px)`]: {
      "flexBasis": vars.space.large
    }
  }
});
```
