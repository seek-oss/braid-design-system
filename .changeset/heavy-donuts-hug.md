---
'braid-design-system': major
---

---
updated:
  - Column
---

**Column:** Prevent growing when `content` width specified

Ensure that when a column `width` is specified, the column does not grow or shrink.
Only a column with no `width` specified will fluidly adapt to the available space.

Fixes a bug when all `Column` components have a defined `width`, a column specifying `content` width would incorrectly grow to consume the available space.
