import React from 'react';

import { type NoticeProps, Notice as BraidNotice } from './Notice';

export const Notice = ({ tone, ...restProps }: NoticeProps) => (
  <BraidNotice
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
