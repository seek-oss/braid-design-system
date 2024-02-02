---
'braid-design-system': minor
---

---
new:
  - IconSocialX
---

**IconSocialX:** Add new icon

Add the new `IconSocialX` component to the suite of social icons, enabling teams to migrate across from `IconSocialTwitter` which has now been marked as deprecated.

**EXAMPLE USAGE:**
```jsx
<IconSocialX />
```

**MIGRATION GUIDE:**
Teams should migrate from `IconSocialTwitter` to `IconSocialX` at their earliest convenience. The `IconSocialTwitter` component will be removed in a future release.

```diff
-<IconSocialTwitter />
+<IconSocialX />
```
