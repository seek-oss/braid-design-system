import type { ReactNode } from 'react';
import React from 'react';
import { useTextTone } from '../../hooks/typography';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';

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
