import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { TextField as BraidTextField, TextFieldProps } from './TextField';

type PlayroomTextFieldProps = Optional<
  TextFieldProps,
  'id' | 'value' | 'onChange'
> & {
  onChange?: (fakeEvent: { currentTarget: { value: string } }) => void;
};

export const TextField = ({
  id,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomTextFieldProps) => {
  const fallbackId = useFallbackId();
  const [fallbackValue, setFallbackValue] = useState('');

  return (
    <BraidTextField
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={
        onChange
          ? onChange
          : (event) => setFallbackValue(event.currentTarget.value)
      }
      onClear={
        onClear ??
        (() =>
          onChange
            ? onChange({ currentTarget: { value: '' } })
            : setFallbackValue(''))
      }
      {...restProps}
    />
  );
};
