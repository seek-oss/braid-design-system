---
'braid-design-system': patch
---

Fix error reading \`standard\` of undefined

The use of dynamic property access left some styles exposed to being marked as unused and tree shaken away.

Refactoring these styles to be explicitly referenced to ensure this will not be the case.
