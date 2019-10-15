import React, { forwardRef, AllHTMLAttributes } from 'react';
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
interface TextFieldProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage'> {
  value: NonNullable<InputProps['value']>;
  type?: keyof typeof validTypes;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
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
      placeholder,
      ...restProps
    },
    ref,
  ) => (
    <Field
      {...restProps}
      value={value}
      ref={ref}
      labelId={undefined}
      secondaryMessage={null}
    >
      {(overlays, fieldProps, fieldRef, cancelButton) => (
        <Box position="relative">
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
          {overlays}
          {cancelButton}
        </Box>
      )}
    </Field>
  ),
);

NamedTextField.displayName = 'TextField';

export const TextField = NamedTextField;
