---
'braid-design-system': patch
---

Use [`assert`](https://www.npmjs.com/package/assert) for runtime assertions during development

Please upgrade to sku v10.3.0 or higher so that these assertions are [removed in production.](https://seek-oss.github.io/sku/#/./docs/extra-features?id=assertion-removal).

The main driver for this change is to ensure that runtime design validation occurs within the [Braid Playroom.](https://seek-oss.github.io/braid-design-system/playroom)
