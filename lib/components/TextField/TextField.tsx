import React, { forwardRef, Fragment, AllHTMLAttributes, useRef } from 'react';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';
import { ClearField } from '../private/Field/ClearField';

const validTypes = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  number: 'number',
  tel: 'tel',
  url: 'url',
};

type InputProps = AllHTMLAttributes<HTMLInputElement>;
export interface TextFieldProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage'> {
  value: NonNullable<InputProps['value']>;
  type?: keyof typeof validTypes;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  onClear?: () => void;
  placeholder?: InputProps['placeholder'];
}

const NamedTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      type = 'text',
      onChange,
      onBlur,
      onFocus,
      onClear,
      placeholder,
      ...restProps
    },
    forwardedRef,
  ) => {
    // We need a ref regardless so we can imperatively
    // focus the field when clicking the clear button
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const inputRef = forwardedRef || defaultRef;

    const clearable = Boolean(
      typeof onClear !== 'undefined' &&
        typeof value === 'string' &&
        value.length > 0,
    );

    return (
      <Field
        {...restProps}
        value={value}
        labelId={undefined}
        secondaryMessage={null}
        secondaryIcon={
          onClear ? (
            <ClearField
              hide={!clearable}
              onClear={onClear}
              inputRef={inputRef}
            />
          ) : null
        }
      >
        {(overlays, fieldProps, icon, secondaryIcon) => (
          <Fragment>
            {icon}
            <Box
              component="input"
              type={validTypes[type]}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={placeholder}
              {...fieldProps}
              ref={inputRef}
            />
            {overlays}
            {secondaryIcon}
          </Fragment>
        )}
      </Field>
    );
  },
);

NamedTextField.displayName = 'TextField';

export const TextField = NamedTextField;
