import React, { createContext, ReactElement } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { Space, ResponsiveSpace } from '../Box/useBoxStyles';
import { useNegativeMarginLeft } from '../../hooks/useNegativeMargin/useNegativeMargin';
import { normaliseResponsiveProp } from '../../utils/responsiveProp';
import {
  resolveCollapsibleAlignmentProps,
  CollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type CollapsibleAlignmentChildProps = ReturnType<
  typeof resolveCollapsibleAlignmentProps
>['collapsibleAlignmentChildProps'];

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
  collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | null;
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseMobile: false,
  collapseTablet: false,
  mobileSpace: 'none',
  tabletSpace: 'none',
  desktopSpace: 'none',
  collapsibleAlignmentChildProps: null,
});

export interface ColumnsProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  data?: DataAttributeMap;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
  align,
  alignY,
  data,
}: ColumnsProps) => {
  const [mobileSpace, tabletSpace, desktopSpace] = normaliseResponsiveProp(
    space,
  );

  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    collapseMobile,
    collapseTablet,
    orderChildren,
  } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    alignY,
    reverse,
  });

  const negativeMarginLeft = useNegativeMarginLeft([
    collapseMobile ? 'none' : mobileSpace,
    collapseTablet ? 'none' : tabletSpace,
    desktopSpace,
  ]);

  return (
    <Box
      {...collapsibleAlignmentProps}
      className={negativeMarginLeft}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <ColumnsContext.Provider
        value={{
          collapseMobile,
          collapseTablet,
          mobileSpace,
          tabletSpace,
          desktopSpace,
          collapsibleAlignmentChildProps,
        }}
      >
        {orderChildren(children)}
      </ColumnsContext.Provider>
    </Box>
  );
};
