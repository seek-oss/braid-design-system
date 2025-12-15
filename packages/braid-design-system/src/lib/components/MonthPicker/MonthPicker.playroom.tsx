import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type MonthPickerBaseProps,
  type MonthPickerLabelProps,
  MonthPicker as BraidMonthPicker,
} from './MonthPicker';

type PlayroomMonthPickerProps = StateProp &
  Optional<MonthPickerBaseProps, 'value' | 'onChange'> &
  MonthPickerLabelProps;

export const MonthPicker: FC<PlayroomMonthPickerProps> = ({
  stateName,
  value,
  onChange,
  tabIndex,
  ...restProps
}) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    {},
  );

  return (
    <BraidMonthPicker
      value={state}
      onChange={handleChange}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
