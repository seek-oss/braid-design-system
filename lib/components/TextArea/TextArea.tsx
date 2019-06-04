import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useClassNames } from 'sku/treat';
import { Omit } from 'utility-types';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import * as styles from './TextArea.treat';
import { Field, FieldProps } from '../private/Field/Field';

type NativeTextAreaProps = AllHTMLAttributes<HTMLTextAreaElement>;
interface TextAreaProps extends Omit<FieldProps, 'secondaryMessage'> {
  value: NonNullable<NativeTextAreaProps['value']>;
  onChange: NonNullable<NativeTextAreaProps['onChange']>;
  onBlur?: NativeTextAreaProps['onBlur'];
  onFocus?: NativeTextAreaProps['onFocus'];
  placeholder?: NativeTextAreaProps['placeholder'];
  limit?: number;
}

const renderCount = ({
  limit,
  value = '',
}: Pick<TextAreaProps, 'limit' | 'value'>): ReactNode => {
  if (typeof limit === 'undefined') {
    return null;
  }

  const diff = limit - String(value).length;
  const valid = diff >= 0;

  return (
    <Text component="span" color={valid ? 'secondary' : 'critical'}>
      {diff}
    </Text>
  );
};

export const TextArea = ({
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  limit,
  ...restProps
}: TextAreaProps) => (
  <Field
    {...restProps}
    secondaryMessage={renderCount({
      limit,
      value,
    })}
  >
    {({ className, ...fieldProps }) => (
      <Box
        component="textarea"
        rows={3}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        className={useClassNames(styles.field, className)}
        {...fieldProps}
      />
    )}
  </Field>
);
