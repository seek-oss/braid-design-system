---
'braid-design-system': minor
---

---
new:
  - Column
---

**Column:** Add `component` support

With `Columns` no longer adding intermidiary elements, consumers are free to control the underlying HTML element of the `Column` themselves via the `component` prop.
The list is kept to a white list of relevant elements to the component that do not require other HTML attributes, keeping in mind that props are not blindly spread in Braid.

**EXAMPLE USAGE:**
```jsx
<Columns component="ul">
  <Column component="li">
    ...
  </Column>
  <Column component="li">
    ...
  </Column>
</Columns>
```
