import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { AllowCloseContext } from '../private/Modal/Modal';
import { Dialog as BraidDialog, DialogProps } from './Dialog';

type PlayroomDialogProps = Optional<DialogProps, 'id' | 'onClose' | 'open'>;
const noop = () => {};

export const Dialog = ({
  id,
  open = false,
  onClose,
  ...restProps
}: PlayroomDialogProps) => {
  const fallbackId = useFallbackId();

  return (
    <AllowCloseContext.Provider value={onClose !== undefined}>
      <BraidDialog
        id={id ?? fallbackId}
        {...restProps}
        open={open}
        onClose={onClose ?? noop}
      />
    </AllowCloseContext.Provider>
  );
};
