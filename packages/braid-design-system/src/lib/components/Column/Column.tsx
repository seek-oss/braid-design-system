import React, { type ReactNode, useContext } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/ColumnsContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  resolveResponsiveRangeProps,
  type ResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import { alignToFlexAlign } from '../../utils/align';
import { normalizeResponsiveValue } from '../../css/atoms/sprinkles.css';
import * as styles from './Column.css';

const validColumnComponents = [
  'div',
  'span',
  'p',
  'article',
  'section',
  'main',
  'nav',
  'aside',
  'ul',
  'ol',
  'li',
] as const;

export interface ColumnProps {
  component?: (typeof validColumnComponents)[number];
  children: ReactNode;
  width?: keyof typeof styles.width | 'content';
  hideBelow?: ResponsiveRangeProps['below'];
  hideAbove?: ResponsiveRangeProps['above'];
  data?: DataAttributeMap;
}

export const Column = ({
  component,
  children,
  data,
  width,
  hideBelow,
  hideAbove,
  ...restProps
}: ColumnProps) => {
  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    wideSpace,
    align,
  } = useContext(ColumnsContext);
  const [hideOnMobile, hideOnTablet, hideOnDesktop, hideOnWide] =
    resolveResponsiveRangeProps({
      below: hideBelow,
      above: hideAbove,
    });

  const collapsible = collapseMobile || collapseTablet || collapseDesktop;
  const normalizedAlign = normalizeResponsiveValue(
    alignToFlexAlign(align) || 'flexStart',
  );
  const {
    mobile: justifyContentMobile = 'flexStart',
    tablet: justifyContentTablet = justifyContentMobile,
    desktop: justifyContentDesktop = justifyContentTablet,
    wide: justifyContentWide = justifyContentDesktop,
  } = normalizedAlign;

  const display = {
    mobile: collapseMobile && align !== 'left' ? 'flex' : 'block',
    tablet: collapseTablet && align !== 'left' ? 'flex' : 'block',
    desktop: collapseDesktop && align !== 'left' ? 'flex' : 'block',
    wide: align !== 'left' ? 'flex' : 'block',
  } as const;

  return (
    <Box
      component={component}
      display={optimizeResponsiveArray([
        hideOnMobile ? 'none' : display.mobile,
        hideOnTablet ? 'none' : display.tablet,
        hideOnDesktop ? 'none' : display.desktop,
        hideOnWide ? 'none' : display.wide,
      ])}
      minWidth={0}
      width={width !== 'content' ? 'full' : undefined}
      flexShrink={width ? 0 : undefined}
      flexGrow={width !== 'content' ? 0 : 1}
      className={[
        collapsible ? styles.noSpaceBeforeFirstWhenCollapsed : null,
        width !== 'content' ? styles.width[width!] : null,
      ]}
      paddingLeft={optimizeResponsiveArray([
        collapseMobile ? 'none' : mobileSpace,
        collapseTablet ? 'none' : tabletSpace,
        collapseDesktop ? 'none' : desktopSpace,
        wideSpace,
      ])}
      paddingTop={
        collapsible
          ? optimizeResponsiveArray([
              collapseMobile ? mobileSpace : 'none',
              collapseTablet ? tabletSpace : 'none',
              collapseDesktop ? desktopSpace : 'none',
              'none',
            ])
          : undefined
      }
      justifyContent={
        collapsible
          ? optimizeResponsiveArray([
              justifyContentMobile,
              justifyContentTablet,
              justifyContentDesktop,
              justifyContentWide,
            ])
          : undefined
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
