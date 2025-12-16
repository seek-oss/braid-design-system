import assert from 'assert';

import type { FC, ReactNode } from 'react';

import { type BoxProps, Box } from '../Box/Box';
import { Keyline } from '../private/Keyline/Keyline';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export const validCardComponents = [
  'div',
  'article',
  'aside',
  'details',
  'main',
  'section',
] as const;

const borderRadius = 'large';

export type CardProps = {
  children: ReactNode;
  tone?: 'promote' | 'formAccent';
  component?: (typeof validCardComponents)[number];
  height?: Extract<BoxProps['height'], 'full'> | 'content';
  data?: DataAttributeMap;
};

export const Card: FC<CardProps> = ({
  children,
  component = 'div',
  tone,
  data,
  height,
  ...restProps
}) => {
  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  return (
    <Box
      component={component}
      position="relative"
      background="surface"
      padding="gutter"
      borderRadius={borderRadius}
      boxShadow="borderNeutralLight"
      height={height === 'full' ? height : undefined}
      textAlign="left"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {tone ? <Keyline tone={tone} borderRadius={borderRadius} /> : null}
      {children}
    </Box>
  );
};
