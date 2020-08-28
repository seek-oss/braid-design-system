---
'braid-design-system': minor
---

---
new:
  - MenuItemDivider
---

Add **MenuItemDivider** component

You can now place visual separators between groups of menu items when using [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu)/[MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer).

**EXAMPLE USAGE**

```jsx
<OverflowMenu label="Options">
  <MenuItem onClick={() => {}}>Button</MenuItem>
  <MenuItemLink href="#">Link</MenuItemLink>
  <MenuItemDivider />
  <MenuItem onClick={() => {}}>Another button</MenuItem>
</OverflowMenu>
```
