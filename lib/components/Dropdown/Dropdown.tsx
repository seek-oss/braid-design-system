import React, { Fragment, AllHTMLAttributes, forwardRef } from 'react';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';
import { IconChevron } from '../icons';
import { Text } from '../Text/Text';

type ValidDropdownChildren = AllHTMLAttributes<
  HTMLOptionElement | HTMLOptGroupElement
>;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
export interface DropdownProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage'> {
  children: ValidDropdownChildren[] | ValidDropdownChildren;
  value: NonNullable<SelectProps['value']>;
  onChange: NonNullable<SelectProps['onChange']>;
  onBlur?: SelectProps['onBlur'];
  onFocus?: SelectProps['onFocus'];
  placeholder?: string;
}

const NamedDropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    { children, value, onChange, onBlur, onFocus, placeholder, ...restProps },
    ref,
  ) => (
    <Field
      {...restProps}
      labelId={undefined}
      secondaryMessage={null}
      value={value}
      actionButton={
        <Text baseline={false}>
          <IconChevron />
        </Text>
      }
    >
      {(overlays, fieldProps, actionButton, icon) => (
        <Fragment>
          {icon}
          <Box
            component="select"
            value={value}
            defaultValue={typeof value === 'undefined' ? '' : undefined}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            {...fieldProps}
            ref={ref}
          >
            <option value="" disabled={true}>
              {placeholder}
            </option>
            <Fragment>{children}</Fragment>
          </Box>
          {overlays}
          <Box pointerEvents="none">{actionButton}</Box>
        </Fragment>
      )}
    </Field>
  ),
);

NamedDropdown.displayName = 'Dropdown';

export const Dropdown = NamedDropdown;
