---
'braid-design-system': minor
---

---
updated:
  - Textarea
---

**Textarea:** Add support for disabling built-in spell checker

Provide support for disabling the built-in browser spell checker using the native HTML attribute `spellCheck`.

When highlighting ranges you may choose to turn spell check off to prevent colliding highlights. This can be done be setting `spellCheck` to `false`.

**EXAMPLE USAGE:**
```jsx
<Textarea spellCheck={false} />
```
