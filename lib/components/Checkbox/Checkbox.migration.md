# Checkbox Migration Guide

## API Changes

- `message={false}` is now `reserveMessageSpace={false}`.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Checkbox)

## TBD

- `type="button"`

### Diff

```diff
-<Checkbox message={false} />
+<Checkbox reserveMessageSpace={false} />

-<Checkbox data-automation="..." />
+<Checkbox data={{ automation: '...' }} />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/checkbox)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/checkbox)
