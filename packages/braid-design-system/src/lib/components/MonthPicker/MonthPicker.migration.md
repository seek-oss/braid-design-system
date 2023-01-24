# MonthPicker Migration Guide

## API Changes

- `native={boolean}` has been removed in favour of making this decision internally, so no need to explicitly set this.
- `onBlur` no longer recieves the value as a parameter.
- `onFocus` no longer recieves the native event as a parameter.
- `message={false}` is now `reserveMessageSpace={false}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/MonthPicker)

### Diff

```diff
-<MonthPicker native={boolean} />
+<MonthPicker />

-<MonthPicker message={false} />
+<MonthPicker reserveMessageSpace={false} />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/monthpicker)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/monthpicker)
