import type { CheckboxChecked } from '../private/InlineField/StyledInput';

export const resolveCheckedGroup = (values: CheckboxChecked[]) => {
  const checkedCount = values.filter(Boolean).length;
  const someChecked = checkedCount > 0;
  const totalCount = values.length;

  if (someChecked && checkedCount !== totalCount) {
    return 'mixed';
  }

  return someChecked;
};
