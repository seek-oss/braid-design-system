import React, { ReactNode, Children, createElement, Fragment } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Divider } from '../Divider/Divider';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';
import * as styleRefs from './Stack.treat';
import { Box } from '../Box/Box';

export interface UseStackProps {
  component: UseBoxStylesProps['component'];
  space: UseBoxStylesProps['paddingBottom'];
}

export const useStackItem = ({ component, space }: UseStackProps) => {
  const styles = useStyles(styleRefs);

  return classnames(
    useBoxStyles({ component, paddingBottom: space }),
    styles.excludingLast,
  );
};

export interface StackProps {
  children: ReactNode;
  space: UseBoxStylesProps['padding'];
  dividers?: boolean;
}
export const Stack = ({ children, space, dividers = false }: StackProps) => {
  const itemComponent = 'div';
  const stackClasses = useStackItem({
    component: itemComponent,
    space,
  });
  const stackItems = Children.toArray(children);

  if (stackItems.length <= 1) {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <div>
      {stackItems.map((child, index) =>
        createElement(itemComponent, {
          key: index,
          className: dividers ? undefined : stackClasses,
          children: [
            child,
            dividers && index !== stackItems.length - 1 ? (
              <Box paddingY={space}>
                <Divider />
              </Box>
            ) : null,
          ],
        }),
      )}
    </div>
  );
};
