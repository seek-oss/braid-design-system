import React, { Children, ReactElement, createContext, useMemo } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { Space, ResponsiveSpace } from '../Box/useBoxStyles';
import { useNegativeMarginLeft } from '../../hooks/useNegativeMargin/useNegativeMargin';
import {
  normaliseResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';
import { AlignY, alignYToFlexAlign } from '../../utils/align';

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
}
export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseMobile: false,
  collapseTablet: false,
  mobileSpace: 'none',
  tabletSpace: 'none',
  desktopSpace: 'none',
});

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
  collapseBelow?: ResponsiveRangeProps['below'];
  reverse?: boolean;
  alignY?: ResponsiveProp<AlignY>;
  space: ResponsiveSpace;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
  alignY,
}: ColumnsProps) => {
  const [mobileSpace, tabletSpace, desktopSpace] = normaliseResponsiveProp(
    space,
  );

  const [collapseMobile, collapseTablet] = resolveResponsiveRangeProps({
    below: collapseBelow,
  });

  // Prevent re-renders when context values haven't changed
  const columnsContextValue = useMemo(
    () => ({
      collapseMobile,
      collapseTablet,
      mobileSpace,
      tabletSpace,
      desktopSpace,
    }),
    [collapseMobile, collapseTablet, mobileSpace, tabletSpace, desktopSpace],
  );

  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const reverseDocumentOrder = !collapseMobile && !collapseTablet && reverse;

  const negativeMarginLeft = useNegativeMarginLeft([
    collapseMobile ? 'none' : mobileSpace,
    collapseTablet ? 'none' : tabletSpace,
    desktopSpace,
  ]);

  return (
    <Box
      display="flex"
      alignItems={alignYToFlexAlign(alignY)}
      flexDirection={[
        collapseMobile ? 'column' : 'row',
        // eslint-disable-next-line no-nested-ternary
        collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
        rowReverseDesktop ? 'rowReverse' : 'row',
      ]}
      className={negativeMarginLeft}
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {reverseDocumentOrder ? Children.toArray(children).reverse() : children}
      </ColumnsContext.Provider>
    </Box>
  );
};
