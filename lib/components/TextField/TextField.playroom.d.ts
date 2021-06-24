import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { TextFieldProps } from './TextField';
declare type PlayroomTextFieldProps = StateProp & Optional<TextFieldProps, 'id' | 'value' | 'onChange'> & {
    onChange?: (fakeEvent: {
        currentTarget: {
            value: string;
        };
    }) => void;
};
export declare const TextField: ({ id, stateName, value, onChange, onClear, ...restProps }: PlayroomTextFieldProps) => JSX.Element;
export {};
