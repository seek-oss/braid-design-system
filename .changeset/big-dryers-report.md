---
'braid-design-system': minor
---

---
updated:
  - Box
  - BoxRenderer
  - atoms
  - vars
---

**Box, atoms, vars:** Add `small` to border radius scale

Extends the border radius scale to include `small` as a step below `standard`.
This uplift is to support an upcoming design uplift that requires greater fidelity in the scale.
Note, the new value is also available as a responsive property.

**EXAMPLE USAGE:**
```jsx
<Box borderRadius="small" />

{/* Or responsively: */}
<Box borderRadius={{ mobile: 'small', tablet: 'standard' }} />
```

```ts
import { atoms } from 'braid-design-system/css';

atoms({ borderRadius: 'small' })
```

```ts
import { vars } from 'braid-design-system/css';

const radius = vars.borderRadius.small;
```
