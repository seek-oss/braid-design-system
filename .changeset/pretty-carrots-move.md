---
'braid-design-system': patch
---

---
updated:
  - Box
---

**Box:** Reset background color on `input` and `select` elements

When specifying a `component` of `input` or `select` the background color was not being reset, falling through to the user agent styles. Reseting it to `transparent` to ensure predicatble styles across browsers and colour modes.
