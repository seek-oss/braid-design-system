import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId, usePrototypingState, noop } from '../../playroom/utils';
import { AllowCloseContext } from '../private/Modal/Modal';
import { Dialog as BraidDialog, DialogProps } from './Dialog';

type PlayroomDialogProps = Optional<DialogProps, 'id' | 'onClose' | 'open'>;

export const Dialog = ({
  id,
  open,
  onClose,
  ...restProps
}: PlayroomDialogProps) => {
  const fallbackId = useFallbackId();
  const [fallbackOpen, setFallbackOpen] = usePrototypingState(id, false);

  return (
    <AllowCloseContext.Provider value={onClose !== undefined || Boolean(id)}>
      <BraidDialog
        id={id ?? fallbackId}
        {...restProps}
        open={open ?? fallbackOpen}
        onClose={open ?? onClose ? onClose ?? noop : setFallbackOpen}
      />
    </AllowCloseContext.Provider>
  );
};
