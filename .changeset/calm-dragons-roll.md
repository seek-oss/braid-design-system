---
'braid-design-system': minor
---

Autosuggest: Support suggestion descriptions

You can now provide a `description` as part of each suggestion item, e.g.:

```jsx
<Autosuggest
  suggestions={[
    {
      text: 'Apples',
      value: 123,
      description: 'Juicy and delicious',
    },
  ]}
  {...rest}
/>
```
