import * as React from 'react';
import { ReactNode } from 'react';
import { useWeight } from '../../hooks/typography';

export interface StrongProps {
  children: ReactNode;
  id?: string;
}

export const Strong = ({ children, id }: StrongProps) => (
  <strong className={useWeight('strong')} id={id}>
    {children}
  </strong>
);
