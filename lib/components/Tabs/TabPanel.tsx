import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { Overlay } from '../private/Overlay/Overlay';
import { TabsContext } from './TabsProvider';
import { TabPanelsContext } from './TabPanels';
import * as styleRefs from './Tabs.treat';

export interface TabPanelProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TabPanel = ({ children, data }: TabPanelProps) => {
  const styles = useStyles(styleRefs);
  const tabsContext = useContext(TabsContext);
  const tabPanelsContext = useContext(TabPanelsContext);

  assert(
    tabsContext !== null,
    'A TabPanel must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsPanel',
  );

  if (!tabPanelsContext) {
    throw new Error('TabPanel rendered outside TabPanels');
  }

  if (!tabsContext) {
    throw new Error('TabPanel rendered outside TabsProvider');
  }

  const { a11y, selectedIndex } = tabsContext;
  const { panelIndex } = tabPanelsContext;

  const isSelected = panelIndex === selectedIndex;

  return (
    <Box
      {...a11y.tabPanelProps({ panelIndex, isSelected })}
      display={isSelected ? undefined : 'none'}
      position="relative"
      outline="none"
      className={styles.tabPanel}
      {...buildDataAttributes(data)}
    >
      {isSelected ? children : undefined}
      <Overlay
        boxShadow="outlineFocus"
        borderRadius="standard"
        className={styles.tabPanelFocusRing}
        onlyVisibleForKeyboardNavigation
      />
    </Box>
  );
};
