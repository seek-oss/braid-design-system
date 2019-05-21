import React, {
  Fragment,
  AllHTMLAttributes,
  Children,
  isValidElement,
} from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';
import * as styles from './Dropdown.treat';
import { ChevronIcon } from '../icons/ChevronIcon/ChevronIcon';
import { useTheme } from '../private/ThemeContext';
import { Color } from '../../themes/theme';

type ValidDropdownChildren = AllHTMLAttributes<
  HTMLOptionElement | HTMLOptGroupElement
>;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
interface DropdownProps extends FieldProps {
  children: ValidDropdownChildren[] | ValidDropdownChildren;
  value: NonNullable<SelectProps['value']>;
  onChange: NonNullable<SelectProps['onChange']>;
  onBlur?: SelectProps['onBlur'];
  onFocus?: SelectProps['onFocus'];
  placeholder?: string;
}

const getColor = (
  placeholder: DropdownProps['placeholder'],
  value: DropdownProps['value'],
): Color => {
  if (!value && placeholder) {
    return 'secondary';
  }

  return 'neutral';
};

export const Dropdown = ({
  id,
  name,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  tone = 'neutral',
  children,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
}: DropdownProps) => {
  const { atoms } = useTheme();

  Children.forEach(children, child => {
    if (!(isValidElement(child) && /^(option|optgroup)$/.test(child.type))) {
      throw new Error(
        '`Dropdown` only accepts children of type `option` or `optgroup`.',
      );
    }
  });

  return (
    <Field
      id={id}
      name={name}
      label={label}
      secondaryLabel={secondaryLabel}
      tertiaryLabel={tertiaryLabel}
      tone={tone}
      message={message}
    >
      {({ className, ...fieldProps }) => (
        <Fragment>
          <Box
            component="select"
            boxShadow={
              tone === 'critical' ? 'borderCritical' : 'borderStandard'
            }
            width="full"
            paddingLeft="small"
            paddingTop="standardTouchableText"
            paddingBottom="standardTouchableText"
            borderRadius="standard"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            className={useClassNames(
              styles.field,
              className,
              atoms.color[getColor(placeholder, value)],
            )}
            {...fieldProps}
          >
            <option value="" selected={!value} disabled={true}>
              {placeholder}
            </option>
            <Fragment>{children}</Fragment>
          </Box>
          <Box
            paddingLeft="small"
            paddingRight="small"
            display="flex"
            className={useClassNames(styles.chevron)}
          >
            <ChevronIcon inline />
          </Box>
        </Fragment>
      )}
    </Field>
  );
};
