---
'braid-design-system': patch
---

Move `@types/react` to devDependencies

Braid requires consumers to provide React, therefore they should also provide the appropriate version of `@types/react`, rather than whatever is installed in Braid.
