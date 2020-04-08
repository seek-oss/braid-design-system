---
'braid-design-system': patch
---

Drop lodash usage to decrease bundle size.

This directly affects `MonthPicker` and any components using the `data` prop:

- All field components
- OverflowMenu
- MenuRenderer
- Button
