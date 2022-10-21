---
'braid-design-system': minor
---

---
updated:
  - useToast
---

**useToast:** Add `data` attribute support

Support applying custom data attributes to Toast elements.

**EXAMPLE USAGE:**
```diff
 export const Component = () => {
   const showToast = useToast();

   return (
     <Button onClick={() =>
       showToast({
+        data: { testId: 'myToastMessage' },
         ...
       })
     }>
       Show
     </Button>
   );
 }
```
The above example results in the following HTML attribute being set on the toast element: 
`data-testId="myToastMessage"`.