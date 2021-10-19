import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { DrawerProps } from './Drawer';
import { Drawer as BraidDrawer, AllowCloseContext } from './Drawer';

type PlayroomDrawerProps = StateProp &
  Optional<DrawerProps, 'id' | 'onClose' | 'open'>;

export const Drawer = ({
  id,
  stateName,
  open,
  onClose,
  ...restProps
}: PlayroomDrawerProps) => {
  const fallbackId = useFallbackId();
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
      <BraidDrawer
        id={id ?? fallbackId}
        {...restProps}
        open={state}
        onClose={handleChange}
      />
    </AllowCloseContext.Provider>
  );
};
