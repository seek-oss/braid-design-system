---
'braid-design-system': minor
---

---
new:
  - RadioGroup
  - RadioItem
---

**RadioGroup,RadioItem:** Add RadioGroup & RadioItem components

The RadioGroup provides an accessible way to group and control a set of **RadioItem** components. The RadioGroup is responsible for handling the value, tone, message, and disabled state—determining the presentation and selection of the items in the list.

**EXAMPLE USAGE:**
```jsx
<RadioGroup
  id="experience"
  name="experience"
  label="Experience"
  value=""
  onChange={() => {}}
>
  <RadioItem label="Less than one year" value="0" />
  <RadioItem label="1 year" value="1" />
  <RadioItem label="2 years" value="2" />
  <RadioItem label="3+ years " value="3" />
</RadioGroup>
```
