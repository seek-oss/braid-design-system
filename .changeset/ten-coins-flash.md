---
'braid-design-system': minor
---

Introduce `apac` theme

The `seekAnz` theme has always been held back by the need to maintain visual consistency with [SEEK Style Guide.](https://github.com/seek-oss/seek-style-guide)

In order to provide a path forwards, this release introduces a new `apac` theme, giving teams the opportunity to adopt newer design standards while still providing the `seekAnz` theme as a backwards compatibility layer.

Consumers of the `seekAnz` theme are under no immediate pressure to migrate and both themes will be provided for the forseeable future. For now, this theme is aimed at those teams that are explicitly wanting to adopt newer design standards.

The visual changes to `seekAnz` are as follows:
- The body background has changed from `#eeeeee` to `#f5f6f8`.
- All grey colours now have a hint of blue.
- Buttons and form fields have decreased in height from 48px to 44px.
- Border radiuses have increased from 2px to 4px.

It's possible that your application has custom design elements that depend on these older values in order to look correct. It's also possible that your application is part of a broader user journey that makes use of these older design standards. As a result, a **design review is highly recommended.**

This release also signifies that the `seekUnifiedBeta` theme is coming out of beta. Any references to this theme should be replaced with `apac`. As with `seekAnz`, both themes will be provided for the timebeing to give you an opportunity to migrate.

**EXAMPLE USAGE**

```jsx
import apac from 'braid-design-system/themes/apac';

<BraidProvider theme={apac}>
```

```jsx
<BraidLoadableProvider themeName="apac">
```
