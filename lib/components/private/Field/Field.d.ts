import { ReactNode, AllHTMLAttributes } from 'react';
import { BoxProps } from '../../Box/Box';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import { FieldMessageProps } from '../../FieldMessage/FieldMessage';
import { DataAttributeMap } from '../buildDataAttributes';
declare type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
    id: NonNullable<FormElementProps['id']>;
    value?: FormElementProps['value'];
    labelId?: string;
    name?: FormElementProps['name'];
    disabled?: FormElementProps['disabled'];
    autoComplete?: FormElementProps['autoComplete'];
    label?: FieldLabelProps['label'];
    secondaryLabel?: FieldLabelProps['secondaryLabel'];
    tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
    description?: FieldLabelProps['description'];
    message?: FieldMessageProps['message'];
    secondaryMessage?: FieldMessageProps['secondaryMessage'];
    reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
    tone?: FieldMessageProps['tone'];
    'aria-describedby'?: FormElementProps['aria-describedby'];
    data?: DataAttributeMap;
    autoFocus?: boolean;
    icon?: ReactNode;
    prefix?: string;
    required?: boolean;
}
declare type PassthroughProps = 'id' | 'name' | 'disabled' | 'autoComplete' | 'autoFocus';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
    background: BoxProps['background'];
    borderRadius: BoxProps['borderRadius'];
    width: BoxProps['width'];
    paddingLeft: BoxProps['paddingLeft'];
    paddingRight: BoxProps['paddingRight'];
    outline: BoxProps['outline'];
    'aria-describedby'?: string;
    'aria-required'?: boolean;
    className: string;
}
interface InternalFieldProps extends FieldProps {
    secondaryIcon?: ReactNode;
    children(overlays: ReactNode, props: FieldRenderProps, icon: ReactNode, secondaryIcon: ReactNode, prefix: ReactNode): ReactNode;
}
export declare const Field: ({ id, value, labelId, name, disabled, autoComplete, label, secondaryLabel, tertiaryLabel, description, children, message, secondaryMessage, reserveMessageSpace, tone, "aria-describedby": ariaDescribedBy, data, secondaryIcon, autoFocus, icon, prefix, required, }: InternalFieldProps) => JSX.Element;
export {};
