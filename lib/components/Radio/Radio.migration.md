# Radio Migration Guide

## API Changes

- No longer accepts a `message` prop, since radio buttons can't be used in isolation.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Radio)

## TBD

- `type="button"`

### Diff

```diff
-<Radio data-automation="..." />
+<Radio data={{ automation: '...' }} />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/radio)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/radio)
