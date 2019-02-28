import { Css } from '../types';

export interface ColorParams {
  link: string;
  linkHover?: string;
  black: string;
  white: string;
  critical: string;
  positive: string;
  secondary: string;
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
  formAccent,
  neutral,
}: ColorParams): Css => ({
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
  '.color_positive': { color: positive },
  '.color_secondary': { color: secondary },
  '.color_formAccent': { color: formAccent },
  '.color_neutral': { color: neutral },
});
