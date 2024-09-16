# Removing `dividers` support from layout components

Following the update to SEEK&rsquo;s Browser Support Policy, we are now able to leverage [CSS gap] in Braid, and more importantly, our layout components. This will be landing in Braid in the v33 release.

Previously, to enable gap-like behaviour layout components iterated over their children, wrapping them in container elements and applying padding. The trade off of this technique was an increased number of DOM elements and the introduction of unwanted space if the child element was hidden or returned `null` — requiring developers to hoist logic to the parent component.

Migrating to CSS gap mitigates all of the above trade offs.

However, because `Stack` and `Tiles` no longer iterate over their children, implementing the `dividers` feature centrally is no longer feasible.

While we could have conditionally maintained this behaviour, it would have resulted in inconsistent edge cases when using `dividers`. E.g. if a child component rendered nothing or a hidden element, the `divider` would still be rendered, resulting in an inconsistent layout.

## Migration guide

Braid already provides the [`Divider` component], so migrating away from the `dividers` prop is a matter of inserting a `Divider` as required into your layout.
How you migrate will depend on whether the children of your layout component are static or being iterated over.

### `Stack`

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

For `Stack`s with iterable children you can conditionally render `Divider` components, before each item (except the first):

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

### `Tiles`

For `Tiles` the `dividers` prop was only applied when rendered as a single column.

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

[CSS gap]: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
[`Divider` component]: https://seek-oss.github.io/braid-design-system/components/Divider/
