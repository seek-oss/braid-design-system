import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Toggle, ToggleProps } from './Toggle';

type PlayroomToggleProps = Optional<ToggleProps, 'id' | 'on' | 'onChange'>;

export const PlayroomToggle = ({
  id,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const fallbackId = useFallbackId();
  const [fallbackOn, setFallbackOn] = useState(false);

  return (
    <Toggle
      id={id ?? fallbackId}
      on={on ?? fallbackOn}
      onChange={onChange ? onChange : setFallbackOn}
      {...restProps}
    />
  );
};
