---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
---

**Autosuggest**: Improve handling of `suggestionHighlight` prop when set to `remaining`

Fixes a bug in `Autosuggest` when using `suggestionHighlight` prop set to `remaining`.
If the input contained multiple words, the highlighted portion would be appended to the end of matching suggestions.
