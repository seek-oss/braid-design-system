---
'braid-design-system': minor
---

---
new:
  - Dialog
  - Drawer
---

**Dialog, Drawer:** Add `removeOnClose` prop

Provide support for modal containers remaining in the document when closed.
By adding the `removeOnClose` prop, consumers can choose to override the default behaviour of `true`, and keep the modal container in the document when it is closed.

This enables the content of the modal to be discovered by crawlers, without having to interact with the page.

**EXAMPLE USAGE:**
```jsx
<Drawer removeOnClose={false} />
```
