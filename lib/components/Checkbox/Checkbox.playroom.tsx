import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId, usePrototypingState, noop } from '../../playroom/utils';
import { Checkbox as BraidCheckbox, CheckboxProps } from './Checkbox';

type PlayroomCheckboxProps = Optional<
  CheckboxProps,
  'id' | 'checked' | 'onChange'
>;

export const Checkbox = ({
  id,
  checked,
  onChange,
  ...restProps
}: PlayroomCheckboxProps) => {
  const fallbackId = useFallbackId();
  const [fallbackChecked, setFallbackChecked] = usePrototypingState(id, false);
  const controlled = (checked ?? onChange) !== undefined;

  return (
    <BraidCheckbox
      id={id ?? fallbackId}
      checked={checked ?? fallbackChecked}
      onChange={controlled ? onChange || noop : setFallbackChecked}
      {...restProps}
    />
  );
};
