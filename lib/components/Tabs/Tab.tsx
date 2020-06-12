import React, {
  KeyboardEvent,
  useContext,
  ReactNode,
  MouseEvent,
  useEffect,
  useRef,
} from 'react';
import assert from 'assert';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { useTouchableSpace } from '../../hooks/typography';
import { normalizeKey } from '../private/normalizeKey';
import { TabsContext } from './Tabs';
import { actionTypes, Action } from './Tabs.actions';
import { Text } from '../Text/Text';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabListContext } from './TabList';
import { Overlay } from '../private/Overlay/Overlay';

import * as styleRefs from './Tabs.treat';

export interface TabProps {
  children: ReactNode;
  item: string;
  onClick?: () => void;
  data?: DataAttributeMap;
}

const {
  TAB_BUTTON_LEFT,
  TAB_BUTTON_RIGHT,
  TAB_BUTTON_DOWN,
  TAB_BUTTON_UP,
  TAB_BUTTON_HOME,
  TAB_BUTTON_END,
  TAB_BUTTON_ENTER,
  TAB_BUTTON_SPACE,
  TAB_BUTTON_TAB,
  TAB_LIST_FOCUSED,
  TAB_BUTTON_CLICK,
} = actionTypes;

export const Tab = ({ children, item, data }: TabProps) => {
  const styles = useStyles(styleRefs);
  const tabsContext = useContext(TabsContext);
  const tabListContext = useContext(TabListContext);
  const tabRef = useRef<HTMLButtonElement>(null);

  assert(
    tabListContext !== null,
    'A Tab must be rendered as a child of TabList. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tab',
  );

  if (!tabListContext) {
    throw new Error('Tab rendered outside TabList context');
  }

  if (!tabsContext) {
    throw new Error('Tab rendered outside Tabs context');
  }

  const { tabListItemIndex, orientation } = tabListContext;
  const { focusedTabIndex, selectedTabItem, dispatch } = tabsContext;
  const isSelected = selectedTabItem === item;
  const isFocused = focusedTabIndex === tabListItemIndex;
  const isHorizontal = orientation === 'horizontal';

  useEffect(() => {
    if (tabRef.current && focusedTabIndex === tabListItemIndex) {
      tabRef.current.focus();
    }
  }, [focusedTabIndex, tabListItemIndex]);

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      return;
    }

    const action: Record<string, Action> = {
      ArrowRight: { type: TAB_BUTTON_RIGHT },
      ArrowLeft: { type: TAB_BUTTON_LEFT },
      ArrowDown: { type: TAB_BUTTON_DOWN },
      ArrowUp: { type: TAB_BUTTON_UP },
      Home: { type: TAB_BUTTON_HOME },
      End: { type: TAB_BUTTON_END },
      Enter: { type: TAB_BUTTON_ENTER, value: tabListItemIndex, item },
      ' ': { type: TAB_BUTTON_SPACE, value: tabListItemIndex, item },
    };

    if (action[targetKey]) {
      if (
        /^arrow/i.test(targetKey) &&
        ((/(left|right)$/i.test(targetKey) && orientation !== 'horizontal') ||
          (/(up|down)$/i.test(targetKey) && orientation !== 'vertical'))
      ) {
        return;
      }

      dispatch(action[targetKey]);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab' && focusedTabIndex !== null) {
      dispatch({ type: TAB_BUTTON_TAB });
      return;
    }

    // Prevent arrow keys scrolling the document while navigating the tabs
    const isArrowPress = targetKey.indexOf('Arrow') === 0;
    // Prevent enter or space press from triggering the click handler
    const isActionKeyPress = targetKey === 'Enter' || targetKey === ' ';

    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };

  const tabTextSize = 'standard';

  return (
    <Box
      component="button"
      role="tab"
      tabIndex={isSelected ? undefined : -1}
      aria-selected={isSelected}
      aria-controls={`${item}_panel`}
      id={item}
      ref={tabRef}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onClick={(event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch({ type: TAB_BUTTON_CLICK, value: tabListItemIndex, item });
      }}
      onFocus={
        isSelected
          ? () =>
              dispatch({
                type: TAB_LIST_FOCUSED,
                value: tabListItemIndex,
              })
          : undefined
      }
      display="block"
      textAlign="left"
      borderRadius="standard"
      cursor="pointer"
      outline="none"
      position="relative"
      paddingLeft={isHorizontal ? 'small' : undefined}
      paddingRight="small"
      className={useTouchableSpace(tabTextSize)}
      {...buildDataAttributes(data)}
    >
      {/*
        Rendering Text component to provide rendering context
        for both icons and text labels
      */}
      <Text
        id={`${item}_tabcontent`}
        size={tabTextSize}
        baseline={false}
        weight="medium"
        align="center"
        tone={isSelected ? 'formAccent' : 'secondary'}
      >
        {children}
      </Text>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
        pointerEvents="none"
      >
        <Box
          background="formAccent"
          position="absolute"
          transition="fast"
          left={isHorizontal ? 0 : undefined}
          top={isHorizontal ? undefined : 0}
          right={0}
          bottom={0}
          style={{
            [isHorizontal ? 'height' : 'width']: 2,
            transform: isSelected
              ? undefined
              : `translate${isHorizontal ? 'Y' : 'X'}(100%)`,
          }}
        />
      </Box>
      <Overlay
        boxShadow="outlineFocus"
        borderRadius="standard"
        className={styles.tabFocusRing}
        visible={isFocused}
        onlyVisibleForKeyboardNavigation
      />
    </Box>
  );
};
