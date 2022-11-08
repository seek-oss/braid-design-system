---
'braid-design-system': minor
---

---
updated:
  - Link
---

**Link:** Support custom `data` prop format for attributes

While `Link` already supports the native HTML syntax for data attributes, e.g. `data-testid="123"`, it now supports the `data` prop too. This allows data attributes to be provided consistently to all components.

**EXAMPLE USAGE:**
```diff
 <Link
+  data={{ testId: 'myComponent' }}
 />

```
The above example results in the following HTML attribute being set on the element: `data-testId="myComponent"`.
