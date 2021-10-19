import React from 'react';
import type { Optional } from 'utility-types';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type {
  MonthPickerBaseProps,
  MonthPickerLabelProps,
} from './MonthPicker';
import { MonthPicker as BraidMonthPicker } from './MonthPicker';

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
