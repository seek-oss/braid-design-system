import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  Drawer as BraidDrawer,
  DrawerProps,
  AllowCloseContext,
} from './Drawer';

type PlayroomDrawerProps = Optional<DrawerProps, 'id' | 'onClose' | 'open'> & {
  name?: string;
};

export const Drawer = ({
  id,
  name,
  open,
  onClose,
  ...restProps
}: PlayroomDrawerProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, open, onClose, false);

  return (
    <AllowCloseContext.Provider
      value={onClose !== undefined || name !== undefined}
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
