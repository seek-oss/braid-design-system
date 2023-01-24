# Card Migration Guide

## API Changes

- Cards now render their own internal white space, so a nested `Section` element is not required. If you need to adjust the white space, it's highly likely that it's not semantically a "card". If this causes issues, let us know in the `#braid-support` channel.
- Cards no longer render white space below them. If you need space between cards, consider using a [`Stack`](https://seek-oss.github.io/braid-design-system/components/Stack) component instead.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Card)

## TBD

- `transparent={boolean}`

### Before

```jsx
<Card>
  <Section>
    <Text>Content...</Text>
  </Section>
<Card>
<Card>
  <Section>
    <Text>Content...</Text>
  </Section>
<Card>
```

### After

```jsx
<Stack space="medium">
  <Card>
    <Text>Content...</Text>
  <Card>
  <Card>
    <Text>Content...</Text>
  <Card>
</Stack>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/card)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/card)
