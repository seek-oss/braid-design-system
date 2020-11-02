import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Dropdown as BraidDropdown, DropdownProps } from './Dropdown';

type PlayroomDropdownProps = Optional<
  DropdownProps,
  'id' | 'value' | 'onChange'
>;

export const Dropdown = ({
  id,
  value,
  onChange,
  ...restProps
}: PlayroomDropdownProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(id, value, onChange, '');

  return (
    <BraidDropdown
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
