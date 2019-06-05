import React, { AllHTMLAttributes, forwardRef } from 'react';
import { Omit } from 'utility-types';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';

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
interface TextFieldProps extends Omit<FieldProps, 'secondaryMessage'> {
  value: NonNullable<InputProps['value']>;
  type?: keyof typeof validTypes;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  placeholder?: InputProps['placeholder'];
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      type = 'text',
      onChange,
      onBlur,
      onFocus,
      placeholder,
      ...restProps
    }: TextFieldProps,
    ref,
  ) => (
    <Field {...restProps} ref={ref} secondaryMessage={null}>
      {(fieldProps, fieldRef) => (
        <Box
          component="input"
          type={validTypes[type]}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          {...fieldProps}
          ref={fieldRef}
        />
      )}
    </Field>
  ),
);
