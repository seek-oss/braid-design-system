---
'braid-design-system': minor
---

---
updated:
  - IconRenderer
---

**IconRenderer:** Add support for `size="fill"`

**EXAMPLE USAGE:**
Provides the ability for custom icons to be sized to their container in the same way as Braid icons.

```jsx
<Box style={{ height: 60, width: 60 }}>
  <IconRenderer size="fill">
    {({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentcolor"
        aria-hidden
      >
        ...
      </svg>
    )}
  </IconRenderer>
</Box>
```
