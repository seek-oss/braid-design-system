import React, { ReactNode, useContext, useRef, useEffect } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';

import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { Overlay } from '../private/Overlay/Overlay';

import * as styleRefs from './Tabs.treat';
import { TAB_REGISTER_PANEL, TAB_DEREGISTER_PANEL } from './Tabs.actions';

interface TabPanelProps {
  children: ReactNode;
  data?: DataAttributeMap;
}

export const TabPanel = ({ children, data }: TabPanelProps) => {
  const styles = useStyles(styleRefs);
  const tabsContext = useContext(TabsContext);
  const ref = useRef<HTMLElement>(null);

  assert(
    tabsContext !== null,
    'A TabPanel must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsPanel',
  );

  if (!tabsContext) {
    throw new Error('TabPanel rendered outside Tabs context');
  }

  const { a11y, dispatch, panels, selectedIndex } = tabsContext;

  useEffect(() => {
    if (!ref.current) {
      throw new Error('TabPanel ref not instantiated');
    }

    const panel = ref.current;

    dispatch({
      type: TAB_REGISTER_PANEL,
      panel,
    });

    return () => {
      dispatch({
        type: TAB_DEREGISTER_PANEL,
        panel,
      });
    };
  }, [dispatch]);

  const panelIndex = ref.current ? panels.indexOf(ref.current) : -1;
  const isSelected = panelIndex === selectedIndex;

  return (
    <Box
      ref={ref}
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
