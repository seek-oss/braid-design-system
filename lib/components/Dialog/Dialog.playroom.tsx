import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { AllowCloseContext } from '../private/Modal/Modal';
import { Dialog as BraidDialog, DialogProps } from './Dialog';

type PlayroomDialogProps = Optional<DialogProps, 'id' | 'onClose' | 'open'> & {
  name?: string;
};

export const Dialog = ({
  id,
  name,
  open,
  onClose,
  ...restProps
}: PlayroomDialogProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, open, onClose, false);

  return (
    <AllowCloseContext.Provider value={onClose !== undefined || Boolean(id)}>
      <BraidDialog
        id={id ?? fallbackId}
        {...restProps}
        open={state}
        onClose={handleChange}
      />
    </AllowCloseContext.Provider>
  );
};
