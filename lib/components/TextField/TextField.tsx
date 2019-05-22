import React, { AllHTMLAttributes } from 'react';
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
interface TextFieldProps extends FieldProps {
  value: NonNullable<InputProps['value']>;
  type?: keyof typeof validTypes;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  placeholder?: InputProps['placeholder'];
}

export const TextField = ({
  id,
  name,
  disabled,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  tone = 'neutral',
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
}: TextFieldProps) => (
  <Field
    id={id}
    name={name}
    disabled={disabled}
    label={label}
    secondaryLabel={secondaryLabel}
    tertiaryLabel={tertiaryLabel}
    tone={tone}
    message={message}
  >
    {fieldProps => (
      <Box
        component="input"
        type={validTypes[type]}
        paddingTop="standardTouchableText"
        paddingBottom="standardTouchableText"
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
