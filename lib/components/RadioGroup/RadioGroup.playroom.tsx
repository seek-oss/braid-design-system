import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId, usePrototypingState } from '../../playroom/utils';
import { RadioGroup as BraidRadioGroup, RadioGroupProps } from './RadioGroup';

const noop = () => {};

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
  const [fallbackValue, setFallbackValue] = usePrototypingState(id, '');

  return (
    <BraidRadioGroup
      {...restProps}
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={value ?? onChange ? onChange ?? noop : setFallbackValue}
    >
      {children}
    </BraidRadioGroup>
  );
};
