---
'braid-design-system': minor
---

---
updated:
  - useToast
---

**useToast**: Reduce auto dismiss timeout and dynamically increase it based on content length.

Reduce auto dismiss timeout to 6 seconds (previously 10 seconds) as a baseline.
The timeout will increase based on the content length, ensuring users have enough time to read the message, while minimising the time content is obscured by the toast.
