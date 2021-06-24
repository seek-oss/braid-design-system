import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { TextareaProps } from './Textarea';
declare type PlayroomTextareaProps = StateProp & Optional<TextareaProps, 'id' | 'value' | 'onChange'>;
export declare const Textarea: ({ id, stateName, value, onChange, ...restProps }: PlayroomTextareaProps) => JSX.Element;
export {};
