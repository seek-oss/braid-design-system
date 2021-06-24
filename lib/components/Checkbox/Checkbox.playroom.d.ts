import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { CheckboxProps } from './Checkbox';
declare type PlayroomCheckboxProps = StateProp & Optional<CheckboxProps, 'id' | 'checked' | 'onChange'>;
export declare const Checkbox: ({ id, stateName, checked, onChange, ...restProps }: PlayroomCheckboxProps) => JSX.Element;
export {};
