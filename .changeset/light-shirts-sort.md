---
'braid-design-system': patch
---

---
updated:
  - Button
---

**Button:** Support using as menu trigger

Allow a `Button` to receive all of the required props for a menu trigger. As a result a `Button` now accepts `onKeyUp`, `onKeyDown` and `aria-haspopup`.

**EXAMPLE USAGE:**
```jsx
<MenuRenderer
  trigger={triggerProps => (
    <Button {...triggerProps}>
      Button
    </Button>
  )}
>
  ...
</MenuRenderer>
```


