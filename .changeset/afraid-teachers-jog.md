---
'braid-design-system': patch
---

---
updated:
  - TextLink
  - TextLinkButton
---

**TextLink, TextLinkButton:** Underline regular links in non-legacy themes

To improve affordance beyond primarily being colour, a `TextLink` (and `TextLinkButton`) will now always be underlined, in line with [best practice accessibility guidelines].

Given this has not been the case previously, this decision has been applied to non-legacy themes only, as such only affecting consumers of `seekJobs`, `docs` and `wireframe`.

[best practice accessibility guidelines]: https://webaim.org/techniques/hypertext/link_text#appearance
