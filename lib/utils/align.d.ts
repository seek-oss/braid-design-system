import { OptionalResponsiveValue } from '../atoms/sprinkles.css';
export declare type Align = 'left' | 'center' | 'right';
export declare type AlignY = 'top' | 'center' | 'bottom';
export declare const alignToFlexAlign: (align: OptionalResponsiveValue<Align> | undefined) => "center" | "flexStart" | "flexEnd" | Partial<Record<"mobile" | "tablet" | "desktop", "center" | "flexStart" | "flexEnd">> | undefined;
export declare const alignYToFlexAlign: (alignY: OptionalResponsiveValue<AlignY> | undefined) => "center" | "flexStart" | "flexEnd" | Partial<Record<"mobile" | "tablet" | "desktop", "center" | "flexStart" | "flexEnd">> | undefined;
