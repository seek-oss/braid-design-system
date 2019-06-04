import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import { ColumnsContext } from '../Columns/Columns';
import { Box } from '../Box/Box';
import * as styleRefs from './Column.treat';

export interface ColumnProps {
  children: ReactNode;
}

export const Column = ({ children }: ColumnProps) => {
  const styles = useStyles(styleRefs);
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
