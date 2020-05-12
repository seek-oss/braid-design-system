import React, { Children, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import { Divider, DividerProps } from '../Divider/Divider';
import { Hidden, HiddenProps } from '../Hidden/Hidden';
import * as hiddenStyleRefs from '../Hidden/Hidden.treat';
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

const extractHiddenPropsFromChild = (child: ReactNode) =>
  child && typeof child === 'object' && 'type' in child && child.type === Hidden
    ? (child.props as HiddenProps)
    : null;

const resolveHiddenProps = ({ screen, above, below }: HiddenProps) =>
  screen
    ? [true, true, true]
    : resolveResponsiveRangeProps({
        above,
        below,
      });

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

  const hiddenStyles = useStyles(hiddenStyleRefs);
  const stackClasses = useStackItem({ component, space, align });
  const stackItems = flattenChildren(children);
  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';
  const negativeMarginTop = useNegativeMarginTop(space);

  let firstItemOnMobile: number | null = null;
  let firstItemOnTablet: number | null = null;
  let firstItemOnDesktop: number | null = null;

  return (
    <Box component={component} className={negativeMarginTop}>
      {Children.map(stackItems, (child, index) => {
        if (
          process.env.NODE_ENV !== 'production' &&
          typeof child === 'object' &&
          child.type === Hidden &&
          (child.props as HiddenProps).inline !== undefined
        ) {
          throw new Error(
            'The "inline" prop is invalid on Hidden elements within a Stack',
          );
        }

        const hiddenProps = extractHiddenPropsFromChild(child);
        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop] = hiddenProps
          ? resolveHiddenProps(hiddenProps)
          : [false, false, false];

        if (firstItemOnMobile === null && !hiddenOnMobile) {
          firstItemOnMobile = index;
        }

        if (firstItemOnTablet === null && !hiddenOnTablet) {
          firstItemOnTablet = index;
        }

        if (firstItemOnDesktop === null && !hiddenOnDesktop) {
          firstItemOnDesktop = index;
        }

        return (
          <Box
            component={stackItemComponent}
            className={[
              stackClasses,
              hiddenProps && hiddenProps.print
                ? hiddenStyles.hiddenOnPrint
                : null,
            ]}
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
                  index === firstItemOnMobile ? 'none' : 'block',
                  index === firstItemOnTablet ? 'none' : 'block',
                  index === firstItemOnDesktop ? 'none' : 'block',
                ]}
              >
                {typeof dividers === 'string' ? (
                  <Divider weight={dividers} />
                ) : (
                  <Divider />
                )}
              </Box>
            ) : null}
            {hiddenProps ? hiddenProps.children : child}
          </Box>
        );
      })}
    </Box>
  );
};
