import React, { Children, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import flattenChildren from 'react-keyed-flatten-children';
import { Box, BoxProps } from '../Box/Box';
import { Divider, DividerProps } from '../Divider/Divider';
import { Hidden, HiddenProps } from '../Hidden/Hidden';
import * as hiddenStyleRefs from '../Hidden/Hidden.treat';
import { alignToFlexAlign, Align } from '../../utils/align';
import {
  mapResponsiveProp,
  normaliseResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { useNegativeMarginTop } from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

interface UseStackItemProps {
  align: ResponsiveProp<Align>;
  space: BoxProps['paddingTop'];
}

const useStackItem = ({ align, space }: UseStackItemProps) => ({
  paddingTop: space,
  // If we're aligned left across all screen sizes,
  // there's actually no alignment work to do.
  ...(align === 'left'
    ? null
    : {
        display: mapResponsiveProp(align, alignToDisplay) || 'flex',
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
    ? ([true, true, true] as const)
    : resolveResponsiveRangeProps({
        above,
        below,
      });

const calculateHiddenStackItemProps = (
  stackItemProps: ReturnType<typeof useStackItem>,
  [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop]: Readonly<
    [boolean, boolean, boolean]
  >,
) => {
  const [
    displayMobile,
    displayTablet,
    displayDesktop,
  ] = normaliseResponsiveProp(
    'display' in stackItemProps ? stackItemProps.display : 'block',
  );

  return {
    ...stackItemProps,
    display: [
      hiddenOnMobile ? 'none' : displayMobile,
      hiddenOnTablet ? 'none' : displayTablet,
      hiddenOnDesktop ? 'none' : displayDesktop,
    ],
  } as const;
};

export interface StackProps {
  component?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: BoxProps['paddingTop'];
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
  const stackItemProps = useStackItem({ space, align });
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
        const hidden = hiddenProps
          ? resolveHiddenProps(hiddenProps)
          : ([false, false, false] as const);
        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop] = hidden;

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
              hiddenProps && hiddenProps.print
                ? hiddenStyles.hiddenOnPrint
                : null,
            ]}
            {...(hiddenOnMobile || hiddenOnTablet || hiddenOnDesktop
              ? calculateHiddenStackItemProps(stackItemProps, hidden)
              : stackItemProps)}
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
