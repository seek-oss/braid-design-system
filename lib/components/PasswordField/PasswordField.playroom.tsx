import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  PasswordField as BraidPasswordField,
  PasswordFieldProps,
} from './PasswordField';

type PlayroomPasswordFieldProps = StateProp &
  Optional<PasswordFieldProps, 'id' | 'value' | 'onChange'>;

export const PasswordField = ({
  id,
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomPasswordFieldProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidPasswordField
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      autoComplete="off"
      {...restProps}
    />
  );
};
