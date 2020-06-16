interface TabListParams {
  orientation: 'horizontal' | 'vertical';
  label?: string;
}

interface TabParams {
  item: string;
  isSelected: boolean;
}

interface TabLabelParams {
  item: string;
}

interface TabPanelParams {
  item: string;
  isSelected: boolean;
}

const getTabLabelId = (uniqueId: string, item: string) =>
  `${uniqueId}_${item}_label`;

const getPanelId = (uniqueId: string, item: string) =>
  `${uniqueId}_${item}_panel`;

interface TabA11yParams {
  uniqueId: string;
}
export default ({ uniqueId }: TabA11yParams) => ({
  tabListProps: ({ orientation, label }: TabListParams) => ({
    role: 'tablist',
    'aria-orientation': orientation,
    'aria-label': label,
  }),
  tabProps: ({ item, isSelected }: TabParams) => ({
    role: 'tab',
    tabIndex: isSelected ? undefined : -1,
    'aria-selected': isSelected,
    'aria-controls': getPanelId(uniqueId, item),
    id: `${uniqueId}_${item}`,
  }),
  tabLabelProps: ({ item }: TabLabelParams) => ({
    id: getTabLabelId(uniqueId, item),
  }),
  tabPanelProps: ({ item, isSelected }: TabPanelParams) => ({
    role: 'tabpanel',
    'aria-labelledby': getTabLabelId(uniqueId, item),
    'aria-hidden': isSelected ? undefined : true,
    id: getPanelId(uniqueId, item),
    tabIndex: isSelected ? 0 : undefined,
  }),
});
