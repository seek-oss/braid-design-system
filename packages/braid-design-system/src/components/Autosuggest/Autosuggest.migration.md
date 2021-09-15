# Autosuggest Migration Guide

## API Changes

- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Autosuggest)
- The `value` prop and `suggestions` items are now represented as objects with a mandatory `text` property, e.g. `{ text: 'Apples' }`. You can optionally provide an associated value of whatever type you like, e.g. `{ text: 'Apples', value: { id: 123, categoryId: 456 } }`. As a result, `getSuggestionValue` is now deprecated.
- No longer accepts arbitrary renderers, e.g. `renderSuggestion`. Previously this was used for highlighting of suggestions, which is now handled by the `highlights` property on each `suggestion` object, e.g. `{ text: 'Apples', value: 123, highlights: [{ start: 0, end: 3 }] }`. If you had custom suggestion behaviour that is no longer supported, let us know in the `#braid-support` channel.
- `onSuggestionsFetchRequested` has been deprecated. Instead, use the `onChange` and `onFocus` events.
- `onSuggestionsClearRequested` has been deprecated. It's up to your application to decide if and when suggestions are cleared.

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/autosuggest)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/autosuggest)
