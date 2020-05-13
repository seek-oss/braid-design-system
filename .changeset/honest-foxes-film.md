---
'braid-design-system': major
---

seekAnz, seekBusiness: Change critical colour to red

As part of the colour uplift work this updates the `critical` colour in the `seekAnz` (and subsequently `seekBusiness`) theme from `pink` to `red`. This brings the theme into line with our colour usage guide documented under [Tones](https://seek-oss.github.io/braid-design-system/foundations/tones) on the website.

**BREAKING CHANGE**
While not technically a breaking change, you may want to review usage of the `critical` tone in your application, particularly in custom scenarios, for example:

#### Usage of `background` props on `Box`

```tsx
<Box background="critical">...</Box>
```

or

```tsx
<Box background="criticalLight">...</Box>
```

#### Usage of `tone` props on `Icon` or `Text`

```tsx
<Icon tone="critical">...</Icon>
```

or

```tsx
<Text tone="critical">...</Text>
```
