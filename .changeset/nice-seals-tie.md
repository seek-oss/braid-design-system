---
'braid-design-system': minor
---

---
updated:
  - Text
  - globalTextStyle
---

**Text, globalTextStyle:** Deprecate `medium` weight

Deprecate `medium` font weight from `Text` styles.
The fidelity of three unique weights is not desired at the `Text` level of the typographic hierarchy.
The introduction of `medium` was more to do with `strong` being too heavy.
At a `Text` level, `strong` now maps to `medium` on the font weight scale.

Usage of `medium` is still supported, but will throw warning in the development/CI, and will be removed at a future date.

**EXAMPLE USAGE:**
```diff
 <Text
-  weight="medium"
+  weight="strong"
 />
```

Migration can largely be automated by running the Braid upgrade command:

**MIGRATION GUIDE:**
```bash
yarn braid-upgrade v32-2 "**/*.{ts,tsx}"
```
