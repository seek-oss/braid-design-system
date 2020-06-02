import React, { ReactNode, useContext } from 'react';

import { useStyles } from 'sku/react-treat';
import assert from 'assert';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './Tabs';
import { Overlay } from '../private/Overlay/Overlay';
import * as styleRefs from './TabPanel.treat';

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

  const { selectedTabItem } = tabsContext;
  const showPanel = selectedTabItem === item;

  return (
    <Box
      role="tabpanel"
      aria-labelledby={`${item}_tabcontent`}
      aria-hidden={showPanel ? undefined : true}
      id={`${item}_panel`}
      display={showPanel ? undefined : 'none'}
      tabIndex={showPanel ? 0 : undefined}
      position="relative"
      outline="none"
      className={styles.tabPanel}
      {...buildDataAttributes(data)}
    >
      {showPanel ? children : undefined}
      <Overlay
        boxShadow="outlineFocus"
        borderRadius="standard"
        className={styles.tabPanelFocusRing}
        onlyVisibleForKeyboardNavigation
      />
    </Box>
  );
};
