---
'braid-design-system': patch
---

---
updated:
  - BraidTestProvider
---

**BraidTestProvider:** Use stubs instead of mocks to fill missing APIs in jsdom

This change allows the BraidTestProvider to be framework agnostic for tests and discourages testing the stubbed browser APIs directly.
