# TextField Migration Guide

## API Changes

- `message={false}` is now `reserveMessageSpace={false}`.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/TextField)

## TBD

- `compact={boolean}`
- `mask={Array<string | RegExp>}`

### Diff

```diff
-<TextField message={false} />
+<TextField reserveMessageSpace={false} />

-<TextField data-automation="..." />
+<TextField data={{ automation: '...' }} />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/textfield)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/textfield)
