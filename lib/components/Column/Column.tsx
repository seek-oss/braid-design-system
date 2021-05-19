import React, { ReactNode, useContext } from 'react';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/Columns';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Column.css';

export interface ColumnProps {
  children: ReactNode;
  width?: keyof typeof styles.width | 'content';
  data?: DataAttributeMap;
}

export const Column = ({ children, data, width }: ColumnProps) => {
  const {
    collapseMobile,
    collapseTablet,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    collapsibleAlignmentChildProps,
  } = useContext(ColumnsContext);

  return (
    <Box
      minWidth={0}
      width={width !== 'content' ? 'full' : undefined}
      flexShrink={width === 'content' ? 0 : undefined}
      className={[
        styles.column,
        width !== 'content' ? styles.width[width!] : null,
      ]}
      {...(data ? buildDataAttributes(data) : undefined)}
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
        {...collapsibleAlignmentChildProps}
        className={styles.columnContent}
      >
        {children}
      </Box>
    </Box>
  );
};
