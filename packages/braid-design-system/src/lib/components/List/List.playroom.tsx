import type { FC } from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { IconClear } from '../icons';

import { type ListProps, List as BraidList } from './List';

export const List: FC<ListProps> = ({ space, ...props }) => {
  const cleanSpace = cleanSpaceValue(space);
  if (props.type === 'icon' && (!('icon' in props) || !props.icon)) {
    return <BraidList {...props} space={cleanSpace} icon={<IconClear />} />;
  }

  return <BraidList space={cleanSpace} {...props} />;
};
