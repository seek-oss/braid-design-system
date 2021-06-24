import { ReactElement } from 'react';
export interface BackgroundProviderProps {
    type: 'light' | 'dark';
    children: ReactElement;
}
export declare const BackgroundProvider: {
    ({ type, children, }: BackgroundProviderProps): JSX.Element | null;
    displayName: string;
};
