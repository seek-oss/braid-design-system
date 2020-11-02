import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  PasswordField as BraidPasswordField,
  PasswordFieldProps,
} from './PasswordField';

type PlayroomPasswordFieldProps = Optional<
  PasswordFieldProps,
  'id' | 'value' | 'onChange'
>;

export const PasswordField = ({
  id,
  value,
  onChange,
  ...restProps
}: PlayroomPasswordFieldProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(id, value, onChange, '');

  return (
    <BraidPasswordField
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
