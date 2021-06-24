import { RequiredResponsiveValue } from '../sprinkles.css';
import * as styles from './negativeMarginTop.css';
declare type NegativeMarginTop = Extract<Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>, Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>>;
export declare const negativeMarginTop: (space: RequiredResponsiveValue<NegativeMarginTop>) => string;
export {};
