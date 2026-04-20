---
'braid-design-system': patch
---

---
updated:
  - Textarea
---

**Textarea:** Fix highlight ranges when content overflows

Resolves an issue where long running scrolling content in a `Textarea` with `highlightRanges` could result in the highlights being misaligned due to the scrollbar.