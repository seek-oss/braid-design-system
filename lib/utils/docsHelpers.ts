import { responsiveProperties } from '../sprinkles/atomicProperties';
import { themeVars } from '../themes/themeVars.css';

export const backgrounds = Object.keys(
  themeVars.backgroundColor,
).sort() as Array<keyof typeof themeVars.backgroundColor>;

export const textAlignments = responsiveProperties.textAlign;

export const spaces = Object.keys(responsiveProperties.paddingTop).filter(
  (space) => space !== 'none',
) as Array<Exclude<keyof typeof responsiveProperties.paddingTop, 'none'>>;
