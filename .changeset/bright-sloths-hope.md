---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add support for custom messages when no suggestions are present

If no suggestions are available and you'd like to provide an explanation to the user, you can now pass an object with a `messages` property to the `suggestions` prop.

**EXAMPLE USAGE**

```tsx
<Autosuggest
  suggestions={{ message: 'No suggestions available.' }}
  {...restProps}
/>
```
