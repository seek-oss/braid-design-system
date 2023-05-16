import React, {
  type AllHTMLAttributes,
  type MouseEvent,
  useState,
  forwardRef,
  Fragment,
  useCallback,
  useRef,
} from 'react';

import {
  type FieldBaseProps,
  type FieldLabelVariant,
  Field,
} from '../private/Field/Field';
import { Box } from '../Box/Box';
import { FieldButtonIcon } from '../private/FieldButtonIcon/FieldButtonIcon';
import { IconVisibility } from '../icons';

type InputProps = AllHTMLAttributes<HTMLInputElement>;

export type PasswordFieldBaseProps = Omit<
  FieldBaseProps,
  'value' | 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'
> & {
  value: NonNullable<InputProps['value']>;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  placeholder?: InputProps['placeholder'];
  onVisibilityToggle?: (visible: boolean) => void;
  visibilityToggleLabel?: string;
};
export type PasswordFieldLabelProps = FieldLabelVariant;
export type PasswordFieldProps = PasswordFieldBaseProps &
  PasswordFieldLabelProps;

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      value,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      disabled,
      onVisibilityToggle,
      visibilityToggleLabel = 'Toggle password visibility',
      id,
      ...restProps
    },
    forwardedRef,
  ) => {
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const inputRef = forwardedRef || defaultRef;

    const [visible, setVisibile] = useState(false);
    const visibilityHandler = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (event.button !== 0) {
          return;
        }

        const newState = !visible;
        setVisibile(newState);

        if (typeof onVisibilityToggle === 'function') {
          onVisibilityToggle(newState);
        }

        if (inputRef && typeof inputRef === 'object' && inputRef.current) {
          inputRef.current.focus();
        }
      },
      [visible, onVisibilityToggle, inputRef],
    );

    return (
      <Field
        {...restProps}
        id={id}
        value={value}
        icon={undefined}
        prefix={undefined}
        labelId={undefined}
        disabled={disabled}
        secondaryMessage={null}
        alwaysShowSecondaryIcon={!disabled}
        secondaryIcon={
          disabled ? null : (
            <FieldButtonIcon
              id={`${id}-toggle`}
              label={visibilityToggleLabel}
              onMouseDown={visibilityHandler}
              icon={<IconVisibility hidden={visible} />}
            />
          )
        }
      >
        {(overlays, fieldProps, _, secondaryIcon) => (
          <Fragment>
            <Box
              component="input"
              type={visible ? 'text' : 'password'}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={!disabled ? placeholder : undefined}
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

PasswordField.displayName = 'PasswordField';
