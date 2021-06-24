import React, { ReactNode, ReactElement } from 'react';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import { FieldMessageProps } from '../../FieldMessage/FieldMessage';
import { BadgeProps } from '../../Badge/Badge';
import { StyledInputProps } from './StyledInput';
declare type InlineFieldBaseProps = {
    label: NonNullable<FieldLabelProps['label']>;
    message?: FieldMessageProps['message'];
    reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
    children?: ReactNode;
    description?: ReactNode;
    badge?: ReactElement<BadgeProps>;
};
export declare type InlineFieldProps = Omit<StyledInputProps, 'aria-label' | 'aria-labelledby'> & InlineFieldBaseProps;
export declare const InlineField: React.ForwardRefExoticComponent<StyledInputProps & {
    type: "checkbox" | "radio";
    checked: import("./StyledInput").CheckboxChecked;
    tabIndex?: number | undefined;
} & InlineFieldBaseProps & {
    inList?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export {};
