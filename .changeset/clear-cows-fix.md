---
'braid-design-system': patch
---

---
updated:
  - Drawer

---

**Drawer:** Reject empty `title`

An empty `title` is now treated as invalid, consistent with `aria-label`. Provide a non-empty `title`, or use `aria-label` for an untitled `Drawer`.
