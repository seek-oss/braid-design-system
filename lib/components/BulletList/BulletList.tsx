import React, { ReactNode } from 'react';
import Box from '../Box/Box';

export interface BulletListProps {
  children?: ReactNode;
}

const BulletList = ({ children }: BulletListProps) => (
  <Box component="ul">{children}</Box>
);

BulletList.displayName = 'BulletList';

export default BulletList;
