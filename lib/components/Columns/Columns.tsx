import React, { Children, ReactElement, createContext, useMemo } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { Space, ResponsiveSpace } from '../Box/useBoxStyles';
import { useNegativeOffsetX } from '../../hooks/useNegativeOffset/useNegativeOffset';

const defaultCollapse = false;
const defaultReverse = false;
const defaultSpace = 'none';

interface ColumnsContextValue {
  collapse: boolean;
  mobileSpace: Space;
  desktopSpace: Space;
}
export const ColumnsContext = createContext<ColumnsContextValue>({
  collapse: defaultCollapse,
  mobileSpace: defaultSpace,
  desktopSpace: defaultSpace,
});

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
  collapse?: boolean;
  reverse?: boolean;
  space: ResponsiveSpace;
}

export const Columns = ({
  children,
  collapse = defaultCollapse,
  reverse = defaultReverse,
  space = defaultSpace,
}: ColumnsProps) => {
  const [mobileSpace, desktopSpace] = Array.isArray(space)
    ? space
    : [space, space];

  // Prevent re-renders when context values haven't changed
  const columnsContextValue = useMemo(
    () => ({ collapse, mobileSpace, desktopSpace }),
    [collapse, mobileSpace, desktopSpace],
  );

  const shouldReverseDesktop = collapse && reverse;
  const shouldReverseEverywhere = !collapse && reverse;
  const negativeOffsetX = useNegativeOffsetX([
    collapse ? 'none' : mobileSpace,
    desktopSpace,
  ]);

  return (
    <Box
      display="flex"
      flexDirection={[
        collapse ? 'column' : 'row',
        shouldReverseDesktop ? 'rowReverse' : 'row',
      ]}
      className={negativeOffsetX}
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {shouldReverseEverywhere
          ? Children.toArray(children).reverse()
          : children}
      </ColumnsContext.Provider>
    </Box>
  );
};
