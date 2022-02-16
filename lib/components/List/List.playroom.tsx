import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { IconClear } from '../icons';
import { List as BraidList, ListProps } from './List';

export const List = ({ space, ...props }: ListProps) => {
  const cleanSpace = cleanSpaceValue(space);
  if (props.type === 'icon' && (!('icon' in props) || !props.icon)) {
    return <BraidList {...props} space={cleanSpace} icon={<IconClear />} />;
  }

  return <BraidList space={cleanSpace} {...props} />;
};
