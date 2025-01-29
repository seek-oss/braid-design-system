import { useFallbackId } from '../../playroom/utils';

import {
  type OverflowMenuProps,
  OverflowMenu as BraidOverflowMenu,
} from './OverflowMenu';

export const OverflowMenu = ({ id, ...restProps }: OverflowMenuProps) => {
  const fallbackId = useFallbackId();
  return <BraidOverflowMenu id={id ?? fallbackId} {...restProps} />;
};
