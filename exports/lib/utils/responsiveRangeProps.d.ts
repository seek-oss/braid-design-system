import { Breakpoint } from '../atoms/breakpoints';
export interface ResponsiveRangeProps {
    above?: Exclude<Breakpoint, 'desktop'>;
    below?: Exclude<Breakpoint, 'mobile'>;
}
export declare const resolveResponsiveRangeProps: (props: ResponsiveRangeProps) => [boolean, boolean, boolean];
