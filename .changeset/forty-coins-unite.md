---
'braid-design-system': minor
---

---
updated:
  - RadioItem
---

**RadioItem:** Add `disabled` support

Provide support for disabling individual `RadioItem`s within a `RadioGroup`.

**EXAMPLE USAGE:**
```jsx
<RadioGroup>
  <RadioItem label="One" value="1" />
  <RadioItem label="Two" value="2" />
  <RadioItem label="Three" value="3" disabled={true} />
</RadioGroup>
```
