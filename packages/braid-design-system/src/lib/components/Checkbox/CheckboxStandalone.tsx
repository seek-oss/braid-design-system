import React, { forwardRef } from 'react';

import { Box } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import {
  type StyledInputProps,
  StyledInput,
} from '../private/InlineField/StyledInput';

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
      <TextContext.Provider value={null}>
        <StyledInput
          {...restProps}
          checked={calculatedChecked}
          type="checkbox"
          ref={ref}
        />
      </TextContext.Provider>
    </Box>
  );
});
