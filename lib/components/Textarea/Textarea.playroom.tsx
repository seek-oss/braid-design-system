import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Textarea as BraidTextarea, TextareaProps } from './Textarea';

type PlayroomTextareaProps = StateProp &
  Optional<TextareaProps, 'id' | 'value' | 'onChange'>;

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
      {...restProps}
    />
  );
};
