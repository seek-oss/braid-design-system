import assert from 'assert';

import {
  type KeyboardEvent,
  type ReactNode,
  type MouseEvent,
  type ReactElement,
  useRef,
  useContext,
  useEffect,
  cloneElement,
  type FC,
} from 'react';

import type { BraidTokens } from '../../themes/tokenType';
import type { BadgeProps } from '../Badge/Badge';
import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { badgeSlotSpace } from '../private/badgeSlotSpace';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { normalizeKey } from '../private/normalizeKey';
import { smoothScroll, smoothScrollIntoView } from '../private/smoothScroll';
import { useResponsiveValue } from '../useResponsiveValue/useResponsiveValue';
import { useSpace } from '../useSpace/useSpace';

import { TabListContext, type TabSize } from './TabListContext';
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
import { TabsContext } from './TabsProvider';

import * as styles from './Tabs.css';

export interface TabProps {
  children: ReactNode;
  item?: string;
  badge?: ReactElement<BadgeProps> | null;
  icon?: TextProps['icon'];
  data?: DataAttributeMap;
}

export const dividerSpacingForSize: Record<
  TabSize,
  keyof BraidTokens['space']
> = {
  standard: 'medium',
  small: 'small',
} as const;

const paddingXForTabSize: Record<TabSize, keyof BraidTokens['space']> = {
  standard: 'small',
  small: 'xsmall',
} as const;
export const Tab: FC<TabProps> = ({
  children,
  data,
  badge,
  icon,
  item,
  ...restProps
}) => {
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
  const { tabListItemIndex, scrollContainer, isLast, size } = tabListContext;
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
          offset: space[paddingXForTabSize[size]] * grid * 3,
          ...(firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }),
        });
      } else {
        smoothScrollIntoView(tabRef.current, {
          scrollContainer,
          direction: 'horizontal',
          offset: space[paddingXForTabSize[size]] * grid * 6,
          ...(firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }),
        });
      }
    }

    firstRenderRef.current = false;
  }, [isSelected, isFocused, scrollContainer, space, grid, isMobile, size]);

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
      position="relative"
      zIndex={1}
      paddingLeft={tabListItemIndex > 0 ? paddingXForTabSize[size] : undefined}
      paddingRight={!isLast ? paddingXForTabSize[size] : undefined}
      paddingY={dividerSpacingForSize[size]}
      className={[styles.tab, styles.tabFocusRing]}
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
      >
        <Text size={size} tone="secondary" icon={icon}>
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
        className={!isSelected ? styles.hoveredTab : undefined}
      >
        <Text size={size} icon={icon}>
          {children}
        </Text>
      </Box>

      {/* Selected */}
      <Box
        component="span"
        display="block"
        transition="fast"
        opacity={!isSelected ? 0 : undefined}
      >
        <Text
          {...a11y.tabLabelProps({ tabIndex: tabListItemIndex })}
          size={size}
          tone="formAccent"
          icon={icon}
        >
          {children}
        </Text>
      </Box>

      {badge ? (
        <Box component="span" paddingLeft={badgeSlotSpace}>
          {cloneElement(badge, { bleedY: true })}
        </Box>
      ) : null}
    </Box>
  );
};
// @ts-expect-error __isTab__ Braid custom property
Tab.__isTab__ = true;
