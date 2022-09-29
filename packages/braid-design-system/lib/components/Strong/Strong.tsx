import React, { ReactNode } from 'react';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { fontWeight } from '../../css/typography.css';

export interface StrongProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Strong = ({ children, data, id }: StrongProps) => (
  <strong
    className={fontWeight.strong}
    id={id}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    {children}
  </strong>
);
