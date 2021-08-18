import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Checkbox as BraidCheckbox, CheckboxProps } from './Checkbox';

type PlayroomCheckboxProps = StateProp &
  Optional<CheckboxProps, 'id' | 'checked' | 'onChange'>;

export const Checkbox = ({
  id,
  stateName,
  checked,
  onChange,
  ...restProps
}: PlayroomCheckboxProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    checked,
    onChange,
    false,
  );

  return (
    <BraidCheckbox
      id={id ?? fallbackId}
      checked={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
