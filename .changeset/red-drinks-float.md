---
'braid-design-system': minor
---

---
updated:
  - vars
---

**vars:** Exposed `vars.transition`. Transition CSS variables are available in stylesheets and runtime styles.

**EXAMPLE USAGE:**
```ts
import { vars } from 'braid-design-system/css':

export const myStyle = style({
  transition: vars.transition.fast,
});
```