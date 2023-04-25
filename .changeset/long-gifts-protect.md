---
'braid-design-system': minor
---

---
new:
  - themes
---

Add `seekJobs` theme

The `seekJobs` theme encapsulates the system changes necessary to apply and deliver the updated visual design language for SEEK Jobs.
Through the development of this theme, we have been able improve the fidelity of the various scales in our tokens, while also ensuring that the tokens themselves are consumed and applied more consistently throughout the system itself.

**EXAMPLE USAGE:**
```tsx
import seekJobs from 'braid-design-system/themes/seekJobs';

<BraidProvider theme={seekJobs}>
  ...
</BraidProvider>
```

**MIGRATION**

Consumers of the `apac` theme are not recommended to migrate independently. The `seekJobs` theme represents an uplifted visual identity that is part of a wider visual uplift.
Instead, we’ll be guiding the initial teams through a staged migration in coordination with the centralised team process.
There are some differences in how certain concepts are applied, whether it's the space scale, or `Card` usage, etc., and we will be documenting these in due course.

If you would like to talk about migrating, please reach out to us in our **#braid-support** channel on slack.

