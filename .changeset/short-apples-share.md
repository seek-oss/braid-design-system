---
'braid-design-system': minor
---

---
new:
  - Avatar
---

**Avatar:** Add component

A decorative user avatar that can show a photo, initials derived from `name`, or an icon. Available in `small`, `standard`, `large` and `xlarge` sizes, with `loading` and photo error states.

Avatar is decorative and hidden from assistive technologies. Name the person with adjacent text, or on a wrapping control such as a `Button` or `MenuItem`.

**EXAMPLE USAGE:**

```jsx
<Avatar variant="initials" name="Leia Elise" />
<Avatar variant="icon" name="Leia Elise" />
<Avatar
  variant="initials"
  name="Leia Elise"
  photoUrl="https://example.com/photo.jpg"
/>
```
