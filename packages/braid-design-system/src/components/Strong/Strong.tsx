import type { ReactNode } from 'react';
import React from 'react';
import { useWeight } from '../../hooks/typography';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';

export interface StrongProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Strong = ({ children, data, id }: StrongProps) => (
  <strong
    className={useWeight('strong')}
    id={id}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    {children}
  </strong>
);
