# `@braid-design-system/icons`

Canonical SVG assets for Braid icons. This package is the source of truth for icon drawings used across web and native. Import the files directly; platform UI kits wrap them in their own components.

```sh
npm install @braid-design-system/icons
```

Unsuffixed files are the default drawing (used on web and anywhere a platform does not override). Platform-specific drawings use a suffix:

```js
import icon from '@braid-design-system/icons/iconName.svg';
import iconIos from '@braid-design-system/icons/iconName.ios.svg';
import iconAndroid from '@braid-design-system/icons/iconName.android.svg';
```
