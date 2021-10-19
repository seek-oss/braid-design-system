import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { DropdownBaseProps, DropdownLabelProps } from './Dropdown';
import { Dropdown as BraidDropdown } from './Dropdown';

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
