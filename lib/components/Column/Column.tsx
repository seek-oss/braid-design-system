import React, { ReactNode, useContext } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/react-treat';
import { ClassRef } from 'sku/treat';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/Columns';
import * as styleRefs from './Column.treat';

type Size =
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | 'fit';

export interface ColumnProps {
  children: ReactNode;
  size?: Size;
}

export const Column = ({ children, size }: ColumnProps) => {
  const styles = useStyles(styleRefs);
  const { index, collapse, reverse, gutters } = useContext(ColumnsContext);
  const hasGutter = gutters !== 'none' && index > 0;
  const flipGutter = hasGutter && reverse;

  const sizeMap: Record<Size, ClassRef | ClassRef[]> = {
    '1/2': styles.half,
    '1/3': styles.third,
    '2/3': styles.twoThirds,
    '1/4': styles.quarter,
    '2/4': styles.half,
    '3/4': styles.threeQuarters,
    '1/5': styles.fifth,
    '2/5': styles.twoFifths,
    '3/5': styles.threeFifths,
    '4/5': styles.fourFifths,
    fit: styles.fit,
  };

  return (
    <Box
      marginLeft={
        hasGutter
          ? [collapse ? 'none' : gutters, flipGutter ? 'none' : gutters]
          : undefined
      }
      marginRight={flipGutter ? ['none', gutters] : undefined}
      width={size !== 'fit' ? 'full' : undefined}
      className={classnames(styles.column, sizeMap[size!])}
    >
      {children}
    </Box>
  );
};
