import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { CheckboxStandaloneProps } from './CheckboxStandalone';
declare type PlayroomCheckboxStandaloneProps = StateProp & Optional<CheckboxStandaloneProps, 'id' | 'checked' | 'onChange'>;
export declare const CheckboxStandalone: ({ id, stateName, checked, onChange, "aria-label": ariaLabel, ...restProps }: PlayroomCheckboxStandaloneProps) => JSX.Element;
export {};
