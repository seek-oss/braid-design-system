import React, { ReactNode } from 'react';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { tone } from '../../css/typography.css';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Secondary = ({ children, data, id }: SecondaryProps) => (
  <span
    className={tone.secondary}
    id={id}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    {children}
  </span>
);
