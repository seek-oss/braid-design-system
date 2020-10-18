import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  Drawer as BraidDrawer,
  DrawerProps,
  AllowCloseContext,
} from './Drawer';

type PlayroomDrawerProps = Optional<DrawerProps, 'id' | 'onClose' | 'open'>;
const noop = () => {};

export const Drawer = ({
  id,
  open = false,
  onClose,
  ...restProps
}: PlayroomDrawerProps) => {
  const fallbackId = useFallbackId();

  return (
    <AllowCloseContext.Provider value={onClose !== undefined}>
      <BraidDrawer
        id={id ?? fallbackId}
        {...restProps}
        open={open}
        onClose={onClose ?? noop}
      />
    </AllowCloseContext.Provider>
  );
};
