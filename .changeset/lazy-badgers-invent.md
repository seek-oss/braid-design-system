---
'braid-design-system': minor
---

Add **MenuItemCheckbox** component

You can now render checkboxes within [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu)/[MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer) elements.

**EXAMPLE USAGE**

```jsx
<OverflowMenu label="Checklist">
  <MenuItemCheckbox checked={true} onChange={() => {}}>
    Checkbox 1
  </MenuItemCheckbox>
  <MenuItemCheckbox checked={false} onChange={() => {}}>
    Checkbox 2
  </MenuItemCheckbox>
  <MenuItemCheckbox checked={false} onChange={() => {}}>
    Checkbox 3
  </MenuItemCheckbox>
</OverflowMenu>
```
