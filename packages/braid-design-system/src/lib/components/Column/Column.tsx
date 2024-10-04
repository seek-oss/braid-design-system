import React, { type ReactNode, useContext } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { Box } from '../Box/Box';
import {
  ColumnsContext,
  type validColumnsComponents,
} from '../Columns/ColumnsContext';
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

const componentForParent = (
  columnComponent: (typeof validColumnsComponents)[number],
) => {
  if (columnComponent === 'span') {
    return 'span';
  }

  if (columnComponent === 'ol' || columnComponent === 'ul') {
    return 'li';
  }

  return 'div';
};

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
    component: columnsComponent,
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
  } = normalizedAlign;

  const collapseToFlexContainer = {
    mobile: collapseMobile && justifyContentMobile !== 'flexStart',
    tablet: collapseTablet && justifyContentTablet !== 'flexStart',
    desktop: collapseDesktop && justifyContentDesktop !== 'flexStart',
  };
  const display = {
    mobile: collapseToFlexContainer.mobile ? 'flex' : 'block',
    tablet: collapseToFlexContainer.tablet ? 'flex' : 'block',
    desktop: collapseToFlexContainer.desktop ? 'flex' : 'block',
    wide: 'block',
  } as const;

  return (
    <Box
      component={component || componentForParent(columnsComponent)}
      display={optimizeResponsiveArray([
        hideOnMobile ? 'none' : display.mobile,
        hideOnTablet ? 'none' : display.tablet,
        hideOnDesktop ? 'none' : display.desktop,
        hideOnWide ? 'none' : display.wide,
      ])}
      minWidth={0}
      width={width !== 'content' ? 'full' : undefined}
      flexShrink={width ? 0 : undefined}
      flexGrow={width ? 0 : 1}
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
              collapseToFlexContainer.mobile ? justifyContentMobile : null,
              collapseToFlexContainer.tablet ? justifyContentTablet : null,
              collapseToFlexContainer.desktop ? justifyContentDesktop : null,
              null,
            ])
          : undefined
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
