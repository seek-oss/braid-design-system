---
'@braid-design-system/docs-ui': minor
---

**TitleLink:** Added new component for rendering linkable headings with an optional copy-to-clipboard interaction. Should be wrapped in your required typographic component.

**EXAMPLE:**
```jsx
<Heading level="2">
  <TitleLink>Getting started</TitleLink>
</Heading>
```

With copy-to-clipboard:
```jsx
<CategoryHeading component="h3">
  <TitleLink copyable>Appearance</TitleLink>
</CategoryHeading>
```
