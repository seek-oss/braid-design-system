---
'braid-design-system': patch
---

---
updated:
  - Checkbox
---

**Checkbox:** Support inferring of tri-state checked value

To simplify the use of tri-state checkboxes, the **checked** prop now supports resolving the tri-state value from a array of checked values.

**EXAMPLE USAGE:**
```jsx
// Will resolve to "mixed" based on the array of values provided
 <Checkbox
  label="Select all"
  checked={[ true, false, false ]}
/>
```
