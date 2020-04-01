---
'braid-design-system': major
---

BraidProvider: Add `linkComponent` prop to customise link rendering.

If you'd like to customise the technical implementation of all `Link` and `TextLink` components from Braid, you can now pass a custom component to the `linkComponent` prop on `BraidProvider`. For example, if you wanted to ensure that all relative links are [React Router](https://reacttraining.com/react-router/) links:

```tsx
import React, { ComponentProps } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BraidProvider, LinkComponent } from 'braid-design-system';

// First create the custom link implementation:
const BraidLink: LinkComponent = ({ href, ...restProps }) =>
  /^\//.test(href) ? (
    <ReactRouterLink to={href} {...restProps} />
  ) : (
    <a href={href} {...restProps} />
  );

// Then pass it to BraidProvider:
export const App = () => (
  <BraidProvider theme={jobStreetTheme} linkComponent={BraidLink}>
    ...
  </BraidProvider>
);
```

In order to make your custom link component available for any type of link (not just usages of `TextLink`), this release introduces a new `Link` component which renders an unstyled `a` tag by default.

**BREAKING CHANGES**

- `TextLink` now requires an `href` prop. Even though this is unlikely to affect anyone (a `TextLink` without an `href` isn't terribly useful), this is still technically a breaking change.

  However, if you find an instance of `TextLink` that you think _shouldn't_ have an `href`, this is a sign that it's not _actually_ a link and you should use a [`TextLinkRenderer`](https://seek-oss.github.io/braid-design-system/components/TextLinkRenderer) instead. Unfortunately, because there's no way for us to know what the semantics of your usage ahead of time, we're unable to provide a migration guide, so you'll need to be mindful of how this might impact accessibility.

- The props for `TextLink` now extend React's `AnchorHTMLAttributes<HTMLAnchorElement>` type rather than `AllHTMLAttributes<HTMLAnchorElement>`. While highly unlikely, this may cause type errors if you've passed props to `TextLink` that aren't considered to be valid anchor props.
