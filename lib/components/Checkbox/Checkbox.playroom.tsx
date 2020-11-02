import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
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
  const [state, handleChange] = useFallbackState(id, checked, onChange, false);

  return (
    <BraidCheckbox
      id={id ?? fallbackId}
      checked={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
