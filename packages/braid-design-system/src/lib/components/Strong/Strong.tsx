import type { ReactNode } from 'react';

import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { fontWeight } from '../../css/typography.css';

export interface StrongProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Strong = ({ children, data, id, ...restProps }: StrongProps) => (
  <strong
    className={fontWeight.strong}
    id={id}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </strong>
);
