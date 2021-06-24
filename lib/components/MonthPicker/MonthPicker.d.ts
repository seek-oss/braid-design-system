import { FieldProps } from '../private/Field/Field';
interface MonthPickerValue {
    month?: number;
    year?: number;
}
declare type MonthNames = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];
declare type FocusHandler = () => void;
declare type ChangeHandler = (value: MonthPickerValue) => void;
export interface MonthPickerProps extends Omit<FieldProps, 'value' | 'labelId' | 'aria-describedby' | 'name' | 'autoComplete' | 'secondaryMessage' | 'autoFocus' | 'icon' | 'prefix'> {
    value: MonthPickerValue;
    onChange: ChangeHandler;
    onBlur?: FocusHandler;
    onFocus?: FocusHandler;
    minYear?: number;
    maxYear?: number;
    ascendingYears?: boolean;
    monthLabel?: string;
    yearLabel?: string;
    monthNames?: MonthNames;
}
declare const MonthPicker: {
    ({ id, value, label, onChange, onBlur, onFocus, tone, disabled, minYear, maxYear, ascendingYears, monthLabel, yearLabel, monthNames, ...restProps }: MonthPickerProps): JSX.Element;
    displayName: string;
};
export { MonthPicker };
