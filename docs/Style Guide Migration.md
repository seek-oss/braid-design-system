# Style Guide Migration

This document provides guidance for consumers looking to migrate from an existing style guide to Braid.

If you have any questions or concerns, or if you need assistance with implementation or migration work, please reach out to us in the `#braid-support` channel.

## Technical Considerations

Before migrating, please be aware of the following:

- **Braid requires [sku](https://github.com/seek-oss/sku).** This is to ensure that consumers have the best possible experience as we continue to evolve our underlying platform.

- **Braid is written in TypeScript.** We highly recommend consumers also write their applications in TypeScript, or at least the parts of their application that interact with Braid.

## Architecture

Since Braid is an entirely new design system, we've taken the opportunity to revisit some of the cross-cutting architectural decisions that were made previously. The most notable changes being:

- **Component APIs have been revisited, rather than being straight ports.** Across the board, we've taken this as an opportunity to improve APIs with the benefit of hindsight. Whenever migrating a component to Braid, please make sure you reference Braid's [API documentation](https://seek-oss.github.io/braid-design-system/components).

- **Components don't allow style overrides via `className` and `style` props.** This is to ensure that gaps in the design system are surfaced, rather than encouraging consumers to constantly apply workarounds.

- **Components don't spread props onto DOM elements.** We want to ensure that the API for each component is carefully designed, rather than exposing the entire API of the underlying DOM nodes. If there is a gap in a component API, let us know in the `#braid-support` channel.

- **Braid is built from the ground up on primitive components.** Our lowest level primitive is [Box](https://seek-oss.github.io/braid-design-system/components/Box), which we've exposed to consumers. In a lot of cases, you'll find that you can use `Box` instead of writing custom CSS. However, since it's a primitive, you shouldn't have to constantly reach for `Box`. If this is the case, you should let Braid maintainers know in the `#braid-support` channel so that we can deal with the underlying design issue.

- **Braid doesn't provide a global CSS reset.** All style resets are applied locally via the [Box](https://seek-oss.github.io/braid-design-system/components/Box) component mentioned above based on its `component` prop, e.g. `<Box component="h1">` will provide the appropriate reset for an `h1` element. When migrating from SEEK Style Guide, you'll need to ensure that you're leveraging Box for all custom low-level elements.

- **Braid uses [vanilla-extract](https://vanilla-extract.style/) for styling rather than Less.** This lets us author themed styles in TypeScript without incurring a penalty to both bundle size and runtime performance. Theme values are now provided via CSS variables rather than Less variables.

- **`Text` no longer renders white space below it.** In our existing style guides, the additional white space below `Text` components turned out to be a problem for consumers in many cases, forcing them to use the confusingly named `raw` boolean prop to opt out. In Braid, we've decided to leave `Text` unopinionated about its surrounding white space. Instead, Braid provides a full suite of [layout components](https://seek-oss.github.io/braid-design-system/foundations/layout).

- **Braid no longer provides a Sketch library.** For more details, read our [design workflow guide.](https://seek-oss.github.io/braid-design-system/guides/design-workflow)

## Component Migration Guides

> Note: Links to these migration guides are also available at the bottom of each component page on the Braid documentation site.

- [`AccordionItem`](../lib/components/Accordion/Accordion.migration.md)
- [`Alert`](../lib/components/Alert/Alert.migration.md)
- `Alert` (tertiary) -> [`Notice`](../lib/components/Alert/Alert.migration.md)
- `AsidedLayout` -> [`Columns`](../lib/components/Columns/Columns.migration.md#migrating-from-asidedlayout)
- [`Autosuggest`](../lib/components/Autosuggest/Autosuggest.migration.md)
- [`Badge`](../lib/components/Badge/Badge.migration.md)
- `BulletList` / `Bullet`-> [`List`](../lib/components/List/List.migration.md)
- [`Button`](../lib/components/Button/Button.migration.md)
- `ButtonGroup` -> [`Actions`](../lib/components/Actions/Actions.migration.md)
- [`Card`](../lib/components/Card/Card.migration.md)
- [`Checkbox`](../lib/components/Checkbox/Checkbox.migration.md)
- [`Columns`](../lib/components/Columns/Columns.migration.md)
- [`Dropdown`](../lib/components/Dropdown/Dropdown.migration.md)
- [`FieldLabel`](../lib/components/FieldLabel/FieldLabel.migration.md)
- [`FieldMessage`](../lib/components/FieldMessage/FieldMessage.migration.md)
- [Icons](../lib/components/icons/Icon/Icon.migration.md)
- [`MonthPicker`](../lib/components/MonthPicker/MonthPicker.migration.md)
- `PageBlock` -> [`ContentBlock`](../lib/components/ContentBlock/ContentBlock.migration.md)
- `Paragraph` -> [`Text`](../lib/components/Text/Text.migration.md)
- `Pill` -> [`Tag`](../lib/components/Tag/Tag.migration.md)
- [`Radio`](../lib/components/Radio/Radio.migration.md)
- `ScreenReaderOnly` -> [`HiddenVisually`](../lib/components/HiddenVisually/HiddenVisually.migration.md)
- [`Secondary`](../lib/components/Secondary/Secondary.migration.md)
- `SlideToggle` -> [`Toggle`](../lib/components/Toggle/Toggle.migration.md)
- `StyleGuideProvider` -> [`BraidProvider`](../lib/components/BraidProvider/BraidProvider.migration.md)
- [`Strong`](../lib/components/Strong/Strong.migration.md)
- [`Text`](../lib/components/Text/Text.migration.md)
- `Text` (Headings) -> [`Heading`](../lib/components/Heading/Heading.migration.md)
- [`Textarea`](../lib/components/Textarea/Textarea.migration.md)
- [`TextField`](../lib/components/TextField/TextField.migration.md)
- [`TextLink`](../lib/components/TextLink/TextLink.migration.md)
- `ToggleContent` -> [`Disclosure`](../lib/components/Disclosure/Disclosure.migration.md)
