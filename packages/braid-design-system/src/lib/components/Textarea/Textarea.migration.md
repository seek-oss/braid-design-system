# Textarea Migration Guide

## API Changes

- `message={false}` is now `reserveMessageSpace={false}`.
- `initialRows={number}`/`maxRows={number}` is now expressed as `lines={number}`/`lineLimit={number}` so that they can properly adapt to different themes.
- `countFeedback={(value: string) => ({ count: number, show: boolean })}` is now expressed as `characterLimit={number}`.
- Now supports `grow={boolean}` to allow auto-expansion while typing, so you may be able to delete some custom code.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- `invalidText` is now `highlightRanges`. No longer supports a string or single range, only arrays of ranges.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Textarea)

### Diff

```diff
-<Textarea message={false} />
+<Textarea reserveMessageSpace={false} />

-<Textarea data-automation="..." />
+<Textarea data={{ automation: '...' }} />

-<Textarea initialRows={...} />
+<Textarea lines={3} />

-<Textarea maxRows={...} />
+<Textarea lineLimit={10} />

-<Textarea countFeedback={() => { ... }} />
+<Textarea characterLimit={500} />

<Textarea
-  invalidText={{ start: 10, end: 20 }}
+  highlightRanges={[{ start: 10, end: 20 }]}
/>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/textarea)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/textarea)
