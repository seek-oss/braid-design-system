import { Optional } from 'utility-types';
import { TextDropdownProps } from './TextDropdown';
declare type PlayroomTextDropdownProps<Value> = Optional<TextDropdownProps<Value>, 'id' | 'value' | 'label' | 'onChange' | 'options'>;
export declare function TextDropdown<Value>({ id, value, label, onChange, options, ...restProps }: PlayroomTextDropdownProps<Value | string>): JSX.Element;
export {};
