import React, { Children, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { DividerProps } from '../Divider/Divider';
import { alignToFlexAlign, Align } from '../../utils/align';
import { mapResponsiveProp, ResponsiveProp } from '../../utils/responsiveProp';
import { UseBoxStylesProps } from '../Box/useBoxStyles';
import { Box } from '../Box/Box';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { useNegativeMarginTop } from '../../hooks/useNegativeMargin/useNegativeMargin';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';
import { Hidden, HiddenProps } from '../Hidden/Hidden';
import { Divider } from '../Divider/Divider';
import { useBoxStyles } from '../Box/useBoxStyles';

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
  component: 'div' | 'li';
  space: UseBoxStylesProps['paddingBottom'];
  dividers: boolean | DividerProps['weight'];
  dividerHiddenOnMobile: boolean;
  dividerHiddenOnTablet: boolean;
  dividerHiddenOnDesktop: boolean;
  align: ResponsiveProp<Align>;
  index: number;
}

export const StackItem = ({
  children,
  hiddenAbove,
  hiddenBelow,
  index,
  component,
  space,
  align,
  dividers,
  dividerHiddenOnMobile,
  dividerHiddenOnTablet,
  dividerHiddenOnDesktop,
}: StackItemProps) => {
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
      {children}
    </Box>
  );
};

const validStackComponents = ['div', 'ol', 'ul'] as const;

export interface StackProps {
  component?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: UseBoxStylesProps['padding'];
  align?: ResponsiveProp<Align>;
  dividers?: boolean | DividerProps['weight'];
}

export const Stack = ({
  component = 'div',
  children,
  space = 'none',
  align = 'left',
  dividers = false,
}: StackProps) => {
  if (
    process.env.NODE_ENV === 'development' &&
    !validStackComponents.includes(component)
  ) {
    throw new Error(`Invalid Stack component: ${component}`);
  }

  const stackItems = flattenChildren(children);
  const firstStackItem = stackItems[0];
  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';
  const negativeMarginTop = useNegativeMarginTop(space);

  return (
    <Box component={component} className={negativeMarginTop}>
      {Children.map(stackItems, (child, index) => {
        const [
          dividerHiddenOnMobile,
          dividerHiddenOnTablet,
          dividerHiddenOnDesktop,
        ] =
          dividers &&
          index === 1 &&
          typeof firstStackItem === 'object' &&
          firstStackItem.type === Hidden
            ? resolveResponsiveRangeProps({
                above: (firstStackItem.props as HiddenProps).above,
                below: (firstStackItem.props as HiddenProps).below,
              })
            : [false, false, false];

        return (
          <StackItem
            index={index}
            component={stackItemComponent}
            space={space}
            align={align}
            dividers={dividers}
            dividerHiddenOnMobile={dividerHiddenOnMobile}
            dividerHiddenOnTablet={dividerHiddenOnTablet}
            dividerHiddenOnDesktop={dividerHiddenOnDesktop}
            {...(typeof child === 'object' && child.type === Hidden
              ? {
                  hiddenBelow: (child.props as HiddenProps).below,
                  hiddenAbove: (child.props as HiddenProps).above,
                }
              : null)}
          >
            {child}
          </StackItem>
        );
      })}
    </Box>
  );
};
