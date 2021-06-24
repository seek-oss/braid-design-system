import { Optional } from 'utility-types';
import { FieldMessageProps } from './FieldMessage';
declare type PlayroomFieldMessageProps = Optional<FieldMessageProps, 'id'>;
export declare const FieldMessage: ({ id, tone, ...restProps }: PlayroomFieldMessageProps) => JSX.Element;
export {};
