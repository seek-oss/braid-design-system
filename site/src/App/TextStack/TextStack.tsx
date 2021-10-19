import React from 'react';
import { Stack } from '../../../../lib/components';
import type { StackProps } from '../../../../lib/components/Stack/Stack';
import type { ReactNodeNoStrings } from '../../../../lib/components/private/ReactNodeNoStrings';

interface TextStackProps {
  children: ReactNodeNoStrings;
  space?: StackProps['space'];
}

export const TextStack = ({ space = 'xlarge', children }: TextStackProps) => (
  <Stack space={space}>{children}</Stack>
);
