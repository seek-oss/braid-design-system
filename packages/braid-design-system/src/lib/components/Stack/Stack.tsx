import type { FC } from 'react';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { type Align, alignToFlexAlign } from '../../utils/align';
import { Box } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';

type ValidStackComponent =
  | 'div'
  | 'span'
  | 'p'
  | 'article'
  | 'section'
  | 'main'
  | 'nav'
  | 'aside'
  | 'ul'
  | 'ol'
  | 'li'
  | 'details'
  | 'summary'
  | 'dd'
  | 'dl'
  | 'dt';

export interface StackProps {
  component?: ValidStackComponent;
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
  data?: DataAttributeMap;
}

export const Stack: FC<StackProps> = ({
  component = 'div',
  children,
  space = 'none',
  align: alignProp,
  data,
  ...restProps
}) => {
  /**
   * Creating a seam between the provided prop and the default value
   * to enable only setting the text alignment when the `align` prop
   * is provided — not when it's defaulted.
   */
  const align = alignProp || 'left';

  return (
    <Box
      component={component}
      display="flex"
      flexDirection="column"
      gap={space}
      alignItems={align !== 'left' ? alignToFlexAlign(align) : undefined}
      textAlign={alignProp}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
