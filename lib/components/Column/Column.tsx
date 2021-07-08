import React, { ReactNode, useContext } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
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
    collapseDesktop,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    wideSpace,
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
        paddingLeft={optimizeResponsiveArray([
          collapseMobile ? 'none' : mobileSpace,
          collapseTablet ? 'none' : tabletSpace,
          collapseDesktop ? 'none' : desktopSpace,
          wideSpace,
        ])}
        paddingTop={
          collapseMobile || collapseTablet || collapseDesktop
            ? optimizeResponsiveArray([
                collapseMobile ? mobileSpace : 'none',
                collapseTablet ? tabletSpace : 'none',
                collapseDesktop ? desktopSpace : 'none',
                'none',
              ])
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
