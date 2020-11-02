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
  value,
  onChange,
  ...restProps
}: PlayroomTextareaProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(id, value, onChange, '');

  return (
    <BraidTextarea
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
