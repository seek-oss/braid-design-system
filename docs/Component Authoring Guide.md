# Component Authoring Guide

This document provides guidance for consumers on how to author components that best leverage Braid.

- [Braid Principles](#braid-principles)
- [Working with components](#working-with-components)
  - [High level components](#high-level-components)
  - [Layout components](#layout-components)
  - [Need a custom component?](#need-a-custom-component)
  - [Need responsive styles?](#need-responsive-styles)
  - [Need semantic markup?](#need-semantic-markup)
  - [Still need custom CSS?](#still-need-custom-css)
- [Support](#support)

## Braid Principles

Braid is built on top of an atomic CSS architecture, which can also be referred to as utility classes. If you are not familiar with this approach, we recommend reading [Let’s Define Exactly What Atomic CSS is](https://css-tricks.com/lets-define-exactly-atomic-css/), which defines atomic CSS as:

> "...the approach to CSS architecture that favors small, single-purpose classes with names based on visual function."

One of the key benefits of this approach is that, given that many of the rules can be computed based on the underlying design tokens, there's lots of room for re-use. This also allows us to significantly reduce the size of the final CSS bundle.

In addition, we have opted against components supporting style overrides via `className` and `style` props. This ensures that gaps in the design system are surfaced, rather than encouraging consumers to constantly apply workarounds.

## Working with components

Braid provides consumers with a suite of components that are powered by an underlying themed styling system. The idealistic goal is that consumers should be able to build their experiences entirely from Braid components—using only the prop interfaces they expose. If done correctly, our products should be expressed exclusively with the design system language, which inherently means that they can be adapted to any theme that Braid supports.

### High level components

Braid's high level components are most likely the ones you would come to expect from a design system, e.g. `Text`, `Heading`, `Card`, `Button`, `TextField`, etc.

An example of composing a simple view leveraging some of these could be:

```jsx
<Card>
  <Heading level="4">Title</Heading>
  <Text>My first Braid component</Text>
  <Button>Click me</Button>
</Card>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENhcmQ-CiAgPEhlYWRpbmcgbGV2ZWw9IjQiPlRpdGxlPC9IZWFkaW5nPgogIDxUZXh0Pk15IGZpcnN0IEJyYWlkIGNvbXBvbmVudDwvVGV4dD4KICA8QnV0dG9uPkNsaWNrIG1lPC9CdXR0b24-CjwvQ2FyZD4K)</sup>

You'll notice that each of these components don't provide any surrounding white space. This is where our layout components come in.

### Layout components

In order to distribute white space evenly between components, wrap sibling elements in a `Stack` component with a custom `space` property:

```diff
<Card>
+  <Stack space="small">
    <Heading level="4">Title</Heading>
    <Text>My first Braid component</Text>
    <Button>Click me</Button>
+  </Stack>
</Card>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENhcmQ-CiAgPFN0YWNrIHNwYWNlPSJzbWFsbCI-CiAgICA8SGVhZGluZyBsZXZlbD0iNCI-VGl0bGU8L0hlYWRpbmc-CiAgICA8VGV4dD5NeSBmaXJzdCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CiAgICA8QnV0dG9uPkNsaWNrIG1lPC9CdXR0b24-CiAgPC9TdGFjaz4KPC9DYXJkPgo)</sup>

The `space` property is a responsive prop, which means that it can also accept an array of values representing each breakpoint. For example:

```diff
<Card>
+  <Stack space={['small', 'medium']}>
    <Heading level="4">Title</Heading>
    <Text>My first Braid component</Text>
    <Button>Click me</Button>
+  </Stack>
</Card>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENhcmQ-CiAgPFN0YWNrIHNwYWNlPXtbInNtYWxsIiwgIm1lZGl1bSJdfT4KICAgIDxIZWFkaW5nIGxldmVsPSI0Ij5UaXRsZTwvSGVhZGluZz4KICAgIDxUZXh0Pk15IGZpcnN0IEJyYWlkIGNvbXBvbmVudDwvVGV4dD4KICAgIDxCdXR0b24-Q2xpY2sgbWU8L0J1dHRvbj4KICA8L1N0YWNrPgo8L0NhcmQ-Cg)</sup>

For horizontal layouts, `Columns` provides various responsive rules for laying out content. For example, if you wanted to render a two-column layout that collapses to a single column on mobile:

```diff
+<Columns space="gutter" collapse>
+  <Column>
    <Card>
      <Stack space="small">
        <Heading level="4">Column 1</Heading>
        <Text>My first Braid component</Text>
      </Stack>
    </Card>
+  </Column>
+  <Column>
    <Card>
      <Stack space="small">
        <Heading level="4">Column 2</Heading>
        <Text>My second Braid component</Text>
      </Stack>
    </Card>
+  </Column>
+</Columns>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENvbHVtbnMgc3BhY2U9Imd1dHRlciIgY29sbGFwc2U-CiAgPENvbHVtbj4KICAgIDxDYXJkPgogICAgICA8U3RhY2sgc3BhY2U9InNtYWxsIj4KICAgICAgICA8SGVhZGluZyBsZXZlbD0iNCI-Q29sdW1uIDE8L0hlYWRpbmc-CiAgICAgICAgPFRleHQ-TXkgZmlyc3QgQnJhaWQgY29tcG9uZW50PC9UZXh0PgogICAgICA8L1N0YWNrPgogICAgPC9DYXJkPgogIDwvQ29sdW1uPgogIDxDb2x1bW4-CiAgICA8Q2FyZD4KICAgICAgPFN0YWNrIHNwYWNlPSJzbWFsbCI-CiAgICAgICAgPEhlYWRpbmcgbGV2ZWw9IjQiPkNvbHVtbiAyPC9IZWFkaW5nPgogICAgICAgIDxUZXh0Pk15IHNlY29uZCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CiAgICAgIDwvU3RhY2s-CiAgICA8L0NhcmQ-CiAgPC9Db2x1bW4-CjwvQ29sdW1ucz4K)</sup>

This `space` property is also responsive, supporting an array of values for each breakpoint. For example:

```diff
+<Columns space={['xxsmall', 'gutter']} collapse>
+  <Column>
    <Card>
      <Stack space="small">
        <Heading level="4">Column 1</Heading>
        <Text>My first Braid component</Text>
      </Stack>
    </Card>
+  </Column>
+  <Column>
    <Card>
      <Stack space="small">
        <Heading level="4">Column 2</Heading>
        <Text>My second Braid component</Text>
      </Stack>
    </Card>
+  </Column>
+</Columns>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENvbHVtbnMgc3BhY2U9e1sieHhzbWFsbCIsICJndXR0ZXIiXX0gY29sbGFwc2U-CiAgPENvbHVtbj4KICAgIDxDYXJkPgogICAgICA8U3RhY2sgc3BhY2U9InNtYWxsIj4KICAgICAgICA8SGVhZGluZyBsZXZlbD0iNCI-Q29sdW1uIDE8L0hlYWRpbmc-CiAgICAgICAgPFRleHQ-TXkgZmlyc3QgQnJhaWQgY29tcG9uZW50PC9UZXh0PgogICAgICA8L1N0YWNrPgogICAgPC9DYXJkPgogIDwvQ29sdW1uPgogIDxDb2x1bW4-CiAgICA8Q2FyZD4KICAgICAgPFN0YWNrIHNwYWNlPSJzbWFsbCI-CiAgICAgICAgPEhlYWRpbmcgbGV2ZWw9IjQiPkNvbHVtbiAyPC9IZWFkaW5nPgogICAgICAgIDxUZXh0Pk15IHNlY29uZCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CiAgICAgIDwvU3RhY2s-CiAgICA8L0NhcmQ-CiAgPC9Db2x1bW4-CjwvQ29sdW1ucz4K)</sup>

### Need a custom component?

If you're unable to satisfy a design using the built-in set of higher level components, Braid also provides consumers with the `Box` component. `Box` provides consumers with direct access to the themed atomic styles that Braid uses internally, without the overhead of having to create and import a separate style sheet. A nice side-effect of this approach is that your appliction will be reusing existing CSS rules rather than generating new ones, keeping your bundle size to a minimum.

The prop names for `Box` mostly mimic standard CSS properties, while their values are more semantic, allowing the corresponding CSS rules to be computed across themes.

```diff
+<Box background="brand" boxShadow="large" padding="large">
  <Text>My first Braid component</Text>
+</Box>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PEJveCBiYWNrZ3JvdW5kPSJicmFuZCIgYm94U2hhZG93PSJsYXJnZSIgcGFkZGluZz0ibGFyZ2UiPgogIDxUZXh0Pk15IGZpcnN0IEJyYWlkIGNvbXBvbmVudDwvVGV4dD4KPC9Cb3g-Cg)</sup>

You can explore the complete API for `Box` on the [documentation site](https://seek-oss.github.io/braid-design-system/components/Box). For TypeScript users, you should also find that the `Box` API is available for autocompletion and type checking within your editor.

### Need responsive styles?

Previously, one of the main reasons for needing to create custom CSS was to define responsive rules. `Box` makes this possible at the component level via _responsive properties_, which are provided as an array of values—one per defined breakpoint, where the first item is the mobile value, followed by the desktop value.

For example, if we wanted to change the `display` responsively:

```diff
-<Box display="flex">
+<Box display={["flex", "block"]}>
  <Heading level="2">Flex on small screen</Heading>
  <Heading level="2">Block on large screen</Heading>
</Box>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PEJveCBkaXNwbGF5PXtbImZsZXgiLCAiYmxvY2siXX0-CiAgPEhlYWRpbmcgbGV2ZWw9IjIiPkZsZXggb24gc21hbGwgc2NyZWVuPC9IZWFkaW5nPgogIDxIZWFkaW5nIGxldmVsPSIyIj5CbG9jayBvbiBsYXJnZSBzY3JlZW48L0hlYWRpbmc-CjwvQm94Pgo)</sup>

For a list of available `ResponsiveProp`s, check out the [`Box` documentation](https://seek-oss.github.io/braid-design-system/components/Box).

### Need semantic markup?

A key difference with Braid is that it doesn't use a standard global CSS reset. Instead, element styles are reset at the component level via `Box` and its `component` prop.

For example, in order to render a semantic `fieldset` element without the native browser styles:

```diff
-<fieldset>
+<Box component="fieldset">
  <legend>Reset Fieldset:</legend>
  <input type="text" />
-</fieldset>
+</Box>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PGZpZWxkc2V0PgogIDxsZWdlbmQ-TmF0aXZlIEZpZWxkc2V0OjwvbGVnZW5kPgogIDxpbnB1dCB0eXBlPSJ0ZXh0IiAvPgo8L2ZpZWxkc2V0Pgo8Qm94IGNvbXBvbmVudD0iZmllbGRzZXQiPgogIDxsZWdlbmQ-UmVzZXQgRmllbGRzZXQ6PC9sZWdlbmQ-CiAgPGlucHV0IHR5cGU9InRleHQiIC8-CjwvQm94Pg)</sup>

### Still need custom CSS?

Braid is built on top of [treat](https://seek-oss.github.io/treat) (imported via `sku/treat`), which satisfies our requirements for themeable, statically extracted CSS. Custom styles on top of Braid should use treat in order to gain access to the underlying theme variables.

**Before writing a treat file, we highly recommend that you read the [treat documentation](https://seek-oss.github.io/treat).**

While higher level Braid components don't support custom style overrides (e.g. `className` and `style`), `Box` is the one exception. However, you should take care to ensure that custom classes on `Box` only use styles that are not available via its prop interface.

For example, if you wanted to render an element as `display: flex`, but with a custom, responsive `flex-basis` value:

```js
// myComponent.treat.ts
import { style } from 'sku/treat';

export const root = style(theme => ({
  flexBasis: theme.grid * 3,

  ...theme.utils.desktopStyles({
    flexBasis: theme.grid * 5,
  }),
}));
```

Because treat files are written in TypeScript, the `theme` object will be available for autocompletion and type checking within your editor.

```jsx
// myComponent.ts
import { useStyles } from 'sku/react-treat';
import * as styleRefs from './myComponent.treat.ts';

export default () => {
  const styles = useStyles(styleRefs);

  return (
    <Box display="flex" className={styles.root}>
      <Text>My first Braid component</Text>
    </Box>
  );
};
```

## Support

As always, if at any point have questions or need further assistance, please send us a message in the [#braid-support Slack channel](https://seekchat.slack.com/channels/braid-support).
