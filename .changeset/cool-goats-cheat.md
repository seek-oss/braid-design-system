---
'braid-design-system': patch
---

Checkbox & Radio: Only add aria-describedby when a message is provided

**BUG FIXES**

**`Checkbox` & `Radio`**

Both of these inputs were previously always adding the `aria-describedby` attribute, while conditionally rendering the `message` only when provided. This meant that elements without a `message` would be indicating that they are described by an element that does not exist.
