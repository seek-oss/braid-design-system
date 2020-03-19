import * as React from 'react';
import { useState } from 'react';
import { Optional } from 'utility-types';
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
  const [fallbackValue, setFallbackValue] = useState<DropdownProps['value']>(
    '',
  );

  return (
    <BraidDropdown
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
