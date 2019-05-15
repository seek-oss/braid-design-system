import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

export interface BulletProps {
  children?: ReactNode;
}

export const Bullet = ({ children }: BulletProps) => (
  <Text component="li">
    <Box display="block" component="span" paddingBottom="xsmall">
      {children}
    </Box>
  </Text>
);
