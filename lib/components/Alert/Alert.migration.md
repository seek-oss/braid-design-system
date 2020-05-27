# Alert Migration Guide

## API Changes

- The `message` prop has been removed in favour of passing `children`.
- Child content is no longer assumed to be a string. In order to support rich content, text wihin `Alert`/`Notice` must be nested within a `Text` component.
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
+  <Text>
+   Successfully completed
+  </Text>
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
+  <Text>
+    Successfully completed
+  </Text>
+</Notice>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/alert)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/alert)
