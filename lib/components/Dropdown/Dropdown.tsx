import React, {
  Fragment,
  AllHTMLAttributes,
  Children,
  isValidElement,
  forwardRef,
} from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import { Box } from '../Box/Box';
import { Field, FieldProps } from '../private/Field/Field';
import { IconChevron } from '../icons';
import { useTextTone } from '../../hooks/typography';
import * as styleRefs from './Dropdown.treat';

type ValidDropdownChildren = AllHTMLAttributes<
  HTMLOptionElement | HTMLOptGroupElement
>;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
interface DropdownProps
  extends Omit<FieldProps, 'labelId' | 'secondaryMessage'> {
  children: ValidDropdownChildren[] | ValidDropdownChildren;
  value: NonNullable<SelectProps['value']>;
  onChange: NonNullable<SelectProps['onChange']>;
  onBlur?: SelectProps['onBlur'];
  onFocus?: SelectProps['onFocus'];
  placeholder?: string;
}

const getTone = (
  placeholder: DropdownProps['placeholder'],
  value: DropdownProps['value'],
) => {
  if (!value && placeholder) {
    return 'secondary';
  }

  return 'neutral';
};

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

    Children.forEach(children, child => {
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
      >
        {(overlays, { className, paddingX, ...fieldProps }, fieldRef) => (
          <Fragment>
            <Box
              component="select"
              paddingLeft={paddingX}
              value={value}
              defaultValue={typeof value === 'undefined' ? '' : undefined}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              className={classnames(
                styles.field,
                className,
                useTextTone({ tone: getTone(placeholder, value) }),
              )}
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
              paddingX={paddingX}
              position="absolute"
              display="flex"
              alignItems="center"
              pointerEvents="none"
              className={styles.chevron}
            >
              <IconChevron size="fill" />
            </Box>
          </Fragment>
        )}
      </Field>
    );
  },
);

NamedDropdown.displayName = 'Dropdown';

export const Dropdown = NamedDropdown;
