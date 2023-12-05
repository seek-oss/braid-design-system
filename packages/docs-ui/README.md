<img src="https://raw.githubusercontent.com/seek-oss/braid-design-system/HEAD/packages/docs-ui/images/braid-docs-ui-logo.svg#gh-light-mode-only" alt="Braid Docs UI" title="Braid Docs UI" width="80px">
<img src="https://raw.githubusercontent.com/seek-oss/braid-design-system/HEAD/packages/docs-ui/images/braid-docs-ui-logo-inverted.svg#gh-dark-mode-only" alt="Braid Docs UI" title="Braid Docs UI" width="80px" />

# docs-ui

Components for building documentation sites with a consistent user experience to the [Braid Design System] website.

```bash
npm install @braid-design-system/docs-ui
```

- [LinkableHeading](#linkableheading)

## Usage

### `LinkableHeading`

A heading wrapped in a link to a hash that is generated based on the heading content, enabling deep links within documentation pages.

#### Example

```tsx
import { LinkableHeading } from '@braid-design-system/docs-ui';

<LinkableHeading>Section heading</LinkableHeading>;
```

#### Props

| props     | value            | description                                                                                                                                                               |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| level     | [`HeadingLevel`] | The heading size (defaults to `3`)                                                                                                                                        |
| component | `string`         | HTML element to render, e.g. &ldquo;h1&rdquo;, &ldquo;h2&rdquo;, etc.                                                                                                     |
| children  | `string`         | Visible heading content, converted to slug (e.g. &ldquo;section-heading&rdquo;) to be used as hash link.                                                                  |
| label     | `string`         | Override the slug used as the hash link.<br/><br/>_Note: If the content of the heading is more than a simple string that can be slugified, then the `label` is required._ |

[`HeadingLevel`]: https://seek-oss.github.io/braid-design-system/components/Heading
[Braid Design System]: https://seek-oss.github.io/braid-design-system/
