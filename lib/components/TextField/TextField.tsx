import React from 'react';
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

interface TextFieldProps extends FieldProps {
  type?: keyof typeof validTypes;
}

export const TextField = ({
  id,
  name,
  label,
  secondaryLabel,
  tertiaryLabel,
  placeholder,
  message,
  tone = 'neutral',
  value,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
}: TextFieldProps) => (
  <Field
    id={id}
    name={name}
    label={label}
    secondaryLabel={secondaryLabel}
    tertiaryLabel={tertiaryLabel}
    tone={tone}
    message={message}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
  >
    {fieldProps => (
      <Box
        component="input"
        type={validTypes[type]}
        boxShadow={tone === 'critical' ? 'borderCritical' : 'borderStandard'}
        width="full"
        paddingLeft="small"
        paddingRight="small"
        paddingTop="standardTouchableText"
        paddingBottom="standardTouchableText"
        borderRadius="standard"
        {...fieldProps}
      />
    )}
  </Field>
);
