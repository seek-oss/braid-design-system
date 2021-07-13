import React from 'react';
import { Notice as BraidNotice, NoticeProps } from './Notice';

export const Notice = ({ tone, ...restProps }: NoticeProps) => (
  <BraidNotice
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
