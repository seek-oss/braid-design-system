---
'braid-design-system': patch
---

---
updated:
  - useBreakpoint
---

Deprecate `useBreakpoint`

This Hook has been deprecated in favour of the new `useResponsiveValue` Hook.

This is because `useBreakpoint` leads consumers to inadvertently couple themselves to the current set of breakpoints, making it risky for us to introduce new breakpoints.

For example, you may have chosen to detect large screens by checking that the user is on the (current) largest breakpoint (e.g. `const isDesktop = useBreakpoint() === "desktop"`), but this logic would break if we introduced an even larger breakpoint and the Hook started returning other values.

To maintain backwards compatibility, `useBreakpoint` will continue to return `"desktop"` when the user is technically on larger breakpoints.

**MIGRATION GUIDE**

_Note that the `useResponsiveValue` Hook returns a `responsiveValue` function, so in these cases we're double-calling the function._

```diff
-const isMobile = useBreakpoint() === 'mobile';
+const isMobile = useResponsiveValue()({
+  mobile: true,
+  tablet: false
+});
```

```diff
-const isTablet = useBreakpoint() === 'tablet';
+const isTablet = useResponsiveValue()({
+  mobile: false,
+  tablet: true,
+  desktop: false,
+});
```

```diff
-const isDesktop = useBreakpoint() === 'desktop';
+const isDesktop = useResponsiveValue()({
+  mobile: false,
+  desktop: true
+});
```
