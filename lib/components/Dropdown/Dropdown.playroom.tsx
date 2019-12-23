import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Dropdown, DropdownProps } from './Dropdown';

type PlayroomDropdownProps = Optional<
  DropdownProps,
  'id' | 'value' | 'onChange'
>;

export const PlayroomDropdown = ({
  id,
  value,
  onChange,
  ...restProps
}: PlayroomDropdownProps) => {
  const fallbackId = useFallbackId();
  const [fallbackValue, setFallbackValue] = useState<DropdownProps['value']>(
    '',
  );

  return (
    <Dropdown
      id={id ?? fallbackId}
      value={value === undefined ? fallbackValue : value}
      onChange={
        onChange
          ? onChange
          : event => setFallbackValue(event.currentTarget.value)
      }
      {...restProps}
    />
  );
};
