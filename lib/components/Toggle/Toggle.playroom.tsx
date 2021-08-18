import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Toggle as BraidToggle, ToggleProps } from './Toggle';

type PlayroomToggleProps = StateProp &
  Optional<ToggleProps, 'id' | 'on' | 'onChange'>;

export const Toggle = ({
  id,
  stateName,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    on,
    onChange,
    false,
  );

  return (
    <BraidToggle
      id={id ?? fallbackId}
      on={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
