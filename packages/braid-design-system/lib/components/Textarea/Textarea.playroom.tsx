import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { TextareaBaseProps, TextareaLabelProps } from './Textarea';
import { Textarea as BraidTextarea } from './Textarea';

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
