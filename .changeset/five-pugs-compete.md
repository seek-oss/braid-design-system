---
'braid-design-system': minor
---

---
updated:
  - Box
  - atoms
---

**Box, atoms:** Add `borderBrandAccent` variants to available boxShadows

Add `borderBrandAccent` and `borderBrandAccentLight` to the available boxShadows, combining the `brandAccent` `brandAccentLight` border colours with the `standard` border width token.
Previously, `brandAccent` was only available with the `large` border width.

**EXAMPLE USAGE:**
```jsx
<Box boxShadow="borderBrandAccent" />
{/* or */}
<Box boxShadow="borderBrandAccentLight" />
```


```ts
import { atoms } from 'braid-design-system/css';

atoms({ boxShadow: 'borderBrandAccent' });
atoms({ boxShadow: 'borderBrandAccentLight' });
```
