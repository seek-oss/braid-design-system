import React, { type AllHTMLAttributes, Fragment, forwardRef } from 'react';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconChevron } from '../icons';
import {
  type FieldBaseProps,
  type FieldLabelVariant,
  Field,
} from '../private/Field/Field';

import * as styles from './Dropdown.css';

type ValidDropdownChildren = AllHTMLAttributes<
  HTMLOptionElement | HTMLOptGroupElement
>;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
export type DropdownBaseProps = Omit<
  FieldBaseProps,
  'value' | 'secondaryMessage' | 'prefix'
> & {
  children: ValidDropdownChildren[] | ValidDropdownChildren;
  value: NonNullable<SelectProps['value']>;
  onChange: NonNullable<SelectProps['onChange']>;
  onBlur?: SelectProps['onBlur'];
  onFocus?: SelectProps['onFocus'];
  placeholder?: string;
};
export type DropdownLabelProps = FieldLabelVariant;
export type DropdownProps = DropdownBaseProps & DropdownLabelProps;

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (props, ref) => {
    const {
      children,
      value,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      disabled,
      ...restProps
    } = props;

    return (
      <Field
        {...restProps}
        componentName="Dropdown"
        disabled={disabled}
        prefix={undefined}
        secondaryMessage={null}
        value={value}
      >
        {(overlays, { className, paddingRight, ...fieldProps }, icon) => (
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
              className={[styles.field, className]}
              {...fieldProps}
              ref={ref}
            >
              <>
                {!value || placeholder ? (
                  <option value="" disabled={true}>
                    {disabled ? '' : placeholder}
                  </option>
                ) : null}
                {children}
              </>
            </Box>
            {overlays}
            <Box
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
              pointerEvents="none"
              height="touchable"
              width="touchable"
              top={0}
              right={0}
            >
              <Text baseline={false}>
                <IconChevron tone={disabled ? 'secondary' : undefined} />
              </Text>
            </Box>
          </Fragment>
        )}
      </Field>
    );
  },
);

Dropdown.displayName = 'Dropdown';
