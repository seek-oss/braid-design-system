import { Stack } from '../../../../lib/components';
import { StackProps } from '../../../../lib/components/Stack/Stack';
import { ReactNodeNoStrings } from '../../../../lib/components/private/ReactNodeNoStrings';

interface TextStackProps {
  children: ReactNodeNoStrings;
  space?: StackProps['space'];
}

export const TextStack = ({ space = 'xlarge', children }: TextStackProps) => (
  <Stack space={space}>{children}</Stack>
);
