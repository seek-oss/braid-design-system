---
'braid-design-system': minor
---

---
new:
  - Box
  - atoms
---

**Box, atoms:** Add responsive `gap` support

Add the `gap` property to the available styling atoms, inclusive of responsive spacing values.

**EXAMPLE USAGE:**
```jsx
<Box gap="small" />
```

```jsx
import { atoms } from 'braid-design-system/css';

atoms({ gap: 'small' });
```
