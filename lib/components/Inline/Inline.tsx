import React, { Children } from 'react';
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

export interface InlineProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  children: ReactNodeNoStrings;
}

export const Inline = ({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse,
  children,
}: InlineProps) => {
  const negativeMarginLeft = useNegativeMarginLeft(space);
  const negativeMarginTop = useNegativeMarginTop(space);

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
        className={negativeMarginLeft}
        flexWrap="wrap"
        {...collapsibleAlignmentProps}
      >
        {Children.map(orderChildren(children), (child) =>
          child !== null && child !== undefined ? (
            <Box
              minWidth={0}
              paddingLeft={space}
              paddingTop={space}
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
