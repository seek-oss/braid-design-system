import assert from 'assert';
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

export const validInlineComponents = ['div', 'span', 'ol', 'ul'] as const;

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
  assert(
    validInlineComponents.includes(component),
    `Invalid Inline component: '${component}'. Should be one of [${validInlineComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const { collapsibleAlignmentProps } = resolveCollapsibleAlignmentProps({
    align,
    alignY,
    collapseBelow,
    reverse,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      display="flex"
      gap={space}
      flexWrap="wrap"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
