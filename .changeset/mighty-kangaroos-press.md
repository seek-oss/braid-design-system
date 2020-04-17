---
'braid-design-system': minor
---

Columns: Add `align` prop

When collapsing columns into a vertical stack on smaller screens, you can now control the alignment.

For example, if you want your column content to be horizontally centred on mobile:

```js
<Columns space="small" collapseBelow="tablet" align="center">
  <Column>...<Column>
  <Column>...<Column>
  <Column>...<Column>
</Columns>
```

As a side effect, this also means that you can control the alignment of columns when the total width doesn't reach 100%.

For example:

```js
<Columns space="small" align="center">
  <Column width="1/3">...<Column>
  <Column width="1/3">...<Column>
</Columns>
```
