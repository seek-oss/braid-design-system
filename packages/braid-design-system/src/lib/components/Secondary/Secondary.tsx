import type { ReactNode } from 'react';
import React from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { tone } from '../../css/typography.css';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Secondary = ({
  children,
  data,
  id,
  ...restProps
}: SecondaryProps) => (
  <span
    className={tone.secondary}
    id={id}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </span>
);
