import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Textarea, TextareaProps } from './Textarea';

type PlayroomTextareaProps = Optional<
  TextareaProps,
  'id' | 'value' | 'onChange'
>;

export const PlayroomTextarea = ({
  id,
  value,
  onChange,
  ...restProps
}: PlayroomTextareaProps) => {
  const fallbackId = useFallbackId();
  const [fallbackValue, setFallbackValue] = useState('');

  return (
    <Textarea
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={
        onChange
          ? onChange
          : event => setFallbackValue(event.currentTarget.value)
      }
      {...restProps}
    />
  );
};
