---
'braid-design-system': minor
---

Add useBreakpoint

`useBreakpoint` will return the breakpoint the browser viewport currently falls within (mobile, tablet or desktop). As this can only be calculated in the browser, you must also handle an unknown value. Window resizing is supported.

**Note:** Avoid use of this hook where possible. Responsive properties and media queries are a better option in most cases.
