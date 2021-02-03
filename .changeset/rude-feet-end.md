---
'braid-design-system': minor
---

---
updated:
  - Hidden
---

**Hidden:** Add `component` support

You can now customise the DOM element rendered when using `Hidden`. If no `component` is specified, it will fall back to the current behaviour — a `div` by default, or a `span` when setting `inline` to `true`.

**EXAMPLE USAGE:**
```jsx
<Hidden component="li">
  ...
</Hidden>
```
