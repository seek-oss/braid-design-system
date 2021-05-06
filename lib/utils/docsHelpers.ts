import { responsiveProperties } from './../atoms/atomicProperties';
import { themeVars } from '../themes/themeVars.css';

export const backgrounds = Object.keys(
  themeVars.color.background,
).sort() as Array<keyof typeof themeVars.color.background>;

export const textAlignments = responsiveProperties.textAlign;

export const spaces = Object.keys(responsiveProperties.paddingTop).filter(
  (space) => space !== 'none',
) as Array<Exclude<keyof typeof responsiveProperties.paddingTop, 'none'>>;
