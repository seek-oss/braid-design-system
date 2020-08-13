---
'braid-design-system': minor
---

---
updated:
  - Link
---

**Link:** Fixed types for `className` prop to support the full [classnames](https://www.npmjs.com/package/classnames) API

You can now pass arrays and objects to the `className` prop on `Link` without type errors.

For example:

```jsx
<Link
  href="#"
  className={[
    'someClass',
    ['anotherClass', 'yetAnotherClass'],
    { someConditionalClass: someBoolean }
  ]}>
  ...
</Link>
```
