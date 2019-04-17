import { Css } from '../types';
import isLight from '../utils/isLight';
import { getAccessibleVariant } from '../utils/a11y';

export interface ColorParams {
  link: string;
  linkHover?: string;
  black: string;
  white: string;
  critical: string;
  positive: string;
  secondary: string;
  info: string;
  brandAccent: string;
  formAccent: string;
  neutral: string;
}
export default ({
  link,
  linkHover,
  black,
  white,
  critical,
  positive,
  secondary,
  info,
  brandAccent,
  formAccent,
  neutral,
}: ColorParams): Css => ({
  '.color_neutral': { color: neutral }, // Should be first to be overrid-able
  '.color_link': {
    color: link,
    '&:hover,&:focus': linkHover
      ? {
          color: linkHover,
        }
      : {},
  },
  '.color_black': { color: black },
  '.color_white': { color: white },
  '.color_critical': { color: critical },
  '.color_criticalForeground': { color: getAccessibleVariant(critical) },
  '.color_positive': { color: positive },
  '.color_positiveForeground': { color: getAccessibleVariant(positive) },
  '.color_secondary': { color: secondary },
  '.color_info': { color: info },
  '.color_infoForeground': { color: getAccessibleVariant(info) },
  '.color_formAccent': { color: formAccent },
  '.color_brandAccentForeground': {
    color: isLight(brandAccent) ? black : white,
  },
});
