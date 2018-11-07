[![Build Status](https://img.shields.io/travis/seek-oss/braid-design-system/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/braid-design-system) [![npm](https://img.shields.io/npm/v/braid-design-system.svg?style=flat-square)](https://www.npmjs.com/package/braid-design-system) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

<br />
<img src="logo.png?raw=true" alt="BRAID" title="BRAID" width="186" height="35" />

Themeable design system for the SEEK Group.

```bash
$ npm install --save braid-design-system
```

_**NOTE:** This project is currently in alpha. The API is *extremely* unstable. Avoid using in production without guidance from project contributors._

## Setup

> This guide is currently optimised for usage with [sku](https://github.com/seek-oss/sku), since it's configured to support Braid out of the box. If your project has a custom build setup, you'll need some extra guidance from project contributors to configure your bundler.

In your sku project, first install this library:

```bash
$ npm install --save braid-design-system
```

Then, import the desired theme at the _very top_ of your application (e.g. `src/client.js`), before importing anything else.

**WARNING: Since the theme contains styles that may be overridden by invididual components, the theme needs to be imported first to avoid CSS ordering issues.**

For example:

```js
import jobStreetTheme from 'braid-design-system/lib/themes/jobStreet';
import React from 'react';
// ...etc.
```

Finally, render the `ThemeProvider` component, providing the imported theme via the `theme` prop:

```js
import { ThemeProvider, Text } from 'braid-design-system';

export default () => (
  <ThemeProvider theme={jobStreetTheme}>
    <Text>Hello World!</Text>
  </ThemeProvider>
);
```

## Themes

[List of available themes.](./lib/themes)

## Components

[List of available components.](./lib/components)

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

## License

MIT.
