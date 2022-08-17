import { responsiveProperties } from '../css/atoms/atomicProperties';
import { vars } from '../themes/vars.css';

export const backgrounds = Object.keys(vars.backgroundColor).sort() as Array<
  keyof typeof vars.backgroundColor
>;

export const textAlignments = responsiveProperties.textAlign;

export const spaces = Object.keys(responsiveProperties.paddingTop).filter(
  (space) => space !== 'none',
) as Array<Exclude<keyof typeof responsiveProperties.paddingTop, 'none'>>;
