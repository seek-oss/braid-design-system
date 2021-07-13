import React, {
  useRef,
  useContext,
  useEffect,
  cloneElement,
  KeyboardEvent,
  ReactNode,
  MouseEvent,
  ReactElement,
} from 'react';
import assert from 'assert';
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
import { TabListContext } from './TabListContext';
import { Overlay } from '../private/Overlay/Overlay';
import { BadgeProps, Badge } from '../Badge/Badge';
import { useResponsiveValue } from '../useResponsiveValue/useResponsiveValue';
import { smoothScroll, smoothScrollIntoView } from '../private/smoothScroll';
import { useSpace } from '../useSpace/useSpace';
import * as styles from './Tabs.css';

export interface TabProps {
  children: ReactNode;
  item?: string;
  badge?: ReactElement<BadgeProps>;
  data?: DataAttributeMap;
}

export const Tab = ({ children, data, badge, item }: TabProps) => {
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

  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to a Tab component",
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
    selectedItem,
    dispatch,
    a11y,
    onChange,
  } = tabsContext;
  const { tabListItemIndex, scrollContainer, divider } = tabListContext;
  const isSelected =
    selectedIndex > -1
      ? selectedIndex === tabListItemIndex
      : selectedItem === item;
  const isFocused = focusedTabIndex === tabListItemIndex;

  const paddingX = 'small';
  const { grid, space } = useSpace();

  useEffect(() => {
    if (tabRef.current && isFocused) {
      tabRef.current.focus();
    }
  }, [isFocused]);

  const firstRenderRef = useRef(true);
  const isMobile = useResponsiveValue()({
    mobile: true,
    tablet: false,
  });
  useEffect(() => {
    if (!tabRef.current || !scrollContainer) {
      return;
    }

    if (isSelected || isFocused) {
      if (isMobile) {
        smoothScroll(tabRef.current, {
          scrollContainer,
          direction: 'horizontal',
          offset: space[paddingX] * grid * 3,
          ...(firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }),
        });
      } else {
        smoothScrollIntoView(tabRef.current, {
          scrollContainer,
          direction: 'horizontal',
          offset: space[paddingX] * grid * 6,
          ...(firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }),
        });
      }
    }

    firstRenderRef.current = false;
  }, [isSelected, isFocused, scrollContainer, space, paddingX, grid, isMobile]);

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
      zIndex={1}
      paddingX={paddingX}
      paddingY="medium"
      className={styles.tab}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {/*
        Rendering Text component to provide rendering context
        for both icons and text labels
      */}
      <Text
        {...a11y.tabLabelProps({ tabIndex: tabListItemIndex })}
        size={tabTextSize}
        weight="medium"
        align="center"
        tone={isSelected ? 'formAccent' : 'secondary'}
      >
        {children}
      </Text>
      {badge ? (
        <Box paddingLeft="xsmall">{cloneElement(badge, { bleedY: true })}</Box>
      ) : null}

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
        pointerEvents="none"
      >
        {divider === 'minimal' ? (
          <Box
            position="absolute"
            zIndex={1}
            left={0}
            right={0}
            bottom={0}
            className={styles.divider}
          />
        ) : null}
        <Box
          background="neutral"
          position="absolute"
          zIndex={2}
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
          zIndex={2}
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
        zIndex={1}
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
