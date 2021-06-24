import React, { ReactNode } from 'react';
export declare type Breakpoint = 'mobile' | 'tablet' | 'desktop';
export declare const breakpointContext: React.Context<Breakpoint | null>;
interface BreakpointProviderProps {
    children: ReactNode;
}
export declare function BreakpointProvider({ children }: BreakpointProviderProps): JSX.Element;
export {};
