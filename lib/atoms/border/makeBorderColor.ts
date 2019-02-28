export interface BorderColorParams {
  standard: string;
  formAccent: string;
  critical: string;
}

export default ({ standard, formAccent, critical }: BorderColorParams) => ({
  '.borderColor_standard': { borderColor: standard },
  '.borderColor_formAccent': { borderColor: formAccent },
  '.borderColor_critical': { borderColor: critical },
});
