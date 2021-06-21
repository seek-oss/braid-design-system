import React, { ReactNode, useContext } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { Overlay } from '../private/Overlay/Overlay';
import { TabsContext } from './TabsProvider';
import { TabPanelsContext } from './TabPanelsContext';
import * as styles from './Tabs.css';

export interface TabPanelProps {
  children: ReactNode;
  item?: string;
  data?: DataAttributeMap;
}

export const TabPanel = ({ children, data, item }: TabPanelProps) => {
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
      outline="none"
      className={styles.tabPanel}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {isSelected || renderInactive ? children : undefined}
      <Overlay
        zIndex={1}
        boxShadow="outlineFocus"
        borderRadius="standard"
        className={styles.tabPanelFocusRing}
        onlyVisibleForKeyboardNavigation
      />
    </Box>
  );
};
