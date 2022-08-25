---
'braid-design-system': minor
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add configurable message for no suggestions

Provides consumers a way to give the user more context when no suggestions are available. The `noSuggestionsMessage` prop accepts a simple message by providing a single piece of text. Alternatively, a more structured prompt can be shown by providing an object containing **title** and **description**.

This message is only displayed when there are no available suggestions provided.

**EXAMPLE USAGE:**
For the simple case:

```jsx
<Autosuggest
  ...
  suggestions={[]}
  noSuggestionsMessage="No results found"
/>
```

Or, for more a structured prompt:

```jsx
<Autosuggest
  ...
  suggestions={[]}
  noSuggestionsMessage={{
    title: "No results found",
    description: "Try searching for something else",
  }}
/>
```

**MIGRATION GUIDE:**

In addition, the old mechanism allowing consumers to pass an object to `suggestions` containing a `message` has been deprecated. This will continue to work for now but will be removed in a future release.

It is recommended to migrate to the `noSuggestionsMessage` prop.

```diff
 <Autosuggest
   ...
-  suggestions={{ message: 'No results found' }}
+  noSuggestionsMessage="No results found"
 />
```

