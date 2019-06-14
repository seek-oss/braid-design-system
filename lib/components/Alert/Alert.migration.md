# Alert Migration Guide

## API Changes

- The `message` prop has been removed in favour of passing `children`.
- `level={'primary' | 'secondary' | 'tertiary'}` has been deprecated in favour of `weight={'strong' | 'regular'}`. Note, there is currently no equivalent for `level="tertiary"`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Alert)

## Todo List

- `hideIcon={true}`
- `onClose={() => {...}}`

## TBD

- `tone="help"`
- `weight="weak"`
- `pullout={boolean}`

### Before

```jsx
<Alert tone="positive" level="primary" message="Successfully completed" />
```

### After

```jsx
<Alert tone="positive" weight="strong">
  Successfully completed
</Alert>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/alert)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/alert)
