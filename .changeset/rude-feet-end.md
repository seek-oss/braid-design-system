---
'braid-design-system': minor
---

---
updated:
  - Hidden
---

**Hidden:** Add `component` support

Provide a way to customise the DOM element rendered when using `Hidden`. If no `component` is specified it will fallback to the current behaviour — a `span` when setting `inline` to `true`, or otherwise a `div`.

**EXAMPLE USAGE:**
```jsx
<Hidden component="li">
  ...
</Hidden>
```
