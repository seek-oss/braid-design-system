import { Style } from 'sku/treat';
import { Breakpoint } from '../atoms/breakpoints';
declare type RequiredTokens = {
    breakpoint: Record<Breakpoint, number>;
};
declare type StyleWithoutMediaQueries = Exclude<Style['@media'], undefined>[string];
export interface ResponsiveStyle {
    mobile?: StyleWithoutMediaQueries;
    tablet?: StyleWithoutMediaQueries;
    desktop?: StyleWithoutMediaQueries;
}
export declare const makeThemeUtils: (tokens: RequiredTokens) => {
    responsiveStyle: ({ mobile, tablet, desktop, }: ResponsiveStyle) => Style;
};
export {};
