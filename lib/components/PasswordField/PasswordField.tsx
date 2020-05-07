import React, {
  useState,
  AllHTMLAttributes,
  forwardRef,
  Fragment,
  useCallback,
  useRef,
} from 'react';

import { Field, FieldProps } from '../private/Field/Field';
import { Box } from '../Box/Box';
import { IconButton } from '../iconButtons/IconButton';
import { IconVisibility } from '../icons';

type InputProps = AllHTMLAttributes<HTMLInputElement>;
export interface PasswordFieldProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage' | 'icon'> {
  value: NonNullable<InputProps['value']>;
  onChange: NonNullable<InputProps['onChange']>;
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  placeholder?: InputProps['placeholder'];
  onVisibilityToggle?: (visible: boolean) => void;
  visibilityToggleLabel?: string;
}

const NamedPasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
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
      ...restProps
    },
    forwardedRef,
  ) => {
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const inputRef = forwardedRef || defaultRef;

    const [visible, setVisibile] = useState(false);
    const visibilityHandler = useCallback(() => {
      const newState = !visible;
      setVisibile(newState);

      if (typeof onVisibilityToggle === 'function') {
        onVisibilityToggle(newState);
      }

      if (inputRef && typeof inputRef === 'object' && inputRef.current) {
        inputRef.current.focus();
      }
    }, [visible, onVisibilityToggle, inputRef]);

    return (
      <Field
        {...restProps}
        value={value}
        icon={undefined}
        labelId={undefined}
        secondaryMessage={null}
        secondaryIcon={
          disabled ? null : (
            <IconButton
              label={visibilityToggleLabel}
              onMouseDown={visibilityHandler}
              keyboardAccessible={false}
            >
              {(iconProps) => (
                <IconVisibility {...iconProps} hidden={visible} />
              )}
            </IconButton>
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

NamedPasswordField.displayName = 'PasswordField';

export const PasswordField = NamedPasswordField;
