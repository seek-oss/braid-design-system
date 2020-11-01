import React from 'react';
import { Optional } from 'utility-types';
import { usePlayroomStore } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  Drawer as BraidDrawer,
  DrawerProps,
  AllowCloseContext,
} from './Drawer';

type PlayroomDrawerProps = Optional<DrawerProps, 'id' | 'onClose' | 'open'> & {
  name?: string;
};
const noop = () => {};

export const Drawer = ({
  id,
  name,
  open = false,
  onClose,
  ...restProps
}: PlayroomDrawerProps) => {
  const fallbackId = useFallbackId();
  const playroomState = usePlayroomStore();

  return (
    <AllowCloseContext.Provider value={onClose !== undefined || Boolean(id)}>
      <BraidDrawer
        id={id ?? fallbackId}
        {...restProps}
        open={id ? playroomState.getState(id) : open}
        onClose={onClose ?? (id ? playroomState.setState(id) : noop)}
      />
    </AllowCloseContext.Provider>
  );
};
