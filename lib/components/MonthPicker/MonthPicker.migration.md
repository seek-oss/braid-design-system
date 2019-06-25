# MonthPicker Migration Guide

## API Changes

- `native={boolean}` has been deprecated in favour of making this decision internally, so no need to explicitly set this.
- `onChange` and `onBlur` handlers now receive the native event as a second argument. The first parameter is still the custom `value` object.
- `message={false}` is now `reserveMessageSpace={false}`.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/MonthPicker)

### Diff

```diff
-<MonthPicker native={boolean} />
+<MonthPicker />

-<MonthPicker message={false} />
+<MonthPicker reserveMessageSpace={false} />

-<MonthPicker data-automation="..." />
+<MonthPicker data={{ automation: '...' }} />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/monthpicker)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/monthpicker)
