# Alert Migration Guide

## API Changes

- The `message` prop has been removed in favour of passing `children`.
- `level={'primary' | 'secondary'}` have been deprecated in favour of a single visual weight. `level="tertiary"` has been replaced by the `Notice` component.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Alert)

## Todo List

- `hideIcon={true}`

## TBD

- `tone="help"`
- `pullout={boolean}`

## Diff

#### Primary/Secondary

```diff
 <Alert tone="positive"
-  level="primary"
-  message="Successfully completed"
-/>
+>
+  Successfully completed
+</Alert>
```

#### Tertiary

```diff
-<Alert
+<Notice
   tone="positive"
-  level="tertiary"
-  message="Successfully completed"
-/>
+>
+  Successfully completed
+</Notice>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/alert)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/alert)
