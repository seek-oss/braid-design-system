import React from 'react';

import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Inline.css';

export const validInlineComponents = [
  'div',
  'span',
  'p',
  'nav',
  'ul',
  'ol',
  'li',
] as const;

export interface InlineProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  component?: (typeof validInlineComponents)[number];
  data?: DataAttributeMap;
  children: ReactNodeNoStrings;
}

export const Inline = ({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse,
  component = 'div',
  data,
  children,
  ...restProps
}: InlineProps) => {
  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    collapsibleAlignmentProps,
  } = resolveCollapsibleAlignmentProps({
    align,
    alignY,
    defaultAlignItems: 'flexStart',
    collapseBelow,
    reverse,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      gap={space}
      flexWrap="wrap"
      className={
        collapseBelow
          ? {
              [styles.fitContentMobile]: !collapseMobile,
              [styles.fitContentTablet]: !collapseTablet,
              [styles.fitContentDesktop]: !collapseDesktop,
              [styles.fitContentWide]: true,
            }
          : styles.fitContentMobile
      }
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
