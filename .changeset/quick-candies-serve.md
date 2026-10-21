---
"braid-design-system": patch
---

---
updated:
  - Pagination
---

**Pagination:** Only render next and prev as links when in range

Previous and Next stay in the layout on the first and last page, but they are no longer links. This stops crawlers from following a page 0 URL or a page past the end.
