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
import { actionTypes } from './Tabs.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { Tab, TabProps } from './Tab';
import * as styleRefs from './Tabs.treat';

type TabOrientation = 'horizontal' | 'vertical';

interface BaseTabsProps {
  children: ReactElement<TabProps>[];
  label: string;
  data?: DataAttributeMap;
}

interface HorizontalTabsProps extends BaseTabsProps {
  align?: 'left' | 'center';
  scroll?: boolean;
}

interface VerticalTabsProps extends BaseTabsProps {}

interface TabsImplProps extends VerticalTabsProps, HorizontalTabsProps {
  orientation: 'horizontal' | 'vertical';
}

const { TAB_LIST_UPDATED } = actionTypes;

interface TabListContextValues {
  tabListItemIndex: number;
  orientation: TabOrientation;
}
export const TabListContext = createContext<TabListContextValues | null>(null);

const TabsImpl = (props: TabsImplProps) => {
  const tabsContext = useContext(TabsContext);
  const styles = useStyles(styleRefs);

  const {
    children,
    label,
    orientation,
    data,
    align = 'left',
    scroll = false,
  } = props;

  assert(
    tabsContext !== null,
    'Tabs must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsList',
  );

  if (!tabsContext) {
    throw new Error('Tabs rendered outside TabsProvider');
  }

  const { dispatch } = tabsContext;
  const tabItems: string[] = [];

  const tabs = Children.map(children, (tab, index) => {
    assert(
      typeof tab === 'object' && tab.type === Tab,
      'Only Tab elements can be direct children of a Tabs',
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

  const divider =
    orientation === 'horizontal' ? (
      <Box
        position="absolute"
        width="full"
        bottom={0}
        className={styles.divider.horizontal}
      />
    ) : (
      <Box
        position="absolute"
        height="full"
        right={0}
        className={styles.divider.vertical}
      />
    );

  return (
    <Box
      display="flex"
      justifyContent={align === 'center' ? 'center' : undefined}
      overflow={scroll ? 'auto' : undefined}
      className={scroll ? styles.nowrap : undefined}
    >
      <Box position="relative">
        {divider}
        <Box
          role="tablist"
          aria-orientation={orientation}
          aria-label={label}
          display="flex"
          flexDirection={orientation === 'vertical' ? 'column' : undefined}
          {...buildDataAttributes(data)}
        >
          {tabs}
        </Box>
      </Box>
    </Box>
  );
};

export const Tabs = (props: HorizontalTabsProps) => (
  <TabsImpl {...props} orientation="horizontal" />
);

export const TabsVertical = (props: VerticalTabsProps) => (
  <TabsImpl
    {...props}
    orientation="vertical"
    align={undefined}
    scroll={undefined}
  />
);
