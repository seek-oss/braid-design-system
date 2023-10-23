---
'braid-design-system': patch
---

---
updated:
  - TextLink
  - TextLinkButton
---

**TextLink, TextLinkButton:** Ensure consistent underline thickness on weak links

A subtle bug affecting weak links was resulting in a change in underline thickness on hover.
This bug has been fixed such that weak links now always have the same underline thickness regardless of hover state.
