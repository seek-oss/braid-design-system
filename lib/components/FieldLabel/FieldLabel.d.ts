import { ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface FieldLabelProps {
    id?: string;
    htmlFor: string | false;
    label?: ReactNode;
    secondaryLabel?: ReactNode;
    tertiaryLabel?: ReactNode;
    description?: ReactNode;
    descriptionId?: string;
    data?: DataAttributeMap;
}
export declare const FieldLabel: ({ id, htmlFor, label, secondaryLabel, tertiaryLabel, description, descriptionId, data, }: FieldLabelProps) => JSX.Element | null;
