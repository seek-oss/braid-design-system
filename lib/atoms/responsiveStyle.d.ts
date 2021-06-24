import { StyleRule } from '@vanilla-extract/css';
declare type CSSProps = Omit<StyleRule, '@media' | '@supports'>;
interface ResponsiveStyle {
    mobile?: CSSProps;
    tablet?: CSSProps;
    desktop?: CSSProps;
}
export declare const responsiveStyle: ({ mobile, tablet, desktop, }: ResponsiveStyle) => StyleRule;
export {};
