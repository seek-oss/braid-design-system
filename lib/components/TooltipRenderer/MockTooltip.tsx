import React from 'react';
import { TooltipContent, TooltipRendererProps } from './TooltipRenderer';
import { Box } from '../Box/Box';
import { constants } from './TooltipRenderer.treat';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

export const MockTooltip = ({
  placement,
  children,
}: {
  placement: TooltipRendererProps['placement'];
  children: ReactNodeNoStrings;
}) => (
  <Box data-popper-placement={placement}>
    <TooltipContent
      opacity={100}
      arrowProps={{
        'data-popper-arrow': true,
        style: {
          position: 'absolute',
          left: '50%',
          transform: `translateX(${-constants.arrowSize / 2}px)`,
        },
      }}
    >
      {children}
    </TooltipContent>
  </Box>
);
