---
'braid-design-system': patch
---

---
updated:
  - Text
  - Heading
---

**Text, Heading:** Fix `maxLines` cropping of decending characters

Fixes a bug when using -webkit-box, where the descender on the last line of text could be cropped based on the combination of line height and font size.
