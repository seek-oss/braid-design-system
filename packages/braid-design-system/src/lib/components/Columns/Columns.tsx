import assert from 'assert';
import React, { type ReactElement } from 'react';
import { Box } from '../Box/Box';
import type { ColumnProps } from '../Column/Column';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Columns.css';
import {
  normalizeResponsiveValue,
  type RequiredResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import { alignYToFlexAlign, type AlignYWithFill } from '../../utils/align';
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
  alignY?: RequiredResponsiveValue<AlignYWithFill>;
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
  align,
  alignY,
  component = 'div',
  data,
  ...restProps
}: ColumnsProps) => {
  assert(
    validColumnsComponents.includes(component),
    `Invalid Columns component: '${component}'. Should be one of [${validColumnsComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const collapsibleAlignmentProps = resolveCollapsibleAlignmentProps({
    space,
    collapseBelow,
    align,
    reverse,
  });

  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  const defaultAlignY = alignYToFlexAlign(alignY) || 'flexStart';
  const normalizedAlignY = normalizeResponsiveValue(defaultAlignY);
  const {
    mobile: alignItemsMobile = 'flexStart',
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
      className={styles.columns}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
