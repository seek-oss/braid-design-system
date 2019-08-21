import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';

export interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <Box paddingBottom="medium">
    <Box
      background="card"
      paddingTop="small"
      paddingBottom="large"
      paddingX="gutter"
    >
      {children}
    </Box>
  </Box>
);
