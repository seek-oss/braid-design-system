<div align="center" >
  <img src="logo.png" alt="BRAID" title="BRAID" width="186px" />
  <br/>
  <br/>
  Themeable design system for the SEEK Group.
  <hr />

[![Build Status](https://img.shields.io/travis/seek-oss/braid-design-system/master.svg?style=for-the-badge)](http://travis-ci.org/seek-oss/braid-design-system) [![npm](https://img.shields.io/npm/v/braid-design-system.svg?style=for-the-badge)](https://www.npmjs.com/package/braid-design-system) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

  <hr />
</div>

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

Finally, render the `BraidProvider` component, providing the imported theme via the `theme` prop:

```js
import { BraidProvider, Text } from 'braid-design-system';

export default () => (
  <BraidProvider theme={jobStreetTheme}>
    <Text>Hello World!</Text>
  </BraidProvider>
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

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot testing, powered by [Storybook](https://storybook.js.org/).

## License

MIT.
