# Dropdown Migration Guide

## API Changes

- The `options` attribute has been deprecated in favour of passing `<option>` and `<optgroup>` child nodes, like a regular `<select>` element.
- `message={false}` is now `reserveMessageSpace={false}`.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Dropdown)

## TBD

- `placeholderSelectable={boolean}`

### Diff

```diff
-<TextField message={false} />
+<TextField reserveMessageSpace={false} />

-<TextField data-automation="..." />
+<TextField data={{ automation: '...' }} />

-<Dropdown
-  options={[
-    {
-      label: 'Option 1',
-      value: '1',
-    }
-    {
-      label: 'Option 2',
-      value: '2',
-    }
-  ]}
-/>
+<Dropdown>
+  <option value="1">Option 1</option>
+  <option value="2">Option 2</option>
+</Dropdown>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/dropdown)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/dropdown)
