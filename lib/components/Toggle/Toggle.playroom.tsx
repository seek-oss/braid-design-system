import * as React from 'react';
import { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Toggle as BraidToggle, ToggleProps } from './Toggle';

type PlayroomToggleProps = Optional<ToggleProps, 'id' | 'on' | 'onChange'>;

export const Toggle = ({
  id,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => {
  const fallbackId = useFallbackId();
  const [fallbackOn, setFallbackOn] = useState(false);

  return (
    <BraidToggle
      id={id ?? fallbackId}
      on={on ?? fallbackOn}
      onChange={onChange ? onChange : setFallbackOn}
      {...restProps}
    />
  );
};
