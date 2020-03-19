import * as React from 'react';
import { ReactNode } from 'react';
import { Box } from '../Box/Box';

export interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <Box background="card" paddingX="gutter" paddingY="large">
    {children}
  </Box>
);
