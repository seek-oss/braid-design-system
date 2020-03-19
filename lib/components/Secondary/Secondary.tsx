import * as React from 'react';
import { ReactNode } from 'react';
import { useTextTone } from '../../hooks/typography';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
}

export const Secondary = ({ children, id }: SecondaryProps) => (
  <span className={useTextTone({ tone: 'secondary' })} id={id}>
    {children}
  </span>
);
