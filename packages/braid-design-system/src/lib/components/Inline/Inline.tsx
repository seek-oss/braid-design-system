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
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';

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

  const [collapseMobile, collapseTablet, collapseDesktop, collapseWide] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      className={
        collapseBelow
          ? {
              [styles.fitContentMobile]: !collapseMobile,
              [styles.fitContentTablet]: !collapseTablet,
              [styles.fitContentDesktop]: !collapseDesktop,
              [styles.fitContentWide]: !collapseWide,
            }
          : styles.fitContentMobile
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
