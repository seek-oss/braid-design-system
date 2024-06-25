---
'braid-design-system': minor
---

---
updated:
  - Toggle
---

**Toggle:** Add `bleedY` prop

Introduces the `bleedY` prop, enabling vertical bleed for the `Toggle` component. This removes excess vertical space created by the `Toggle` input.

**EXAMPLE USAGE:**
```jsx
<Toggle label="Label" bleedY />
```

**MIGRATION GUIDE:**

Vertical bleed will become standard for the `Toggle` component in a future version. Please use the `bleedY` prop with a value of `true` and update your layout accordingly.