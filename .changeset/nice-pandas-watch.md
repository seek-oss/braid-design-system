---
'braid-design-system': minor
---

---
updated:
  - MenuItem
  - MenuItemLink
  - MenuItemChecklist
---

**MenuItem, MenuItemLink, MenuItemChecklist:** Add `badge` support

Provides a designed slot for adding a `Badge` to all the variants of a menu item.

**EXAMPLE USAGE:**
```jsx
<MenuRenderer>
  <MenuItem
    // ...
    badge={<Badge>Badge</Badge>}
  >
    Menu Item
  </MenuItem>
</MenuRenderer>
```
