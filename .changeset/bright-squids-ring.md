---
'braid-design-system': patch
---

---
updated:
  - BraidTestProvider
---

**BraidTestProvider:** Provide `scrollIntoView` stub function for jsdom

Fixes an issue where `scrollIntoView` is not defined in jsdom, causing tests to fail with the following error:
```
Error: Uncaught [TypeError: highlightedItem?.scrollIntoView is not a function]
```
