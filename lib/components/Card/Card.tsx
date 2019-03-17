import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';

export interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <Box paddingBottom="medium">
    <Box
      backgroundColor="card"
      paddingTop="small"
      paddingBottom="large"
      paddingLeft="gutter"
      paddingRight="gutter"
    >
      {children}
    </Box>
  </Box>
);
