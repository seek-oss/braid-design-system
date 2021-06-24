import { Optional } from 'utility-types';
import { FieldLabelProps } from './FieldLabel';
declare type PlayroomFieldLabelProps = Optional<
  FieldLabelProps,
  'id' | 'htmlFor'
>;
export declare const FieldLabel: ({
  id,
  htmlFor,
  ...restProps
}: PlayroomFieldLabelProps) => JSX.Element;
export {};
