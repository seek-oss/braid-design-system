import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId, usePrototypingState, noop } from '../../playroom/utils';
import { Toggle as BraidToggle, ToggleProps } from './Toggle';

type PlayroomToggleProps = Optional<ToggleProps, 'id' | 'on' | 'onChange'>;

export const Toggle = ({
  id,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const fallbackId = useFallbackId();
  const [fallbackOn, setFallbackOn] = usePrototypingState(id, false);

  return (
    <BraidToggle
      id={id ?? fallbackId}
      on={on ?? fallbackOn}
      onChange={on ?? onChange ? onChange ?? noop : setFallbackOn}
      {...restProps}
    />
  );
};
