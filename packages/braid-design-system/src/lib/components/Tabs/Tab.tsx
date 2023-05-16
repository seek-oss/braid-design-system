import React, {
  type KeyboardEvent,
  type ReactNode,
  type MouseEvent,
  type ReactElement,
  useRef,
  useContext,
  useEffect,
  cloneElement,
} from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { normalizeKey } from '../private/normalizeKey';
import { TabsContext } from './TabsProvider';
import {
  type Action,
  TAB_BUTTON_LEFT,
  TAB_BUTTON_RIGHT,
  TAB_BUTTON_HOME,
  TAB_BUTTON_END,
  TAB_BUTTON_ENTER,
  TAB_BUTTON_SPACE,
  TAB_BUTTON_TAB,
  TAB_LIST_FOCUSED,
  TAB_BUTTON_CLICK,
  TAB_BUTTON_REGISTER,
} from './Tabs.actions';
import { type TextProps, Text } from '../Text/Text';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { TabListContext } from './TabListContext';
import { Overlay } from '../private/Overlay/Overlay';
import type { BadgeProps } from '../Badge/Badge';
import { useResponsiveValue } from '../useResponsiveValue/useResponsiveValue';
import { smoothScroll, smoothScrollIntoView } from '../private/smoothScroll';
import { useSpace } from '../useSpace/useSpace';
import * as styles from './Tabs.css';

export interface TabProps {
  children: ReactNode;
  item?: string;
  badge?: ReactElement<BadgeProps>;
  icon?: TextProps['icon'];
  data?: DataAttributeMap;
}

const paddingX = 'small';
export const Tab = ({
  children,
  data,
  badge,
  icon,
  item,
  ...restProps
}: TabProps) => {
  const tabsContext = useContext(TabsContext);
  const tabListContext = useContext(TabListContext);
  const tabRef = useRef<HTMLButtonElement>(null);

  assert(
    tabListContext !== null,
    'A Tab must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tab',
  );

  assert(
    // @ts-expect-error
    !badge || badge.type.__isBadge__,
    `Tab badge prop can only be an instance of Badge. e.g. <Tab badge={<Badge>New</Badge>}>`,
  );

  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to a Tab component",
  );

  assert(
    !icon || (icon.props.size === undefined && icon.props.tone === undefined),
    "Icons cannot set the 'size' or 'tone' prop when passed to a Tab component",
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
  const { tabListItemIndex, scrollContainer, isLast } = tabListContext;
  const isSelected =
    selectedIndex > -1
      ? selectedIndex === tabListItemIndex
      : selectedItem === item;
  const isFocused = focusedTabIndex === tabListItemIndex;

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
  }, [isSelected, isFocused, scrollContainer, space, grid, isMobile]);

  useEffect(() => {
    if (tabRef.current) {
      dispatch({
        type: TAB_BUTTON_REGISTER,
        tabEl: tabRef.current,
        tabListItemIndex,
      });
    }
  }, [dispatch, tabListItemIndex]);

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

  return (
    <Box
      component="button"
      type="button"
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
      paddingLeft={tabListItemIndex > 0 ? paddingX : undefined}
      paddingRight={!isLast ? paddingX : undefined}
      paddingY="medium"
      className={styles.tab}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {/* Inactive */}
      <Box
        component="span"
        display="block"
        position="absolute"
        aria-hidden
        transition="fast"
        opacity={isSelected ? 0 : undefined}
        className={icon ? styles.cropToIconX : undefined}
      >
        <Text tone="secondary" icon={icon}>
          {children}
        </Text>
      </Box>

      {/* Hover */}
      <Box
        component="span"
        display="block"
        position="absolute"
        aria-hidden
        transition="fast"
        opacity={0}
        className={[
          !isSelected ? styles.hoveredTab : undefined,
          icon ? styles.cropToIconX : undefined,
        ]}
      >
        <Text icon={icon}>{children}</Text>
      </Box>

      {/* Selected */}
      <Box
        component="span"
        display="block"
        transition="fast"
        opacity={!isSelected ? 0 : undefined}
        className={icon ? styles.cropToIconX : undefined}
      >
        <Text
          {...a11y.tabLabelProps({ tabIndex: tabListItemIndex })}
          tone="formAccent"
          icon={icon}
        >
          {children}
        </Text>
      </Box>

      {badge ? (
        <Box component="span" paddingLeft="xsmall">
          {cloneElement(badge, { bleedY: true })}
        </Box>
      ) : null}
      <Overlay
        component="span"
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

Tab.__isTab__ = true;
