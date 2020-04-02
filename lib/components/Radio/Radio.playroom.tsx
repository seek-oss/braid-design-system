import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Radio as BraidRadio, RadioProps } from './Radio';

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
