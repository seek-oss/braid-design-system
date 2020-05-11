import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { StackItem, StackItemProps } from '../StackItem/StackItem';
import { DividerProps } from '../Divider/Divider';
import { Align } from '../../utils/align';
import { ResponsiveProp } from '../../utils/responsiveProp';
import { UseBoxStylesProps } from '../Box/useBoxStyles';
import { Box } from '../Box/Box';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { StackContextProvider } from './StackContext';
import { useNegativeMarginTop } from '../../hooks/useNegativeMargin/useNegativeMargin';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';

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
          firstStackItem.type === StackItem
            ? resolveResponsiveRangeProps({
                above: (firstStackItem.props as StackItemProps).hiddenAbove,
                below: (firstStackItem.props as StackItemProps).hiddenBelow,
              })
            : [false, false, false];

        return (
          <StackContextProvider
            value={{
              component: stackItemComponent,
              space,
              align,
              dividers,
              dividerHiddenOnMobile,
              dividerHiddenOnTablet,
              dividerHiddenOnDesktop,
              index,
            }}
          >
            {typeof child === 'object' && child.type === StackItem ? (
              child
            ) : (
              <StackItem>{child}</StackItem>
            )}
          </StackContextProvider>
        );
      })}
    </Box>
  );
};
