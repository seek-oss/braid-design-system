<img src="https://raw.githubusercontent.com/seek-oss/braid-design-system/HEAD/packages/docs-ui/images/braid-docs-ui-logo.svg#gh-light-mode-only" alt="Braid Docs UI" title="Braid Docs UI" width="80px">
<img src="https://raw.githubusercontent.com/seek-oss/braid-design-system/HEAD/packages/docs-ui/images/braid-docs-ui-logo-inverted.svg#gh-dark-mode-only" alt="Braid Docs UI" title="Braid Docs UI" width="80px" />

# docs-ui

Components for building documentation sites with a consistent user experience to the [Braid Design System] website.

```bash
npm install @braid-design-system/docs-ui
```

- [`LinkableHeading`](#linkableheading)
- [`MenuButton`](#menubutton)
- [`SideNavigationSection`](#sidenavigationsection)
- [`HeaderNavigation`](#headernavigation)

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

### `MenuButton`

A hamburger button used for showing and hiding the Navigation Sidebar on mobile devices.

#### Example

```tsx
import { MenuButton } from '@braid-design-system/docs-ui';

<MenuButton open={menuOpen} onClick={handleOnClick} />;
```

#### Props

| props   | value        | description                                                                                                   |
| ------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| open    | `boolean`    | The Menu can either be open or closed. If open, the button will change to a close icon (defaults to `false`). |
| onClick | `() => void` | A callback function to manage events when the button is triggered.                                            |

### `SideNavigationSection`

A navigation section containing a list of links, designed for the side bar.

```tsx
import { SideNavigationSection } from '@braid-design-system/docs-ui';

<SideNavigationSection title={title} items={items} />;
```

#### Props

| props     | value                                                                                                                                                                                                                                    | description                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| title     | `string`                                                                                                                                                                                                                                 | Title of the Navigation Section.                                        |
| hideTitle | `boolean`                                                                                                                                                                                                                                | Optional to visually hide the group title.                              |
| items     | Array<{<br/>&nbsp;&nbsp;name: `string`<br/>&nbsp;&nbsp;path: `string`<br/>&nbsp;&nbsp;badge?: `'New' \| 'Deprecated'`<br/>&nbsp;&nbsp;onClick?: `() => void`<br/>&nbsp;&nbsp;target?: `string`<br/>&nbsp;&nbsp;active?: `boolean`<br/>}> | An array of items in the sidebar, each linking to a specific docs page. |

[`HeadingLevel`]: https://seek-oss.github.io/braid-design-system/components/Heading
[Braid Design System]: https://seek-oss.github.io/braid-design-system/

### `HeaderNavigation`

Header Layout for the site logo, theme selector and `MenuButton`.

```tsx
import { HeaderNavigation } from '@braid-design-system/docs-ui';

<HeaderNavigation
  menuOpen={menuOpen}
  menuClick={handleMenuClick}
  logo={<Logo />}
  logoLabel="Braid Logo"
  themeToggle={<ThemeToggle />}
/>;
```

#### Props

| props       | value             | description                                                                                                   |
| ----------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| menuOpen    | `boolean`         | The Menu can either be open or closed. If open, the button will change to a close icon (defaults to `false`). |
| menuClick   | `() => void`      | An optional callback function to handle events when the menu button is triggered.                             |
| logo        | `React.ReactNode` | A React component for the logo of your site (which should act as a link to your homepage).                    |
| logoLabel   | `string`          | An accessibility label for the logo.                                                                          |
| themeToggle | `React.ReactNode` | A React component for a theme selector.                                                                       |

[`HeadingLevel`]: https://seek-oss.github.io/braid-design-system/components/Heading
[Braid Design System]: https://seek-oss.github.io/braid-design-system/
