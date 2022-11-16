---
'braid-design-system': minor
---

---
new:
  - IconRenderer
---

**IconRenderer:** Support the sizing and alignment of custom icons

Provides support for sizing and aligning custom icons with Braid’s typographic components. The new `IconRenderer` component supports being used within `Text` and `Heading` components as well as inside `icon` slots of other components.

Uses the render prop pattern to provide the required classes to style and align a custom icon.

**EXAMPLE USAGE:**
```jsx
<Heading level="1">
  <IconRenderer>
    {({ className }) => (
      <svg className={className}>
        ...
      </svg>
    )}
  </IconRenderer>
</Heading>
```
