import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  TextField as BraidTextField,
  TextFieldBaseProps,
  TextFieldLabelProps,
} from './TextField';

type PlayroomTextFieldProps = StateProp &
  Optional<TextFieldBaseProps, 'id' | 'value' | 'onChange'> &
  TextFieldLabelProps & {
    onChange?: (fakeEvent: { currentTarget: { value: string } }) => void;
  };

export const TextField = ({
  id,
  stateName,
  value,
  onChange,
  onClear,
  ...restProps
}: PlayroomTextFieldProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

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
