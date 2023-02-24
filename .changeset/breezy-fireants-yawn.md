---
'braid-design-system': major
---

Drop support for React 16.

To support the pre-compilation of Braid, it is now a requirement that consumers are on React 17 or later.
Originally the plan was to drop React 17 as well, however the team has been able to maintain support for a little longer — but there is a catch (see migration guide below).

**MIGRATION GUIDE:**
### React 16 consumers
As this version is no longer supported it is a requirement that consumers upgrade.
For more information on the differences between v16 and v17, [see the React blog][react17].
We strongly encourage teams to take this opportunity to upgrade to [v18][react18] as well.

### React 17 consumers
The way React 17 exposes the `jsx-runtime` is [not compatible with ESM], which means the bundler will need instructions on how to resolve the import.
This can be done by adding a [fallback module resolve rule][resolve fallback] to the webpack configuration.

For [sku] consumers, this can be done as follows:

```ts
// sku.config.ts
{
  dangerouslySetWebpackConfig: (config) =>
    webpackMerge(config, {
      resolve: {
        fallback: {
          'react/jsx-runtime': require.resolve('react/jsx-runtime'),
        },
      },
    }),
}
```
We recommend using [webpack-merge] to ensure both configurations are deep merged correctly.

*Note: This rule can be removed after upgrading to React 18, which has ESM support.*

### React 18 consumers
No action required.

[react17]: https://reactjs.org/blog/2020/10/20/react-v17.html
[react18]: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
[resolve fallback]: https://webpack.js.org/configuration/resolve/#resolvefallback
[not compatible with ESM]: https://github.com/facebook/react/issues/20235#issuecomment-1095345193
[webpack-merge]: https://www.npmjs.com/package/webpack-merge
[sku]: https://seek-oss.github.io/sku/
