---
'braid-design-system': patch
---

---
updated:
  - Box
  - atoms
---

**Box, atoms:** Remove native buttons on number input field

Extends the CSS reset behaviour of HTML input fields where `type="number"` to remove the native increment and decrement buttons.

**EXAMPLE USAGE:**
The following will now render a HTML input of type `number` without native buttons:

```jsx
<Box component="input" type="number" />
```

Additionally, if using the `atoms` function to build styles, when resetting an `input` field, the native buttons will also be removed.

```ts
const customClasses = atoms({
  reset: 'input',
  ...
});
```
