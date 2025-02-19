import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { IconClear } from '../icons';

import { type ListProps, List as BraidList } from './List';

export const List = ({ space, ...props }: ListProps) => {
  const cleanSpace = cleanSpaceValue(space);
  if (props.type === 'icon' && (!('icon' in props) || !props.icon)) {
    return <BraidList {...props} space={cleanSpace} icon={<IconClear />} />;
  }

  return <BraidList space={cleanSpace} {...props} />;
};
