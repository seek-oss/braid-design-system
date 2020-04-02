import React, {
  Fragment,
  AllHTMLAttributes,
  Children,
  isValidElement,
  forwardRef,
} from 'react';
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
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage' | 'onClear'> {
  children: ValidDropdownChildren[] | ValidDropdownChildren;
  value: NonNullable<SelectProps['value']>;
  onChange: NonNullable<SelectProps['onChange']>;
  onBlur?: SelectProps['onBlur'];
  onFocus?: SelectProps['onFocus'];
  placeholder?: string;
}

const NamedDropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (props: DropdownProps, ref) => {
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

    Children.forEach(children, (child) => {
      if (!(isValidElement(child) && /^(option|optgroup)$/.test(child.type))) {
        throw new Error(
          '`Dropdown` only accepts children of type `option` or `optgroup`.',
        );
      }
    });

    return (
      <Field
        {...restProps}
        ref={ref}
        labelId={undefined}
        secondaryMessage={null}
        value={value}
      >
        {(
          overlays,
          { className, paddingX, ...fieldProps },
          fieldRef,
          _,
          icon,
        ) => (
          <Fragment>
            {icon}
            <Box
              component="select"
              paddingLeft={paddingX}
              value={value}
              defaultValue={typeof value === 'undefined' ? '' : undefined}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              className={[styles.field, className]}
              {...fieldProps}
              ref={fieldRef}
            >
              <option value="" disabled={true}>
                {placeholder}
              </option>
              <Fragment>{children}</Fragment>
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
                <IconChevron />
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
