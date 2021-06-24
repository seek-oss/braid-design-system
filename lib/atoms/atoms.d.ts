import { vars } from '../themes/vars.css';
import { sprinkles, RequiredResponsiveValue } from './sprinkles.css';
declare type Sprinkles = Parameters<typeof sprinkles>[0];
export declare type Space = keyof typeof vars.space | 'none';
export declare type ResponsiveSpace = RequiredResponsiveValue<Space>;
export interface Atoms extends Sprinkles {
    reset?: keyof JSX.IntrinsicElements;
}
export declare const atoms: ({ reset, ...rest }: Atoms) => string;
export {};
