import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import type { OverflowMenuProps } from './OverflowMenu';
import { OverflowMenu as BraidOverflowMenu } from './OverflowMenu';

export const OverflowMenu = ({ id, ...restProps }: OverflowMenuProps) => {
  const fallbackId = useFallbackId();
  return <BraidOverflowMenu id={id ?? fallbackId} {...restProps} />;
};
