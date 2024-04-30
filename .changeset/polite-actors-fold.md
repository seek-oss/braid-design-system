---
'braid-design-system': minor
---

---
new:
  - TagSelector
---

Add the `TagSelector` component, a new type of field which supports multi-select. Selected options are shown as Tags above the field. This component accepts distinct functions to be invoked when a `Tag` is selected or removed.

**EXAMPLE USAGE:**
```jsx
import { TagSelector } from 'braid-design-system';


<TagSelector
  tagOptions={[
    { description: "Apples", id: "1" },
    { description: "Bananas", id: "2" },
    { description: "Oranges", id: "3" },
    { description: "Pears", id: "4" },
  ]}
  selectedTags={[
     { description: "Apples", id: "1" }
  ]}
  onSelect={() => {}}
  onRemove={() => {}}
  {...rest}
/>
```
