import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { RadioGroup as BraidRadioGroup, RadioGroupProps } from './RadioGroup';

type PlayroomRadioProps = Optional<
  RadioGroupProps,
  'id' | 'value' | 'onChange'
>;

export const RadioGroup = ({
  id,
  name,
  value,
  onChange,
  children,
  ...restProps
}: PlayroomRadioProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, value, onChange);

  return (
    <BraidRadioGroup
      {...restProps}
      id={id ?? fallbackId}
      name={name}
      value={state}
      onChange={handleChange}
    >
      {children}
    </BraidRadioGroup>
  );
};
