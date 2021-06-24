import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { DrawerProps } from './Drawer';
declare type PlayroomDrawerProps = StateProp &
  Optional<DrawerProps, 'id' | 'onClose' | 'open'>;
export declare const Drawer: ({
  id,
  stateName,
  open,
  onClose,
  ...restProps
}: PlayroomDrawerProps) => JSX.Element;
export {};
