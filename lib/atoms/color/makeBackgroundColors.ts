export interface BackgroundColorParms {
  input: string;
  inputDisabled: string;
  formAccent: string;
  formAccentDisabled: string;
  selection: string;
  info: string;
  card: string;
  critical: string;
}

export default ({
  input,
  inputDisabled,
  formAccent,
  formAccentDisabled,
  selection,
  info,
  card,
  critical,
}: BackgroundColorParms) => ({
  '.backgroundColor_input': { background: input },
  '.backgroundColor_inputDisabled': { background: inputDisabled },
  '.backgroundColor_formAccent': { background: formAccent },
  '.backgroundColor_formAccentDisabled': { background: formAccentDisabled },
  '.backgroundColor_selection': { background: selection },
  '.backgroundColor_info': { background: info },
  '.backgroundColor_card': { background: card },
  '.backgroundColor_critical': { background: critical },
});
