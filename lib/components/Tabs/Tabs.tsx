import React, {
  Children,
  useContext,
  useEffect,
  createContext,
  ReactElement,
} from 'react';
import { useStyles } from 'sku/react-treat';

import assert from 'assert';
import { Box } from '../Box/Box';
import { TAB_LIST_UPDATED } from './Tabs.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { Tab, TabProps } from './Tab';
import * as styleRefs from './Tabs.treat';

interface TabsProps {
  children: ReactElement<TabProps>[];
  label: string;
  data?: DataAttributeMap;
  align?: 'left' | 'center';
  scroll?: boolean;
}

interface TabListContextValues {
  tabListItemIndex: number;
}
export const TabListContext = createContext<TabListContextValues | null>(null);

export const Tabs = (props: TabsProps) => {
  const tabsContext = useContext(TabsContext);
  const styles = useStyles(styleRefs);

  const { children, label, data, align = 'left', scroll = true } = props;

  assert(
    tabsContext !== null,
    'Tabs must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsList',
  );

  if (!tabsContext) {
    throw new Error('Tabs rendered outside TabsProvider');
  }

  const { dispatch, a11y } = tabsContext;
  const tabItems: number[] = [];

  const tabs = Children.map(children, (tab, index) => {
    assert(
      typeof tab === 'object' && tab.type === Tab,
      'Only Tab elements can be direct children of a Tabs',
    );

    tabItems.push(index);

    return (
      <TabListContext.Provider
        key={index}
        value={{
          tabListItemIndex: index,
        }}
      >
        {tab}
      </TabListContext.Provider>
    );
  });

  useEffect(() => {
    dispatch({ type: TAB_LIST_UPDATED, tabItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...tabItems, dispatch]);

  return (
    <Box
      display="flex"
      justifyContent={align === 'center' ? 'center' : undefined}
      overflow={scroll ? 'auto' : undefined}
      className={scroll ? styles.nowrap : undefined}
    >
      <Box position="relative">
        <Box
          position="absolute"
          width="full"
          bottom={0}
          className={styles.divider}
        />
        <Box
          {...a11y.tabListProps({ label })}
          display="flex"
          {...buildDataAttributes(data)}
        >
          {tabs}
        </Box>
      </Box>
    </Box>
  );
};
