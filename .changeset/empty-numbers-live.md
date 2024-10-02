---
'braid-design-system': major
---

---
updated:
  - Stack
  - Tiles
---

**Stack, Tiles:** Remove `divider` support

As part of migrating our layout components to leverage flex gap, the `Stack` & `Tiles` components no longer iterate over their children, making `dividers` no longer feasible to implement centrally.

While we could have exposed an API to apply this behaviour conditionally, there are edge cases that cannot be handled correctly without consumer-side rendering logic, such as when child components render nothing or a hidden element.

### MIGRATION GUIDE:
For `Stack`s with static children you can manually interleave `Divider` components:
```diff
-<Stack space="..." dividers>
+<Stack space="...">
   <Component />
+  <Divider />
   <Component />
+  <Divider />
   <Component />
 </Stack>
```

Or for conditionally rendering children you can return a [React Fragment], including the `Divider` and child:
```diff
-<Stack space="..." dividers>
+<Stack space="...">
   <Component />
   {condition ? (
-    <Component />
+    <>
+      <Divider />
+      <Component />
+    </>
   ) : null}
 </Stack>
```

For `Stack`s with iterable children you can return a [React Fragment] and conditionally render the `Divider` component as the first child, before each item (except the first):
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

For this you can conditionally render the `Divider` in a `Stack` with the same spacing as specified on the `Tiles` instance, and hide it on breakpoints showing more than one column.

Here is an example of this with static children:

```diff
-<Tiles space="..." columns={{mobile: 1, tablet: 2}} dividers>
+<Tiles space="..." columns={{mobile: 1, tablet: 2}}>
    <Component>{item}</Component>
+   <Stack space="...">
+     <Hidden above="mobile">
+       <Divider />
+     </Hidden>
      <Component>{item}</Component>
+   </Stack>
+   <Stack space="...">
+     <Hidden above="mobile">
+       <Divider />
+     </Hidden>
      <Component>{item}</Component>
+   </Stack>
</Tiles>
```

Here is an example of this with iterable children:

```diff
-<Tiles space="..." columns={{mobile: 1, tablet: 2}} dividers>
+<Tiles space="..." columns={{mobile: 1, tablet: 2}}>
  {items.map((item, index) => (
-    <Component>{item}</Component>
+    <Stack space="..." key={...}>
+      {index > 0 ? (
+        <Hidden above="mobile">
+          <Divider />
+        </Hidden>
+      ) : null}
       <Component>{item}</Component>
+    </Stack>
  ))}
</Tiles>
```
