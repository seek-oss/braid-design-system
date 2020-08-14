---
'braid-design-system': minor
---

---
updated:
  - Box
---

**Box:** Added `zIndex` prop

The following z-index palette is now available on `Box`:

**Local stacking**

- `0`
- `1`
- `2`

**Global stacking**

- `"dropdownBackdrop"`
- `"dropdown"`
- `"sticky"`
- `"modalBackdrop"`
- `"modal"`
- `"notification"`

**EXAMPLE USAGE**

```jsx
<Box position="fixed" zIndex="sticky">
  ...
</Box>
```
