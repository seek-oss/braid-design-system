import React, { ReactNode } from 'react';
import { useWeight } from '../../hooks/typography';

export interface StrongProps {
  children: ReactNode;
}

export const Strong = ({ children }: StrongProps) => (
  <strong className={useWeight('strong')}>{children}</strong>
);
