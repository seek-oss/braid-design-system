---
'braid-design-system': minor
---

---
updated:
  - IconRenderer
---

**IconRenderer:** Add `tone` support

Enable custom icons to use Braid tones in the same way as first-class Braid icons.

**EXAMPLE USAGE:**
```jsx
<IconRenderer tone={tone}>
  {({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      ...
    </svg>
  )}
</IconRenderer>
```