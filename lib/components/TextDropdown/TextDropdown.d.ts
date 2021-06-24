import { DataAttributeMap } from '../private/buildDataAttributes';
interface TextDropdownOption<Value> {
    text: string;
    value: Value;
}
declare type TextDropdownValue<Value> = Value | TextDropdownOption<Value>;
export interface TextDropdownProps<Value> {
    id: string;
    value: Value;
    onChange: (value: Value) => void;
    onBlur?: () => void;
    options: TextDropdownValue<Value>[];
    label: string;
    data?: DataAttributeMap;
}
export declare function parseSimpleToComplexOption<Value>(option: TextDropdownProps<Value>['options'][number]): TextDropdownOption<Value>;
export declare function TextDropdown<Value>({ id, value, onChange, onBlur, options, label, data, }: TextDropdownProps<Value>): JSX.Element;
export {};
