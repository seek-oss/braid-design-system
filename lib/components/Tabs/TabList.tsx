import React, {
  Children,
  useContext,
  useEffect,
  createContext,
  ReactElement,
} from 'react';

import assert from 'assert';
import { Box } from '../Box/Box';
import { actionTypes } from './Tabs.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './Tabs';
import { Tab, TabProps } from './Tab';

type TabOrientation = 'horizontal' | 'vertical';

export interface TabListProps {
  children: ReactElement<TabProps>[];
  label: string;
  orientation?: TabOrientation;
  data?: DataAttributeMap;
}

const { TAB_LIST_UPDATED } = actionTypes;

interface TabListContextValues {
  tabListItemIndex: number;
  orientation: TabOrientation;
}
export const TabListContext = createContext<TabListContextValues | null>(null);

export const TabList = ({
  children,
  label,
  orientation = 'horizontal',
  data,
}: TabListProps) => {
  const tabsContext = useContext(TabsContext);

  assert(
    tabsContext !== null,
    'A TabList must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsList',
  );

  if (!tabsContext) {
    throw new Error('TabList rendered outside Tabs context');
  }

  const { dispatch } = tabsContext;
  const tabItems = [] as string[];

  const tabs = Children.map(children, (tab, index) => {
    assert(
      typeof tab === 'object' && tab.type === Tab,
      'Only Tab elements can be direct children of a TabList',
    );

    tabItems.push(tab.props.item);

    return (
      <TabListContext.Provider
        key={index}
        value={{
          tabListItemIndex: index,
          orientation,
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
      role="tablist"
      aria-orientation={orientation}
      aria-label={label}
      position="relative"
      {...buildDataAttributes(data)}
    >
      <Box
        style={
          orientation === 'horizontal' ? { display: 'inline-flex' } : undefined
        }
      >
        {tabs}
      </Box>
    </Box>
  );
};
