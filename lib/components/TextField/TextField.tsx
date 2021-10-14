import React, { forwardRef, Fragment, AllHTMLAttributes, useRef } from 'react';
import { Box } from '../Box/Box';
import {
  Field,
  FieldBaseProps,
  FieldLabelVariant,
} from '../private/Field/Field';
import { ClearField } from '../private/Field/ClearField';
import { getCharacterLimitStatus } from '../private/Field/getCharacterLimitStatus';

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

export type TextFieldBaseProps = Omit<
  FieldBaseProps,
  'value' | 'labelId' | 'secondaryMessage'
> & {
  value: NonNullable<InputProps['value']>;
  type?: keyof typeof validTypes;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  onClear?: () => void;
  placeholder?: InputProps['placeholder'];
  characterLimit?: number;
};
export type TextFieldLabelProps = FieldLabelVariant;
export type TextFieldProps = TextFieldBaseProps & TextFieldLabelProps;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      type = 'text',
      onChange,
      onBlur,
      onFocus,
      onClear,
      placeholder,
      characterLimit,
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
        !restProps.disabled &&
        typeof value === 'string' &&
        value.length > 0,
    );

    return (
      <Field
        {...restProps}
        value={value}
        labelId={undefined}
        secondaryMessage={
          characterLimit
            ? getCharacterLimitStatus({
                value,
                characterLimit,
              })
            : null
        }
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
        {(overlays, fieldProps, icon, secondaryIcon, prefix) => (
          <Fragment>
            {icon}
            {prefix}
            <Box
              component="input"
              type={validTypes[type]}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={!restProps.disabled ? placeholder : undefined}
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

TextField.displayName = 'TextField';
