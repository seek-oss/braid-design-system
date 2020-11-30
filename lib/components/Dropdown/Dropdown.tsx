import React, { Fragment, AllHTMLAttributes, forwardRef } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';
import { IconChevron } from '../icons';
import * as styleRefs from './Dropdown.treat';
import { Text } from '../Text/Text';

type ValidDropdownChildren = AllHTMLAttributes<
  HTMLOptionElement | HTMLOptGroupElement
>;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
export interface DropdownProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage'> {
  children: ValidDropdownChildren[] | ValidDropdownChildren;
  value: NonNullable<SelectProps['value']>;
  onChange: NonNullable<SelectProps['onChange']>;
  onBlur?: SelectProps['onBlur'];
  onFocus?: SelectProps['onFocus'];
  placeholder?: string;
}

const NamedDropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (props, ref) => {
    const {
      children,
      value,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      disabled,
      ...restProps
    } = props;

    const styles = useStyles(styleRefs);
    return (
      <Field
        {...restProps}
        disabled={disabled}
        labelId={undefined}
        secondaryMessage={null}
        value={value}
      >
        {(overlays, { className, paddingRight, ...fieldProps }, icon) => (
          <Fragment>
            {icon}
            <Box
              component="select"
              value={value}
              defaultValue={typeof value === 'undefined' ? '' : undefined}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              className={[styles.field, className]}
              {...fieldProps}
              ref={ref}
            >
              {!value || placeholder ? (
                <option value="" disabled={true}>
                  {placeholder}
                </option>
              ) : null}
              {children}
            </Box>
            {overlays}
            <Box
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
              pointerEvents="none"
              height="touchable"
              width="touchable"
              top={0}
              right={0}
            >
              <Text baseline={false}>
                <IconChevron tone={disabled ? 'secondary' : undefined} />
              </Text>
            </Box>
          </Fragment>
        )}
      </Field>
    );
  },
);

NamedDropdown.displayName = 'Dropdown';

export const Dropdown = NamedDropdown;
