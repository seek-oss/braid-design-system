import type { FC } from 'react';

import { type AlertProps, Alert as BraidAlert } from './Alert';

export const Alert: FC<AlertProps> = ({ tone, ...restProps }) => (
  <BraidAlert
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
