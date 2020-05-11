import React, { ReactNode } from 'react';
import { Box } from '../';
import { useStackContext, StackContextProvider } from '../Stack/StackContext';
import { Divider } from '../Divider/Divider';
import {
  ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';
import { ResponsiveProp, mapResponsiveProp } from '../../utils/responsiveProp';
import { Align, alignToFlexAlign } from '../../utils/align';
import { UseBoxStylesProps, useBoxStyles } from '../Box/useBoxStyles';

export interface UseStackItemProps {
  align: ResponsiveProp<Align>;
  component: UseBoxStylesProps['component'];
  space: UseBoxStylesProps['paddingBottom'];
}

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export const useStackItem = ({ align, component, space }: UseStackItemProps) =>
  useBoxStyles({
    component,
    paddingTop: space,
    // If we're aligned left across all screen sizes,
    // there's actually no alignment work to do.
    ...(align === 'left'
      ? {}
      : {
          display: mapResponsiveProp(align, alignToDisplay),
          flexDirection: 'column',
          alignItems: alignToFlexAlign(align),
        }),
  });

export interface StackItemProps {
  children: ReactNode;
  hiddenAbove?: ResponsiveRangeProps['above'];
  hiddenBelow?: ResponsiveRangeProps['below'];
}

export const StackItem = ({
  children,
  hiddenAbove,
  hiddenBelow,
}: StackItemProps) => {
  const stackContextValue = useStackContext();

  if (!stackContextValue) {
    throw new Error('StackItem must be direct child of Stack');
  }

  const {
    index,
    component,
    space,
    align,
    dividers,
    dividerHiddenOnMobile,
    dividerHiddenOnTablet,
    dividerHiddenOnDesktop,
  } = stackContextValue;
  const stackClasses = useStackItem({ component, space, align });

  const [
    hiddenOnMobile,
    hiddenOnTablet,
    hiddenOnDesktop,
  ] = resolveResponsiveRangeProps({ above: hiddenAbove, below: hiddenBelow });

  return (
    <Box
      component={component}
      className={stackClasses}
      display={[
        hiddenOnMobile ? 'none' : 'block',
        hiddenOnTablet ? 'none' : 'block',
        hiddenOnDesktop ? 'none' : 'block',
      ]}
    >
      {dividers && index > 0 ? (
        <Box
          width="full"
          paddingBottom={space}
          display={[
            dividerHiddenOnMobile ? 'none' : 'block',
            dividerHiddenOnTablet ? 'none' : 'block',
            dividerHiddenOnDesktop ? 'none' : 'block',
          ]}
        >
          {typeof dividers === 'string' ? (
            <Divider weight={dividers} />
          ) : (
            <Divider />
          )}
        </Box>
      ) : null}
      <StackContextProvider value={null}>{children}</StackContextProvider>
    </Box>
  );
};
