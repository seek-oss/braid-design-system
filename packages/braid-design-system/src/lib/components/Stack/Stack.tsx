import React from 'react';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { type Align, alignToFlexAlign } from '../../utils/align';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

const validStackComponents = [
  'div',
  'span',
  'p',
  'article',
  'section',
  'main',
  'nav',
  'aside',
  'ul',
  'ol',
  'li',
  'details',
  'summary',
  'dd',
  'dl',
  'dt',
] as const;

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
}: StackProps) => (
  <Box
    component={component}
    display="flex"
    flexDirection="column"
    gap={space}
    alignItems={align !== 'left' ? alignToFlexAlign(align) : undefined}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </Box>
);
