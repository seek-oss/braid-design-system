---
'braid-design-system': patch
---

Move `@types/react` to devDependencies

Braid requires consumers to provide React, therefore they should also provide the appropriate version of `@types/react` rather than rely on the version installed in Braid.
