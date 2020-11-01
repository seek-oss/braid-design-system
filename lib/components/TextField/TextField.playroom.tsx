import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { TextField as BraidTextField, TextFieldProps } from './TextField';

type PlayroomTextFieldProps = Optional<
  TextFieldProps,
  'id' | 'value' | 'onChange'
> & {
  name?: string;
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
  const [state, handleChange] = useFallbackState(id, value, onChange, '');

  return (
    <BraidTextField
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      onClear={() => {
        handleChange({ currentTarget: { value: '' } });
        onClear?.();
      }}
      autoComplete="off"
      {...restProps}
    />
  );
};
