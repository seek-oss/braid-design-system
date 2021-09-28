---
'braid-design-system': major
---

Remove previously deprecated `TextLinkRenderer` component in favour of [`TextLink`](https://seek-oss.github.io/braid-design-system/components/TextLink) and [`TextLinkButton`](https://seek-oss.github.io/braid-design-system/components/TextLinkButton).

**MIGRATION GUIDE**

If you were using this to render a `button` element that visually looks like a link, you should be using [`TextLinkButton`](https://seek-oss.github.io/braid-design-system/components/TextLinkButton)

```diff
<Text>
-  <TextLinkRenderer reset={false}>
-    {(textLinkProps) => (
-      <Box component="button" {...textLinkProps}>
-        Visually a link
-      </Box>
-    )}
-  </TextLinkRenderer>
+  <TextLinkButton>
+    Visually a link
+  </TextLinkButton>
  , rendered as a button.
</Text>
```

If you were using this to render an `a` element or using a client side router link component you should ensure you have configured the [`linkComponent on BraidProvider`](https://seek-oss.github.io/braid-design-system/components/BraidProvider#providing-a-custom-link-component) in your app. Once handled, migrating to [`TextLink`](https://seek-oss.github.io/braid-design-system/components/TextLink) should be straight forward.

```diff
<Text>
-  <TextLinkRenderer reset={false}>
-    {(textLinkProps) => (
-      <Link {...textLinkProps}>
-        ...
-      </Link>
-    )}
-  </TextLinkRenderer>
+  <TextLink>
+    ...
+  </TextLink>
</Text>
```
