---
'braid-design-system': minor
---

---
updated:
  - AccordionItem
  - Alert
  - Autosuggest
  - Button
  - Checkbox
  - CheckboxStandalone
  - Dialog
  - Drawer
  - Dropdown
  - MonthPicker
  - PasswordField
  - RadioItem
  - Step
  - Tab
  - Textarea
  - TextDropdown
  - TextField
  - Toggle
---

Ensure all focus outlines are styled consistently across components.

Migrate to using the `outline` for focus outlines instead of `box-shadow`.
Show outlines based on the native `:focus-visible` pseudo-class, which is available in all supported browsers.

**MIGRATION GUIDE:**

If you are using a custom element, and want to customise the focus outline spacing, you should adjust the `outline` properties for your element, such as `outlineOffset`.
The outline will match the real borders of your element, so you may need to set a `borderRadius` on the element to style the outline.

```ts
// CustomElement.css.ts
import { vars } from 'braid-design-system/css';

export const customFocusRingStyling = style({
  outlineOffset: vars.space.xxsmall,
})
```

```tsx
// CustomElement.tsx
import * as styles from './CustomElement.css.ts';

<Box tabIndex={0} borderRadius="small" className={styles.customFocusRingStyling} ... />
```

If you are using your own outline for any other element, this will override the default focus outline styles.

`outlineFocus` through `boxShadow` atoms is now deprecated and will be removed in a future version.
Please consider relying on Braid's outline styles instead.