import { Css } from '../types';

export interface ColorParams {
  black: string;
  white: string;
  critical: string;
  positive: string;
  secondary: string;
  formAccent: string;
  neutral: string;
}
export default ({
  black,
  white,
  critical,
  positive,
  secondary,
  formAccent,
  neutral
}: ColorParams): Css => ({
  '.color_black': { color: black },
  '.color_white': { color: white },
  '.color_critical': { color: critical },
  '.color_positive': { color: positive },
  '.color_secondary': { color: secondary },
  '.color_formAccent': { color: formAccent },
  '.color_neutral': { color: neutral }
});
