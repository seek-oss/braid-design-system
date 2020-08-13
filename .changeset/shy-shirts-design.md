---
'braid-design-system': minor
---

---
updated:
  - BraidProvider
  - BraidTestProvider
  - Link
---

Support ref forwarding on [Link](https://seek-oss.github.io/braid-design-system/components/Link)

Forwarding refs is necessary for certain accessibility patterns, but the `Link` component wasn't doing this correctly.

Please note that, if you're passing a custom `linkComponent` implementation to [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider), you'll need to ensure that you're using the new `makeLinkComponent` helper function to forward refs, otherwise any attempt to pass a ref to `Link` will throw an error.

**MIGRATION GUIDE**

```diff
-import { BraidProvider, LinkComponent } from 'braid-design-system';
+import { BraidProvider, makeLinkComponent } from 'braid-design-system';

-const CustomLink: LinkComponent = ({ href, ...restProps }) =>
+const CustomLink = makeLinkComponent({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
-    <ReactRouterLink to={href} {...restProps} />
+    <ReactRouterLink to={href} {...restProps} ref={ref} />
  ) : (
-    <a href={href} {...restProps} />
+    <a href={href} {...restProps} ref={ref} />
  );

export const App = () => (
  <BraidProvider linkComponent={CustomLink} {...rest}>
    ...
  </BraidProvider>
);
```
