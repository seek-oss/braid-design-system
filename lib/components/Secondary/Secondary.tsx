import React, { ReactNode } from 'react';
import { useTextTone } from '../../hooks/typography';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
}

export const Secondary = ({ children, id }: SecondaryProps) => (
  <span className={useTextTone('secondary')} id={id}>
    {children}
  </span>
);
