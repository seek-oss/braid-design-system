---
'braid-design-system': minor
---

---
new:
  - MenuItemLink
---

Add **MenuItemLink** component

You can now render semantic links within menu components, e.g. [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu), [MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer)

For example:

```jsx
<OverflowMenu label="Options">
  <MenuItem onClick={() => {}}>Button</MenuItem>
  <MenuItemLink href="...">Link</MenuItem>
</OverflowMenu>
```

Note that links are rendered internally using [Link](https://seek-oss.github.io/braid-design-system/components/Link). If you want to customise the rendering of these links, you need to provide a custom `linkComponent` implementation to [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider).
