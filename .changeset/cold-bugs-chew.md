---
'braid-design-system': minor
---

**Autosuggest:** Add `filterSuggestions` function

The logic for filtering suggestions typically lives on the server rather than the client because it’s impractical to send all possible suggestions over the network. However, when prototyping in Playroom or working with smaller datasets, you may want to perform this filtering on the client instead. For this case, we now provide a `filterSuggestions` function to make this as painless as possible.

**EXAMPLE USAGE**

```tsx
<Autosuggest
  suggestions={filterSuggestions([
    { text: 'Apples', value: 1 },
    { text: 'Bananas', value: 2 }
  ])}
  {...restProps}
  />
```
