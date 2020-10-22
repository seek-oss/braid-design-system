import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { RadioGroup as BraidRadioGroup, RadioGroupProps } from './RadioGroup';

type PlayroomRadioProps = Optional<
  RadioGroupProps,
  'id' | 'value' | 'name' | 'onChange'
>;

export const RadioGroup = ({
  id,
  name,
  value,
  onChange,
  children,
  ...restProps
}: PlayroomRadioProps) => {
  const fallbackName = useFallbackId();
  const fallbackId = useFallbackId();
  const [fallbackValue, setFallbackValue] = useState<RadioGroupProps['value']>(
    '',
  );

  return (
    <BraidRadioGroup
      {...restProps}
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      name={name ?? fallbackName}
      onChange={
        onChange ? onChange : (e) => setFallbackValue(e.currentTarget.value)
      }
    >
      {children}
    </BraidRadioGroup>
  );
};
