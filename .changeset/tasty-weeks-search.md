---
'braid-design-system': minor
---

---
updated:
  - Stack
---

**Stack:** Expand `component` support

With `Stack` no longer adding intermidiary elements, the `component` prop can now accept a wider range of elements.
The list is kept to a white list of relevant elements for a `Stack` that do not require other HTML attributes, keeping in mind that props are not blindly spread in Braid.
