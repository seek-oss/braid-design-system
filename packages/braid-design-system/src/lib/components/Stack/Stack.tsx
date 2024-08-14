import React, { type ReactNode } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { type Align, alignToFlexAlign } from '../../utils/align';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

export interface StackProps {
  component?: (typeof validStackComponents)[number];
  children: ReactNode;
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

  return (
    <Box
      component={component}
      display="flex"
      flexDirection="column"
      gap={space}
      alignItems={align === 'left' ? undefined : alignToFlexAlign(align)}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
