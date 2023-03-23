import type { ReactNode } from 'react';
import React from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { fontWeight } from '../../css/typography.css';

export interface StrongProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Strong = ({ children, data, id, ...restProps }: StrongProps) => (
  <strong
    className={fontWeight.medium}
    id={id}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </strong>
);
