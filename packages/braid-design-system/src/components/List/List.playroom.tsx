import React from 'react';

import { IconClear } from '../icons';
import type { ListProps } from './List';
import { List as BraidList } from './List';

export const List = (props: ListProps) => {
  if (props.type === 'icon' && (!('icon' in props) || !props.icon)) {
    return <BraidList {...props} icon={<IconClear />} />;
  }

  return <BraidList {...props} />;
};
