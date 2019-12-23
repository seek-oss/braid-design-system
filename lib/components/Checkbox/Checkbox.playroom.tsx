import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Checkbox, CheckboxProps } from './Checkbox';

type PlayroomCheckboxProps = Optional<
  CheckboxProps,
  'id' | 'checked' | 'onChange'
>;

export const PlayroomCheckbox = ({
  id,
  checked,
  onChange,
  ...restProps
}: PlayroomCheckboxProps) => {
  const fallbackId = useFallbackId();
  const [fallbackChecked, setFallbackChecked] = useState(false);

  return (
    <Checkbox
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
