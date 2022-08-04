import React from 'react';
import { Stack } from 'braid-design-system/lib/components';
import { StackProps } from 'braid-design-system/lib/components/Stack/Stack';
import { ReactNodeNoStrings } from 'braid-design-system/lib/components/private/ReactNodeNoStrings';

interface TextStackProps {
  children: ReactNodeNoStrings;
  space?: StackProps['space'];
}

export const TextStack = ({ space = 'xlarge', children }: TextStackProps) => (
  <Stack space={space}>{children}</Stack>
);
