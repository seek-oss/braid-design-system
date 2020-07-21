import assert from 'assert';
import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeMarginLeft,
  useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  resolveCollapsibleAlignmentProps,
  CollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';

const validInlineComponents = ['div', 'ol', 'ul'] as const;

export interface InlineProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  component?: typeof validInlineComponents[number];
  children: ReactNodeNoStrings;
}

export const Inline = ({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse,
  component = 'div',
  children,
}: InlineProps) => {
  assert(
    validInlineComponents.includes(component),
    `Invalid Inline component: '${component}'. Should be one of [${validInlineComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const negativeMarginLeft = useNegativeMarginLeft(space);
  const negativeMarginTop = useNegativeMarginTop(space);

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
    <Box className={negativeMarginTop}>
      <Box
        component={component}
        className={negativeMarginLeft}
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
