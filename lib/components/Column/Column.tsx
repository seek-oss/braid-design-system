import React, { ReactNode, useContext } from 'react';
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
  const {
    collapseMobile,
    collapseTablet,
    mobileSpace,
    tabletSpace,
    desktopSpace,
  } = useContext(ColumnsContext);

  return (
    <Box
      width={width !== 'content' ? 'full' : undefined}
      className={[styles.column, styles.width[width!]]}
    >
      <Box
        paddingLeft={[
          collapseMobile ? 'none' : mobileSpace,
          collapseTablet ? 'none' : tabletSpace,
          desktopSpace,
        ]}
        paddingTop={
          collapseMobile || collapseTablet
            ? [
                collapseMobile ? mobileSpace : 'none',
                collapseTablet ? tabletSpace : 'none',
                'none',
              ]
            : undefined
        }
        height="full"
        className={styles.columnContent}
      >
        {children}
      </Box>
    </Box>
  );
};
