---
'braid-design-system': major
---

Remove `BraidLoadableProvider`

As most Apps should run the `apac` theme across all brands, it no longer makes sense to centralise a loadable version of the `BraidProvider`. This should simplify builds across the board and may result in a small build-speed increase.

**MIGRATION GUIDE**

If you are only using a single theme, then you should migrate your `BraidLoadableProvider` usage to `BraidProvider`.

```diff
+import apac from 'braid-design-system/themes/apac';
+import { BraidProvider } from 'braid-design-system';
-import { BraidLoadableProvider } from 'braid-design-system';

export const App = () => (
-    <BraidLoadableProvider themeName="apac">
+    <BraidProvider theme={apac}>
    ...
-    </BraidLoadableProvider>
+    </BraidProvider>
);
```

If your app still needs to render different themes then you can replicate the `BraidLoadableProvider` functionality locally using the `loadable.lib` API.

```tsx
import { BraidProvider } from 'braid-design-system';
import React, { ReactNode } from 'react';
import loadable from 'sku/@loadable/component';

type ThemeName = 'apac' | 'catho';

const BraidTheme = loadable.lib(
  (props: { themeName: ThemeName }) =>
    import(`braid-design-system/themes/${props.themeName}`),
);

interface AppProps {
  themeName: ThemeName;
  children: ReactNode;
}
export const App = ({ themeName, children }: AppProps) => (
  <BraidTheme themeName={themeName}>
    {({ default: theme }) => (
      <BraidProvider theme={theme}>
        {children}
      </BraidProvider>
    )}
  </BraidTheme>
);
```
