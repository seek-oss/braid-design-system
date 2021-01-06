---
'braid-design-system': patch
---

**Autosuggest:** Fix bug where async suggestions may not be visible

This fixes a bug where suggestions wouldn't become visible if the `suggestions` prop was initially empty and then populated asynchronously, only becoming visible on the next user interaction, e.g. typing in the field.
