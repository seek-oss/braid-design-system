import React, { useState } from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { MonthPicker, MonthPickerProps } from './MonthPicker';

type PlayroomMonthPickerProps = Optional<
  MonthPickerProps,
  'id' | 'value' | 'onChange'
>;

export const PlayroomMonthPicker = ({
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
    <MonthPicker
      id={id ?? fallbackId}
      value={value ?? fallbackValue}
      onChange={onChange ? onChange : setFallbackValue}
      {...restProps}
    />
  );
};
