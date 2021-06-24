interface TabListParams {
  label?: string;
}

interface TabParams {
  tabIndex: number;
  isSelected: boolean;
}

interface TabLabelParams {
  tabIndex: number;
}

interface TabPanelParams {
  panelIndex: number;
  isSelected: boolean;
}

const getTabLabelId = (uniqueId: string, index: number) =>
  `${uniqueId}_${index + 1}_label`;

const getPanelId = (uniqueId: string, index: number) =>
  `${uniqueId}_${index + 1}_panel`;

interface TabA11yParams {
  uniqueId: string;
}
export default ({ uniqueId }: TabA11yParams) => ({
  tabListProps: ({ label }: TabListParams) =>
    ({
      role: 'tablist',
      'aria-orientation': 'horizontal',
      'aria-label': label,
    } as const),
  tabProps: ({ tabIndex, isSelected }: TabParams) => ({
    role: 'tab',
    tabIndex: isSelected ? undefined : -1,
    'aria-selected': isSelected,
    'aria-controls': getPanelId(uniqueId, tabIndex),
    id: `${uniqueId}_${tabIndex + 1}`,
  }),
  tabLabelProps: ({ tabIndex }: TabLabelParams) => ({
    id: getTabLabelId(uniqueId, tabIndex),
  }),
  tabPanelProps: ({ panelIndex, isSelected }: TabPanelParams) => ({
    role: 'tabpanel',
    'aria-labelledby': getTabLabelId(uniqueId, panelIndex),
    'aria-hidden': isSelected ? undefined : true,
    id: getPanelId(uniqueId, panelIndex),
    tabIndex: isSelected ? 0 : undefined,
  }),
});
