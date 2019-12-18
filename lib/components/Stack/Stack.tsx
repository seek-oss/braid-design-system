import React, { ReactNode, Children, Fragment } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Divider } from '../Divider/Divider';
import { Align, alignToFlexAlign } from '../../utils/align';
import { ResponsiveProp, mapResponsiveProp } from '../../utils/responsiveProp';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import * as styleRefs from './Stack.treat';
import { Box } from '../Box/Box';

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

export interface StackProps {
  children: ReactNode;
  space: UseBoxStylesProps['padding'];
  align?: ResponsiveProp<Align>;
  dividers?: boolean;
}

export const Stack = ({
  children,
  space,
  align = 'left',
  dividers = false,
}: StackProps) => {
  const stackClasses = useStackItem({ component: 'div', space, align });
  const stackItems = Children.toArray(children);

  if (stackItems.length <= 1 && align === 'left') {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <div>
      {stackItems.map((child, index) => (
        <div className={dividers ? undefined : stackClasses} key={index}>
          {dividers && index > 0 ? (
            <Box width="full" paddingY={space}>
              <Divider />
            </Box>
          ) : null}
          {child}
        </div>
      ))}
    </div>
  );
};
