---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
  - Dropdown
  - MonthPicker
  - PasswordField
  - Textarea
  - TextField
---

**Autosuggest, Dropdown, MonthPicker, PasswordField, Textarea, TextField:** Add aria-label & aria-labelledby support

In some cases it may be necessary for a field to be labelled by another element or even not having an visual label. Instead of providing a **label** either **aria-label** or **aria-labelledby** can be provided.

**EXAMPLE USAGE:**
```jsx
// Standard field label
<TextField label="My field" />

// Hidden field label
<TextField aria-label="My field" />

// Labelled by another element
<Heading id="title">Title</Heading>
<TextField aria-labelledby="title" />
```
