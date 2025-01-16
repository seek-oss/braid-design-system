---
'braid-design-system': minor
---

---
updated:
  - Rating
---

**Rating:** Adopt `brandAccent` tone

The stars in the `Rating` component now use the `brandAccent` tone rather than the `rating` token from the theme.

As a result the `rating` variable has been deprecated and will be removed in a future release.

**MIGRATION GUIDE:**
```diff
# styles.css.ts
import { vars } from 'braid-design-system/css';

export const myStyle = style({
-  color: vars.foreground.rating,
+  color: vars.foreground.brandAccent,
});
```
