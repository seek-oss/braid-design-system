---
'braid-design-system': major
---

Drop support for React 17.x

To enable Braid to leverage newer React APIs, we are no longer providing support for React v17.x.
React 18 was released in March 2022 and consumers were encouraged to upgrade to this as part of the Braid v32 release in Feb 2023 (which dropped React 16 support).

Removing support for React 17 allows us to simplify and streamline a lot of our component APIs, which will have downstream improvements on consumer codebases.

### MIGRATION GUIDE:
Consumers still on v17 should follow the [How to Upgrade to React 18 guide].

For [sku] consumers who upgraded to Braid v32 and added the "`jsx-runtime` workaround for ESM incompatibility", this can now be safely removed this from their webpack configuration once updated to React 18:

```diff
// sku.config.ts
{
  dangerouslySetWebpackConfig: (config) =>
    webpackMerge(config, {
-      resolve: {
-        fallback: {
-          'react/jsx-runtime': require.resolve('react/jsx-runtime'),
-        },
-      },
    }),
}
```

[sku]: https://seek-oss.github.io/sku/
[How to Upgrade to React 18 guide]: https://react.dev/blog/2022/03/08/react-18-upgrade-guide
[migration guide]: https://seek-oss.github.io/braid-design-system/releases#32.0.0
