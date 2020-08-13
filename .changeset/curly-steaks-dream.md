---
'braid-design-system': minor
---

---
updated:
  - TabPanels
---

TabPanels: Add `renderInactivePanels` prop

By default, the children of `TabPanel` components are only rendered when they are selected. However, in cases where you want to preserve local component state when switching tabs, this behaviour is undesirable. Setting `renderInactivePanels` will cause the `TabPanel` children to be rendered even when visually hidden.

**Note:** This is not a visual change, the panels will still be hidden from the user. 

e.g.
```js
<TabsProvider selectedItem={0}>
    <Tabs>
      <Tab>First</Tab>
      <Tab>Second</Tab>
    </Tabs>
    <TabPanels renderInactivePanels>
      <TabPanel>
        <Text>Tab 1</Text>
      </TabPanel>
      <TabPanel>
        {/* This TabPanel is hidden but still in the DOM */}
        <Text>Tab 2</Text>
      </TabPanel>
    </TabPanels>
</TabsProvider>
```
