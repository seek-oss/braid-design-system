import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import assert from 'assert';
import flattenChildren from '../../utils/flattenChildren';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { TAB_LIST_UPDATED } from './Tabs.actions';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { TabListContext } from './TabListContext';
import * as styles from './Tabs.css';

export interface TabsProps {
  children: ReactNodeNoStrings;
  label: string;
  align?: 'left' | 'center';
  gutter?: ResponsiveSpace;
  reserveHitArea?: boolean;
  data?: DataAttributeMap;
  divider?: 'full' | 'minimal' | 'none';
}

const getActiveTabLinePosition = (
  button: HTMLElement | null,
): { left: number; width: number } => {
  if (!button) {
    return { left: 0, width: 0 };
  }

  const computedStyle = getComputedStyle(button);
  const elWidth = button.getBoundingClientRect().width;
  const paddingLeft = parseFloat(computedStyle.paddingLeft);
  const paddingRight = parseFloat(computedStyle.paddingRight);
  const width = elWidth - paddingLeft - paddingRight;

  return { left: button.offsetLeft + paddingLeft, width };
};

export const Tabs = (props: TabsProps) => {
  const tabsContext = useContext(TabsContext);
  const tabsRef = useRef<HTMLElement>(null);

  const {
    children,
    label,
    data,
    align = 'left',
    gutter,
    reserveHitArea = false,
    divider = 'minimal',
    ...restProps
  } = props;

  assert(
    tabsContext !== null,
    'Tabs must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs',
  );

  if (!tabsContext) {
    throw new Error('Tabs rendered outside TabsProvider');
  }

  const { dispatch, a11y, selectedIndex, selectedItem } = tabsContext;
  const tabItems: Array<string | number> = [];

  const childTabs = flattenChildren(children);
  const tabs = childTabs.map((tab, index) => {
    assert(
      // @ts-expect-error
      typeof tab === 'object' && tab.type.__isTab__,
      'Only Tab elements can be direct children of a Tabs',
    );

    tabItems.push(tab.props.item ?? index);

    return (
      <TabListContext.Provider
        key={index}
        value={{
          tabListItemIndex: index,
          scrollContainer: tabsRef.current,
          isLast: childTabs.length === index + 1,
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

  const {
    space: { grid, space },
  } = useBraidTheme();
  const [showMask, setShowMask] = useState(true);
  const updateMask = useCallback(() => {
    if (!tabsRef.current) {
      return;
    }

    setShowMask(
      tabsRef.current.scrollWidth -
        tabsRef.current.offsetWidth -
        tabsRef.current.scrollLeft >
        grid * space.small,
    );
  }, [tabsRef, setShowMask, grid, space]);

  useEffect(() => {
    updateMask();

    window.addEventListener('resize', updateMask);
    return () => window.removeEventListener('resize', updateMask);
  }, [updateMask]);

  const selectedTabIndex =
    typeof selectedItem !== 'undefined'
      ? tabItems.indexOf(selectedItem)
      : selectedIndex;
  const selectedTabButtonEl =
    tabsContext.tabButtonElements[selectedTabIndex.toString()];
  const activeTab = getActiveTabLinePosition(selectedTabButtonEl);

  return (
    <Box>
      <Box
        className={reserveHitArea ? undefined : negativeMargin('top', 'medium')}
      >
        <Box position="relative">
          <Box
            ref={tabsRef}
            className={[
              styles.scroll,
              styles.nowrap,
              showMask ? styles.mask : null,
            ]}
            display="flex"
            onScroll={updateMask}
            flexWrap="nowrap"
          >
            <Box
              display="flex"
              className={align === 'center' ? styles.marginAuto : undefined}
              paddingX={gutter}
              flexWrap="nowrap"
              position="relative"
              zIndex={1}
            >
              <Box
                {...a11y.tabListProps({ label })}
                display="flex"
                {...buildDataAttributes({ data, validateRestProps: restProps })}
                flexWrap="nowrap"
                position="relative"
              >
                {tabs}
                {divider === 'minimal' ? (
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    className={styles.divider}
                  >
                    <Divider />
                  </Box>
                ) : null}
                {selectedTabButtonEl ? (
                  <Box
                    component="span"
                    position="absolute"
                    display="block"
                    left={0}
                    right={0}
                    bottom={0}
                    background="formAccent"
                    pointerEvents="none"
                    className={[
                      styles.tabUnderline,
                      styles.tabUnderlineActiveDarkMode,
                    ]}
                    style={assignInlineVars({
                      [styles.underlineLeft]: activeTab.left.toString(),
                      [styles.underlineWidth]: activeTab.width.toString(),
                    })}
                  />
                ) : null}
              </Box>
            </Box>
            {divider === 'full' ? (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                className={styles.divider}
              >
                <Divider />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
