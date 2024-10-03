import assert from 'assert';
import React, { Children } from 'react';
import flattenChildren from '../../utils/flattenChildren';

import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export const validInlineComponents = ['div', 'span', 'ol', 'ul'] as const;

export type InlineProps = CollapsibleAlignmentProps & {
  space: ResponsiveSpace;
  component?: (typeof validInlineComponents)[number];
  data?: DataAttributeMap;
  children: ReactNodeNoStrings;
};

export const Inline = ({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse = false,
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

  assert(
    !reverse || (reverse && collapseBelow),
    'The `reverse` prop should only be applied in combination with the `collapseBelow` prop.\nIf you do not want to collapse responsively, it is recommended to reorder the order of the content directly.\n\nSee documentation for details: https://seek-oss.github.io/braid-design-system/components/Inline#reversing-the-order',
  );

  const isList = component === 'ol' || component === 'ul';
  const inlineItemComponent = isList ? 'li' : component;

  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    orderChildren,
  } = resolveCollapsibleAlignmentProps({
    align,
    alignY,
    collapseBelow,
    reverse,
  });

  return (
    <Box
      component={component === 'span' ? component : undefined}
      display={component === 'span' ? 'block' : undefined}
      className={negativeMargin('top', space)}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        component={component}
        className={negativeMargin('left', space)}
        flexWrap="wrap"
        {...collapsibleAlignmentProps}
      >
        {Children.map(orderChildren(flattenChildren(children)), (child) =>
          child !== null && child !== undefined ? (
            <Box
              component={inlineItemComponent}
              minWidth={0}
              marginLeft={space}
              marginTop={space}
              {...collapsibleAlignmentChildProps}
            >
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};
