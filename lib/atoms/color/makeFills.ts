import { Css } from '../types';
import { getAccessibleVariant } from '../utils/a11y';

export interface FillParams {
  formAccent: string;
  formAccentDisabled: string;
  critical: string;
  info: string;
  positive: string;
  secondary: string;
  white: string;
}
export default ({
  formAccent,
  formAccentDisabled,
  critical,
  info,
  positive,
  secondary,
  white,
}: FillParams): Css => ({
  '.fill_currentColor': { fill: 'currentColor' },
  '.fill_formAccent': { fill: formAccent },
  '.fill_formAccentDisabled': { fill: formAccentDisabled },
  '.fill_critical': { fill: critical },
  '.fill_criticalA11y': { fill: getAccessibleVariant(critical) },
  '.fill_info': { fill: info },
  '.fill_infoA11y': { fill: getAccessibleVariant(info) },
  '.fill_positive': { fill: positive },
  '.fill_positiveA11y': { fill: getAccessibleVariant(positive) },
  '.fill_secondary': { fill: secondary },
  '.fill_white': { fill: white },
});
