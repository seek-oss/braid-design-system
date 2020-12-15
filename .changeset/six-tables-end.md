---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
  - ButtonRenderer
---

**Button, ButtonLink, ButtonRenderer:** Add support for `critical` tone

For destructive actions (e.g. "Delete") you can now provide a `tone` prop with a value of `"critical"`.

**EXAMPLE USAGE**

```tsx
<Button tone="critical">
  <IconDelete /> Delete
</Button>
```
