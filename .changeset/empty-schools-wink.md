---
'braid-design-system': minor
---

---
new:
  - Bleed
---

**Bleed:** Add component

Introduce `Bleed` layout component that allows content to bleed out into the parent layout by a specified amount, useful when a content needs to negate the indent provided by a parent component.

See the [documentation](https://seek-oss.github.io/braid-design-system/components/Bleed) and [layout guide](https://seek-oss.github.io/braid-design-system/foundations/layout#bleed) for more information.

**EXAMPLE USAGE:**
```diff
 <Card>
   <Stack space="gutter">
+    <Bleed horizontal="gutter" top="gutter">
       <Placeholder height={200} label="Header Image" />
+    </Bleed>
     <Heading level="3">Heading</Heading>
     <Text>Text content</Text>
   </Stack>
 </Card>
```
