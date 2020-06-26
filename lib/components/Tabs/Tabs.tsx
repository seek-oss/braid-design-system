import React, {
  Children,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  createContext,
  ReactElement,
} from 'react';
import { useStyles } from 'sku/react-treat';

import assert from 'assert';
import { Box, BoxProps } from '../Box/Box';
import { TAB_LIST_UPDATED } from './Tabs.actions';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { Tab, TabProps } from './Tab';
import { useNegativeMarginTop } from '../../hooks/useNegativeMargin/useNegativeMargin';
import * as styleRefs from './Tabs.treat';

export interface TabsProps {
  children: ReactElement<TabProps>[];
  label: string;
  align?: 'left' | 'center';
  gutter?: BoxProps['paddingX'];
  reserveHitArea?: boolean;
  data?: DataAttributeMap;
}

interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
}
export const TabListContext = createContext<TabListContextValues | null>(null);

export const Tabs = (props: TabsProps) => {
  const tabsContext = useContext(TabsContext);
  const styles = useStyles(styleRefs);
  const tabsRef = useRef<HTMLElement>(null);

  const {
    children,
    label,
    data,
    align = 'left',
    gutter,
    reserveHitArea = false,
  } = props;

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
          scrollContainer: tabsRef.current,
        }}
      >
        {tab}
      </TabListContext.Provider>
    );
  });

  useEffect(() => {
    dispatch({ type: TAB_LIST_UPDATED, tabItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabItems.join(), dispatch]);

  const [showMask, setShowMask] = useState(true);
  const updateMask = useCallback(() => {
    if (!tabsRef.current) {
      return;
    }

    setShowMask(
      tabsRef.current.scrollWidth -
        tabsRef.current.offsetWidth -
        tabsRef.current.scrollLeft >
        5,
    );
  }, [tabsRef, setShowMask]);

  useEffect(() => {
    updateMask();
  }, [updateMask]);

  const negativeMarginTop = useNegativeMarginTop('medium');

  return (
    <Box>
      <Box className={reserveHitArea ? undefined : negativeMarginTop}>
        <Box position="relative">
          <Box
            style={
              showMask
                ? {
                    // WebkitMaskImage:
                    //   'linear-gradient(90deg, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - 80px), rgba(0,0,0,0) 100%)',
                  }
                : undefined
            }
          >
            <Box
              ref={tabsRef}
              className={[styles.scroll, styles.nowrap]}
              display="flex"
              onScroll={updateMask}
            >
              <Box
                position="relative"
                display="flex"
                className={align === 'center' ? styles.marginAuto : undefined}
                paddingX={gutter}
              >
                <Box
                  {...a11y.tabListProps({ label })}
                  display="flex"
                  {...buildDataAttributes(data)}
                >
                  {tabs}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
