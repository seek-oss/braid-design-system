---
'braid-design-system': major
---

---
updated:
  - Radio
---

**Radio:** Remove deprecated component

Remove deprecated `Radio` component in favour of `RadioGroup` with `RadioItem` children.

### MIGRATION GUIDE:

```diff
- <Radio checked={checked} onChange={handleOnChange} label="Option" />
+ <RadioGroup 
+   value={value}
+   onChange={handleOnChange}
+   label="Options"
+ >
+   <RadioItem value="1">Option</RadioItem>
+ </RadioGroup>
```
