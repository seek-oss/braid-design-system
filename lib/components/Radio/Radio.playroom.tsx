import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Radio, RadioProps } from './Radio';

type PlayroomRadioProps = Optional<RadioProps, 'id' | 'checked' | 'onChange'>;

export const PlayroomRadio = ({
  id,
  checked,
  onChange,
  ...restProps
}: PlayroomRadioProps) => {
  const fallbackId = useFallbackId();
  const [fallbackChecked, setFallbackChecked] = useState(false);

  return (
    <Radio
      id={id ?? fallbackId}
      checked={checked ?? fallbackChecked}
      onChange={
        onChange
          ? onChange
          : event => setFallbackChecked(event.currentTarget.checked)
      }
      {...restProps}
    />
  );
};
