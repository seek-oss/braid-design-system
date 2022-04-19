<div align="center" >
  <img src="logo.png#gh-light-mode-only" alt="BRAID" title="BRAID" width="186px" />
  <img src="logo-inverted.png#gh-dark-mode-only" alt="BRAID" title="BRAID" width="186px" />
  <br/>
  <br/>
  Themeable design system for the SEEK Group.
  <br/>
  <br/>

[![npm](https://img.shields.io/npm/v/braid-design-system.svg?style=for-the-badge)](https://www.npmjs.com/package/braid-design-system)

  <hr />
</div>

## Setup

> This guide is currently optimised for usage with [sku](https://github.com/seek-oss/sku), since it's configured to support Braid out of the box. If your project has a custom build setup, you'll need some extra guidance from project contributors to configure your bundler.

In your sku project, first install this library:

```bash
$ npm install --save braid-design-system
```

At the _very top_ of your application, import the reset, required theme and the `BraidProvider` component.

**WARNING: The reset styles must be imported first to avoid CSS ordering issues.**

For example:

```js
import 'braid-design-system/reset'; // <-- Must be first
import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider, Text } from 'braid-design-system';
// ...etc.
```

Finally, render the `BraidProvider` component, providing the imported theme via the `theme` prop:

```js
import 'braid-design-system/reset';
import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider, Text } from 'braid-design-system';

export default () => (
  <BraidProvider theme={apacTheme}>
    <Text>Hello World!</Text>
  </BraidProvider>
);
```

If you're rendering within the context of another application, you may want to opt out of the provided body styles, which set the background color and reset margin and padding:

```js
<BraidProvider theme={apacTheme} styleBody={false}>
  <Text>Hello World!</Text>
</BraidProvider>
```

If you'd like to customise the technical implementation of all `Link` and `TextLink` components from Braid, you can pass a custom component to the `linkComponent` prop on `BraidProvider`. For example, if you wanted to ensure that all relative links are [React Router](https://reacttraining.com/react-router/) links:

```tsx
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BraidProvider, makeLinkComponent } from 'braid-design-system';
import wireframe from 'braid-design-system/themes/wireframe';

// First create the custom link implementation:
const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
    <ReactRouterLink ref={ref} to={href} {...restProps} />
  ) : (
    <a ref={ref} href={href} {...restProps} />
  ),
);

// Then pass it to BraidProvider:
export const App = () => (
  <BraidProvider theme={wireframe} linkComponent={CustomLink}>
    ...
  </BraidProvider>
);
```

## Style Guide Migration

If you're migrating from an existing style guide, please refer to the [Style Guide Migration](./docs/Style%20Guide%20Migration.md) guide.

## Local Development

This project uses [pnpm](https://pnpm.io/) for development dependencies.

Installing with `pnpm` is required to ensure dependencies match the current [pnpm-lock.yaml](./pnpm-lock.yaml).

```bash
$ pnpm install
$ pnpm start
```

Start a local Storybook server:

```bash
$ pnpm storybook
```

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot testing, powered by [Storybook](https://storybook.js.org/).

## License

MIT.
