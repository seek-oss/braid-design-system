import { ReactNode, ReactPortal } from 'react';
export interface BraidPortalProps {
    children: ReactNode;
    container?: Element;
}
export declare const BraidPortal: ({ children, container }: BraidPortalProps) => ReactPortal;
