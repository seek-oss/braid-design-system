import React, { AllHTMLAttributes } from 'react';
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

export const TextField = ({
  value,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
  placeholder,
  ...restProps
}: TextFieldProps) => (
  <Field {...restProps} secondaryMessage={null}>
    {fieldProps => (
      <Box
        component="input"
        type={validTypes[type]}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        {...fieldProps}
      />
    )}
  </Field>
);
