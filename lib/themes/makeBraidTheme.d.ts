import './treatTheme.d';
import { FontMetrics } from 'capsize';
import { BraidTokens } from './tokenType';
declare const decorateTokens: (braidTokens: BraidTokens) => {
    utils: {
        responsiveStyle: ({ mobile, tablet, desktop, }: import("./themeUtils").ResponsiveStyle) => import("sku/treat").Style;
    };
    name: string;
    displayName: string;
    contentWidth: {
        xsmall: number;
        small: number;
        medium: number;
        large: number;
    };
    grid: number;
    touchableSize: number;
    space: {
        gutter: number;
        xxsmall: number;
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
        xxlarge: number;
    };
    transforms: {
        touchable: string;
    };
    transitions: {
        fast: string;
        touchable: string;
    };
    border: {
        radius: {
            standard: string;
        };
        width: {
            standard: number;
            large: number;
        };
        color: {
            standard: string;
            standardInverted: string;
            field: string;
            focus: string;
            critical: string;
            info: string;
            promote: string;
            positive: string;
            caution: string;
            formHover: string;
            formAccent: string;
            brandAccent: string;
        };
    };
    shadows: {
        small: string;
        medium: string;
        large: string;
    };
    color: {
        background: {
            formAccentActive: string;
            formAccentHover: string;
            brandAccentActive: string;
            brandAccentHover: string;
            criticalActive: string;
            criticalHover: string;
            infoLight: string;
            promoteLight: string;
            criticalLight: string;
            positiveLight: string;
            cautionLight: string;
            neutralLight: string;
            body: string;
            brand: string;
            input: string;
            inputDisabled: string;
            brandAccent: string;
            formAccent: string;
            formAccentDisabled: string;
            selection: string;
            info: string;
            promote: string;
            card: string;
            critical: string;
            caution: string;
            positive: string;
            neutral: string;
        };
        foreground: {
            link: string;
            linkHover: string;
            linkVisited: string;
            neutral: string;
            neutralInverted: string;
            formAccent: string;
            brandAccent: string;
            critical: string;
            info: string;
            promote: string;
            positive: string;
            caution: string;
            secondary: string;
            secondaryInverted: string;
            rating: string;
        };
    };
    typography: {
        heading: {
            level: {
                1: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
                2: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
                3: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
                4: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
            };
            weight: {
                weak: "medium" | "regular" | "strong";
                regular: "medium" | "regular" | "strong";
            };
        };
        text: {
            xsmall: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
            small: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
            standard: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
            large: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
        };
        fontFamily: string;
        webFont: string | null;
        fontMetrics: FontMetrics;
        fontWeight: Record<"medium" | "regular" | "strong", 400 | 500 | 600 | 700 | 800>;
    };
    breakpoint: {
        readonly mobile: 0;
        readonly tablet: 740;
        readonly desktop: 992;
    };
};
export declare type TreatTheme = ReturnType<typeof decorateTokens>;
export declare function makeBraidTheme(braidTokens: BraidTokens): {
    name: string;
    displayName: string;
    background: string;
    webFonts: {
        linkTag: string;
    }[];
    space: {
        grid: number;
        space: {
            gutter: number;
            xxsmall: number;
            xsmall: number;
            small: number;
            medium: number;
            large: number;
            xlarge: number;
            xxlarge: number;
        };
    };
    color: {
        background: {
            formAccentActive: string;
            formAccentHover: string;
            brandAccentActive: string;
            brandAccentHover: string;
            criticalActive: string;
            criticalHover: string;
            infoLight: string;
            promoteLight: string;
            criticalLight: string;
            positiveLight: string;
            cautionLight: string;
            neutralLight: string;
            body: string;
            brand: string;
            input: string;
            inputDisabled: string;
            brandAccent: string;
            formAccent: string;
            formAccentDisabled: string;
            selection: string;
            info: string;
            promote: string;
            card: string;
            critical: string;
            caution: string;
            positive: string;
            neutral: string;
        };
        foreground: {
            link: string;
            linkHover: string;
            linkVisited: string;
            neutral: string;
            neutralInverted: string;
            formAccent: string;
            brandAccent: string;
            critical: string;
            info: string;
            promote: string;
            positive: string;
            caution: string;
            secondary: string;
            secondaryInverted: string;
            rating: string;
        };
    };
    backgroundLightness: {
        formAccentActive: "dark" | "light";
        formAccentHover: "dark" | "light";
        brandAccentActive: "dark" | "light";
        brandAccentHover: "dark" | "light";
        criticalActive: "dark" | "light";
        criticalHover: "dark" | "light";
        infoLight: "dark" | "light";
        promoteLight: "dark" | "light";
        criticalLight: "dark" | "light";
        positiveLight: "dark" | "light";
        cautionLight: "dark" | "light";
        neutralLight: "dark" | "light";
        body: "dark" | "light";
        brand: "dark" | "light";
        input: "dark" | "light";
        inputDisabled: "dark" | "light";
        brandAccent: "dark" | "light";
        formAccent: "dark" | "light";
        formAccentDisabled: "dark" | "light";
        selection: "dark" | "light";
        info: "dark" | "light";
        promote: "dark" | "light";
        card: "dark" | "light";
        critical: "dark" | "light";
        caution: "dark" | "light";
        positive: "dark" | "light";
        neutral: "dark" | "light";
    };
    treatTheme: string;
};
export declare type BraidTheme = ReturnType<typeof makeBraidTheme>;
export {};
