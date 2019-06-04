import React, {
  Fragment,
  AllHTMLAttributes,
  Children,
  isValidElement,
} from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';
import { ChevronIcon } from '../icons/ChevronIcon/ChevronIcon';
import { useTextColor } from '../../hooks/typography';
import * as styleRefs from './Dropdown.treat';

type ValidDropdownChildren = AllHTMLAttributes<
  HTMLOptionElement | HTMLOptGroupElement
>;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
interface DropdownProps extends Omit<FieldProps, 'secondaryMessage'> {
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
) => {
  if (!value && placeholder) {
    return 'secondary';
  }

  return 'neutral';
};

export const Dropdown = (props: DropdownProps) => {
  const {
    children,
    value,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    ...restProps
  } = props;

  const styles = useStyles(styleRefs);

  Children.forEach(children, child => {
    if (!(isValidElement(child) && /^(option|optgroup)$/.test(child.type))) {
      throw new Error(
        '`Dropdown` only accepts children of type `option` or `optgroup`.',
      );
    }
  });

  return (
    <Field {...restProps} secondaryMessage={null}>
      {({ className, paddingLeft, paddingRight, ...fieldProps }) => (
        <Fragment>
          <Box
            component="select"
            paddingLeft={paddingLeft}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            className={classnames(
              styles.field,
              className,
              useTextColor(getColor(placeholder, value)),
            )}
            {...fieldProps}
          >
            <option value="" selected={!value} disabled={true}>
              {placeholder}
            </option>
            <Fragment>{children}</Fragment>
          </Box>
          <Box
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            display="flex"
            className={styles.chevron}
          >
            <ChevronIcon inline />
          </Box>
        </Fragment>
      )}
    </Field>
  );
};
