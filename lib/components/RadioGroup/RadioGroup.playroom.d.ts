import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { RadioGroupProps } from './RadioGroup';
declare type PlayroomRadioProps = StateProp & Optional<RadioGroupProps, 'id' | 'value' | 'onChange'>;
export declare const RadioGroup: ({ id, stateName, value, onChange, children, ...restProps }: PlayroomRadioProps) => JSX.Element;
export {};
