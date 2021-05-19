import { CheckboxChecked } from '../private/InlineField/StyledInput';

export const resolveCheckedGroup = (values: Array<CheckboxChecked>) =>
  values.some((value) => value !== values[0]) ? 'mixed' : values[0] ?? false;
