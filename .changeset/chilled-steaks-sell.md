---
'braid-design-system': minor
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
