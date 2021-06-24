import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { DropdownProps } from './Dropdown';
declare type PlayroomDropdownProps = StateProp &
  Optional<DropdownProps, 'id' | 'value' | 'onChange'>;
export declare const Dropdown: ({
  id,
  stateName,
  value,
  onChange,
  ...restProps
}: PlayroomDropdownProps) => JSX.Element;
export {};
