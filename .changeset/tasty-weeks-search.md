---
'braid-design-system': minor
---

---
updated:
  - Stack
---

**Stack:** Widen `component` support

With `Stack` no longer adding intermediary elements, the `component` prop can now accept a wider range of elements.
Valid options are kept to a white list of elements relevant to `Stack` that do not require other HTML attributes, keeping in mind that props are not blindly spread in Braid.
