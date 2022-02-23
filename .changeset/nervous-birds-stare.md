---
'braid-design-system': minor
---

---
updated:
  - Pagination
---

**Pagination:** Add `pageLimit` support

Add support for configuring the number of pages displayed using the `pageLimit` prop. The default is still set to 7, but consumers can now reduce this, useful when `Pagination` is used inside column layouts.

In addition, the layout is has been stabilised, preventing the links moving when the next/prev actions are shown/hidden.

**EXAMPLE USAGE:**
```jsx
<Pagination
  ...
  pageLimit={3}
/>
```
