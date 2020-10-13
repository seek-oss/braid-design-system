---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add `hideSuggestionsOnSelection` prop

Typically we hide the suggestion list when a selection is made, assuming that the field is now populated with the desired value. However, if the surrounding application clears the text field when a selection is made, this clashes with the user expectation that the field has been reverted back to its initial state with suggestions visible. To cater for this, we now allow you to opt out of this behaviour via the `hideSuggestionsOnSelection` boolean prop.

**EXAMPLE USAGE**

```jsx
<Autosuggest hideSuggestionsOnSelection={false} {...rest} />
```
