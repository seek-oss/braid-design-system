---
'braid-design-system': minor
---

---
updated:
  - Disclosure
---

**Disclosure:** Add inline content support

Provides support for using a Disclosure within a sentence by allowing it to be nested within a typographic component, i.e. `Text`.

All size and weight properties will inherit from the parent component.

**EXAMPLE USAGE:**
```jsx
<Text>
  Preceding text content that is followed by a Disclosure.
  <Disclosure expandLabel="Read more">
    ...
  </Disclosure>
</Text>
```
