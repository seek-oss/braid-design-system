import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  Dropdown as BraidDropdown,
  DropdownBaseProps,
  DropdownLabelProps,
} from './Dropdown';

type PlayroomDropdownProps = StateProp &
  Optional<DropdownBaseProps, 'id' | 'value' | 'onChange'> &
  DropdownLabelProps;

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
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
