import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { MonthPickerProps } from './MonthPicker';
declare type PlayroomMonthPickerProps = StateProp &
  Optional<MonthPickerProps, 'id' | 'value' | 'onChange'>;
export declare const MonthPicker: ({
  id,
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomMonthPickerProps) => JSX.Element;
export {};
