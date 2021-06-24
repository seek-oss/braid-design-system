import { BackgroundVariant } from './../../components/Box/BackgroundContext';
export declare const fontFamily: string;
export declare const fontWeight: Record<"medium" | "regular" | "strong", string>;
export declare const text: {
    xsmall: {
        untrimmed: string;
        trimmed: string;
    };
    small: {
        untrimmed: string;
        trimmed: string;
    };
    standard: {
        untrimmed: string;
        trimmed: string;
    };
    large: {
        untrimmed: string;
        trimmed: string;
    };
};
export declare const headingWeight: Record<"regular" | "weak", string>;
export declare const heading: {
    '1': {
        untrimmed: string;
        trimmed: string;
    };
    '2': {
        untrimmed: string;
        trimmed: string;
    };
    '3': {
        untrimmed: string;
        trimmed: string;
    };
    '4': {
        untrimmed: string;
        trimmed: string;
    };
};
export declare const tone: {
    link: string;
    critical: string;
    info: string;
    promote: string;
    positive: string;
    caution: string;
    formAccent: string;
    brandAccent: string;
    secondary: string;
};
export declare const invertableTone: {
    neutral: Record<"dark" | "light", string>;
    secondary: Record<"dark" | "light", string>;
};
declare type Foreground = keyof typeof tone;
declare type BoxBackground = NonNullable<BackgroundVariant>;
declare type ToneOverridesForBackground = {
    [background in BoxBackground]?: {
        [foreground in Foreground | 'neutral']?: string;
    };
};
export declare const toneOverridesForBackground: ToneOverridesForBackground;
export declare const touchable: Record<"large" | "small" | "xsmall" | "standard", string>;
export {};
