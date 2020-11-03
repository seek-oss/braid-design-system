import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Toggle as BraidToggle, ToggleProps } from './Toggle';

type PlayroomToggleProps = Optional<ToggleProps, 'id' | 'on' | 'onChange'> & {
  name?: string;
};

export const Toggle = ({
  id,
  name,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, on, onChange, false);

  return (
    <BraidToggle
      id={id ?? fallbackId}
      on={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
