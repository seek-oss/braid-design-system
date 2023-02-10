---
'braid-design-system': major
---

Remove experimental color-mode check script

**MIGRATION GUIDE:**

The experimental script for checking which color mode to render has been formalised to an entry point specific to the mechanism that is being used — in this case the query parameter.

In the future we may add other mechanisms, such as local storage for example, but for now all existing consumers should have been migrated to the query-param check.

```diff
- import { __experimentalDarkMode__ } from 'braid-design-system/color-mode'
+ import { colorModeQueryParamCheck } from 'braid-design-system/color-mode/query-param'
```
