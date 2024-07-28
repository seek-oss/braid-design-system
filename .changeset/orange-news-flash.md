---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add `suggestionHighlight` prop

Introduces the `suggestionHighlight` prop, which uses the input value to automatically highlight either the `matching` or `remaining` portion of each suggestion.

**EXAMPLE USAGE:**
```jsx
<Autosuggest suggestionHighlight="matching">
```