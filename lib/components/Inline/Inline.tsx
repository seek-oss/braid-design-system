import assert from 'assert';
import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../../css/atoms/atoms';
import {
  negativeMarginLeft,
  negativeMarginTop,
} from '../../css/negativeMargin/negativeMargin';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  resolveCollapsibleAlignmentProps,
  CollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export const validInlineComponents = ['div', 'ol', 'ul'] as const;

export interface InlineProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  component?: typeof validInlineComponents[number];
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
}: InlineProps) => {
  assert(
    validInlineComponents.includes(component),
    `Invalid Inline component: '${component}'. Should be one of [${validInlineComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const isList = component === 'ol' || component === 'ul';
  const inlineItemComponent = isList ? 'li' : 'div';

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
      className={negativeMarginTop(space)}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box
        component={component}
        className={negativeMarginLeft(space)}
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
