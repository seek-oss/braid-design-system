---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
  - TextLink
  - TextLinkButton
---

**Button, ButtonLink, TextLink, TextLinkButton:** Add support for trailing icons

Provide support for choosing the position of the `icon` slot within a `Button` or `TextLink`.

By default, the `iconPosition` will be `leading` the label, but optionally, can be set to `trailing`.

**EXAMPLE USAGE:**
```jsx
<Button
  icon={<IconArrow direction="right" />}
  iconPosition="trailing"
>
  Next
</Button>
```
