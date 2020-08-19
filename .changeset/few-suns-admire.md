---
'braid-design-system': minor
---
---
updated:
  - TabPanel
---

Improved server rendering of Tabs

Previously, `Tab` and `TabPanel` components only showed their content and active states after the first render, which meant server rendering was not ideal. Active Tabs and TabPanel content can now be server rendered. Uncontrolled usages of Tabs should just work.

For controlled Tabs using the `selectedItem` prop, you now need to pass the `item` prop (already on `Tab`) to `TabPanel` as well.

```diff
<TabsProvider id="id" selectedItem="second">
  <Tabs label="Test tabs">
    <Tab item="first">The first tab</Tab>
    <Tab item="second">The second tab</Tab>
    <Tab item="third">The third tab</Tab>
  </Tabs>
  <TabPanels>
+    <TabPanel item="first">
      <Placeholder height={200} label="Panel 1" />
    </TabPanel>
+    <TabPanel item="second">
      <Placeholder height={200} label="Panel 2" />
    </TabPanel>
+    <TabPanel item="third">
      <Placeholder height={200} label="Panel 3" />
    </TabPanel>
  </TabPanels>
</TabsProvider>
```
