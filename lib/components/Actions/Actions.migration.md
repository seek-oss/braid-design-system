# Actions Migration Guide

## API Changes

- Renamed from `ButtonGroup` to `Actions`.
- Accepts `TextLink` components as children, not just `Button` components.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Actions)

## SEEK Style Guide

### Before

```jsx
<ButtonGroup>
  <Button color="pink">Create a Profile</Button>
  <Button color="transparent">Cancel</Button>
</ButtonGroup>
```

### After

```jsx
<Actions>
  <Button weight="strong">Create a Profile</Button>
  <TextLink href="...">Cancel</TextLink>
</Actions>
```

## SEEK Asia Style Guide

### Before

```jsx
<ButtonGroup>
  <Button color="callToAction">Create a Profile</Button>
  <Button color="hyperlink">Cancel</Button>
</ButtonGroup>
```

### After

```jsx
<Actions>
  <Button weight="strong">Create a Profile</Button>
  <TextLink href="...">Cancel</TextLink>
</Actions>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/button-group)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/button-group)
