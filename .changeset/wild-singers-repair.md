---
'braid-design-system': minor
---

Add TextDropdown component

A inline dropdown that can be used as part of a sentence or as an
alternative to `Dropdown`, outside of a more structured form.

Inherits its styling from the parent typographic component, and as such
must be used nested within either a `Text` or `Heading` component.

Example usage:

```tsx
const [jobTitle, setJobTitle] = useState('Developer');

<Text>
  <TextDropdown
    id="jobTitle"
    label="Job Title"
    value={jobTitle}
    onChange={setJobTitle}
    options={['Developer', 'Designer', 'Product Manager']}
  />
</Text>;
```
