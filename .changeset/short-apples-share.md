---
'braid-design-system': minor
---

---
new:
  - Avatar
---

**Avatar:** Add component

A user avatar that can show a photo, initials derived from `name`, or an icon. Available in `xsmall`, `small`, `standard`, `large` and `xlarge` sizes, with `loading` and photo error states.

Avatar is decorative by default. Name the person with adjacent text, a wrapping control such as a `Button` or `MenuItem`, or `label` when the avatar is the only identifier.

**EXAMPLE USAGE:**

```jsx
<Avatar name="Leia Organa" />
<Avatar variant="icon" name="Leia Organa" />
<Avatar name="Leia Organa" photoUrl="https://example.com/photo.jpg" />
```
