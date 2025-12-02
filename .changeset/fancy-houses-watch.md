---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add support for data attributes on individual suggestions

The data attributes are applied to each rendered list item.

**EXAMPLE USAGE:**
```jsx
<Autosuggest
  suggestions={[
    {
      text: 'Apples',
      data: { testid: 'suggestion-apples' },
    },
  ]}
/>
```