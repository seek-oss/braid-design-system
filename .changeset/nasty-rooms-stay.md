---
'braid-design-system': patch
---

Support `null` for components' optional props, in addition to `undefined`

Previously, optional props could only be explicitly omitted with  `undefined`. This change allows you to alternatively pass `null`.

**EXAMPLE USAGE:**

```tsx
+ <Button icon={null} />
```
