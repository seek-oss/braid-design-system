---
'braid-design-system': minor
---

Add `HiddenVisually` component

You can now easily provide content to assistive technologies while hiding it from the screen.

```js
<Text>
  This content is available to everyone.
  <HiddenVisually>
    This content is only available to screen readers.
  </HiddenVisually>
</Text>
```
