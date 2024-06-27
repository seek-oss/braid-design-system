---
'braid-design-system': minor
---

---
updated:
  - Tag
---

**Tag:** Introduce "addable" support

Tag actions have been extended to now support being “added”.
A `Tag` will include a small add icon button when both an `onAdd` handler and `addLabel` prop are provided.

**EXAMPLE USAGE:**
```jsx
<Tag onAdd={() => {...}} addLabel="Add Tag" />
```
