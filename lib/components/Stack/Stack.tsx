import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import { Divider, DividerProps } from '../Divider/Divider';
import { Hidden, HiddenProps } from '../Hidden/Hidden';
import { alignToFlexAlign, Align } from '../../utils/align';
import { mapResponsiveProp, ResponsiveProp } from '../../utils/responsiveProp';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { useNegativeMarginTop } from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

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
  const stackClasses = useStackItem({ component, space, align });
  const firstStackItem = stackItems[0];
  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';
  const negativeMarginTop = useNegativeMarginTop(space);

  let firstVisibleItemOnMobile: number | null = null;
  let firstVisibleItemOnTablet: number | null = null;
  let firstVisibleItemOnDesktop: number | null = null;

  if (dividers) {
    if (typeof firstStackItem !== 'object' || firstStackItem.type !== Hidden) {
      firstVisibleItemOnMobile = 0;
      firstVisibleItemOnTablet = 0;
      firstVisibleItemOnDesktop = 0;
    } else {
      for (let i = 0; i < stackItems.length; i++) {
        const stackItem = stackItems[i];

        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop] =
          typeof stackItem === 'object' && stackItem.type === Hidden
            ? resolveResponsiveRangeProps({
                above: (stackItem.props as HiddenProps).above,
                below: (stackItem.props as HiddenProps).below,
              })
            : [false, false, false];

        if (!hiddenOnMobile && firstVisibleItemOnMobile === null) {
          firstVisibleItemOnMobile = i;
        }

        if (!hiddenOnTablet && firstVisibleItemOnTablet === null) {
          firstVisibleItemOnTablet = i;
        }

        if (!hiddenOnDesktop && firstVisibleItemOnDesktop === null) {
          firstVisibleItemOnDesktop = i;
        }

        if (
          firstVisibleItemOnMobile !== null &&
          firstVisibleItemOnTablet !== null &&
          firstVisibleItemOnDesktop !== null
        ) {
          break;
        }
      }
    }
  }

  return (
    <Box component={component} className={negativeMarginTop}>
      {Children.map(stackItems, (child, index) => {
        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop] =
          typeof child === 'object' && child.type === Hidden
            ? resolveResponsiveRangeProps({
                above: (child.props as HiddenProps).above,
                below: (child.props as HiddenProps).below,
              })
            : [false, false, false];

        return (
          <Box
            component={stackItemComponent}
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
                  index === firstVisibleItemOnMobile ? 'none' : 'block',
                  index === firstVisibleItemOnTablet ? 'none' : 'block',
                  index === firstVisibleItemOnDesktop ? 'none' : 'block',
                ]}
              >
                {typeof dividers === 'string' ? (
                  <Divider weight={dividers} />
                ) : (
                  <Divider />
                )}
              </Box>
            ) : null}
            {typeof child === 'object' && child.type === Hidden
              ? (child.props as HiddenProps).children
              : child}
          </Box>
        );
      })}
    </Box>
  );
};
