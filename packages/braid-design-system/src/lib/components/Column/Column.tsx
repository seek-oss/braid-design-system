import React, { type ReactNode } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  resolveResponsiveRangeProps,
  type ResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import * as styles from './Column.css';

const validColumnComponents = [
  'div',
  'span',
  'p',
  'article',
  'section',
  'main',
  'nav',
  'aside',
  'ul',
  'ol',
  'li',
] as const;

export interface ColumnProps {
  component?: (typeof validColumnComponents)[number];
  children: ReactNode;
  width?: keyof typeof styles.fixedWidths | 'content';
  hideBelow?: ResponsiveRangeProps['below'];
  hideAbove?: ResponsiveRangeProps['above'];
  data?: DataAttributeMap;
}

const getClassForWidth = (width: ColumnProps['width']) => {
  if (width) {
    return width === 'content'
      ? styles.contentColumn
      : styles.fixedWidths[width];
  }

  return styles.fluidColumn;
};

export const Column = ({
  component,
  children,
  data,
  width,
  hideBelow,
  hideAbove,
  ...restProps
}: ColumnProps) => {
  const [hideOnMobile, hideOnTablet, hideOnDesktop, hideOnWide] =
    resolveResponsiveRangeProps({
      below: hideBelow,
      above: hideAbove,
    });

  return (
    <Box
      component={component}
      display={optimizeResponsiveArray([
        hideOnMobile ? 'none' : 'block',
        hideOnTablet ? 'none' : 'block',
        hideOnDesktop ? 'none' : 'block',
        hideOnWide ? 'none' : 'block',
      ])}
      className={getClassForWidth(width)}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
