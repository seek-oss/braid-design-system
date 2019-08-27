import React, { Children, ReactElement, createContext } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { SpaceX } from '../../hooks/useBox';

const defaultCollapse = false;
const defaultReverse = false;
const defaultGutters = 'large';

interface ColumnsContext {
  index: number;
  collapse: boolean;
  reverse: boolean;
  gutters: SpaceX;
}
export const ColumnsContext = createContext<ColumnsContext>({
  index: -1,
  collapse: defaultCollapse,
  reverse: defaultReverse,
  gutters: defaultGutters,
});

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
  collapse?: boolean;
  reverse?: boolean;
  gutters?: SpaceX;
}

export const Columns = ({
  children,
  collapse = defaultCollapse,
  reverse = defaultReverse,
  gutters = defaultGutters,
}: ColumnsProps) => {
  const shouldReverseDesktop = collapse && reverse;
  const shouldReverseEverywhere = !collapse && reverse;

  const orderedChildren = shouldReverseEverywhere
    ? Children.toArray(children).reverse()
    : Children.toArray(children);

  return (
    <Box
      display="flex"
      flexDirection={[
        collapse ? 'column' : 'row',
        shouldReverseDesktop ? 'rowReverse' : 'row',
      ]}
    >
      {orderedChildren.map((child, index) => (
        <ColumnsContext.Provider
          value={{ collapse, reverse: shouldReverseDesktop, index, gutters }}
        >
          {child}
        </ColumnsContext.Provider>
      ))}
    </Box>
  );
};
