---
'braid-design-system': minor
---

---
updated:
  - List
---

**List:** Add support for icons

Provides a way to use an icon for all the items in a list. When using `type="icon"` you must also provide the `icon` prop. See example below:

**EXAMPLE USAGE:**
```jsx
<List type="icon" icon={<IconTick tone="positive" />}>
  <Text>This is a list item.</Text>
  <Text>This is a list item.</Text>
  <Text>This is a list item.</Text>
</List>
```

