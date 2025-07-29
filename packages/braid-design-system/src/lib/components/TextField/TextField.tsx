import { type AllHTMLAttributes, forwardRef, Fragment, useRef } from 'react';

import { Box } from '../Box/Box';
import { ClearField } from '../private/Field/ClearField';
import {
  type FieldBaseProps,
  type FieldLabelVariant,
  Field,
} from '../private/Field/Field';
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

const defaultInputModesForType: Record<
  keyof typeof validTypes,
  InputProps['inputMode']
> = {
  text: 'text',
  password: 'text',
  email: 'email',
  search: 'search',
  number: 'numeric',
  tel: 'tel',
  url: 'url',
};

type InputProps = AllHTMLAttributes<HTMLInputElement>;

export type TextFieldBaseProps = Omit<
  FieldBaseProps,
  'value' | 'secondaryMessage'
> & {
  value: NonNullable<InputProps['value']>;
  type?: keyof typeof validTypes;
  inputMode?: InputProps['inputMode'];
  step?: InputProps['step'];
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  onClear?: () => void;
  placeholder?: InputProps['placeholder'];
  characterLimit?: number;
  clearLabel?: string;
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
      clearLabel,
      inputMode,
      step,
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
        componentName="TextField"
        value={value}
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
              label={clearLabel}
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
              inputMode={inputMode || defaultInputModesForType[type]}
              step={step}
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
