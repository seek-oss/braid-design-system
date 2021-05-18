---
'braid-design-system': minor
---

---
updated:
  - CheckboxStandalone
---

**CheckboxStandalone:**: Add component

Adds support for cases where a Checkbox needs to be used without a form field style label.

To maintain accessibility, it is required to provide either a **aria-label** or **aria-labelledby** property, to describe the field's intent.

Given there is no visual label, the following features from a standard Checkbox cannot be supported:
- description
- message
- badge
- children (nested content)

**EXAMPLE USAGE:**
```jsx
<CheckboxStandalone
  id={...}
  checked={...}
  onChange={...}
  aria-label="Label"
/>
```

