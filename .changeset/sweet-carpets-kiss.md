---
'braid-design-system': minor
---

---
updated:
  - useToast
---

**useToast:** Add neutral tone support

Add support for `neutral` tone. When using a `neutral` tone, an icon may optionally be provided. For consistency, the tone of the icon is set to **secondary** and cannot be customised.

**EXAMPLE USAGE:**
```jsx
import { useToast } from "braid-design-system"

export default () => {
  const showToast = useToast();

  return (
    <Button
      onClick={() =>
        showToast({
          tone: "neutral",
          icon: <IconBookmark />,
          message: "Neutral with icon",
        })
      }
    >
      Show Toast
    </Button>
  );
}
```
