import React from 'react';

import { Box, type BoxProps } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Inline.css';

export const validInlineComponents = ['div', 'span', 'ol', 'ul'] as const;

export interface InlineProps extends CollapsibleAlignmentProps {
  component?: BoxProps['component'];
  data?: DataAttributeMap;
  children: ReactNodeNoStrings;
}

export const Inline = ({
  space = 'none',
  align,
  alignY = 'fill',
  collapseBelow,
  reverse,
  component = 'div',
  data,
  children,
  ...restProps
}: InlineProps) => {
  const collapsibleAlignmentProps = resolveCollapsibleAlignmentProps({
    space,
    align,
    alignY,
    collapseBelow,
    reverse,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      className={styles.fitContent}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
