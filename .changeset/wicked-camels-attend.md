---
'braid-design-system': patch
---

---
updated:
  - TooltipRenderer
---

**TooltipRenderer:** Ensure Chinese text is not wrapped incorrectly

Right aligned tooltip triggers with tooltips containing long unbroken Chinese text are no longer forcibly broken across many lines.
This was due to the use of `overflow-wrap: break-word;` used to break long strings of Latin characters—guarding against broken layouts.

For Chinese, Japanese and Korean (CJK) character sets, to avoid the unwanted line breaks it is recommened to apply the `word-break: keep-all;` CSS property.

See [MDN reference] for more information.

[MDN reference]: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/word-break#keep-all