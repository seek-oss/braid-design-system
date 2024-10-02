---
'braid-design-system': major
---

---
updated:
  - Stack
---

Migrate to CSS `gap` internally.

With the browser support policy now enabling adoption of CSS [gap], Braid’s layout components are now able to lean into the platform directly for its declarative, parent-driven approach to white space management.

Previously to enable gap-like behaviour, layout components iterated over their children wrapping them in container elements that applied padding.
The trade off of this technique was increased number of DOM elements and the introduction of unwanted space if the child element was hidden or returned `null`, requiring developers to hoist logic to the parent component.

[gap]: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
