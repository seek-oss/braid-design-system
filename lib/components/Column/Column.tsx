import React, { ReactNode, useContext } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/Columns';
import * as styleRefs from './Column.treat';

export interface ColumnProps {
  children: ReactNode;
  width?: keyof typeof styleRefs.width;
}

export const Column = ({ children, width }: ColumnProps) => {
  const styles = useStyles(styleRefs);
  const { collapse, mobileSpace, desktopSpace } = useContext(ColumnsContext);

  return (
    <Box
      width={width !== 'content' ? 'full' : undefined}
      className={classnames(styles.column, styles.width[width!])}
    >
      <Box
        paddingLeft={[collapse ? 'none' : mobileSpace, desktopSpace]}
        paddingTop={collapse ? [mobileSpace, 'none'] : undefined}
        height="full"
        className={styles.columnContent}
      >
        {children}
      </Box>
    </Box>
  );
};
