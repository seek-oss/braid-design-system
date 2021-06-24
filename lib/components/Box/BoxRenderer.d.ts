import { ReactElement } from 'react';
import { ClassValue } from 'clsx';
import { Atoms } from '../../atoms/atoms';
export interface BoxRendererProps extends Omit<Atoms, 'reset'> {
    component?: Atoms['reset'];
    className?: ClassValue;
    children: (className: string) => ReactElement | null;
}
export declare const BoxRenderer: ({ children, component, className, ...props }: BoxRendererProps) => JSX.Element | null;
