import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  MonthPicker as BraidMonthPicker,
  MonthPickerBaseProps,
  MonthPickerLabelProps,
} from './MonthPicker';

type PlayroomMonthPickerProps = StateProp &
  Optional<MonthPickerBaseProps, 'id' | 'value' | 'onChange'> &
  MonthPickerLabelProps;

export const MonthPicker = ({
  id,
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomMonthPickerProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    {},
  );

  return (
    <BraidMonthPicker
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      {...restProps}
    />
  );
};
