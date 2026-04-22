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
  <Box display="flex" gap="xsmall" component="span" alignItems="center">
    <Box style={{ textTransform: 'uppercase' }} component={component}>
      <Text size="xsmall" weight="medium">
        {children}
      </Text>
    </Box>
    {badge}
  </Box>
);
