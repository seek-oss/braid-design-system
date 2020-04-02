<div align="center" >
  <img src="logo.png" alt="BRAID" title="BRAID" width="186px" />
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
import jobStreetTheme from 'braid-design-system/themes/jobStreet';
import { BraidProvider, Text } from 'braid-design-system';
// ...etc.
```

Finally, render the `BraidProvider` component, providing the imported theme via the `theme` prop:

```js
import 'braid-design-system/reset';
import jobStreetTheme from 'braid-design-system/themes/jobStreet';
import { BraidProvider, Text } from 'braid-design-system';

export default () => (
  <BraidProvider theme={jobStreetTheme}>
    <Text>Hello World!</Text>
  </BraidProvider>
);
```

If you're rendering within the context of another application, you may want to opt out of the provided body styles, which set the background color and reset margin and padding:

```js
<BraidProvider theme={jobStreetTheme} styleBody={false}>
  <Text>Hello World!</Text>
</BraidProvider>
```

If you'd like to customise the technical implementation of all `Link` and `TextLink` components from Braid, you can pass a custom component to the `linkComponent` prop on `BraidProvider`. For example, if you wanted to ensure that all relative links are [React Router](https://reacttraining.com/react-router/) links:

```tsx
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BraidProvider, LinkComponent } from 'braid-design-system';
import wireframe from 'braid-design-system/themes/wireframe';

// First create the custom link implementation:
const BraidLink: LinkComponent = ({ href, ...restProps }) =>
  href[0] === '/' ? (
    <ReactRouterLink to={href} {...restProps} />
  ) : (
    <a href={href} {...restProps} />
  );

// Then pass it to BraidProvider:
export const App = () => (
  <BraidProvider theme={wireframe} linkComponent={BraidLink}>
    ...
  </BraidProvider>
);
```

## Multi-theme setup

If you require multiple themes and want to code split them, you can subsitute the `BraidProvider` with the `BraidLoadableProvider`, passing it the necessary `themeName` at runtime. Remove any explicit theme imports you may have.

```js
import 'braid-design-system/reset';
import { BraidLoadableProvider, Text } from 'braid-design-system';

export default ({ themeName }) => (
  <BraidLoadableProvider themeName={themeName}>
    <Text>Hello World!</Text>
  </BraidLoadableProvider>
);
```

## Style Guide Migration

If you're migrating from an existing style guide, please refer to the [Style Guide Migration](./docs/Style%20Guide%20Migration.md) guide.

## Local Development

This project uses [Yarn](https://yarnpkg.com) for development dependencies.

Installing with `yarn` is required to ensure dependencies match the current [yarn.lock](./yarn.lock).

```bash
$ yarn
$ yarn start
```

Start a local Storybook server:

```bash
$ yarn storybook
```

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot testing, powered by [Storybook](https://storybook.js.org/).

## License

MIT.
