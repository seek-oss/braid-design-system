import React, { Children } from 'react';
import flattenChildren from '../../utils/flattenChildren';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { type HiddenProps, Hidden } from '../Hidden/Hidden';
import { type Align, alignToFlexAlign } from '../../utils/align';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

export interface StackProps {
  component?: (typeof validStackComponents)[number];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
  data?: DataAttributeMap;
}

export const Stack = ({
  component = 'div',
  children,
  space = 'none',
  align = 'left',
  data,
  ...restProps
}: StackProps) => {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: '${component}'. Should be one of [${validStackComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const stackItems = flattenChildren(children);

  return (
    <Box
      component={component}
      display="flex"
      flexDirection="column"
      gap={space}
      alignItems={alignToFlexAlign(align)}
      width="full"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {Children.map(stackItems, (child) => {
        assert(
          !(
            typeof child === 'object' &&
            child.type === Hidden &&
            (child.props as HiddenProps).inline !== undefined
          ),
          'The "inline" prop is invalid on Hidden elements within a Stack',
        );

        return child;
      })}
    </Box>
  );
};
