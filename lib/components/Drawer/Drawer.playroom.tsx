import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  Drawer as BraidDrawer,
  DrawerProps,
  AllowCloseContext,
} from './Drawer';

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
