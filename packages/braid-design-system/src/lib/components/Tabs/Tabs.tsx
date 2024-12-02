import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ComponentProps,
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
import { ScrollContainer } from '../private/ScrollContainer/ScrollContainer';
import { TabListContext, type TabSize } from './TabListContext';
import * as styles from './Tabs.css';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { dividerSpacingForSize, type Tab } from './Tab';

export interface TabsProps {
  children: ReactNodeNoStrings;
  label: string;
  align?: 'left' | 'center';
  gutter?: ResponsiveSpace;
  reserveHitArea?: boolean;
  data?: DataAttributeMap;
  size?: TabSize;
  divider?: 'full' | 'minimal' | 'none';
}

interface TabLinePosition {
  left: number;
  width: number;
}

const tabLinePositionDefault: TabLinePosition = { left: 0, width: 0 };

const TabsDivider = () => (
  <Box
    position="absolute"
    bottom={0}
    left={0}
    right={0}
    className={styles.divider}
  >
    <Divider />
  </Box>
);

// This must be called within a `useLayoutEffect` because `.getComputedStyle()` and `.getBoundingClientRect()` force a reflow
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a
const getActiveTabLinePosition = (
  button: HTMLElement | null,
): TabLinePosition => {
  if (!button) {
    return tabLinePositionDefault;
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
  const [activeTabPosition, setActiveTabPosition] = useState(
    tabLinePositionDefault,
  );

  const {
    children,
    label,
    data,
    align = 'left',
    size = 'standard',
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

  const childTabs = flattenChildren(children) as unknown as Array<
    ReactElement<ComponentProps<typeof Tab>>
  >;
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
          size,
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

  const selectedTabIndex =
    typeof selectedItem !== 'undefined'
      ? tabItems.indexOf(selectedItem)
      : selectedIndex;
  const selectedTabButtonEl =
    tabsContext.tabButtonElements[selectedTabIndex.toString()];

  useIsomorphicLayoutEffect(() => {
    setActiveTabPosition(getActiveTabLinePosition(selectedTabButtonEl));
  }, [selectedTabButtonEl, size]);

  return (
    <Box>
      <Box
        position="relative"
        className={
          reserveHitArea
            ? undefined
            : negativeMargin('top', dividerSpacingForSize[size])
        }
      >
        {divider === 'full' ? <TabsDivider /> : null}
        <ScrollContainer>
          <Box
            {...a11y.tabListProps({ label })}
            display="flex"
            className={[
              styles.tabsList,
              align === 'center' ? styles.marginAuto : undefined,
            ]}
            paddingX={gutter}
            flexWrap="nowrap"
            position="relative"
            zIndex={1}
            {...buildDataAttributes({
              data,
              validateRestProps: restProps,
            })}
          >
            {tabs}
            {divider === 'minimal' ? <TabsDivider /> : null}
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
                  [styles.underlineLeft]: activeTabPosition.left.toString(),
                  [styles.underlineWidth]: activeTabPosition.width.toString(),
                })}
              />
            ) : null}
          </Box>
        </ScrollContainer>
      </Box>
    </Box>
  );
};
