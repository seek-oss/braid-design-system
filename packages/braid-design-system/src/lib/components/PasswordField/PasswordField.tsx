import {
  type AllHTMLAttributes,
  type MouseEvent,
  useState,
  forwardRef,
  Fragment,
  useCallback,
  useRef,
  useId,
} from 'react';

import { Box } from '../Box/Box';
import { IconVisibility } from '../icons';
import {
  type FieldBaseProps,
  type FieldLabelVariant,
  Field,
} from '../private/Field/Field';
import { FieldButtonIcon } from '../private/FieldButtonIcon/FieldButtonIcon';

type InputProps = AllHTMLAttributes<HTMLInputElement>;

export type PasswordFieldBaseProps = Omit<
  FieldBaseProps,
  'value' | 'secondaryMessage' | 'icon' | 'prefix'
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
      tabIndex,
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

    // Todo - remove once `ButtonIcon` id prop is optional
    const visibilityToggleId = useId();

    return (
      <Field
        {...restProps}
        componentName="PasswordField"
        value={value}
        tabIndex={tabIndex}
        icon={undefined}
        prefix={undefined}
        disabled={disabled}
        secondaryMessage={null}
        alwaysShowSecondaryIcon={!disabled}
        secondaryIcon={
          disabled ? null : (
            <FieldButtonIcon
              id={visibilityToggleId}
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
