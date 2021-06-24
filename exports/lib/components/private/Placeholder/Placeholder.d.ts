import { ReactNode } from 'react';
export interface PlaceholderProps {
    height: string | number;
    width?: string | number;
    label?: ReactNode;
    shape?: 'rectangle' | 'round';
}
export declare const Placeholder: ({ label, width, height, shape, }: PlaceholderProps) => JSX.Element;
