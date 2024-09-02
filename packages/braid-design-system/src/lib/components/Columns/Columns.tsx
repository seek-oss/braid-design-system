import React, { type ReactElement } from 'react';
import { Box } from '../Box/Box';
import type { ColumnProps } from '../Column/Column';
import { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import {
  normalizeResponsiveValue,
  type RequiredResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { ColumnsContext } from './ColumnsContext';
import { AlignY, alignYToFlexAlign } from '../../utils/align';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';

const validColumnsComponents = [
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

export interface ColumnsProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  alignY?: RequiredResponsiveValue<AlignY>;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  component?: (typeof validColumnsComponents)[number];
  data?: DataAttributeMap;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
  align = 'left',
  alignY,
  component = 'div',
  data,
  ...restProps
}: ColumnsProps) => {
  const normalizedSpace = normalizeResponsiveValue(space);
  const {
    mobile: mobileSpace = 'none',
    tablet: tabletSpace = mobileSpace,
    desktop: desktopSpace = tabletSpace,
    wide: wideSpace = desktopSpace,
  } = normalizedSpace;

  const collapsibleAlignmentProps = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    reverse,
  });

  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  const defaultAlignY = alignYToFlexAlign(alignY) || 'stretch';
  const normalizedAlignY = normalizeResponsiveValue(defaultAlignY);
  const {
    mobile: alignItemsMobile = 'stretch',
    tablet: alignItemsTablet = alignItemsMobile,
    desktop: alignItemsDesktop = alignItemsTablet,
    wide: alignItemsWide = alignItemsDesktop,
  } = normalizedAlignY;

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      alignItems={
        collapseBelow
          ? optimizeResponsiveArray([
              collapseMobile ? 'stretch' : alignItemsMobile,
              collapseTablet ? 'stretch' : alignItemsTablet,
              collapseDesktop ? 'stretch' : alignItemsDesktop,
              alignItemsWide,
            ])
          : defaultAlignY
      }
      className={negativeMargin('left', {
        mobile: collapseMobile ? 'none' : mobileSpace,
        tablet: collapseTablet ? 'none' : tabletSpace,
        desktop: collapseDesktop ? 'none' : desktopSpace,
        wide: wideSpace,
      })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <ColumnsContext.Provider
        value={{
          collapseMobile,
          collapseTablet,
          collapseDesktop,
          mobileSpace,
          tabletSpace,
          desktopSpace,
          wideSpace,
          align,
        }}
      >
        {children}
      </ColumnsContext.Provider>
    </Box>
  );
};
