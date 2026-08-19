---
'braid-design-system': minor
---

---
updated:
  - ButtonIcon
---

**ButtonIcon:** Add `brandAccent` tone

Introduces support for the `brandAccent` tone on `ButtonIcon`.

Accent tones now default to `solid` when `variant` is omitted — existing `formAccent` usage can pass `variant="soft"` to keep the previous look.

**EXAMPLE USAGE:**
```jsx
<ButtonIcon tone="brandAccent" icon={<IconAdd />} label="Add" />
```
