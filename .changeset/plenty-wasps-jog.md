---
'braid-design-system': patch
---

---
updated:
  - useToast
---

**useToast:** Add `duration` option

Toasts accept `short` (6 seconds), `long` (10 seconds), or `indefinite`. The default is `long`, matching the previous dismiss time.

**EXAMPLE USAGE:**

```jsx
showToast({
  tone: 'positive',
  message: 'Saved',
  duration: 'short',
});
```
