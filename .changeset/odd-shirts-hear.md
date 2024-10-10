---
'braid-design-system': minor
---

---
new:
  - Box
  - atoms
---

**Box, atoms:** Add `content` to `maxWidth`

Add the `content` option to the `maxWidth` property on the  styling atoms.
This will ensure an element is only as wide as its content.

**EXAMPLE USAGE:**
```jsx
<Box maxWidth="content" />
```

```ts
import { atoms } from 'braid-design-system/css';

atoms({
  maxWidth: 'content',
})
```
