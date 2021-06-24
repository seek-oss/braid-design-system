import { ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface StrongProps {
    children: ReactNode;
    id?: string;
    data?: DataAttributeMap;
}
export declare const Strong: ({ children, data, id }: StrongProps) => JSX.Element;
