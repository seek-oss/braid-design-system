---
'braid-design-system': patch
---

---
updated:
  - Divider
---

**Divider:** Use span element

As the `Divider` component is not used as a container element, we now use a `span`. This allows it to be used inside `button` elements, such as a `Tab`, without producing invalid html.
