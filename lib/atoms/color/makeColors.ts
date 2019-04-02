import { Css } from '../types';
import isLight from '../utils/isLight';

export interface ColorParams {
  link: string;
  linkHover?: string;
  black: string;
  white: string;
  critical: string;
  criticalDark: string;
  positive: string;
  positiveDark: string;
  secondary: string;
  info: string;
  infoDark: string;
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
  criticalDark,
  positive,
  positiveDark,
  secondary,
  info,
  infoDark,
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
  '.color_critical_dark': { color: criticalDark },
  '.color_positive': { color: positive },
  '.color_positive_dark': { color: positiveDark },
  '.color_secondary': { color: secondary },
  '.color_info': { color: info },
  '.color_info_dark': { color: infoDark },
  '.color_formAccent': { color: formAccent },
  '.color_brandAccentForeground': {
    color: isLight(brandAccent) ? black : white,
  },
});
