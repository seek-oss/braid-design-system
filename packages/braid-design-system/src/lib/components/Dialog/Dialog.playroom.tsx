import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { AllowCloseContext } from '../private/Modal/Modal';

import { type DialogProps, Dialog as BraidDialog } from './Dialog';

type PlayroomDialogProps = StateProp &
  Optional<DialogProps, 'onClose' | 'open'>;

export const Dialog: FC<PlayroomDialogProps> = ({
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
      <BraidDialog open={state} onClose={handleChange} {...restProps} />
    </AllowCloseContext.Provider>
  );
};
