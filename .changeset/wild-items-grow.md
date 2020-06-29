---
'braid-design-system': minor
---

Add Tabs component

Follows the [WAI Aria Tabs Pattern.](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel)

**EXAMPLE USAGE:**

```jsx
<TabsProvider id="id">
  <Stack space="medium">
    <Tabs label="Label">
      <Tab>The first tab</Tab>
      <Tab>The second tab</Tab>
      <Tab badge={<Badge tone="positive">New</Badge>}>The third tab</Tab>
    </Tabs>
    <TabPanels>
      <TabPanel>
        ...
      </TabPanel>
      <TabPanel>
        ...
      </TabPanel>
      <TabPanel>
        ...
      </TabPanel>
    </TabPanels>
  </Stack>
</TabsProvider>
```
