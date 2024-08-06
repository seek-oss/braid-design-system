---
'braid-design-system': minor
---

---
updated:
  - Badge
---

**Badge:** Enable usage inside typographic components

A `Badge` can now be nested inside typographic components, e.g. `Text` and `Heading`, as an inline element alongside text.
Previously a `Badge` had to be aligned against text using an `Inline` component, which would result in the `Badge` dropping below the text when the copy wrapped.

**EXAMPLE USAGE:**
```jsx
<Text>
  Lorem ipsum velit in <Badge>amet</Badge>.
</Text>
```
