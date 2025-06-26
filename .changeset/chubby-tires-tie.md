---
'braid-design-system': patch
---

---
updated:
  - BraidTestProvider
---

**BraidTestProvider:** Provide `ResizeObserver` & `IntersectionObserver` stubs to jsdom

Fixes an issue where rendering certain Braid components within a test environment could throw errors due to missing APIs in jsdom, causing tests to fail with the following error:

```
ReferenceError: IntersectionObserver is not defined
```
