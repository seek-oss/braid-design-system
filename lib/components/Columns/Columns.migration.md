# Columns Migration Guide

## API Changes

- All child nodes must be wrapped in a [`Column`](https://seek-oss.github.io/braid-design-system/components/Column) component.
- `collapse={boolean}` allows columns to collapse into a stack on mobile. **This is `false` by default now**.
- `tight={boolean}` has been deprecated in favour of setting the `gutter` prop, e.g. `gutter="small"`.
- `reverse={boolean}` no longer reverses content on mobile when the content is stacked (i.e. when `collapse={true}`). The columns will be reversed on desktop, however the document flow on mobile and screen readers is still correct.
- Removed `flexible={boolean}`, since that was only needed for backwards compatibility.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Columns)

### Before

```jsx
<Columns>
  <Text>Content...</Text>
  <Text>Content...</Text>
  <Text>Content...</Text>
</Columns>
```

### After

```jsx
<Columns collapse>
  <Column>
    <Text>Content...</Text>
  </Column>
  <Column>
    <Text>Content...</Text>
  </Column>
  <Column>
    <Text>Content...</Text>
  </Column>
</Columns>
```

## Migrating from `AsidedLayout`

If the `size` being used previously was a percentage, migrating should be a matter of identifying the closest supported `width`, eg. `30%` may change to `1/3`.

### Before

```jsx
<AsidedLayout size="25%" renderAside={() => <CustomSideBar />}>
  <MainContent />
</AsidedLayout>
```

### After

```jsx
<Columns collapse>
  <Column>
    <MainContent />
  </Column>
  <Column width="1/4">
    <CustomSideBar />
  </Column>
</Columns>
```

If the `size` being used was a specific pixel value, you can set the `width` to `content` and then apply the fixed width to the content using a class.

### Before

```jsx
<AsidedLayout size="200px" renderAside={() => <CustomSideBar />}>
  <MainContent />
</AsidedLayout>
```

### After

```jsx
<Columns collapse>
  <Column>
    <MainContent />
  </Column>
  <Column width="content">
    <Box className={styles.width}>
      {/* Create a class that sets the width */}
      <CustomSideBar />
    </Box>
  </Column>
</Columns>
```

The default gutter width for columns is different to the `AsidedLayout` gutter width. If this is a problem, you can reinstate the old value with `gutter="large"`.

```
<Columns collapse gutter="large">
  <Column>
    <MainContent />
  </Column>
  <Column width="1/4">
    <CustomSideBar />
  </Column>
</Columns>
```

## Previous Implementations

`Columns`

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/columns)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/columns)

`AsidedLayout`

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/asided-layout)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/asided-layout)
