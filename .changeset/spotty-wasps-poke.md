---
'braid-design-system': minor
---

---
updated:
  - Drawer
  - Dialog
---

**Drawer, Dialog:** Support validation blocking closure of modal

To prevent a `Dialog` or `Drawer` from closing, e.g. due to validation, the `onClose` function can now return **false**.

**EXAMPLE USAGE:**
```jsx
<Drawer
  onClose={() => {
    const valid = runValidation();
    if (!valid) {
      return false;
    }

    closeDrawer();
  }}
/>
```
