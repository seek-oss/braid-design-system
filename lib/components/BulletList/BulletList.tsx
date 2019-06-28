import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';

export interface BulletListProps {
  children: ReactNode;
}

export const BulletList = ({ children }: BulletListProps) => (
  <Box component="ul">{children}</Box>
);
