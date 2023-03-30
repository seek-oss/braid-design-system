---
'braid-design-system': minor
---

---
updated:
  - atoms
  - Bleed
  - Box
  - BoxRenderer
  - Columns
  - Disclosure
  - Inline
  - List
  - MenuRenderer
  - Stack
  - Tabs
  - Tiles
  - useSpace
  - vars
---

Add `xxxsmall` and `xxxlarge` to the space scale

Extends the range of the space scale in both directions to include `xxxsmall` and `xxxlarge`.
This addition is to support an upcoming design uplift that requires greater fidelity in the scale.
Note, the new values are also available as responsive properties.

**EXAMPLE USAGE:**
```jsx
<Stack space="xxxlarge">...</Stack>

{/* Or responsively: */}
<Stack space={{ mobile: 'large', tablet: 'xxxlarge' }}>...</Stack>
```

```ts
import { atoms } from 'braid-design-system/css';

atoms({ padding: 'xxxsmall' })
```

```ts
import { vars } from 'braid-design-system/css';

const space = vars.space.xxxlarge;
```