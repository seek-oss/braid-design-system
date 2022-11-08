import React, { useState } from 'react';
import type { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import type { RadioProps } from './Radio';
import { Radio as BraidRadio } from './Radio';

type PlayroomRadioProps = Optional<RadioProps, 'id' | 'checked' | 'onChange'>;

export const Radio = ({
  id,
  checked,
  onChange,
  ...restProps
}: PlayroomRadioProps) => {
  const fallbackId = useFallbackId();
  const [fallbackChecked, setFallbackChecked] = useState(false);

  return (
    <BraidRadio
      id={id ?? fallbackId}
      checked={checked ?? fallbackChecked}
      onChange={
        onChange
          ? onChange
          : (event) => setFallbackChecked(event.currentTarget.checked)
      }
      {...restProps}
    />
  );
};
