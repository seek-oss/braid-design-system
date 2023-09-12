---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Provide `formAccent` as the name for undefined tone

Formalise the name of the `undefined` tone as `formAccent`, making it more discoverable as an accent available for increased prominence.

Note: Consumers should only apply this tone where an action should be emphasized explicitly. The `undefined` value is still valid for buttons that should follow the default button style of the theme.

**EXAMPLE USAGE:**
```jsx
<Button tone="formAccent">
  ...
</Button>
```
