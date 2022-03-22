---
'braid-design-system': minor
---

---
updated:
  - useToast
---

**useToast:** Add `closeLabel` prop

To support translations, the close button can now be customised using the `closeLabel` prop.

**EXAMPLE USAGE:**
```jsx
<Button
  onClick={() =>
    showToast({
      closeLabel: 'Close'
      // ...
    })
  }
/>
```
