---
'braid-design-system': major
---

---
updated:
  - Columns
  - Inline
---

**Columns, Inline:** Only respect `reverse` in combination with `collapseBelow`

The `reverse` prop is only respected in combination with `collapseBelow`.
This ensures the content is reversed on the same row, but follows the document order when collapsed.

If content needs to be reversed without `collapseBelow` then it should be reversed in the document/source order directly.
