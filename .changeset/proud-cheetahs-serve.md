---
'braid-design-system': minor
---

---
updated:
  - vars
---

**vars:** Expose shadow palette

Provide access to the themed `shadow` scale on the `vars` object

**EXAMPLE USAGE:**
```jsx
import { vars } from 'braid-design-system/css';

export const dropShadow = style({
  boxShadow: vars.shadow.small,
});
```
