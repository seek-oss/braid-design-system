import React, { Children, ReactElement, createContext } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';

export const ColumnsContext = createContext({ index: -1 });

export interface ColumnsProps {
  children: Array<ReactElement<ColumnProps>> | ReactElement<ColumnProps>;
}

export const Columns = ({ children }: ColumnsProps) => (
  <Box display={['block', 'flex']}>
    {Children.map(children, (child, index) => (
      <ColumnsContext.Provider value={{ index }}>
        {child}
      </ColumnsContext.Provider>
    ))}
  </Box>
);
