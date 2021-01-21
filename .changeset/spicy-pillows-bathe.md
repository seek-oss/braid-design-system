---
'braid-design-system': minor
---

---
updated:
  - Tabs
---

**Tabs:** Add `divider` prop, support `full` and `none`

You can now customise the width of the divider line underneath the tab strip. The default value is `minimal`, but you can now set it to `full` or `none`.

**EXAMPLE USAGE**

```jsx
<TabsProvider id="id">
  <Tabs label="Label" divider="full">
    <Tab>The first tab</Tab>
    <Tab>The second tab</Tab>
  </Tabs>
  <TabPanels>
    <TabPanel>
      ...
    </TabPanel>
    <TabPanel>
      ...
    </TabPanel>
  </TabPanels>
</TabsProvider>
```
