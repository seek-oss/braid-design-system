---
'braid-design-system': patch
---

Use [`assert`](https://www.npmjs.com/package/assert) for runtime assertions during development

**Please ensure you are on sku v10.3.0 or higher so that these assertions are [removed in production.](https://seek-oss.github.io/sku/#/./docs/extra-features?id=assertion-removal)** This ensures that these checks don't have a negative performance impact on users.

The main driver for this change is to ensure that runtime design validation occurs within the [Braid Playroom.](https://seek-oss.github.io/braid-design-system/playroom)

Playroom is built in production mode to maximise performance, but this means that our custom development-time validation code isn't being executed. As a result, it's becoming increasingly common for prototypes to contain invalid code that only throws an error when transposed into a proper development environment. This change ensures that invalid designs are caught as early as possible.
