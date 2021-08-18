import React, { ReactNode } from 'react';
import { useWeight } from '../../hooks/typography';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

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
