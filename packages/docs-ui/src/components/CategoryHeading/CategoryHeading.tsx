import { type Badge, Box, Text } from 'braid-design-system';
import type { ComponentProps } from 'react';

type BadgeProps = ComponentProps<typeof Badge>;

type CategoryHeadingProps = {
  children: React.ReactNode;
  component?: ComponentProps<typeof Text>['component'];
  badge?: React.ReactElement<BadgeProps>;
};

export const CategoryHeading = ({
  children,
  component,
  badge,
}: CategoryHeadingProps) => (
  <Box
    style={{ textTransform: 'uppercase' }}
    component={component}
    display="flex"
    gap="xsmall"
    alignItems="center"
  >
    <Text size="xsmall" weight="medium">
      {children}
    </Text>

    {badge}
  </Box>
);
