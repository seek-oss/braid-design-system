---
'braid-design-system': minor
---

---
updated:
  - MenuItem
  - MenuItemLink
  - MenuRenderer
  - OverflowMenu
---

**MenuItem, MenuItemLink, MenuRenderer, OverflowMenu:** Add `icon` support

Provides a designed slot for adding an icon to `MenuItem` and `MenuItemLink`. To compliment this we have introduced `reserveIconSpace` on both `MenuRenderer` and `OverflowMenu` so the labels in menu items without icons align with the labels of menu items with an icon.

**EXAMPLE USAGE:**
```jsx
<MenuRenderer reserveIconSpace>
  <MenuItem
    // ...
    icon={<IconBookmark />}
  >
    Menu Item
  </MenuItem>
</MenuRenderer>
```
