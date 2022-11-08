import React from 'react';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import type { BoxProps } from '../Box/Box';
import { Box } from '../Box/Box';

export const validBleedComponents = ['div', 'span'] as const;

export interface BleedProps {
  children: BoxProps['children'];
  space?: ResponsiveSpace;
  horizontal?: ResponsiveSpace;
  vertical?: ResponsiveSpace;
  top?: ResponsiveSpace;
  bottom?: ResponsiveSpace;
  left?: ResponsiveSpace;
  right?: ResponsiveSpace;
  component?: typeof validBleedComponents[number];
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
  component = 'div',
}: BleedProps) => (
  <Box
    component={component}
    display={component === 'span' ? 'block' : undefined}
    className={[
      negativeMargin('top', top || vertical || space),
      negativeMargin('bottom', bottom || vertical || space),
      negativeMargin('left', left || horizontal || space),
      negativeMargin('right', right || horizontal || space),
    ]}
  >
    <Box
      component={component}
      display={component === 'span' ? 'block' : undefined}
      position="relative"
    >
      {children}
    </Box>
  </Box>
);
