export interface FontMetrics {
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
    capHeight: number;
}
export interface CapsizeStyles {
    fontSize: string;
    lineHeight: string;
    '::before': {
        content: string;
        marginBottom: string;
        display: string;
    };
    '::after': {
        content: string;
        marginTop: string;
        display: string;
    };
}
export declare type CapHeightWithLeading = {
    capHeight: number;
    leading?: number;
    fontMetrics: FontMetrics;
};
export declare type CapHeightWithLineGap = {
    capHeight: number;
    lineGap: number;
    fontMetrics: FontMetrics;
};
export declare type FontSizeWithLeading = {
    fontSize: number;
    leading?: number;
    fontMetrics: FontMetrics;
};
export declare type FontSizeWithLineGap = {
    fontSize: number;
    lineGap: number;
    fontMetrics: FontMetrics;
};
export declare type CapsizeOptions = CapHeightWithLineGap | CapHeightWithLeading | FontSizeWithLineGap | FontSizeWithLeading;
