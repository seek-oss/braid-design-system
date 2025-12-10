import type { FC, ReactNode } from 'react';

import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { tone } from '../../css/typography.css';

export interface SecondaryProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Secondary: FC<SecondaryProps> = ({
  children,
  data,
  id,
  ...restProps
}) => (
  <span
    className={tone.secondary}
    id={id}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </span>
);
