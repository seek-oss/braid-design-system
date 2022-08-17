import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  CheckboxStandalone as BraidCheckboxStandalone,
  CheckboxStandaloneProps,
} from './CheckboxStandalone';

type PlayroomCheckboxStandaloneProps = StateProp &
  Optional<CheckboxStandaloneProps, 'id' | 'checked' | 'onChange'>;

export const CheckboxStandalone = ({
  id,
  stateName,
  checked,
  onChange,
  'aria-label': ariaLabel,
  ...restProps
}: PlayroomCheckboxStandaloneProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    checked,
    onChange,
    false,
  );

  return (
    <BraidCheckboxStandalone
      id={id ?? fallbackId}
      checked={state}
      onChange={handleChange}
      aria-label={ariaLabel ?? ''}
      {...restProps}
    />
  );
};
