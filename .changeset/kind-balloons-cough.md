---
'braid-design-system': minor
---

---
updated:
  - ButtonIcon
---

**ButtonIcon:** Add `formAccent` tone

Introduces support for the `formAccent` tone on `ButtonIcon`.

The new tone sits alongside the existing `neutral` tone, while the `secondary` tone is now deprecated and to be removed in a future version (see [Migration Guide] below).

**EXAMPLE USAGE:**
```jsx
<ButtonIcon tone="formAccent" icon={<IconAdd />} />
```

**MIGRATION GUIDE:**

For consumers of the now deprecated `secondary` tone, you can pro-actively migrate away from it by moving the `tone` to the icon itself:

```diff
 <ButtonIcon
-  tone="secondary"
-  icon={<IconAdd />}
+  icon={<IconAdd tone="secondary" />}
```


[Migration Guide]: #migration-guide
