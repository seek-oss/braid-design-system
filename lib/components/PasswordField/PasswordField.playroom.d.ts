import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { PasswordFieldProps } from './PasswordField';
declare type PlayroomPasswordFieldProps = StateProp & Optional<PasswordFieldProps, 'id' | 'value' | 'onChange'>;
export declare const PasswordField: ({ id, stateName, value, onChange, ...restProps }: PlayroomPasswordFieldProps) => JSX.Element;
export {};
