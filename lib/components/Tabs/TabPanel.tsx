import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { Overlay } from '../private/Overlay/Overlay';

import * as styleRefs from './Tabs.treat';

interface TabPanelProps {
  children: ReactNode;
  item: string;
  data?: DataAttributeMap;
}

export const TabPanel = ({ item, children, data }: TabPanelProps) => {
  const styles = useStyles(styleRefs);
  const tabsContext = useContext(TabsContext);

  assert(
    tabsContext !== null,
    'A TabPanel must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsPanel',
  );

  if (!tabsContext) {
    throw new Error('TabPanel rendered outside Tabs context');
  }

  const { selectedTabItem, a11y } = tabsContext;
  const isSelected = selectedTabItem === item;

  return (
    <Box
      {...a11y.tabPanelProps({ item, isSelected })}
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
