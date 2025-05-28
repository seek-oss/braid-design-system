---
'braid-design-system': minor
---

---
updated:
  - ButtonIcon
---

**ButtonIcon**: Add optional `aria-describedby` prop

`aria-describedby` can be used in addition to `label` to associate additional descriptive elements with the `ButtonIcon`.

**EXAMPLE USAGE:**

```jsx
<ButtonIcon icon={<IconDelete />} label="Delete" aria-describedby="descriptionId" />
<Text id="descriptionId">Deleted items will be permanently removed after 30 days.</Text>
```
