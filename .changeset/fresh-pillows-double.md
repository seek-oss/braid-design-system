---
'braid-design-system': minor
---

useToast: Add deduplication of toasts

Passing `key` when creating new toasts will now remove existing Toasts on screen with the same `key` before adding the new Toast. This is useful when a toast is created as part of a repeatable process that happens frequently. 

```ts
const showToast = useToast();

showToast({
    message: 'There can only be one of me',
    tone: 'positive',
    key: 'deduped'
})
```