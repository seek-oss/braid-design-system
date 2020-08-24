import assert from 'assert';
import React, {
  useState,
  cloneElement,
  Children,
  ReactNode,
  ReactElement,
  createContext,
  useContext,
} from 'react';
import { useStyles } from 'sku/react-treat';
import flattenChildren from 'react-keyed-flatten-children';
import {
  useNegativeMarginTop,
  useNegativeMarginLeft,
} from '../../../../../lib/hooks/useNegativeMargin/useNegativeMargin';
import { BadgeProps } from '../../../../../lib/components/Badge/Badge';
import { Box, Divider, Link, Text } from '../../../../../lib/components';
import * as styleRefs from './Navigation.treat';

const navItemPaddingX = ['small', 'medium'] as const;
const navItemPaddingY = 'medium' as const;

const NavigationItemIndexContext = createContext(-1);

interface NavigationProps {
  title: string;
  children: ReactNode;
}
export const Navigation = ({ title, children }: NavigationProps) => {
  const navigationItems = flattenChildren(children);

  assert(
    navigationItems.every(
      (navigationItem) =>
        typeof navigationItem === 'object' &&
        navigationItem.type === NavigationItem,
    ),
    'All child nodes within a Navigation must be NavigationItem elements',
  );

  return (
    <Box
      component="nav"
      aria-label={title}
      className={[
        useNegativeMarginTop(navItemPaddingY),
        useNegativeMarginLeft(navItemPaddingX),
      ]}
    >
      <Box component="ul" display="flex" alignItems="center">
        {Children.map(navigationItems, (navigationItem, index) => (
          <NavigationItemIndexContext.Provider value={index}>
            {navigationItem}
          </NavigationItemIndexContext.Provider>
        ))}
      </Box>
      <Box paddingLeft={navItemPaddingX}>
        <Divider />
      </Box>
    </Box>
  );
};

interface NavigationItemProps {
  active?: boolean;
  href: string;
  badge?: ReactElement<BadgeProps>;
  badgeTitle?: string;
  children: ReactNode;
}
export const NavigationItem = ({
  active = false,
  href,
  badge,
  children,
}: NavigationItemProps) => {
  assert(
    !badge || badge.props.bleedY === undefined,
    "Badge elements cannot set the 'bleedY' prop when passed to a NavigationItem component",
  );

  const styles = useStyles(styleRefs);

  const index = useContext(NavigationItemIndexContext);
  const [hovered, setHovered] = useState(false);

  const badgeElement = badge ? (
    <Box paddingLeft="xsmall">{cloneElement(badge, { bleedY: true })}</Box>
  ) : undefined;

  return (
    <Box component="li">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-current={active ? 'page' : undefined}
      >
        <Box display="flex" alignItems="center" paddingX={navItemPaddingX}>
          <Box position="relative">
            <Box
              display="flex"
              position="relative"
              alignItems="center"
              opacity={active ? undefined : 0}
              paddingY={navItemPaddingY}
            >
              <Box
                position="absolute"
                width="full"
                zIndex={1}
                className={styles.activeUnderline}
              />
              <Text size="standard" weight="strong">
                {children}
              </Text>
              {badgeElement}
            </Box>
            <Box
              aria-hidden
              display="flex"
              alignItems="center"
              position="absolute"
              top={0}
              paddingY={navItemPaddingY}
              opacity={active ? 0 : undefined}
              {...(index === 0
                ? { left: 0 }
                : { className: styles.centerHorizontally })}
            >
              <Text
                size="standard"
                weight="medium"
                tone={hovered ? 'neutral' : 'secondary'}
              >
                {children}
              </Text>
              {badgeElement}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
