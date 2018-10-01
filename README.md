[![Build Status](https://img.shields.io/travis/seek-oss/braid-design-system/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/braid-design-system) [![npm](https://img.shields.io/npm/v/braid-design-system.svg?style=flat-square)](https://www.npmjs.com/package/braid-design-system)

# braid-design-system

Themeable design system for the SEEK Group.

_**NOTE:** This project is currently in alpha. The API is *extremely* unstable. Avoid using in production without guidance from project contributors._

## Setup

> This guide is currently optimised for usage with [sku](https://github.com/seek-oss/sku). If your project has a custom build setup, you'll need some extra guidance from project contributors to configure your bundler.

In your sku project, first install this library:

```bash
$ npm install --save braid-design-system
```

Then, in [`sku.config.js`](https://github.com/seek-oss/sku/blob/master/README.md#configuration), add `braid-design-system` to your [`compilePackages`](https://github.com/seek-oss/sku/blob/master/README.md#compile-packages) list:

```js
module.exports = {
  compilePackages: ['braid-design-system']
};
```

Next, import the desired theme at the _very top_ of your application (e.g. `src/client.js`), before importing anything else.

**WARNING: Since the theme contains styles that may be overridden by invididual components, the theme needs to be imported first to avoid CSS ordering issues.**

For example:

```js
import jobStreetTheme from 'braid-design-system/lib/themes/jobStreet';
import React from 'react';
// ...etc.
```

Finally, render the `ThemeProvider` component, providing the imported theme via the `theme` prop:

```js
import {
  ThemeProvider,
  Text
} from 'braid-design-system';

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

```bash
$ npm install
$ npm start
```

## License

MIT.
