import React from 'react';
import { ResponsiveSpace } from '../../css/atoms/atoms';
import {
  negativeMarginLeft,
  negativeMarginTop,
  negativeMarginRight,
  negativeMarginBottom,
} from '../../css/negativeMargin/negativeMargin';
import { Box, BoxProps } from '../Box/Box';

export interface BleedProps {
  children: BoxProps['children'];
  space?: ResponsiveSpace;
  horizontal?: ResponsiveSpace;
  vertical?: ResponsiveSpace;
  top?: ResponsiveSpace;
  bottom?: ResponsiveSpace;
  left?: ResponsiveSpace;
  right?: ResponsiveSpace;
}

export const Bleed = ({
  space,
  horizontal,
  vertical,
  top,
  bottom,
  left,
  right,
  children,
}: BleedProps) => (
  <Box
    className={[
      negativeMarginTop(top || vertical || space),
      negativeMarginBottom(bottom || vertical || space),
      negativeMarginLeft(left || horizontal || space),
      negativeMarginRight(right || horizontal || space),
    ]}
  >
    <Box position="relative">{children}</Box>
  </Box>
);
