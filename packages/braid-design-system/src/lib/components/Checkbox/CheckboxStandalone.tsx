import { forwardRef, useId } from 'react';

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
export type CheckboxStandaloneProps = Omit<StyledInputProps, 'id'> &
  LabelStyle & {
    id?: StyledInputProps['id'];
    checked: CheckboxProps['checked'];
  };

export const CheckboxStandalone = forwardRef<
  HTMLInputElement,
  CheckboxStandaloneProps
>(({ id, checked, ...restProps }, ref) => {
  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  const calculatedChecked = Array.isArray(checked)
    ? resolveCheckedGroup(checked)
    : checked;

  return (
    <Box position="relative">
      <TextContext.Provider value={null}>
        <StyledInput
          {...restProps}
          id={resolvedId}
          checked={calculatedChecked}
          type="checkbox"
          ref={ref}
        />
      </TextContext.Provider>
    </Box>
  );
});
