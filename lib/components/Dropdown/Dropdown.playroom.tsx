import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Dropdown as BraidDropdown, DropdownProps } from './Dropdown';

type PlayroomDropdownProps = StateProp &
  Optional<DropdownProps, 'id' | 'value' | 'onChange'>;

export const Dropdown = ({
  id,
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomDropdownProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

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
