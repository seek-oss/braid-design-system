import type { ReactElement } from 'react';
import assert from 'tiny-invariant';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import { Box } from '../Box/Box';
import type { ColumnProps } from '../Column/Column';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { ColumnsContext, type validColumnsComponents } from './ColumnsContext';

import { normalizeResponsiveValue } from '../../css/atoms/sprinkles.css';

export type ColumnsProps = CollapsibleAlignmentProps & {
  space: ResponsiveSpace;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  component?: (typeof validColumnsComponents)[number];
  data?: DataAttributeMap;
};

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
  assert(
    !reverse || (reverse && collapseBelow),
    'The `reverse` prop should only be applied in combination with the `collapseBelow` prop.\nIf you do not want to collapse responsively, it is recommended to reorder the content directly.\n\nSee documentation for details: https://seek-oss.github.io/braid-design-system/components/Columns#reversing-the-column-order',
  );

  const normalizedSpace = normalizeResponsiveValue(space);
  const {
    mobile: mobileSpace = 'none',
    tablet: tabletSpace = mobileSpace,
    desktop: desktopSpace = tabletSpace,
    wide: wideSpace = desktopSpace,
  } = normalizedSpace;

  const {
    collapsibleAlignmentProps,
    collapseMobile,
    collapseTablet,
    collapseDesktop,
  } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    alignY,
    reverse,
    inlineItems: false,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      height="full"
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
          component,
        }}
      >
        {children}
      </ColumnsContext.Provider>
    </Box>
  );
};
