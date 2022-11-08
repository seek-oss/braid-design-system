import React, { forwardRef } from 'react';
import { Box } from '../Box/Box';
import type { StyledInputProps } from '../private/InlineField/StyledInput';
import { StyledInput } from '../private/InlineField/StyledInput';
import type { CheckboxProps } from './Checkbox';
import { resolveCheckedGroup } from './resolveCheckedGroup';

type LabelStyle =
  | { 'aria-labelledby': NonNullable<string> }
  | { 'aria-label': NonNullable<string> };
export type CheckboxStandaloneProps = StyledInputProps &
  LabelStyle & {
    checked: CheckboxProps['checked'];
  };

export const CheckboxStandalone = forwardRef<
  HTMLInputElement,
  CheckboxStandaloneProps
>(({ checked, ...restProps }, ref) => {
  const calculatedChecked = Array.isArray(checked)
    ? resolveCheckedGroup(checked)
    : checked;

  return (
    <Box position="relative">
      <StyledInput
        {...restProps}
        checked={calculatedChecked}
        type="checkbox"
        ref={ref}
      />
    </Box>
  );
});
