import { Box, Text } from 'braid-design-system';
import type { ComponentProps, ReactNode } from 'react';

type CategoryHeadingProps = {
  children: ReactNode;
  component?: ComponentProps<typeof Text>['component'];
};

export const CategoryHeading = ({
  children,
  component,
}: CategoryHeadingProps) => (
  <Text size="xsmall" weight="medium" component={component}>
    <Box style={{ textTransform: 'uppercase' }}>{children}</Box>
  </Text>
);
