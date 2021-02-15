---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
  - ButtonRenderer
---

**Button, ButtonLink, ButtonRenderer:** Add `bleedY` prop

You can now choose to allow the button’s background colour to bleed out into the surrounding layout, making it easier to align with other elements.

For example, we can align a button to a Heading element using an Inline, even though the button is actually taller than the heading. If we didn’t use the **bleedY** prop in this case, the button would introduce unwanted space above and below the heading.

**EXAMPLE USAGE:**
```jsx
<Inline space="small" alignY="center">
  <Heading level="4">Heading</Heading>
  <Button bleedY>Button</Button>
  <Button bleedY size="small">
    Button
  </Button>
</Inline>
```
