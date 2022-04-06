import React from 'react';
import { Tag as BraidTag, TagProps } from './Tag';

export const Tag = ({ icon, ...restProps }: TagProps) => (
  <BraidTag
    icon={typeof icon !== 'boolean' ? icon : undefined}
    {...restProps}
  />
);
