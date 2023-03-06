---
'braid-design-system': minor
---

---
updated:
  - Disclosure
---

**Disclosure:** Add inline content support

Provides support for using a Disclosure in the context of sentence, by allowing it to be nested within a typographic component, i.e. `Text`. This enables the call to action to sit inline with other copy.

All size and weight properties will inherit from the parent component.

**EXAMPLE USAGE:**
```jsx
<Text>
  Preceeding text content that is followed by a Disclosure.
  <Disclosure expandLabel="Read more">
    ...
  </Disclosure>
</Text>
```
