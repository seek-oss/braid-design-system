import { Box, Text } from 'braid-src/index';

export const CategoryHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box style={{ textTransform: 'uppercase' }} component="li">
    <Text size="xsmall" weight="medium" component="h2">
      {children}
    </Text>
  </Box>
);
