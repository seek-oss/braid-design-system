import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { CheckboxProps } from './Checkbox';
import { Checkbox as BraidCheckbox } from './Checkbox';

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
