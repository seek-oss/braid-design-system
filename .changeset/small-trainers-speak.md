---
'braid-design-system': minor
---

---
new:
  - Pagination
---

**Pagination:** Add component

**EXAMPLE USAGE:**
```jsx
<Pagination
  label="Search results pagination"
  page={1}
  total={20}
  linkProps={(page) => ({
    href: `/results?page=${page}`
  })}
/>
```
