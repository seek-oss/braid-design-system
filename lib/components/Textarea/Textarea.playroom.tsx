import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Textarea as BraidTextarea, TextareaProps } from './Textarea';

type PlayroomTextareaProps = Optional<
  TextareaProps,
  'id' | 'value' | 'onChange'
>;

export const Textarea = ({
  id,
  name,
  value,
  onChange,
  ...restProps
}: PlayroomTextareaProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, value, onChange, '');

  return (
    <BraidTextarea
      id={id ?? fallbackId}
      name={name}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
