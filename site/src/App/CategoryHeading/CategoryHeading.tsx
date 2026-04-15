import { Box, Text } from 'braid-design-system';
import type { ElementType } from 'react';

export const CategoryHeading = ({
  children,
  component,
}: {
  children: React.ReactNode;
  component?: ElementType;
}) => (
  <Box style={{ textTransform: 'uppercase' }}>
    <Text size="xsmall" weight="medium" component={component}>
      {children}
    </Text>
  </Box>
);
