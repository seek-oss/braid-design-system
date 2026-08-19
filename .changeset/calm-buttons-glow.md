---
'braid-design-system': minor
---

---
updated:
  - ButtonIcon
---

**ButtonIcon:** Default accent tones to `solid` when `variant` is omitted

Accent tones (`formAccent`, `brandAccent`) now default to `solid` when `variant` is omitted — existing `formAccent` usage can pass `variant="soft"` to keep the previous look.

**EXAMPLE USAGE:**
```jsx
<ButtonIcon tone="formAccent" icon={<IconAdd />} label="Add" />
```
