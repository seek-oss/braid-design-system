---
'braid-design-system': minor
---

---
updated:
  - Stack
---

**Stack:** Add support for span elements

Stack now supports using `span` elements for it's markup, this is useful when using layout components inside elements that should not contain a `div` element, e.g. `button`.

**EXAMPLE USAGE:**
```jsx
<Stack component="span" space="medium">
  ...
</Stack>
```
