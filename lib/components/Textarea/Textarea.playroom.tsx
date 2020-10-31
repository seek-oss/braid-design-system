import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId, usePrototypingState, noop } from '../../playroom/utils';
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
  const [fallbackValue, setFallbackValue] = usePrototypingState(id, '');

  return (
    <BraidTextarea
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={value ?? onChange ? onChange ?? noop : setFallbackValue}
      {...restProps}
    />
  );
};
