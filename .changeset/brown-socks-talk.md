---
'braid-design-system': major
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Remove deprecated message syntax from `suggestions` prop

Remove the deprecated message syntax from the `suggestions` prop in favour of the `noSuggestionsMessage` prop.

### MIGRATION GUIDE:

```diff
 <Autosuggest
   ...
-  suggestions={{ message: 'No results found' }}
+  suggestions={[]}
+  noSuggestionsMessage="No results found"
 />
```
