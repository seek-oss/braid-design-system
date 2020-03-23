---
"braid-design-system": patch
---

Textarea: Fix trailing new line highlight issue

**BUG FIXES**

**`Textarea`**

Fix for `highlightRanges`, where the highlights could get out of sync with the field value, if the value contained trailing new lines.
