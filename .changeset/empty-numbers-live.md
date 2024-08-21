---
'braid-design-system': major
---

---
updated:
  - Stack
---

**Stack:** Remove `divider` support

As part of migrating `Stack` to use flex gap, the `Stack` no longer iterates over its children, making `dividers` no longer feasible to include centrally.

While we could have conditionally maintained this behaviour, it would have resulted in inconsistent behaviour between a `Stack` with `dividers` and one without `dividers`.
In the case that a child component rendered nothing or a hidden element, the `divider` would still be rendered, resulting in an inconsistent layout.

**MIRATION GUIDE:**
```diff
-<Stack dividers>
+<Stack>
  {items.map((item, index) => (
-    <Component>{item}</Component>
+    <>
+      {index > 0 ? <Divider /> : null}
+      <Component>{item}</Component>
+    </>
  ))}
</Stack>
```
