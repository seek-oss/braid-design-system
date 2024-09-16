---
'braid-design-system': patch
---

---
updated:
  - Stack
  - Tiles
---

**Stack, Tiles:** Deprecate `dividers` prop

In preparation for migrating Braid layout components to use [CSS gap], the `dividers` prop has been deprecated on `Stack` and `Tiles`.

Consumers are encouraged to migrate now in advance of its removal in v33.

#### Migration Guide

See [the migration guide] for details on how to migrate off the `dividers` prop.

[CSS gap]: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
[migration guide]: https://github.com/seek-oss/braid-design-system/blob/master/docs/Removing%20dividers%20support%20from%20layout%20components.md