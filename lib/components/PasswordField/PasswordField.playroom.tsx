import React, { useState } from 'react';
import { Optional } from 'utility-types';
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
  const [fallbackValue, setFallbackValue] = useState('');

  return (
    <BraidPasswordField
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={
        onChange
          ? onChange
          : (event) => setFallbackValue(event.currentTarget.value)
      }
      {...restProps}
    />
  );
};
