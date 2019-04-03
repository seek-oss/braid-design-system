import { Css } from '../types';

export interface FillParams {
  formAccent: string;
  formAccentDisabled: string;
  critical: string;
  criticalDark: string;
  info: string;
  infoDark: string;
  positive: string;
  positiveDark: string;
  secondary: string;
  white: string;
}
export default ({
  formAccent,
  formAccentDisabled,
  critical,
  criticalDark,
  info,
  infoDark,
  positive,
  positiveDark,
  secondary,
  white,
}: FillParams): Css => ({
  '.fill_currentColor': { fill: 'currentColor' },
  '.fill_formAccent': { fill: formAccent },
  '.fill_formAccentDisabled': { fill: formAccentDisabled },
  '.fill_critical': { fill: critical },
  '.fill_criticalDark': { fill: criticalDark },
  '.fill_info': { fill: info },
  '.fill_infoDark': { fill: infoDark },
  '.fill_positive': { fill: positive },
  '.fill_positiveDark': { fill: positiveDark },
  '.fill_secondary': { fill: secondary },
  '.fill_white': { fill: white },
});
