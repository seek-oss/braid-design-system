import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { RadioGroupBaseProps, RadioGroupLabelProps } from './RadioGroup';
import { RadioGroup as BraidRadioGroup } from './RadioGroup';

type PlayroomRadioProps = StateProp &
  Optional<RadioGroupBaseProps, 'id' | 'value' | 'onChange'> &
  RadioGroupLabelProps;

export const RadioGroup = ({
  id,
  stateName,
  value,
  onChange,
  children,
  ...restProps
}: PlayroomRadioProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(stateName, value, onChange);

  return (
    <BraidRadioGroup
      {...restProps}
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
    >
      {children}
    </BraidRadioGroup>
  );
};
