import React, { Fragment, Children } from 'react';
import { useStyles } from 'sku/react-treat';
import flattenChildren from 'react-keyed-flatten-children';
import assert from 'assert';
import { Divider, DividerProps } from '../Divider/Divider';
import { Align, alignToFlexAlign } from '../../utils/align';
import { ResponsiveProp, mapResponsiveProp } from '../../utils/responsiveProp';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import * as styleRefs from './Stack.treat';
import { Box } from '../Box/Box';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

export interface UseStackProps {
  align: ResponsiveProp<Align>;
  component: UseBoxStylesProps['component'];
  space: UseBoxStylesProps['paddingBottom'];
}

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export const useStackItem = ({ align, component, space }: UseStackProps) => {
  const styles = useStyles(styleRefs);

  return useBoxStyles({
    component,
    className: styles.excludingLast,
    paddingBottom: space,
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
  space,
  align = 'left',
  dividers = false,
}: StackProps) => {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: ${component}`,
  );

  const stackClasses = useStackItem({ component, space, align });
  const stackItems = flattenChildren(children);

  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';

  if (stackItems.length <= 1 && align === 'left' && !isList) {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <Box component={component}>
      {Children.map(stackItems, (child, index) => (
        <Box
          component={stackItemComponent}
          className={dividers ? undefined : stackClasses}
        >
          {dividers && index > 0 ? (
            <Box width="full" paddingY={space}>
              {typeof dividers === 'string' ? (
                <Divider weight={dividers} />
              ) : (
                <Divider />
              )}
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  );
};
