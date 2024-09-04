---
'braid-design-system': major
---

---
updated:
  - Stack
  - Tiles
---

**Stack, Tiles:** Remove `divider` support

As part of migrating our layout components to leverage flex gap, the `Stack` & `Tiles` no longer iterate over their children, making `dividers` no longer feasible to implement centrally.

While we could have conditionally maintained this behaviour, it would have resulted in inconsistent edge cases when using `dividers` and not, e.g. if a child component rendered nothing or a hidden element, the `divider` would still be rendered, resulting in an inconsistent layout.

**MIRATION GUIDE:**
For `Stack`s with static children you can manually interleave `Divider` components:
```diff
-<Stack space="..." dividers>
+<Stack space="...">
   <Component>{item}</Component>
+  <Divider />
   <Component>{item}</Component>****
+  <Divider />
   <Component>{item}</Component>
 </Stack>
```

For `Stack`s with dynamic children you can conditionally render `Divider` components:
```diff
-<Stack space="..." dividers>
+<Stack space="...">
  {items.map((item, index) => (
-    <Component>{item}</Component>
+    <Fragment key={...}>
+      {index > 0 ? <Divider /> : null}
+      <Component>{item}</Component>
+    </Fragment>
  ))}
</Stack>
```

For `Tiles` the `dividers` prop was only applied when showing a single column.
For this you can conditionally hide the `Divider` on breakpoints showing more than one column:
```diff
-<Tiles columns={{mobile: 1, tablet: 2}} dividers>
+<Tiles columns={{mobile: 1, tablet: 2}}>
  {items.map((item, index) => (
-    <Component>{item}</Component>
+    <Fragment key={...}>
+      {index > 0 ? <Hidden above="mobile"><Divider /></Hidden> : null}
+      <Component>{item}</Component>
+    </Fragment>
  ))}
</Tiles>
```


