---
'braid-design-system': patch
---
**apac, seekBusiness:** Use `strong` weight instead of `medium` for Thai characters

The unicode range of Thai characters is not satisfied by the preferred fonts specified for the `apac` theme, resulting in these characters falling through and being rendered by `sans-serif` — which applies a platform-specific font.
On Mac this is `Thonburi`, on Windows it is `Tahoma`, neither of which have support for the semi-bold weight chosen for `medium`.
The result is the visual weight of `medium` text being rounded down to `regular`, and hence having no differentiation against standard text in the UI.

To work around this, we are creating a font alias that coerces the semi-bold weight to the bold weight of the previously mentioned platform-specific Thai fonts.

This is only applied for themes that inherit the `apac` typography definition (currently `apac` and `seekBusiness`), and will only affect characters that fall through, i.e., characters that are unsatisfied by the preferred fonts in the specified `font-family`.
