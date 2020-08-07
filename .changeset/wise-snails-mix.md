---
'braid-design-system': minor
---

**TextLink, TextLinkButton, TextLinkRenderer:** Default `weight` prop to `"regular"` when nested inside secondary text

As of [v28.13.0](https://github.com/seek-oss/braid-design-system/releases/tag/braid-design-system%4028.13.0), `TextLink` components that were nested inside secondary text would be `"weak"` by default, i.e. the same tone as the surrounding text and underlined. In practice, this turned out to be somewhat unpredictable behaviour for consumers. We've now reverted this to the previous behaviour of being `"regular"` weight by default, i.e. blue and medium font weight.

Note that, if needed, you can still use the weaker link treatment within secondary text via an explicit prop override:

```jsx
<Text tone="secondary">
  The TextLink in this sentence is <TextLink href="..." weight="weak">weak.</TextLink>
</Text>
```
