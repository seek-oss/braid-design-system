---
'braid-design-system': minor
---

Inline: Add `collapseBelow` and `reverse` props.

Similar to [Columns](https://seek-oss.github.io/braid-design-system/components/Columns), you can now responsively collapse an `Inline` into a vertical stack on mobile with the `collapseBelow` prop.

For example, if you want items to stack vertically below tablet:

```js
<Inline space="small" collapseBelow="tablet">
  ...
</Inline>
```

Also similar to `Columns`, you can now reverse the order of items horizontally. This is particularly useful when combined with `align="right"`.

For example, if you're rendering buttons and you want your primary action on the right on desktop, but at the top on mobile:

```js
<Inline space="small" collapseBelow="tablet" align="right" reverse>
  <Button>Primary action</Button>
  <Button weight="weak">Secondary action</Button>
</Inline>
```
