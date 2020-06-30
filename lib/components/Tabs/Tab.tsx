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
import {
  Action,
  TAB_BUTTON_LEFT,
  TAB_BUTTON_RIGHT,
  TAB_BUTTON_HOME,
  TAB_BUTTON_END,
  TAB_BUTTON_ENTER,
  TAB_BUTTON_SPACE,
  TAB_BUTTON_TAB,
  TAB_LIST_FOCUSED,
  TAB_BUTTON_CLICK,
} from './Tabs.actions';
import { Text } from '../Text/Text';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabListContext } from './Tabs';
import { Overlay } from '../private/Overlay/Overlay';
import { BadgeProps, Badge } from '../Badge/Badge';
import { smoothScroll } from '../private/smoothScroll';
import { useSpace } from '../useSpace/useSpace';
import * as styleRefs from './Tabs.treat';

export interface TabProps {
  children: ReactNode;
  item?: string;
  badge?: ReactElement<BadgeProps>;
  data?: DataAttributeMap;
}

export const Tab = ({ children, data, badge, item }: TabProps) => {
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

  const {
    focusedTabIndex,
    selectedIndex,
    dispatch,
    a11y,
    onChange,
  } = tabsContext;
  const { tabListItemIndex, scrollContainer } = tabListContext;
  const isSelected = selectedIndex === tabListItemIndex;
  const isFocused = focusedTabIndex === tabListItemIndex;

  const paddingX = 'small';
  const { grid, space } = useSpace();

  useEffect(() => {
    if (tabRef.current && isFocused) {
      tabRef.current.focus();
    }
  }, [isFocused]);

  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (tabRef.current && scrollContainer) {
      if (isSelected || isFocused) {
        smoothScroll(tabRef.current, {
          scrollContainer,
          direction: 'horizontal',
          offset: space[paddingX] * grid * 3,
          ...(firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }),
        });
      }

      firstRenderRef.current = false;
    }
  }, [isSelected, isFocused, scrollContainer, space, paddingX, grid]);

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      return;
    }

    if (onChange && (targetKey === 'Enter' || targetKey === ' ')) {
      onChange(tabListItemIndex, item);
    }

    const action: Record<string, Action> = {
      ArrowRight: { type: TAB_BUTTON_RIGHT },
      ArrowLeft: { type: TAB_BUTTON_LEFT },
      Home: { type: TAB_BUTTON_HOME },
      End: { type: TAB_BUTTON_END },
      Enter: { type: TAB_BUTTON_ENTER, value: tabListItemIndex },
      ' ': { type: TAB_BUTTON_SPACE, value: tabListItemIndex },
    };

    if (action[targetKey]) {
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
      {...a11y.tabProps({ tabIndex: tabListItemIndex, isSelected })}
      ref={tabRef}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onClick={(event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        if (onChange) {
          onChange(tabListItemIndex, item);
        }

        dispatch({ type: TAB_BUTTON_CLICK, value: tabListItemIndex });
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
      paddingX={paddingX}
      className={styles.tab}
      {...buildDataAttributes(data)}
    >
      {/*
        Rendering Text component to provide rendering context
        for both icons and text labels
      */}
      <Box paddingY="medium">
        <Text
          {...a11y.tabLabelProps({ tabIndex: tabListItemIndex })}
          size={tabTextSize}
          weight="medium"
          align="center"
          tone={isSelected ? 'formAccent' : 'secondary'}
        >
          {children}
        </Text>
      </Box>
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
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          className={styles.divider}
        />
        <Box
          background="neutral"
          position="absolute"
          transition="fast"
          left={0}
          right={0}
          bottom={0}
          opacity={0}
          className={[
            styles.tabUnderlineHover,
            styles.tabUnderline,
            tabListItemIndex > 0 ? styles.hairlineMarginLeft : null,
          ]}
        />
        <Box
          background="formAccent"
          position="absolute"
          transition="fast"
          left={0}
          right={0}
          bottom={0}
          className={[
            styles.tabUnderline,
            !isSelected ? styles.tabUnderlineAnimation : undefined,
            tabListItemIndex > 0 ? styles.hairlineMarginLeft : null,
          ]}
        />
      </Box>
      <Overlay
        boxShadow="outlineFocus"
        borderRadius="standard"
        className={styles.tabFocusRing}
        visible={false}
        transition="fast"
        onlyVisibleForKeyboardNavigation
      />
    </Box>
  );
};
