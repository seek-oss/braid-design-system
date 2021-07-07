---
'braid-design-system': minor
---

---
new:
  - useResponsiveValue
---

Add `useResponsiveValue` Hook

This Hook will return the resolved value based on the breakpoint the browser viewport currently falls within (`mobile`, `tablet`, `desktop` or `wide`). As this can only be calculated in the browser, the value will also be `null` when rendering server-side or statically rendering.

Note that this Hook returns a function so that it can be called anywhere within your component.

**EXAMPLE USAGE**

```tsx
const responsiveValue = useResponsiveValue();

const screenSize = responsiveValue({
  mobile: 'Small',
  desktop: 'Large',
});
```

You can also resolve to boolean values for breakpoint detection.

```tsx
const responsiveValue = useResponsiveValue();

const isMobile = responsiveValue({
  mobile: true,
  tablet: false,
});

const isDesktopOrAbove = responsiveValue({
  mobile: false,
  desktop: true,
});
```
