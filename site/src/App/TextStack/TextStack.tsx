import { Stack } from 'braid-design-system';
import type { ComponentProps } from 'react';

type StackProps = ComponentProps<typeof Stack>;

interface TextStackProps {
  children: StackProps['children'];
  space?: StackProps['space'];
}

export const TextStack = ({ space = 'xlarge', children }: TextStackProps) => (
  <Stack space={space}>{children}</Stack>
);
