import { Box, Text } from 'braid-design-system';
import type { ComponentProps } from 'react';

export const CategoryHeading = ({
  children,
  component,
}: {
  children: React.ReactNode;
  component?: ComponentProps<typeof Text>['component'];
}) => (
  <Box style={{ textTransform: 'uppercase' }}>
    <Text size="xsmall" weight="medium" component={component}>
      {children}
    </Text>
  </Box>
);
