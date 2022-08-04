# RadioGroup Migration Guide

A `RadioItem` must be wrapped inside of a `RadioGroup`. As part of the migration, you should be hoisting the controlled state it's handling to [RadioGroup.](https://seek-oss.github.io/braid-design-system/components/RadioGroup).

## API Changes

- The controlled state is handled by the parent `RadioGroup`, as a result `RadioItem` no longer accepts:
  - `checked` (now computed based on `value`)
  - `onChange` (change is managed at group/fieldset level)
  - `name` (name is handled at group/fieldset level)
  - `message` (since radio buttons can't be used in isolation)
  - `tone` (tone is handled at group/fieldset level)
  - `disabled` (disabled is handled at group/fieldset level)
- `value` is now required, as it's used to resolve the checked state within the group.
- Data attributes must now be passed via the `data` prop, e.g. `data={{ automation: 'test-id' }}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/RadioItem)

### Diff

```diff
- <Radio name="count" label="One" value="1" onChange={...} />
- <Radio name="count" label="Two" value="2" onChange={...} checked />
- <Radio name="count" label="Three" value="3" onChange={...}  />
+ <RadioGroup id="count" value="2" onChange={...}>
+   <RadioItem label="One" value="1" />
+   <RadioItem label="Two" value="2" />
+   <RadioItem label="Three" value="3" />
+ </RadioGroup>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/radio)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/radio)
