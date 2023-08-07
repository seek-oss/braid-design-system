---
'braid-design-system': patch
---

---
updated:
  - vars
---

**apac, seekBusiness:** Increase `medium` font weight

The unicode range of Thai characters is not satisfied by the preferred fonts specified for the `apac` theme, resulting in these characters falling through and being rendered by `sans-serif` — which applies a platform-specific font.
These system fonts do not have support for the semi-bold weight chosen for `medium`, resulting in the visual weight of `medium` text being rounded down to `regular` — providing no differentiation relative to other text in the UI.

In addition, due to both `Helvetica` and `Arial` not having a `medium` weight, these fallbacks also have the same problem, even for Latin characters.

By increasing the value of `medium`, it will now round to `strong` when the rendered font cannot satisfy `medium` — preventing the loss of hierarchy.

This only affects apac-based themes, namely `apac` and `seekBusiness`.
