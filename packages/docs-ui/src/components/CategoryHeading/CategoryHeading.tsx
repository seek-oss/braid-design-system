import { Box, Text } from 'braid-design-system';
import type { ComponentProps } from 'react';

type CategoryHeadingProps = {
  children: React.ReactNode;
  component?: ComponentProps<typeof Text>['component'];
};

export const CategoryHeading = ({
  children,
  component,
}: CategoryHeadingProps) => (
  <Box component={component} display="flex" gap="xsmall" alignItems="center">
    <Text size="xsmall" weight="medium">
      <Box style={{ textTransform: 'uppercase' }}>{children}</Box>
    </Text>
  </Box>
);
