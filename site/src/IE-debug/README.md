# IE debug setup

To create a basic site running braid components that will work in IE change the `sku.config.js` file as follows.

```diff
-clientEntry: './site/src/client.tsx',
+clientEntry: './site/src/IE-debug/client.tsx',
-renderEntry: './site/src/render.tsx',
+renderEntry: './site/src/IE-debug/render.tsx',
```
