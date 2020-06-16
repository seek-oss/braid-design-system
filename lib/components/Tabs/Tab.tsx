import React, {
  KeyboardEvent,
  useContext,
  ReactNode,
  MouseEvent,
  useEffect,
  useRef,
  ReactElement,
} from 'react';
import assert from 'assert';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { normalizeKey } from '../private/normalizeKey';
import { TabsContext } from './TabsProvider';
import { actionTypes, Action } from './Tabs.actions';
import { Text } from '../Text/Text';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabListContext } from './Tabs';
import { Overlay } from '../private/Overlay/Overlay';

import * as styleRefs from './Tabs.treat';
import { BadgeProps, Badge } from '../Badge/Badge';

export interface TabProps {
  children: ReactNode;
  item: string;
  onClick?: () => void;
  badge?: ReactElement<BadgeProps>;
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

export const Tab = ({ children, item, data, badge }: TabProps) => {
  const styles = useStyles(styleRefs);
  const tabsContext = useContext(TabsContext);
  const tabListContext = useContext(TabListContext);
  const tabRef = useRef<HTMLButtonElement>(null);

  assert(
    tabListContext !== null,
    'A Tab must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tab',
  );

  assert(
    !badge || badge.type === Badge,
    `Tab badge prop can only be an instance of Badge. e.g. <Tab badge={<Badge>New</Badge>}>`,
  );

  if (!tabListContext) {
    throw new Error('Tab rendered outside Tabs context');
  }

  if (!tabsContext) {
    throw new Error('Tab rendered outside TabsProvider');
  }

  const { tabListItemIndex, orientation } = tabListContext;
  const { focusedTabIndex, selectedTabItem, dispatch, a11y } = tabsContext;
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
      {...a11y.tabProps({ item, isSelected })}
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
      display="flex"
      alignItems="center"
      textAlign="left"
      borderRadius="standard"
      cursor="pointer"
      outline="none"
      position="relative"
      paddingRight="small"
      paddingLeft={isHorizontal ? 'small' : undefined}
      paddingBottom="medium"
      paddingTop={!isHorizontal ? 'medium' : undefined}
      className={[styles.tab]}
      {...buildDataAttributes(data)}
    >
      {/*
        Rendering Text component to provide rendering context
        for both icons and text labels
      */}
      <Text
        {...a11y.tabLabelProps({ item })}
        size={tabTextSize}
        weight="medium"
        align={isHorizontal ? 'center' : undefined}
        tone={isSelected ? 'formAccent' : 'secondary'}
      >
        {children}
      </Text>
      {badge ? <Box paddingLeft="xsmall">{badge}</Box> : undefined}
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
          background="neutral"
          position="absolute"
          transition="fast"
          left={isHorizontal ? 0 : undefined}
          top={isHorizontal ? undefined : 0}
          right={0}
          bottom={0}
          className={[styles.tabHover, styles.tabUnderline[orientation]]}
        />
        <Box
          background="formAccent"
          position="absolute"
          transition="fast"
          left={isHorizontal ? 0 : undefined}
          top={isHorizontal ? undefined : 0}
          right={0}
          bottom={0}
          className={styles.tabUnderline[orientation]}
          style={{
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
