import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import {
  OverflowMenu as BraidOverflowMenu,
  OverflowMenuProps,
} from './OverflowMenu';

export const OverflowMenu = ({ id, ...restProps }: OverflowMenuProps) => {
  const fallbackId = useFallbackId();
  return <BraidOverflowMenu id={id ?? fallbackId} {...restProps} />;
};
