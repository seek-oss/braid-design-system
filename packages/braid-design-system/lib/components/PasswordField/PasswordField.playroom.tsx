import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type {
  PasswordFieldBaseProps,
  PasswordFieldLabelProps,
} from './PasswordField';
import { PasswordField as BraidPasswordField } from './PasswordField';

type PlayroomPasswordFieldProps = StateProp &
  Optional<PasswordFieldBaseProps, 'id' | 'value' | 'onChange'> &
  PasswordFieldLabelProps;

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
