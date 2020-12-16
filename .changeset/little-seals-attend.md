---
'braid-design-system': minor
---

---
updated:
  - MenuItem
  - MenuItemLink
---

**MenuItem, MenuItemLink:** Add support for `critical` tone

For destructive actions (e.g. "Delete") you can now provide a `tone` prop with a value of `"critical"`.

**EXAMPLE USAGE**

```tsx
<OverflowMenu label="Options">
  <MenuItem tone="critical" onClick={() => {}}>
    Delete
  </MenuItem>
</OverflowMenu>
```
