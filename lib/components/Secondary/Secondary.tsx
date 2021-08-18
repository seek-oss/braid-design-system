import React, { ReactNode } from 'react';
import { useTextTone } from '../../hooks/typography';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Secondary = ({ children, data, id }: SecondaryProps) => (
  <span
    className={useTextTone({ tone: 'secondary' })}
    id={id}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    {children}
  </span>
);
