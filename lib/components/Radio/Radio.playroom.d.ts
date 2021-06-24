import { Optional } from 'utility-types';
import { RadioProps } from './Radio';
declare type PlayroomRadioProps = Optional<RadioProps, 'id' | 'checked' | 'onChange'>;
export declare const Radio: ({ id, checked, onChange, ...restProps }: PlayroomRadioProps) => JSX.Element;
export {};
