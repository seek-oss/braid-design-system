---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Make suggestion list modal

The suggestion list has been made modal to prevent being cut off inside of a container that hides overflow, for example inside a `Dialog`.

In addition, the `Announcement` elements internally used for providing context to a screen reader have been moved in a single top level announcement container to keep the DOM clean.
