---
'braid-design-system': minor
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Add menu `width` and `placement` support

Provides a set of `width`s to control how wide the menu is, where `content` is the default. The available widths are ratioed off the `contentWidth`s specified on the theme.

Additionally the `placement` of the menu can choose from either `top` or `bottom` where the latter remains the default.

**EXAMPLE USAGE:**
```jsx
<MenuRenderer
  // ...
  width="small"
  placement="top">
  ...
</MenuRenderer>
```
