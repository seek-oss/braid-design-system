# FieldMessage Migration Guide

## API Changes

- `message={false}` is now `reserveMessageSpace={false}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/FieldMessage)

### Before

```jsx
<FieldMessage message={false} />
```

### After

```jsx
<FieldMessage reserveMessageSpace={false} />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/field-message)
