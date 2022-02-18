import React from 'react';
import { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
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
      negativeMargin('top', top || vertical || space),
      negativeMargin('bottom', bottom || vertical || space),
      negativeMargin('left', left || horizontal || space),
      negativeMargin('right', right || horizontal || space),
    ]}
  >
    <Box position="relative">{children}</Box>
  </Box>
);
