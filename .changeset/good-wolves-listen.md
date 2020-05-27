---
'braid-design-system': major
---

**Alert, Notice:** Support rich content

**BREAKING CHANGE**

Since `Alert` and `Notice` no longer render a `Text` component for you, you'll need to ensure that you're providing an enclosing `Text` element as a direct child.

Alert:

```diff
<Alert tone="positive">
-  Success!
+  <Text>Success!</Text>
</Alert>
```

Notice:

```diff
<Notice tone="positive">
-  Success!
+  <Text>Success!</Text>
</Notice>

```

**WHY?**

The [Alert](https://seek-oss.github.io/braid-design-system/components/Alert) and [Notice](https://seek-oss.github.io/braid-design-system/components/Notice) components were originally designed to render a single paragraph of text, but in practice we've found that there's a lot of demand for richer content, e.g. multiple paragraphs, bullet lists, etc.

In order to support this level of flexibility, `Alert` and `Notice` no longer render an enclosing `Text` component for you. While this means you'll need a bit more boilerplate in simple cases, it also means you now have much more fine-grained control over the layout.

For example, if you wanted to render an `Alert` using both `Text` and `BulletList` with `"medium"` space between them:

```jsx
<Alert tone="positive">
  <Stack space="medium">
    <Text>The quick brown fox jumps over the lazy dog.</Text>
    <BulletList space="small">
      <Bullet>Bullet 1</Bullet>
      <Bullet>Bullet 2</Bullet>
    </BulletList>
  </Stack>
</Alert>
```

This same pattern applies to `Notice`:

```jsx
<Notice tone="positive">
  <Stack space="medium">
    <Text>The quick brown fox jumps over the lazy dog.</Text>
    <BulletList space="small">
      <Bullet>Bullet 1</Bullet>
      <Bullet>Bullet 2</Bullet>
    </BulletList>
  </Stack>
</Notice>
```
