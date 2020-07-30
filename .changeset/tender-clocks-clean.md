---
'braid-design-system': minor
---

Add useBreakpoint

`useBreakpoint` will return the breakpoint the browser viewport currently falls within (mobile, tablet or desktop). As this can only be calculated in the browser, the value may also be null. Window resizing is supported.

**Note:** Avoid use of this hook where possible. Responsive properties and media queries are a better option in most cases.
