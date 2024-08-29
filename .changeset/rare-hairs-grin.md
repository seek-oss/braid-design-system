---
'braid-design-system': minor
---

---
updated:
  - Columns
---

**Columns:** Make `Column` optional

To make `Columns` usage simpler, the `Column` component is only required as a child, instead only required when customising an individual `Column`.
If there is no change to the `width` prop, there is no need to wrap the content in a `Column` component.

**EXAMPLE USAGE:**
```diff
 <Columns space="large">
-  <Column>
     // Column 1 content
-  </Column>

   <Column width="content">
     // Column 2 content
   </Column>
 </Columns>
```
