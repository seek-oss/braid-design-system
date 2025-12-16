import assert from 'assert';

import { type ReactNode, useContext, type FC } from 'react';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { TabPanelsContext } from './TabPanelsContext';
import { TabsContext } from './TabsProvider';

import * as styles from './Tabs.css';

export interface TabPanelProps {
  children: ReactNode;
  item?: string;
  data?: DataAttributeMap;
}

export const TabPanel: FC<TabPanelProps> = ({
  children,
  data,
  item,
  ...restProps
}) => {
  const tabsContext = useContext(TabsContext);
  const tabPanelsContext = useContext(TabPanelsContext);

  assert(
    tabsContext !== null,
    'A TabPanel must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs',
  );

  if (!tabPanelsContext) {
    throw new Error('TabPanel rendered outside TabPanels');
  }

  if (!tabsContext) {
    throw new Error('TabPanel rendered outside TabsProvider');
  }

  const { a11y, selectedIndex, selectedItem } = tabsContext;
  const { panelIndex, renderInactive } = tabPanelsContext;

  const isSelected =
    selectedIndex > -1 ? panelIndex === selectedIndex : selectedItem === item;

  return (
    <Box
      {...a11y.tabPanelProps({ panelIndex, isSelected })}
      display={isSelected ? undefined : 'none'}
      position="relative"
      outline="focus"
      borderRadius="large" // Ensures focus ring is rounded
      className={styles.tabPanel}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {isSelected || renderInactive ? children : undefined}
    </Box>
  );
};

TabPanel.displayName = 'TabPanel';
// @ts-expect-error __isTabPanel__ Braid custom property
TabPanel.__isTabPanel__ = true;
