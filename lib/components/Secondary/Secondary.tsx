import React, { ReactNode } from 'react';
import { useTextColor } from '../../hooks/typography';

export interface SecondaryProps {
  children: ReactNode;
}

export const Secondary = ({ children }: SecondaryProps) => (
  <span className={useTextColor('secondary')}>{children}</span>
);
