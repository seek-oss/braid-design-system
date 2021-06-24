import { CapsizeOptions, CapsizeStyles, FontMetrics } from './types';
export declare function roundTo(number: number, precision: number): number;
export declare const PRECISION = 4;
export declare function buildValues(options: CapsizeOptions): {
    fontSize: string;
    lineHeight: string;
    capHeightTrim: string;
    baselineTrim: string;
};
declare type CapsizeValues = {
    fontSize: string;
    lineHeight: string;
    capHeightTrim: string;
    baselineTrim: string;
};
export declare function createCss({ lineHeight, fontSize, capHeightTrim, baselineTrim, }: CapsizeValues): CapsizeStyles;
export declare const getCapHeight: ({ fontSize, fontMetrics, }: {
    fontSize: number;
    fontMetrics: FontMetrics;
}) => number;
export {};
