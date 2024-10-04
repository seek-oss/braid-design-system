---
'braid-design-system': minor
---

---
new:
  - Column
---

**Column:** Add `component` support

With `Columns` no longer adding intermediary elements, consumers are free to control the underlying HTML element of the `Column` themselves via the `component` prop.
Valid options are kept to a white list of elements relevant to `Column` that do not require other HTML attributes, keeping in mind that props are not blindly spread in Braid.

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
