import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  MonthPicker as BraidMonthPicker,
  MonthPickerProps,
} from './MonthPicker';

type PlayroomMonthPickerProps = Optional<
  MonthPickerProps,
  'id' | 'value' | 'onChange'
> & { name?: string };

export const MonthPicker = ({
  id,
  name,
  value,
  onChange,
  ...restProps
}: PlayroomMonthPickerProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(name, value, onChange, {});

  return (
    <BraidMonthPicker
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
