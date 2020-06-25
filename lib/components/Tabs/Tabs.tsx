import React, {
  Children,
  useContext,
  useEffect,
  useReducer,
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
import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
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

interface FocusRingState {
  focusedElement: HTMLElement | null;
  left: number;
  width: number;
  height: number;
  visible: boolean;
}

const UPDATE_FOCUS_RING = 0;
const HIDE_FOCUS_RING = 1;

type FocusRingAction =
  | {
      type: typeof UPDATE_FOCUS_RING;
      value: { scrollContainer: HTMLElement; focusedElement?: HTMLElement };
    }
  | { type: typeof HIDE_FOCUS_RING };

const focusRingReducer = (
  state: FocusRingState,
  action: FocusRingAction,
): FocusRingState => {
  switch (action.type) {
    case UPDATE_FOCUS_RING: {
      const focusedElement =
        action.value.focusedElement ?? state.focusedElement;

      if (!focusedElement) {
        return state;
      }

      const { scrollContainer } = action.value;
      const left = focusedElement.offsetLeft - scrollContainer.scrollLeft;
      const width = focusedElement.offsetWidth;
      const height = focusedElement.offsetHeight;

      return {
        ...state,
        focusedElement,
        left,
        width,
        height,
        visible: true,
      };
    }

    case HIDE_FOCUS_RING: {
      return {
        ...state,
        focusedElement: null,
        visible: false,
      };
    }
  }

  return state;
};

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

  const [focusRingState, focusRingDispatch] = useReducer(focusRingReducer, {
    focusedElement: null,
    left: 0,
    width: 0,
    height: 0,
    visible: false,
  });

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
    <Box
      onFocusCapture={(event) => {
        if (!tabsRef.current) {
          return;
        }

        focusRingDispatch({
          type: UPDATE_FOCUS_RING,
          value: {
            focusedElement: event.target,
            scrollContainer: tabsRef.current,
          },
        });
      }}
      onBlurCapture={() => focusRingDispatch({ type: HIDE_FOCUS_RING })}
    >
      <Box className={reserveHitArea ? undefined : negativeMarginTop}>
        <Box position="relative">
          <Box
            position="absolute"
            pointerEvents="none"
            boxShadow="outlineFocus"
            borderRadius="standard"
            opacity={!focusRingState.visible ? 0 : undefined}
            transition="fast"
            className={hideFocusRingsClassName}
            style={{
              top: 0,
              left: focusRingState.left,
              width: focusRingState.width,
              height: focusRingState.height,
            }}
          />
          <Box
            style={
              showMask
                ? {
                    WebkitMaskImage:
                      'linear-gradient(90deg, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - 80px), rgba(0,0,0,0) 100%)',
                  }
                : undefined
            }
          >
            <Box
              ref={tabsRef}
              className={[styles.scroll, styles.nowrap]}
              display="flex"
              onScroll={() => {
                const scrollContainer = tabsRef.current;

                if (!scrollContainer) {
                  return;
                }

                updateMask();

                focusRingDispatch({
                  type: UPDATE_FOCUS_RING,
                  value: { scrollContainer },
                });
              }}
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
