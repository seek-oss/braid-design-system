import { Css } from '../types';

export interface FillParams {
  formAccent: string;
  formAccentDisabled: string;
  critical: string;
  positive: string;
  secondary: string;
  white: string;
}
export default ({
  formAccent,
  formAccentDisabled,
  critical,
  positive,
  secondary,
  white
}: FillParams): Css => ({
  '.fill_currentColor': { fill: 'currentColor' },
  '.fill_formAccent': { fill: formAccent },
  '.fill_formAccentDisabled': { fill: formAccentDisabled },
  '.fill_critical': { fill: critical },
  '.fill_positive': { fill: positive },
  '.fill_secondary': { fill: secondary },
  '.fill_white': { fill: white }
});
