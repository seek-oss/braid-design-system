---
'@braid-design-system/source.macro': patch
---

Preserve new lines in the output code

Before:
```ts
const responsiveValue = useResponsiveValue()
const isMobile = responsiveValue({
  mobile: true,
  tablet: false,
})
const isDesktopOrAbove = responsiveValue({
  mobile: false,
  desktop: true,
})
```

After:
```ts
const responsiveValue = useResponsiveValue()

const isMobile = responsiveValue({
  mobile: true,
  tablet: false,
})

const isDesktopOrAbove = responsiveValue({
  mobile: false,
  desktop: true,
})
```
