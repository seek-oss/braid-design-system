---
'braid-design-system': major
---

---
updated:
  - Box
  - atoms
---

**Box, atoms:** Remove deprecated `rating` variable.

Consumers should use the `brandAccent` or `neutral` variables instead.

**MIGRATION GUIDE:**
```diff
# styles.css.ts
import { vars } from 'braid-design-system/css';

export const myStyle = style({
-  color: vars.foreground.rating,
+  color: vars.foreground.brandAccent,
});
```