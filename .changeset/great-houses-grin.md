---
'braid-design-system': minor
---

---
updated:
  - useToast
---

**useToast**: Support dynamic dismiss timeout duration

Previously, all toasts would automatically dismiss after 10 seconds.
This update adjusts the timeout duration for toasts based on their content length, ensuring users have enough time to read the message, while minimising the time content is obscured by the toast.
