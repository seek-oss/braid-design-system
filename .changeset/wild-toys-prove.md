---
'braid-design-system': major
---

---
updated:
  - Toggle
---

**Toggle:** Enable `bleedY` by default, and deprecate `bleedY` prop.

Deprecate the `bleedY` prop on `Toggle` component, and enable `bleedY` by default.
Consumers should remove use of the `bleedY` prop, and if previously not setting `bleedY` to true, should update their layout accordingly.

### MIGRATION GUIDE:

```diff
- <Toggle bleedY />
+ <Toggle />
```