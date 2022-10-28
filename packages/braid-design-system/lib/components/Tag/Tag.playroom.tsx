import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import type { TagProps } from './Tag';
import { Tag as BraidTag } from './Tag';

export const Tag = ({ icon, id, ...restProps }: TagProps) => {
  const fallbackId = useFallbackId();
  return (
    <BraidTag
      id={id ?? fallbackId}
      icon={typeof icon !== 'boolean' ? icon : undefined}
      {...restProps}
    />
  );
};
