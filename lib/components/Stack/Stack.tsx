import React, { Children, Fragment } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Divider } from '../Divider/Divider';
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

  return classnames(
    useBoxStyles({
      component,
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
    }),
    styles.excludingLast,
  );
};

const validStackComponents = ['div', 'ol', 'ul'] as const;

export interface StackProps {
  component?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: UseBoxStylesProps['padding'];
  align?: ResponsiveProp<Align>;
  dividers?: boolean;
}

export const Stack = ({
  component = 'div',
  children,
  space,
  align = 'left',
  dividers = false,
}: StackProps) => {
  if (
    process.env.NODE_ENV === 'development' &&
    !validStackComponents.includes(component)
  ) {
    throw new Error(`Invalid Stack component: ${component}`);
  }

  const stackClasses = useStackItem({ component, space, align });
  const stackItems = Children.toArray(children);

  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';

  if (stackItems.length <= 1 && align === 'left' && !isList) {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <Box component={component}>
      {stackItems.map((child, index) => (
        <Box
          component={stackItemComponent}
          className={dividers ? undefined : stackClasses}
          key={index}
        >
          {dividers && index > 0 ? (
            <Box width="full" paddingY={space}>
              <Divider />
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  );
};
