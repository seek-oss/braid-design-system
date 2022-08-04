# Heading Migration Guide

## API Changes

- Extracted from `Text` into a standalone component.
- Deprecated all existing size and weight variants in favour of `level={'1' | '2' | '3' | '4'}` and `weight={'regular' | 'weak'}`. Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.
- Now renders the appropriate `h1`/`h2`/`h3`/`h4` tag by default. Please be aware that this may change existing page semantics. This can be overridden with the `component` prop, e.g. `<Heading level="3" component="h2">`.
- Now renders additional white space underneath. As a result, it's likely that you'll be able to remove custom styling in your application that was adding this space manually.
- Removed `baseline={boolean}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Heading)

## TBD

- `tone={string}`

## Diff

```diff
-<h1>
-  <Text hero>Heading</Text>
-</h1>
+<Heading level="1">Heading</Heading>

-<h2>
-  <Text headline>Heading</Text>
-</h2>
+<Heading level="2">Heading</Heading>

-<h3>
-  <Text heading>Heading</Text>
-</h3>
+<Heading level="3">Heading</Heading>

-<h4>
-  <Text subheading>Heading</Text>
-</h4>
+<Heading level="4">Heading</Heading>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/text)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/text)
