import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { DialogProps } from './Dialog';
declare type PlayroomDialogProps = StateProp &
  Optional<DialogProps, 'id' | 'onClose' | 'open'>;
export declare const Dialog: ({
  id,
  stateName,
  open,
  onClose,
  ...restProps
}: PlayroomDialogProps) => JSX.Element;
export {};
