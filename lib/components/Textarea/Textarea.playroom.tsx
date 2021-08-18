import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  Textarea as BraidTextarea,
  TextareaBaseProps,
  TextareaLabelProps,
} from './Textarea';

type PlayroomTextareaProps = StateProp &
  Optional<TextareaBaseProps, 'id' | 'value' | 'onChange'> &
  TextareaLabelProps;

export const Textarea = ({
  id,
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomTextareaProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidTextarea
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      autoComplete="off"
      {...restProps}
    />
  );
};
