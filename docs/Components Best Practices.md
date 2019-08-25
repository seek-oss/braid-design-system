# Component Authoring Best Practices

This document provides guidance for consumers on how to author components to best leverage Braid.

- [Braid Principles](#braid-principles)
- [Working with components](#working-with-components)
  - [High level components](#high-level-components)
  - [Layout components](#layout-components)
  - [Need a custom component?](#need-a-custom-component)
  - [Need responsive styles?](#need-responsive-styles)
  - [Need semantic mark up?](#need-semantic-mark-up)
  - [Still need custom CSS?](#still-need-custom-css)
  - [Custom themed CSS](#custom-themed-css)
- [Support](#support)

## Braid Principles

Braid is built on top of an atomic CSS architecture, which can also be referred to as utility classes. If you are not familiar with this approach we recommend reading [Let’s Define Exactly What Atomic CSS is](https://css-tricks.com/lets-define-exactly-atomic-css/), which defines atomic CSS as:

> Atomic CSS is the approach to CSS architecture that favors small, single-purpose classes with names based on visual function.

One of the key benefits of this approach in a design system is that there's a lot of room for re-use, given that many of the rules can be computed based on the theme or centralised principles. This re-use allow us to significantly reduce the size of the generated CSS bundle.

In addition, we have opted against components supporting style overrides via `className` and `style` props. This ensures that gaps in the design system are surfaced, rather than encouraging consumers to constantly apply workarounds.

## Working with components

Braid provides consumers with a suite of components as well as a themed styling system. The idealistic goal is that a consumers can build their experiences entirely from Braid components—using only the prop interfaces they expose. The result is experiences that are expressed exclusively with the design system language that can be built for any brand.

### High level components

Braid high level components are most likely the ones you would come to expect from a design system, e.g. `Text`, `Heading`, `Card`, `Button`, `TextField`, etc.

An example of composing a simple view leveraging some of these could be:

```jsx
<Card>
  <Heading level="4">Title</Heading>
  <Paragraph>
    <Text>My first Braid component</Text>
  </Paragraph>
  <Button>Click me</Button>
</Card>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENhcmQ-CiAgPEhlYWRpbmcgbGV2ZWw9IjQiPlRpdGxlPC9IZWFkaW5nPgogIDxQYXJhZ3JhcGg-CiAgICA8VGV4dD5NeSBmaXJzdCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CiAgPC9QYXJhZ3JhcGg-CiAgPEJ1dHRvbj5DbGljayBtZTwvQnV0dG9uPgo8L0NhcmQ-Cg)</sup>

### Layout components

Ideally our experiences should be describable using layout components. Currently we have a limited set including `Actions` for laying out buttons, and `Columns` for the more general cases.

For example, the `Actions` component encapsulates responsive rules around laying out call to actions:

```diff
<Card>
  <Heading level="4">Title</Heading>
  <Paragraph>
    <Text>My first Braid component</Text>
  </Paragraph>
+  <Actions>
    <Button>Click me</Button>
    <TextLink href="#">Cancel</TextLink>
+  </Actions>
</Card>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENhcmQ-CiAgPEhlYWRpbmcgbGV2ZWw9IjQiPlRpdGxlPC9IZWFkaW5nPgogIDxQYXJhZ3JhcGg-CiAgICA8VGV4dD5NeSBmaXJzdCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CiAgPC9QYXJhZ3JhcGg-CiAgPEFjdGlvbnM-CiAgICA8QnV0dG9uPkNsaWNrIG1lPC9CdXR0b24-CiAgICA8VGV4dExpbmsgaHJlZj0iIyI-Q2FuY2VsPC9UZXh0TGluaz4KICA8L0FjdGlvbnM-CjwvQ2FyZD4K)</sup>

Another example is `Columns` which has various responsive rules around laying out page content. In the default case, it arranges columns side by side on large devices, collapsing into a single column on small screens:

```diff
+<Columns>
+  <Column>
    <Card>
      <Heading level="4">Title</Heading>
      <Text>My first Braid component</Text>
    </Card>
+  </Column>
+  <Column>
    <Heading level="4">Column 2</Heading>
    <Text>My second Braid component</Text>
+  </Column>
+</Columns>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PENvbHVtbnM-CiAgPENvbHVtbj4KICAgIDxDYXJkPgogICAgICA8SGVhZGluZyBsZXZlbD0iNCI-VGl0bGU8L0hlYWRpbmc-CiAgICAgIDxQYXJhZ3JhcGg-CiAgICAgICAgPFRleHQ-TXkgZmlyc3QgQnJhaWQgY29tcG9uZW50PC9UZXh0PgogICAgICA8L1BhcmFncmFwaD4KICAgICAgPEJ1dHRvbj5DbGljayBtZTwvQnV0dG9uPgogICAgPC9DYXJkPgogIDwvQ29sdW1uPgogIDxDb2x1bW4-CiAgICA8Q2FyZD4KICAgICAgPEhlYWRpbmcgbGV2ZWw9IjQiPkNvbHVtbiAyPC9IZWFkaW5nPgogICAgICA8VGV4dD5NeSBzZWNvbmQgQnJhaWQgY29tcG9uZW50PC9UZXh0PgogICAgPC9DYXJkPgogIDwvQ29sdW1uPgo8L0NvbHVtbnM-Cg)</sup>

### Need a custom component?

Appreciating the idealistic nature of this approach, Braid provides consumers with the `Box` component. `Box` provides consumers with direct access to the themed atomic styles, without the overhead of having to create and import a separate CSS or LESS file.

The benefit of this approach is consumers can share the same atoms as those used internally within Braid components—further reducing the duplication of CSS.

The props names for `Box` mostly mimics standard css properties, while their values are more semantic, allowing the true values to be computed across themes.

```diff
+<Box marginBottom="large">
  <Text>My first Braid component</Text>
+</Box>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PEJveCBtYXJnaW5Cb3R0b209ImxhcmdlIj4KICA8VGV4dD5NeSBmaXJzdCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CjwvQm94Pgo)</sup>

You can explore the complete api for `Box` on the [doc site](https://seek-oss.github.io/braid-design-system/components/Box).

### Need responsive styles?

One of the main reasons for needing to create a CSS rule previously was to define responsive rules. `Box` makes this possible by supporting responsive properties as an array of values—one per defined breakpoint.

These can be expressed as an array, where the first item is the mobile value, followed by the desktop value. For example, if we wanted to change the `display` responsively:

```diff
-<Box display="flex">
+<Box display={["flex", "block"]}>
  <Heading level="2">Flex on small screen</Heading>
  <Heading level="2">Block on large screen</Heading>
</Box>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=PEJveCBkaXNwbGF5PXtbImZsZXgiLCAiYmxvY2siXX0-CiAgPEhlYWRpbmcgbGV2ZWw9IjIiPkZsZXggb24gc21hbGwgc2NyZWVuPC9IZWFkaW5nPgogIDxIZWFkaW5nIGxldmVsPSIyIj5CbG9jayBvbiBsYXJnZSBzY3JlZW48L0hlYWRpbmc-CjwvQm94Pgo)</sup>

For a list of available `ResponsiveProp`s check out the [Box documentation](https://seek-oss.github.io/braid-design-system/components/Box).

### Need semantic mark up?

A key difference with Braid is the component level reset. Rather than resetting every tag globally, components only have their native styles reset when they are used through `Box`.

As an example, in order to leverage semantic HTML elements, e.g. `fieldset`, without the native browser styles interrupting, `Box` accepts a `component` prop:

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

Earlier we mentioned that Braid does not support custom style overrides (e.g. `className` and `style`), the exception to that is the `Box` component.

A custom class on `Box` should only be used where styles are required beyond the current api of atomic classes, and even then it's recommended you utilise the available props first to avoid generate duplicate CSS.

```diff
// css file
+.customStyles {
+  flex-basis: 100px;
+}

// component file
+<Box display="flex" className={styles.customStyles}>
  <Text>My first Braid component</Text>
</Box>
```

<sup>[Preview in Playroom &#08594;](https://seek-oss.github.io/braid-design-system/playroom/#?code=ey8qIERlbW9uc3RyYXRpbmcgY3VzdG9tIHN0eWxlcyB1c2luZyBhcyBgc3R5bGVgCiBiZWNhdXNlIGNhbm5vdCBjcmVhdGUgZHluYW1pY2FsbHkgY3JlYXRlIGFuZAogcmVmZXJlbmNlIGEgYGNsYXNzTmFtZWAgaW4gcGxheXJvb20uCiovfQo8Qm94IGRpc3BsYXk9ImZsZXgiIHN0eWxlPXt7IGZsZXhCYXNpczogIjEwMHB4IiB9fT4KICA8VGV4dD5NeSBmaXJzdCBCcmFpZCBjb21wb25lbnQ8L1RleHQ-CjwvQm94Pgo)</sup>

### Custom themed CSS

Braid is built on top of [`🍬 treat`](https://seek-oss.github.io/treat/), which satisfies Braid's requirements for themeable, statically extracted CSS.

```js
// myComponent.treat.ts
import { style } from 'sku/treat';

export const size = style(theme => ({
  flexBasis: theme.grid.column * 3;
}));
```

```jsx
// myComponent.ts
import { useStyles } from 'sku/react-treat';
import * as styleRefs from './myComponent.treat.ts';

export default () => {
  const styles = useStyles(styleRefs);

  return (
    <Box display="flex" className={styles.size}>
      <Text>My first Braid component</Text>
    </Box>
  );
};
```

## Support

As always, at any point should you require further assistance, or have any questions about what the best approach is, send us a message in slack [#braid-support](https://seekchat.slack.com/channels/braid-support).
