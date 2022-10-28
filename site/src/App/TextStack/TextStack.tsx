import React from 'react';
import { Stack } from 'braid-src/lib/components';
import type { StackProps } from 'braid-src/lib/components/Stack/Stack';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';

interface TextStackProps {
  children: ReactNodeNoStrings;
  space?: StackProps['space'];
}

export const TextStack = ({ space = 'xlarge', children }: TextStackProps) => (
  <Stack space={space}>{children}</Stack>
);
