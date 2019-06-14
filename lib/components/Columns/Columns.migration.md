# Columns Migration Guide

## API Changes

- All child nodes must be wrapped in a [`Column`](https://seek-oss.github.io/braid-design-system/components/Column) component.
- Removed `flexible={boolean}`, since that was only needed for backwards compatibility.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Columns)

## TBD

- `reverse={boolean}`
- `tight={boolean}`

### Before

```jsx
<Columns>
  <Text>Content...</Text>
  <Text>Content...</Text>
  <Text>Content...</Text>
</Columns>
```

### After

```jsx
<Columns>
  <Column>
    <Text>Content...</Text>
  </Column>
  <Column>
    <Text>Content...</Text>
  </Column>
  <Column>
    <Text>Content...</Text>
  </Column>
</Columns>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/columns)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/columns)
