---
'braid-design-system': minor
---

---
new:
  - Column
---

**Column:** Add support for hide above/below breakpoint

Introduce new `hideAbove` and `hideBelow` props on column for responsively hiding columns across breakpoint.

These props can be used either separately or in combination to optimise content display across different screen sizes.

**EXAMPLE USAGE:**
```jsx
<Columns space="small">
  <Column>
    <Placeholder height={60} label="Always visible" />
  </Column>
  <Column hideBelow="tablet">
    <Placeholder height={60} label="Tablet and above" />
  </Column>
  <Column hideAbove="mobile">
    <Placeholder height={60} label="Mobile Only" />
  </Column>
</Columns>
```
