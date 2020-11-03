import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Dropdown as BraidDropdown, DropdownProps } from './Dropdown';

type PlayroomDropdownProps = Optional<
  DropdownProps,
  'id' | 'value' | 'onChange'
> & { name?: string };

export const Dropdown = ({
  id,
  name,
  value,
  onChange,
  ...restProps
}: PlayroomDropdownProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, value, onChange, '');

  return (
    <BraidDropdown
      id={id ?? fallbackId}
      name={name}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
