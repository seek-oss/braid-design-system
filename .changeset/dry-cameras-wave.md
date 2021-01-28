---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
  - ButtonRenderer
  - Actions
---

**Button, ButtonLink, ButtonRenderer, Actions:** Add `size` prop, support `small` size

You can now render smaller variants of button/action elements by setting the `size` prop to `small`.

**EXAMPLE USAGE**

**Small Button**

```jsx
<Button size="small">Small Button</Button>
```

**Small Actions**

```jsx
<Actions size="small">
  <Button>Regular Button</Button>
  <Button weight="weak">Weak Button</Button>
  <TextLink href="#">TextLink</TextLink>
</Actions>
```
