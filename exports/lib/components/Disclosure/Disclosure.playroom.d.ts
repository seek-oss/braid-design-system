import { StateProp } from '../../playroom/playroomState';
import {
  DisclosureProps,
  DisclosureBaseProps,
  DisclosureStateProps,
} from './Disclosure';
declare type OptionalProps = 'id';
declare type PlayroomDisclosureProps = StateProp &
  DisclosureBaseProps &
  DisclosureStateProps &
  Partial<Pick<DisclosureProps, OptionalProps>>;
export declare const Disclosure: ({
  id,
  stateName,
  expanded,
  expandLabel,
  collapseLabel,
  onToggle,
  ...restProps
}: PlayroomDisclosureProps) => JSX.Element;
export {};
