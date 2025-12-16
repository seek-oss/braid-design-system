---
'braid-design-system': major
---

---
updated:
  - Toggle
---

**Toggle:** Remove `bleedY` prop

Remove the deprecated `bleedY` prop from the `Toggle` component.
Consumers should remove use of the `bleedY` prop, and if previously setting `bleedY` to false, should update their layout accordingly.

**MIGRATION GUIDE:**

```diff
- <Toggle bleedY />
+ <Toggle />
```