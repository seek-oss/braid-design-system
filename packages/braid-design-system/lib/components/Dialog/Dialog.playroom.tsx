import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { AllowCloseContext } from '../private/Modal/Modal';
import { Dialog as BraidDialog, DialogProps } from './Dialog';

type PlayroomDialogProps = StateProp &
  Optional<DialogProps, 'id' | 'onClose' | 'open'>;

export const Dialog = ({
  id,
  stateName,
  open,
  onClose,
  ...restProps
}: PlayroomDialogProps) => {
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
      <BraidDialog
        id={id ?? fallbackId}
        open={state}
        onClose={handleChange}
        {...restProps}
      />
    </AllowCloseContext.Provider>
  );
};
