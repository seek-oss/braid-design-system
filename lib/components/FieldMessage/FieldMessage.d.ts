import { ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
export declare const tones: readonly ["neutral", "critical", "positive"];
declare type FieldTone = typeof tones[number];
export interface FieldMessageProps {
    id: string;
    message: ReactNode;
    reserveMessageSpace?: boolean;
    tone?: FieldTone;
    secondaryMessage?: ReactNode;
    disabled?: boolean;
    data?: DataAttributeMap;
}
export declare const FieldMessage: ({ id, tone, message, secondaryMessage, reserveMessageSpace, disabled, data, }: FieldMessageProps) => JSX.Element | null;
export {};
