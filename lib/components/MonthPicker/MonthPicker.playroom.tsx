import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  MonthPicker as BraidMonthPicker,
  MonthPickerProps,
} from './MonthPicker';

type PlayroomMonthPickerProps = Optional<
  MonthPickerProps,
  'id' | 'value' | 'onChange'
>;

export const MonthPicker = ({
  id,
  value,
  onChange,
  ...restProps
}: PlayroomMonthPickerProps) => {
  const fallbackId = useFallbackId();
  const [fallbackValue, setFallbackValue] = useState<MonthPickerProps['value']>(
    {},
  );

  return (
    <BraidMonthPicker
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={onChange ? onChange : setFallbackValue}
      {...restProps}
    />
  );
};
