# Rating Migration Guide

## API Changes

- The text rating is now shown by default.
- No longer accepts `description`, instead it is recommended to use a layout component, such as `Inline`, to wrap a `Rating` and `Text` component. See migration below.
- No longer accepts custom styling of the stars, e.g. `starClassName`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Radio)

### Diff

#### Hiding the star rating

```diff
-<Rating rating={4} />
+<Rating rating={4} variant="starsOnly" />
```

#### Using with a description

```diff
-<Rating rating={4} description="overall rating" />
+<Inline space="xxsmall">
+  <Rating rating={4} />
+  <Text baseline={false}>overall rating</Text>
+</Inline>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/rating)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/rating)
