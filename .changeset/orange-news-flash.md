---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add `automaticHighlights` prop

Introduces the `automaticHighlights` prop, which uses the input value to automatically highlight either the `matching` or `remaining` portion of each suggestion.

**EXAMPLE USAGE:**
```jsx
<Autosuggest automaticHighlights="matching">
```