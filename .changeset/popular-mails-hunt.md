---
'braid-design-system': minor
---

---
updated:
  - Tag
---

The `onClear` handler now accepts a click event object as an argument.

**EXAMPLE USAGE:**
```jsx
<Tag
  onClear={(event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toggleTag();
  }}
>
  Tag
</Tag>
```