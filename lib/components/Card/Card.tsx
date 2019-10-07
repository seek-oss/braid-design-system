import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';

export interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <Box background="card" paddingX="gutter" paddingY="large">
    {children}
  </Box>
);
