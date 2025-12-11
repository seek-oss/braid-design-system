import type { FC } from 'react';

import { type NoticeProps, Notice as BraidNotice } from './Notice';

export const Notice: FC<NoticeProps> = ({ tone, ...restProps }) => (
  <BraidNotice
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
