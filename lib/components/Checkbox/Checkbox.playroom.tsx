import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Checkbox as BraidCheckbox, CheckboxProps } from './Checkbox';

type PlayroomCheckboxProps = Optional<
  CheckboxProps,
  'id' | 'checked' | 'onChange'
> & { name?: string };

export const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  ...restProps
}: PlayroomCheckboxProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    name,
    checked,
    onChange,
    false,
  );

  return (
    <BraidCheckbox
      id={id ?? fallbackId}
      name={name}
      checked={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
