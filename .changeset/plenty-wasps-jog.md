---
'braid-design-system': patch
---

---
updated:
  - useToast
---

**useToast:** Add `duration` option

Toasts accept `short` (6 seconds), `standard` (10 seconds), or `indefinite`. The default is `standard`, matching the previous dismiss time.

**EXAMPLE USAGE:**

```jsx
showToast({
  tone: 'positive',
  message: 'Saved',
  duration: 'short',
});
```
