import React from 'react';
import type { NoticeProps } from './Notice';
import { Notice as BraidNotice } from './Notice';

export const Notice = ({ tone, ...restProps }: NoticeProps) => (
  <BraidNotice
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
