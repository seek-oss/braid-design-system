import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';

import { type CheckboxProps, Checkbox as BraidCheckbox } from './Checkbox';

type PlayroomCheckboxProps = StateProp &
  Optional<CheckboxProps, 'checked' | 'onChange'>;

export const Checkbox: FC<PlayroomCheckboxProps> = ({
  stateName,
  checked,
  onChange,
  ...restProps
}) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    checked,
    onChange,
    false,
  );

  return (
    <BraidCheckbox checked={state} onChange={handleChange} {...restProps} />
  );
};
