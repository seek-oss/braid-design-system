---
'braid-design-system': major
---

---
updated:
  - Hidden
---

**Hidden:** Remove `screen` prop

Remove the deprecated `screen` prop from the `Hidden` component.
For content designed to improve the screen reader experience, please use use the `HiddenVisually` component instead.
Alternatively, for content designed to be hidden unconditionally, remove the `screen` prop.

**MIGRATION GUIDE:**

```diff
- <Hidden screen>
+ <Hidden>
```