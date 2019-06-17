import React, { ReactNode } from 'react';
import { useTextColor } from '../../hooks/typography';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
}

export const Secondary = ({ children, id }: SecondaryProps) => (
  <span className={useTextColor('secondary')} id={id}>
    {children}
  </span>
);
