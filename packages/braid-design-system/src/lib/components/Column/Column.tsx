import React, { type ReactNode, useContext } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/ColumnsContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  resolveResponsiveRangeProps,
  type ResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import * as styles from './Column.css';

export interface ColumnProps {
  children: ReactNode;
  width?: keyof typeof styles.width | 'content';
  hideBelow?: ResponsiveRangeProps['below'];
  hideAbove?: ResponsiveRangeProps['above'];
  data?: DataAttributeMap;
}

export const Column = ({
  children,
  data,
  width,
  hideBelow,
  hideAbove,
  ...restProps
}: ColumnProps) => {
  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    wideSpace,
    collapsibleAlignmentChildProps,
    component,
  } = useContext(ColumnsContext);
  const [hideOnMobile, hideOnTablet, hideOnDesktop, hideOnWide] =
    resolveResponsiveRangeProps({
      below: hideBelow,
      above: hideAbove,
    });

  return (
    <Box
      component={component}
      display={optimizeResponsiveArray([
        hideOnMobile ? 'none' : 'block',
        hideOnTablet ? 'none' : 'block',
        hideOnDesktop ? 'none' : 'block',
        hideOnWide ? 'none' : 'block',
      ])}
      minWidth={0}
      width={width !== 'content' ? 'full' : undefined}
      flexShrink={width === 'content' ? 0 : undefined}
      flexGrow={1}
      className={[
        styles.column,
        width !== 'content' ? styles.width[width!] : null,
      ]}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        component={component}
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
