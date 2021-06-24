import { AllHTMLAttributes } from 'react';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import { FieldMessageProps } from '../../FieldMessage/FieldMessage';
import { StackProps } from '../../Stack/Stack';
import { DataAttributeMap } from '../buildDataAttributes';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';
declare type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldGroupProps {
    id: NonNullable<FormElementProps['id']>;
    disabled?: FormElementProps['disabled'];
    label?: FieldLabelProps['label'];
    secondaryLabel?: FieldLabelProps['secondaryLabel'];
    tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
    description?: FieldLabelProps['description'];
    message?: FieldMessageProps['message'];
    reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
    tone?: FieldMessageProps['tone'];
    required?: boolean;
    data?: DataAttributeMap;
}
interface FieldGroupRenderProps {
    disabled?: FieldGroupProps['disabled'];
    'aria-describedby'?: string;
}
interface InternalFieldGroupProps extends FieldGroupProps {
    role?: FormElementProps['role'];
    space?: StackProps['space'];
    children(props: FieldGroupRenderProps): ReactNodeNoStrings;
}
export declare const FieldGroup: ({ id, disabled, children, label, secondaryLabel, tertiaryLabel, description, message, reserveMessageSpace, tone, required, role, space, data, }: InternalFieldGroupProps) => JSX.Element;
export {};
