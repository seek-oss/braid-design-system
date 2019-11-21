import React, { Children, ReactElement, createContext, useMemo } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { Space, ResponsiveSpace } from '../Box/useBoxStyles';
import { useNegativeOffsetX } from '../../hooks/useNegativeOffset/useNegativeOffset';
import { normaliseResponsiveProp } from '../../utils/responsiveProp';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';

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
  space: ResponsiveSpace;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
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

  const negativeOffsetX = useNegativeOffsetX([
    collapseMobile ? 'none' : mobileSpace,
    collapseTablet ? 'none' : tabletSpace,
    desktopSpace,
  ]);

  return (
    <Box
      display="flex"
      flexDirection={[
        collapseMobile ? 'column' : 'row',
        collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
        rowReverseDesktop ? 'rowReverse' : 'row',
      ]}
      className={negativeOffsetX}
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {reverseDocumentOrder ? Children.toArray(children).reverse() : children}
      </ColumnsContext.Provider>
    </Box>
  );
};
