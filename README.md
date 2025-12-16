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

> This guide is currently optimised for usage with [sku], since it's configured to support Braid out of the box. If your project has a custom build setup, you'll need some extra guidance from project contributors to configure your bundler.

In your sku project, first install this library:

```bash
$ npm install --save braid-design-system
```

At the _very top_ of your application, import the reset, required theme and the `BraidProvider` component.

**WARNING: The reset styles must be imported first to avoid CSS ordering issues.**

For example:

```js
import 'braid-design-system/reset'; // <-- Must be first
import seekJobsTheme from 'braid-design-system/themes/seekJobs';
import { BraidProvider, Text } from 'braid-design-system';
// ...etc.
```

Finally, render the `BraidProvider` component, providing the imported theme via the `theme` prop:

```js
import 'braid-design-system/reset';
import seekJobsTheme from 'braid-design-system/themes/seekJobs';
import { BraidProvider, Text } from 'braid-design-system';

export default () => (
  <BraidProvider theme={seekJobsTheme}>
    <Text>Hello World!</Text>
  </BraidProvider>
);
```

If you're rendering within the context of another application, you may want to opt out of the provided body styles, which set the background color and reset margin and padding:

```js
<BraidProvider theme={seekJobsTheme} styleBody={false}>
  <Text>Hello World!</Text>
</BraidProvider>
```

If you'd like to customise the technical implementation of all `Link` and `TextLink` components from Braid, you can pass a custom component to the `linkComponent` prop on `BraidProvider`. For example, if you wanted to ensure that all relative links are [React Router](https://reacttraining.com/react-router/) links:

```tsx
import { Link as ReactRouterLink } from 'react-router';
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

## Building with Braid

### Styling with [Vanilla Extract]

Braid uses Vanilla Extract for styling, enabling the authoring of CSS in TypeScript in a way that can be statically extracted at build time, generating reusable atomic CSS classes.

This requires use of a bundler plugin to collect the extracted styles (see Vanilla Extract&rsquo;s [integration] documentation), either injecting them into the document or a separate CSS stylesheet.

At SEEK this is done via [sku] as part of the build process.

[Vanilla Extract]: https://vanilla-extract.style/
[integration]: https://vanilla-extract.style/documentation/getting-started

### Assertions

To ensure correct usage of its components, Braid performs some precondition and invariant checking at runtime using the [assert] library.

To prevent these checks from being included in production builds and disrupting the end user experience, it is recommended that `assert` calls are stripped at build time using the [unassert] library.

At SEEK this is done by [sku] as part of the build process via [Babel] with the [babel-plugin-unassert] plugin.
The minimum `sku` version that supports stripping assertions from the `assert` library is [12.6.0].

[assert]: https://www.npmjs.com/package/tiny-invariant
[unassert]: https://www.npmjs.com/package/unassert
[Babel]: https://babeljs.io/
[babel-plugin-unassert]: https://github.com/unassert-js/babel-plugin-unassert
[12.6.0]: https://github.com/seek-oss/sku/releases/tag/sku%4012.6.0

### Dev-time Warnings

Additionally, Braid provides dev and build time warnings for softer communications such as deprecations — conditionally logging to the console based on the specified `process.env.NODE_ENV`, expecting an environment of either `development` or `production`.

To prevent these checks from being included in production, it is recommended to strip them from the production bundle.

At SEEK this is done via [sku] as part of the build process, replacing `process.env.NODE_ENV` with the configured environment as a `string` via the [webpack optimization] configuration.
This gives the bundler the opportunity to remove the dead code at build time, if configured as part of the minification process.

[webpack optimization]: https://webpack.js.org/configuration/optimization/#optimizationnodeenv

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot testing, powered by [Storybook](https://storybook.js.org/).

## License

MIT.

[sku]: https://github.com/seek-oss/sku
