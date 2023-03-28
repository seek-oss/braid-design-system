---
'braid-design-system': patch
---

---
updated:
  - theme
---

**theme:** Add support for webfonts beyond Google Fonts

Previously the `webFont` on the theme was the `familyName` and was being used to construct a link tag to a Google Fonts stylesheet and provide to consumers via a runtime token.
To enable fonts beyond Google Fonts, we are changing `webFont` to be a URL.
This does not impact existing themes (as there are no themes currently with a web font), and the contract of the runtime token (a constructed link tag) remains unchanged.
