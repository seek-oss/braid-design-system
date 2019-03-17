import React, { ReactNode, useContext } from 'react';
import { ColumnsContext } from '../Columns/Columns';
import { Box } from '../Box/Box';
import styles from './Column.css.js';

export interface ColumnProps {
  children: ReactNode;
}

export const Column = ({ children }: ColumnProps) => {
  const { index } = useContext(ColumnsContext);

  return (
    <Box
      marginLeft={['none', index === 0 ? 'none' : 'large']}
      className={styles.column}
    >
      {children}
    </Box>
  );
};
