import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { ToggleProps } from './Toggle';
declare type PlayroomToggleProps = StateProp &
  Optional<ToggleProps, 'id' | 'on' | 'onChange'>;
export declare const Toggle: ({
  id,
  stateName,
  on,
  onChange,
  ...restProps
}: PlayroomToggleProps) => JSX.Element;
export {};
