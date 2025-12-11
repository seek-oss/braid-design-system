import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';

import {
  type DrawerProps,
  Drawer as BraidDrawer,
  AllowCloseContext,
} from './Drawer';

type PlayroomDrawerProps = StateProp &
  Optional<DrawerProps, 'onClose' | 'open'>;

export const Drawer: FC<PlayroomDrawerProps> = ({
  stateName,
  open,
  onClose,
  ...restProps
}) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    open,
    onClose,
    false,
  );

  return (
    <AllowCloseContext.Provider
      value={onClose !== undefined || stateName !== undefined}
    >
      <BraidDrawer {...restProps} open={state} onClose={handleChange} />
    </AllowCloseContext.Provider>
  );
};
