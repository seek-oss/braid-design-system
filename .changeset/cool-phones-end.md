---
'braid-design-system': patch
---

---
updated:
  - TextLink
  - TextLinkButton
---

**TextLink:** Default to weak inside secondary tone

Align the `secondary` tone with other non-neutral text tones, making the foreground color of links inherit the tone of the wrapping `Text` component.

**EXAMPLE USAGE:**
In the following example the `TextLink` will now follow the `secondary` tone from the wrapping `Text` component:

```jsx
<Text tone="secondary">
  <TextLink href="#">Link</TextLink>
</Text>
```

Previously this would have retained the default link colour from the theme.
