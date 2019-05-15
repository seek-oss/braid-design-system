import React, { ReactNode, useContext } from 'react';
import { useClassNames } from 'sku/treat';
import { ColumnsContext } from '../Columns/Columns';
import { Box } from '../Box/Box';
import * as styles from './Column.treat';

export interface ColumnProps {
  children: ReactNode;
}

export const Column = ({ children }: ColumnProps) => {
  const { index } = useContext(ColumnsContext);

  return (
    <Box
      marginLeft={['none', index === 0 ? 'none' : 'large']}
      className={useClassNames(styles.column)}
    >
      {children}
    </Box>
  );
};
