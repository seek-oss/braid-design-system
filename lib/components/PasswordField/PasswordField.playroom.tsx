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
> & { name?: string };

export const PasswordField = ({
  id,
  name,
  value,
  onChange,
  ...restProps
}: PlayroomPasswordFieldProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, value, onChange, '');

  return (
    <BraidPasswordField
      id={id ?? fallbackId}
      name={name}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
