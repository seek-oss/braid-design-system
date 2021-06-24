import { RequiredResponsiveValue } from '../sprinkles.css';
import * as styles from './negativeMarginLeft.css';
declare type NegativeMarginLeft = Extract<Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>, Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>>;
export declare const negativeMarginLeft: (space: RequiredResponsiveValue<NegativeMarginLeft>) => string;
export {};
