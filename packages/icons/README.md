# `@braid-design-system/icons`

SVG assets for Braid icons.

See the [iconography browse docs](https://seek-oss.github.io/braid-design-system/foundations/iconography/browse) for the full list of icons available as Braid components.

```sh
npm install @braid-design-system/icons
```

```js
import icon from '@braid-design-system/icons/add.svg';
```

Each icon has a default drawing (`add.svg`). When a platform needs a different drawing, the filename is suffixed (`.ios`, `.android`, `.web`, `.native`).

The package build optimizes those files in place, which is what `import` resolves to.
