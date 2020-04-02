import React, { useState } from 'react';
import { Optional } from 'utility-types';
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
  const [fallbackValue, setFallbackValue] = useState('');

  return (
    <BraidTextarea
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
