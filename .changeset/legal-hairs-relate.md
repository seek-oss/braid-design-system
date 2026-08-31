---
'braid-design-system': minor
---

---
updated:
  - IconRenderer
---

**IconRenderer:** Support custom icons in ButtonIcon

`IconRenderer` can now be passed to the `icon` slot of `ButtonIcon`. `ButtonIcon` injects `size="fill"`, which sizes the custom SVG to fill the button while preserving tone inheritance.

**EXAMPLE USAGE:**

```jsx
<ButtonIcon
  label="Custom icon"
  icon={
    <IconRenderer>
      {({ className }) => (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden
        >
          ...
        </svg>
      )}
    </IconRenderer>
  }
/>
```
