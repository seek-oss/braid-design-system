import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  RadioGroup as BraidRadioGroup,
  RadioGroupBaseProps,
  RadioGroupLabelProps,
} from './RadioGroup';

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
