import React, {
  Children,
  useContext,
  useEffect,
  createContext,
  ReactElement,
  useRef,
  useState,
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
  align?: 'left' | 'center';
  scroll?: boolean;
  data?: DataAttributeMap;
}

interface TabListContextValues {
  tabListItemIndex: number;
}
export const TabListContext = createContext<TabListContextValues | null>(null);

export const Tabs = (props: TabsProps) => {
  const tabsContext = useContext(TabsContext);
  const styles = useStyles(styleRefs);
  const tabsRef = useRef<HTMLElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const { children, label, data, align = 'left', scroll = true } = props;

  assert(
    tabsContext !== null,
    'Tabs must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TabsList',
  );

  if (!tabsContext) {
    throw new Error('Tabs rendered outside TabsProvider');
  }

  const { dispatch, a11y } = tabsContext;
  const tabItems: Array<string | number> = [];

  const tabs = Children.map(children, (tab, index) => {
    assert(
      typeof tab === 'object' && tab.type === Tab,
      'Only Tab elements can be direct children of a Tabs',
    );

    tabItems.push(tab.props.item ?? index);

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

  // This is to prevent focus rings from being cropped by overflow properties
  const { offsetWidth, scrollWidth } = tabsRef.current || {};
  useEffect(() => {
    const tabsNode = tabsRef.current;

    if (tabsNode) {
      const overflowing = tabsNode.offsetWidth !== tabsNode.scrollWidth;

      if (overflowing !== hasOverflow) {
        setHasOverflow(overflowing);
      }
    }
  }, [hasOverflow, offsetWidth, scrollWidth]);

  useEffect(() => {
    dispatch({ type: TAB_LIST_UPDATED, tabItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...tabItems, dispatch]);

  const overflowStyles =
    scroll && hasOverflow
      ? ({ overflowX: 'auto', overflowY: 'hidden' } as const)
      : undefined;

  return (
    <Box
      id="tabslist_scroll_container"
      ref={tabsRef}
      display="flex"
      justifyContent={
        align === 'center' && !(scroll && hasOverflow) ? 'center' : undefined
      }
      style={overflowStyles}
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
