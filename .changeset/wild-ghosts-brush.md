---
'braid-design-system': minor
---

**Autosuggest:** Support custom label text for suggestions

You can now optionally provide different suggestion text from the value that gets inserted into the text field.

**EXAMPLE USAGE**

```tsx
<Autosuggest
  suggestions={[{ text: 'apples', label: 'Add "apples"' }]}
  {...restProps}
/>
```
