export interface BackgroundColorParams {
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
}: BackgroundColorParams) => ({
  '.backgroundColor_input': { backgroundColor: input },
  '.backgroundColor_inputDisabled': { backgroundColor: inputDisabled },
  '.backgroundColor_formAccent': { backgroundColor: formAccent },
  '.backgroundColor_formAccentDisabled': {
    backgroundColor: formAccentDisabled,
  },
  '.backgroundColor_selection': { backgroundColor: selection },
  '.backgroundColor_info': { backgroundColor: info },
  '.backgroundColor_card': { backgroundColor: card },
  '.backgroundColor_critical': { backgroundColor: critical },
});
