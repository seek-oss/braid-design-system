---
'braid-design-system': minor
---

---
new:
  - Avatar
---

**Avatar:** Add component

A user avatar that can show a photo, initials derived from `name`, or IconProfile when there is no letter. Available in `small`, `standard`, `large` and `xlarge` sizes, with a `loading` state. A surface-coloured ring is always applied so the avatar stays distinct on coloured backgrounds.

Avatar is decorative by default. Name the person with adjacent text, a wrapping control such as a `Button` or `MenuItem`, or `aria-label` when the avatar is the only identifier.

**EXAMPLE USAGE:**

```jsx
<Avatar name="Leia Organa" />
<Avatar />
<Avatar name="Leia Organa" imageUrl="https://example.com/photo.jpg" />
```
