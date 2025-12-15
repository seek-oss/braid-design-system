import type { FC, ReactNode } from 'react';

import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { fontWeight } from '../../css/typography.css';

export interface StrongProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}

export const Strong: FC<StrongProps> = ({
  children,
  data,
  id,
  ...restProps
}) => (
  <strong
    className={fontWeight.strong}
    id={id}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </strong>
);
