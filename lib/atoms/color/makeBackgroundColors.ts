import isLight from '../utils/isLight';
import { darken, lighten } from 'polished';

const getActiveColor = (color: string): string =>
  isLight(color) ? darken(0.1, color) : darken(0.05, color);

const getHoverColor = (color: string): string =>
  isLight(color) ? darken(0.05, color) : lighten(0.05, color);

export interface BackgroundColorParams {
  input: string;
  inputDisabled: string;
  brandAccent: string;
  formAccent: string;
  formAccentDisabled: string;
  selection: string;
  info: string;
  infoLight: string;
  card: string;
  critical: string;
  criticalLight: string;
  positive: string;
  positiveLight: string;
}

export default ({
  input,
  inputDisabled,
  brandAccent,
  formAccent,
  formAccentDisabled,
  selection,
  info,
  infoLight,
  card,
  critical,
  criticalLight,
  positive,
  positiveLight,
}: BackgroundColorParams) => ({
  '.backgroundColor_input': { backgroundColor: input },
  '.backgroundColor_inputDisabled': { backgroundColor: inputDisabled },
  '.backgroundColor_formAccent': { backgroundColor: formAccent },
  '.backgroundColor_formAccentActive': {
    backgroundColor: getActiveColor(formAccent),
  },
  '.backgroundColor_formAccentHover': {
    backgroundColor: getHoverColor(formAccent),
  },
  '.backgroundColor_formAccentDisabled': {
    backgroundColor: formAccentDisabled,
  },
  '.backgroundColor_brandAccent': { backgroundColor: brandAccent },
  '.backgroundColor_brandAccentActive': {
    backgroundColor: getActiveColor(brandAccent),
  },
  '.backgroundColor_brandAccentHover': {
    backgroundColor: getHoverColor(brandAccent),
  },
  '.backgroundColor_selection': { backgroundColor: selection },
  '.backgroundColor_info': { backgroundColor: info },
  '.backgroundColor_infoLight': { backgroundColor: infoLight },
  '.backgroundColor_card': { backgroundColor: card },
  '.backgroundColor_critical': { backgroundColor: critical },
  '.backgroundColor_criticalLight': { backgroundColor: criticalLight },
  '.backgroundColor_positive': { backgroundColor: positive },
  '.backgroundColor_positiveLight': { backgroundColor: positiveLight },
});
