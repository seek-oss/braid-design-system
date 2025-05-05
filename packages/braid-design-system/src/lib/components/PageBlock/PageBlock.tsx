import type { ReactNode } from 'react';

import { Box } from '../Box/Box';
import {
  ContentBlock,
  type ContentBlockProps,
} from '../ContentBlock/ContentBlock';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export const validPageBlockComponents = [
  'div',
  'article',
  'aside',
  'main',
  'section',
  'nav',
] as const;

export const gutters = { mobile: 'small', tablet: 'gutter' } as const;

interface Props {
  children: ReactNode;
  width?:
    | Extract<ContentBlockProps['width'], 'small' | 'medium' | 'large'>
    | 'full';
  component?: (typeof validPageBlockComponents)[number];
  data?: DataAttributeMap;
}

export const PageBlock = ({
  children,
  width = 'large',
  component: componentProp,
  data,
  ...restProps
}: Props) => {
  const component =
    componentProp && validPageBlockComponents.includes(componentProp)
      ? componentProp
      : 'div';

  return (
    <Box
      width="full"
      component={component}
      paddingX={gutters}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {width === 'full' ? (
        children
      ) : (
        <ContentBlock width={width}>{children}</ContentBlock>
      )}
    </Box>
  );
};
