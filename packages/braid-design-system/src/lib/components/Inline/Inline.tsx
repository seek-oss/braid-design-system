import {
  resolveCollapsibleAlignmentProps,
  type CollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Box } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import flattenChildren from '../../utils/flattenChildren';
import { Children } from 'react';
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
  const { collapsibleAlignmentProps } = resolveCollapsibleAlignmentProps({
    align,
    alignY,
    collapseBelow,
    reverse,
  });

  const isList = component === 'ol' || component === 'ul';

  return (
    <Box
      component={component}
      display="flex"
      gap={space}
      flexWrap="wrap"
      {...collapsibleAlignmentProps}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {Children.map(flattenChildren(children), (child) => {
        if (isList) {
          return <Box component="li">{child}</Box>;
        }

        return child;
      })}
    </Box>
  );
};
