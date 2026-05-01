---
'braid-design-system': minor
---

---
updated:
  - Badge
---

**Badge:** Added aria-hidden and aria-label props.

`aria-hidden` allows a badge to be hidden from assistive technology

`aria-label` allows visible badge text to be overridden with a more descriptive label for screen readers


**EXAMPLE USAGE:**
```jsx
  <Badge aria-hidden>
    Deprecated
  </Badge>
```

```jsx
  <Badge aria-label="You have 2 notifications">
    2
  </Badge>
```